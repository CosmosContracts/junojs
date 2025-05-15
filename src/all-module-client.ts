import { type GeneratedType, type OfflineSigner, Registry } from "@cosmjs/proto-signing"
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate"
import type { HttpEndpoint } from "@cosmjs/tendermint-rpc"
import * as cosmosAuthV1beta1TxAmino from "./cosmos/auth/v1beta1/tx.amino"
import * as cosmosAuthV1beta1TxRegistry from "./cosmos/auth/v1beta1/tx.registry"
import * as cosmosAuthzV1beta1TxAmino from "./cosmos/authz/v1beta1/tx.amino"
import * as cosmosAuthzV1beta1TxRegistry from "./cosmos/authz/v1beta1/tx.registry"
import * as cosmosBankV1beta1TxAmino from "./cosmos/bank/v1beta1/tx.amino"
import * as cosmosBankV1beta1TxRegistry from "./cosmos/bank/v1beta1/tx.registry"
import * as cosmosConsensusV1TxAmino from "./cosmos/consensus/v1/tx.amino"
import * as cosmosConsensusV1TxRegistry from "./cosmos/consensus/v1/tx.registry"
import * as cosmosDistributionV1beta1TxAmino from "./cosmos/distribution/v1beta1/tx.amino"
import * as cosmosDistributionV1beta1TxRegistry from "./cosmos/distribution/v1beta1/tx.registry"
import * as cosmosGovV1TxAmino from "./cosmos/gov/v1/tx.amino"
import * as cosmosGovV1TxRegistry from "./cosmos/gov/v1/tx.registry"
import * as cosmosGovV1beta1TxAmino from "./cosmos/gov/v1beta1/tx.amino"
import * as cosmosGovV1beta1TxRegistry from "./cosmos/gov/v1beta1/tx.registry"
import * as cosmosNftV1beta1TxAmino from "./cosmos/nft/v1beta1/tx.amino"
import * as cosmosNftV1beta1TxRegistry from "./cosmos/nft/v1beta1/tx.registry"
import * as cosmosStakingV1beta1TxAmino from "./cosmos/staking/v1beta1/tx.amino"
import * as cosmosStakingV1beta1TxRegistry from "./cosmos/staking/v1beta1/tx.registry"
import * as cosmosUpgradeV1beta1TxAmino from "./cosmos/upgrade/v1beta1/tx.amino"
import * as cosmosUpgradeV1beta1TxRegistry from "./cosmos/upgrade/v1beta1/tx.registry"
import * as cosmwasmWasmV1TxAmino from "./cosmwasm/wasm/v1/tx.amino"
import * as cosmwasmWasmV1TxRegistry from "./cosmwasm/wasm/v1/tx.registry"
import * as gaiaGlobalfeeV1beta1TxAmino from "./gaia/globalfee/v1beta1/tx.amino"
import * as gaiaGlobalfeeV1beta1TxRegistry from "./gaia/globalfee/v1beta1/tx.registry"
import * as ibcApplicationsFeeV1TxAmino from "./ibc/applications/fee/v1/tx.amino"
import * as ibcApplicationsFeeV1TxRegistry from "./ibc/applications/fee/v1/tx.registry"
import * as ibcApplicationsInterchainAccountsControllerV1TxAmino from "./ibc/applications/interchain_accounts/controller/v1/tx.amino"
import * as ibcApplicationsInterchainAccountsControllerV1TxRegistry from "./ibc/applications/interchain_accounts/controller/v1/tx.registry"
import * as ibcApplicationsInterchainAccountsHostV1TxAmino from "./ibc/applications/interchain_accounts/host/v1/tx.amino"
import * as ibcApplicationsInterchainAccountsHostV1TxRegistry from "./ibc/applications/interchain_accounts/host/v1/tx.registry"
import * as ibcApplicationsTransferV1TxAmino from "./ibc/applications/transfer/v1/tx.amino"
import * as ibcApplicationsTransferV1TxRegistry from "./ibc/applications/transfer/v1/tx.registry"
import * as ibcCoreChannelV1TxAmino from "./ibc/core/channel/v1/tx.amino"
import * as ibcCoreChannelV1TxRegistry from "./ibc/core/channel/v1/tx.registry"
import * as ibcCoreClientV1TxAmino from "./ibc/core/client/v1/tx.amino"
import * as ibcCoreClientV1TxRegistry from "./ibc/core/client/v1/tx.registry"
import * as ibcCoreConnectionV1TxAmino from "./ibc/core/connection/v1/tx.amino"
import * as ibcCoreConnectionV1TxRegistry from "./ibc/core/connection/v1/tx.registry"
import * as junoClockV1TxAmino from "./juno/clock/v1/tx.amino"
import * as junoClockV1TxRegistry from "./juno/clock/v1/tx.registry"
import * as junoCwhooksV1TxAmino from "./juno/cwhooks/v1/tx.amino"
import * as junoCwhooksV1TxRegistry from "./juno/cwhooks/v1/tx.registry"
import * as junoDripV1TxAmino from "./juno/drip/v1/tx.amino"
import * as junoDripV1TxRegistry from "./juno/drip/v1/tx.registry"
import * as junoFeepayV1TxAmino from "./juno/feepay/v1/tx.amino"
import * as junoFeepayV1TxRegistry from "./juno/feepay/v1/tx.registry"
import * as junoFeeshareV1TxAmino from "./juno/feeshare/v1/tx.amino"
import * as junoFeeshareV1TxRegistry from "./juno/feeshare/v1/tx.registry"
import * as junoMintV1TxAmino from "./juno/mint/v1/tx.amino"
import * as junoMintV1TxRegistry from "./juno/mint/v1/tx.registry"
import * as osmosisTokenfactoryV1beta1TxAmino from "./osmosis/tokenfactory/v1beta1/tx.amino"
import * as osmosisTokenfactoryV1beta1TxRegistry from "./osmosis/tokenfactory/v1beta1/tx.registry"
export const allAminoConverters = {
	...gaiaGlobalfeeV1beta1TxAmino.AminoConverter,
	...junoClockV1TxAmino.AminoConverter,
	...junoCwhooksV1TxAmino.AminoConverter,
	...junoDripV1TxAmino.AminoConverter,
	...junoFeepayV1TxAmino.AminoConverter,
	...junoFeeshareV1TxAmino.AminoConverter,
	...junoMintV1TxAmino.AminoConverter,
	...osmosisTokenfactoryV1beta1TxAmino.AminoConverter,
	...cosmosAuthV1beta1TxAmino.AminoConverter,
	...cosmosAuthzV1beta1TxAmino.AminoConverter,
	...cosmosBankV1beta1TxAmino.AminoConverter,
	...cosmosConsensusV1TxAmino.AminoConverter,
	...cosmosDistributionV1beta1TxAmino.AminoConverter,
	...cosmosGovV1TxAmino.AminoConverter,
	...cosmosGovV1beta1TxAmino.AminoConverter,
	...cosmosNftV1beta1TxAmino.AminoConverter,
	...cosmosStakingV1beta1TxAmino.AminoConverter,
	...cosmosUpgradeV1beta1TxAmino.AminoConverter,
	...cosmwasmWasmV1TxAmino.AminoConverter,
	...ibcApplicationsFeeV1TxAmino.AminoConverter,
	...ibcApplicationsInterchainAccountsControllerV1TxAmino.AminoConverter,
	...ibcApplicationsInterchainAccountsHostV1TxAmino.AminoConverter,
	...ibcApplicationsTransferV1TxAmino.AminoConverter,
	...ibcCoreChannelV1TxAmino.AminoConverter,
	...ibcCoreClientV1TxAmino.AminoConverter,
	...ibcCoreConnectionV1TxAmino.AminoConverter
}
export const allProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [
	...gaiaGlobalfeeV1beta1TxRegistry.registry,
	...junoClockV1TxRegistry.registry,
	...junoCwhooksV1TxRegistry.registry,
	...junoDripV1TxRegistry.registry,
	...junoFeepayV1TxRegistry.registry,
	...junoFeeshareV1TxRegistry.registry,
	...junoMintV1TxRegistry.registry,
	...osmosisTokenfactoryV1beta1TxRegistry.registry,
	...cosmosAuthV1beta1TxRegistry.registry,
	...cosmosAuthzV1beta1TxRegistry.registry,
	...cosmosBankV1beta1TxRegistry.registry,
	...cosmosConsensusV1TxRegistry.registry,
	...cosmosDistributionV1beta1TxRegistry.registry,
	...cosmosGovV1TxRegistry.registry,
	...cosmosGovV1beta1TxRegistry.registry,
	...cosmosNftV1beta1TxRegistry.registry,
	...cosmosStakingV1beta1TxRegistry.registry,
	...cosmosUpgradeV1beta1TxRegistry.registry,
	...cosmwasmWasmV1TxRegistry.registry,
	...ibcApplicationsFeeV1TxRegistry.registry,
	...ibcApplicationsInterchainAccountsControllerV1TxRegistry.registry,
	...ibcApplicationsInterchainAccountsHostV1TxRegistry.registry,
	...ibcApplicationsTransferV1TxRegistry.registry,
	...ibcCoreChannelV1TxRegistry.registry,
	...ibcCoreClientV1TxRegistry.registry,
	...ibcCoreConnectionV1TxRegistry.registry
]
export const getAllSigningClientOptions = (): {
	registry: Registry
	aminoTypes: AminoTypes
} => {
	const registry = new Registry([...allProtoRegistry])
	const aminoTypes = new AminoTypes({
		...allAminoConverters
	})
	return {
		registry,
		aminoTypes
	}
}
export const getAllSigningClient = async ({
	rpcEndpoint,
	signer
}: {
	rpcEndpoint: string | HttpEndpoint
	signer: OfflineSigner
}) => {
	const { registry, aminoTypes } = getAllSigningClientOptions()
	const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
		registry: registry as any,
		aminoTypes
	})
	return client
}
