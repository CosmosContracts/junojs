#!/usr/bin/env bun
import { existsSync, rmSync } from "node:fs"
import { join } from "node:path"
import { spawn } from "bun"

type RepoConfig = {
	dir: string
	name: string
	repo: string
	rev: string
}

const baseDir = new URL("..", import.meta.url).pathname
const configEnv = process.env.REPO_CONFIG
const depsPath = join(baseDir, "dependencies")

const cloneRepository = async (repo: RepoConfig) => {
	const repoPath = join(depsPath, repo.dir)
	if (existsSync(repoPath)) {
		console.log(`Removing existing directory: ${repoPath}`)
		rmSync(repoPath, { recursive: true, force: true })
	}

	console.log(`Cloning ${repo.dir} from ${repo.repo} into ${repoPath}...`)
	const cloneProc = spawn({
		cmd: ["git", "clone", repo.repo, repoPath, "--progress"],
		stdout: "pipe",
		stderr: "pipe"
	})
	for await (const chunk of cloneProc.stderr) {
		const output = new TextDecoder().decode(chunk)
		console.log(`[${repo.dir} clone]: ${output.trim()}`)
	}
	const cloneResultCode = await cloneProc.exited
	if (cloneResultCode !== 0) {
		throw new Error(`git clone failed for ${repo.dir} with exit code ${cloneResultCode}`)
	}

	const checkoutProc = spawn({
		cmd: ["git", "-C", repoPath, "checkout", repo.rev],
		stdout: "pipe",
		stderr: "pipe"
	})
	for await (const chunk of checkoutProc.stderr) {
		const output = new TextDecoder().decode(chunk)
		console.log(`[${repo.dir} checkout]: ${output.trim()}`)
	}
	const checkoutResultCode = await checkoutProc.exited
	if (checkoutResultCode !== 0) {
		throw new Error(`git checkout failed for ${repo.dir} with exit code ${checkoutResultCode}`)
	}

	console.log(`Finished cloning ${repo.dir} (${repo.rev})`)
}

const cloneAllRepos = async (configs: RepoConfig[]) => {
	await Promise.all(configs.map((repo) => cloneRepository(repo)))
}

try {
	if (!configEnv) {
		console.error("REPO_CONFIG env variable is not defined.")
		process.exit(1)
	}
	const repoConfigs: RepoConfig[] = JSON.parse(configEnv)
	await cloneAllRepos(repoConfigs)
} catch (e) {
	console.error(e)
	process.exit(1)
}
