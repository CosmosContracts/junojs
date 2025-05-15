#!/usr/bin/env bun
import type { Dirent } from "node:fs"
import { readdir } from "node:fs/promises"
import { join } from "node:path"
import { file as bunFile, write as bunWrite } from "bun"

const baseDir = new URL("..", import.meta.url).pathname
const outPath = join(baseDir, "src")
const exports = await readdir(outPath, { withFileTypes: true })
const excludedDirectories = new Set(["gogoproto", "google", "tendermint", "cosmos_proto"])
const filterDirectories = (entries: Dirent[]): string[] =>
	entries
		.filter(
			(e): e is Dirent => e.isDirectory() && e.name != null && !excludedDirectories.has(e.name)
		)
		.map((e) => join("src", e.name, "index.ts"))

const filesToFix = filterDirectories(exports)

const dotKeyRegex = /^(\s*)([A-Za-z0-9\.]+):/
const aliasExportRegex = /^\s*export\s*\{\s*(\w+)\s+as\s+([\w\.]+)\s*\};?$/

// Specific imports (with or without semicolon) to remove in src/cosmos/index.ts
const cosmosImportsToRemove = new Set([
	'import * as msgv1msgts from "./msg/v1/msg"',
	'import * as msgv1msgts from "./msg/v1/msg";',
	'import * as queryv1queryts from "./query/v1/query"',
	'import * as queryv1queryts from "./query/v1/query";'
])

for (const path of filesToFix) {
	try {
		const original = await bunFile(path).text()
		const lines = original.split("\n")

		const rpcEntries: Record<string, { key: string; binding: string }[]> = {}
		const outLines: string[] = []

		for (let line of lines) {
			if (path === "src/cosmos/index.ts" && cosmosImportsToRemove.has(line.trim())) {
				continue
			}

			const m = line.match(aliasExportRegex)
			if (m) {
				const [, binding, aliasFull] = m
				if (aliasFull.includes(".")) {
					const [ns, key] = aliasFull.split(".")
					rpcEntries[ns] = rpcEntries[ns] || []
					rpcEntries[ns].push({ key, binding })
					continue
				}
			}

			if (dotKeyRegex.test(line)) {
				line = line.replace(dotKeyRegex, (_m, indent, key) => `${indent}'${key}':`)
			}

			outLines.push(line)
		}

		for (const [ns, entries] of Object.entries(rpcEntries)) {
			outLines.push("")
			outLines.push(`export const ${ns} = {`)
			for (const { key, binding } of entries) {
				outLines.push(`  ${key}: ${binding},`)
			}
			outLines.push("};")
		}

		const updated = outLines.join("\n")
		if (updated !== original) {
			await bunWrite(path, updated)
		} else {
			console.log(`No changes needed in ${path}`)
		}
	} catch (err) {
		console.error(`Error processing ${path}:`, err)
	}
}
