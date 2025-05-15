#!/usr/bin/env bun
import type { Stats } from "node:fs"
import { readdir, stat } from "node:fs/promises"
import { join } from "node:path"
import { parseSync, printSync } from "@swc/core"
import { file as bunFile, write as bunWrite } from "bun"
import { simple } from "swc-walk"

const SRC_DIR = new URL("../src", import.meta.url).pathname
const RPC_FILES = ["rpc.tx.ts", "rpc.query.ts", "lcd.ts"] as const

const cleanRPCFiles = async (): Promise<void> => {
	const bundles = await readdir(SRC_DIR)

	await Promise.all(
		bundles.flatMap((bundle) => {
			if (bundle === "cosmos") return []

			return RPC_FILES.map(async (filename) => {
				const filePath = join(SRC_DIR, bundle, filename)

				let stats: Stats
				try {
					stats = await stat(filePath)
				} catch {
					return
				}
				if (!stats.isFile()) return

				const content = await bunFile(filePath).text()
				const ast = parseSync(content, {
					syntax: "typescript",
					dynamicImport: true,
					decorators: false,
					tsx: false
				})

				simple(ast, {
					ObjectExpression(node) {
						node.properties = node.properties.filter((prop) => {
							if (prop.type !== "KeyValueProperty") return true
							const key = prop.key
							return !(
								(key.type === "Identifier" && key.value === "cosmos") ||
								(key.type === "StringLiteral" && key.value === "cosmos")
							)
						})
					}
				})

				const { code: cleaned } = printSync(ast, {
					jsc: { target: "es2022" },
					module: { type: "es6", strict: true }
				})

				await bunWrite(filePath, cleaned)
				console.log(`Cleaned: ${filePath}`)
			})
		})
	)
}

await cleanRPCFiles()
