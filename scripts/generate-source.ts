#!/usr/bin/env bun
import { existsSync, rmSync } from "node:fs"
import { join } from "node:path"
import telescope, { type TelescopeInput } from "@cosmology/telescope"

type RepoConfig = {
	dir: string
	name: string
	repo: string
	rev: string
}

const baseDir = new URL("..", import.meta.url).pathname
const configEnv = process.env.REPO_CONFIG
const outPath = join(baseDir, "src")
const depsPath = join(baseDir, "dependencies")
const telescopeConfig: TelescopeInput = {
	protoDirs: [],
	outPath,
	options: {
		bundle: { enabled: false },
		env: "v-next",
		tsDisable: {
			disableAll: false
		},
		helperFunctions: { enabled: false },
		interfaces: {
			enabled: true,
			useUnionTypes: true,
			useGlobalDecoderRegistry: false,
			registerAllDecodersToGlobal: false
		},
		prototypes: {
			enabled: true,
			enableMessageComposer: true,
			enableRegistryLoader: true,
			addTypeUrlToDecoders: true,
			addTypeUrlToObjects: true,
			excluded: {
				packages: [
					"amino",
					"capability.v1",
					"cosmos.app.v1alpha1",
					"cosmos.app.runtime.v1alpha1",
					"cosmos.auth.module.v1",
					"cosmos.authz.module.v1",
					"cosmos.autocli.v1",
					"cosmos.bank.module.v1",
					"cosmos.base.kv.v1beta1",
					"cosmos.base.reflection.v1beta1",
					"cosmos.base.reflection.v2alpha1",
					"cosmos.base.snapshots.v1beta1",
					"cosmos.base.store.v1beta1",
					"cosmos.base.tendermint.v1beta1",
					"cosmos.circuit.module.v1",
					"cosmos.circuit.v1",
					"cosmos.consensus.module.v1",
					"cosmos.capability.v1beta1",
					"cosmos.crisis.v1beta1",
					"cosmos.crisis.module.v1",
					"cosmos.distribution.module.v1",
					"cosmos.evidence.v1beta1",
					"cosmos.evidence.module.v1",
					"cosmos.feegrant.module.v1",
					"cosmos.feegrant.v1beta1",
					"cosmos.genutil.v1beta1",
					"cosmos.genutil.module.v1",
					"cosmos.gov.module.v1",
					"cosmos.group.v1",
					"cosmos.group.module.v1",
					"cosmos.mint.module.v1",
					"cosmos.mint.v1beta1",
					"cosmos.msg.v1",
					"cosmos.msg.textual.v1",
					"cosmos.nft.module.v1",
					"cosmos.orm.v1",
					"cosmos.orm.v1alpha1",
					"cosmos.orm.module.v1alpha1",
					"cosmos.orm.query.v1alpha1",
					"cosmos.params.v1beta1",
					"cosmos.params.module.v1",
					"cosmos.query.v1",
					"cosmos.reflection.v1",
					"cosmos.slashing.v1beta1",
					"cosmos.slashing.module.v1",
					"cosmos.staking.module.v1",
					"cosmos.upgrade.module.v1",
					"cosmos.tx.module.v1",
					"cosmos.tx.config.v1",
					"cosmos.tx.signing.v1beta1",
					"cosmos.store.internal.kv.v1beta1",
					"cosmos.store.snapshots.v1",
					"cosmos.store.streaming.abci",
					"cosmos.store.v1beta1",
					"cosmos.vesting.v1beta1",
					"cosmos.vesting.module.v1",
					"google.api",
					"ibc.core.port.v1",
					"ibc.core.types.v1",
					"ibc.lightclients.wasm.v1",
					"ibc.lightclients.localhost.v2",
					"ibc.lightclients.solomachine.v2",
					"ibc.lightclients.solomachine.v3",
					"juno.clock.module.v1",
					"juno.cwhooks.module.v1",
					"juno.drip.module.v1",
					"juno.feeshare.module.v1",
					"juno.feepay.module.v1",
					"juno.mint.module.v1",
					"osmosis.tokenfactory.module.v1",
					"gaia.globalfee.module.v1"
				]
			},
			allowUndefinedTypes: true,
			allowEncodeDefaultScalars: false,
			enforceNullCheck: true,
			optionalPageRequests: true,
			optionalQueryParams: true,
			methods: {
				fromJSON: false,
				toJSON: false,
				encode: true,
				decode: true,
				fromPartial: true,
				toAmino: true,
				fromAmino: true,
				fromProto: true,
				toProto: true
			},
			parser: {
				keepCase: false,
				alternateCommentMode: true,
				preferTrailingComment: false
			},
			typingsFormat: {
				duration: "duration",
				timestamp: "date",
				useExact: false,
				useTelescopeGeneratedType: true,
				useDeepPartial: false,
				autoFixUndefinedEnumDefault: true,
				updatedDuration: true,
				num64: "bigint",
				customTypes: {
					useCosmosSDKDec: true,
					useEnhancedDecimal: true
				}
			}
		},
		aminoEncoding: {
			enabled: true,
			exceptions: {
				"/cosmos.gov.v1beta1.MsgVote": {
					aminoType: "cosmos-sdk/MsgVote"
				}
			}
		},
		lcdClients: {
			enabled: true,
			bundle: false
		},
		enums: {
			useCustomNames: true
		},
		logLevel: 3,
		eslintDisable: {
			disableAll: false
		},
		includeExternalHelpers: true,
		removeUnusedImports: true,
		useInterchainJs: true,
		classesUseArrowFunctions: true,
		useSDKTypes: false,
		rpcClients: {
			enabled: true,
			type: "tendermint",
			camelCase: true,
			bundle: false,
			extensions: false,
			inline: false,
			useConnectComet: true,
			useMakeClient: true,
			clientStyle: {
				type: ["all-client"],
				useUpdatedClientStyle: true
			}
		},
		stargateClients: {
			enabled: true,
			includeCosmosDefaultTypes: false,
			addGetTxRpc: false
		}
	}
}

try {
	if (!configEnv) {
		console.error("REPO_CONFIG env variable is not defined.")
		process.exit(1)
	}
	const repoConfigs: RepoConfig[] = JSON.parse(configEnv)
	const protoDirs = repoConfigs
		.map((repo) => join(depsPath, repo.dir, "proto"))
		.filter((dir) => existsSync(dir))

	protoDirs.push(...[join(baseDir, "proto")])
	rmSync(outPath, { recursive: true, force: true })
	await telescope({ ...telescopeConfig, protoDirs })
	rmSync(join(outPath, "cosmos/msg"), { recursive: true, force: true })
	rmSync(join(outPath, "cosmos/query"), { recursive: true, force: true })
} catch (e) {
	console.error(e)
	process.exit(1)
}
