import type { LCDClient } from "@cosmology/lcd"
import type {
	QueryGovernanceContractsRequest,
	QueryGovernanceContractsResponse,
	QueryParamsRequest,
	QueryParamsResponse,
	QueryStakingContractsRequest,
	QueryStakingContractsResponse
} from "./query"
export class LCDQueryClient {
	req: LCDClient
	constructor({
		requestClient
	}: {
		requestClient: LCDClient
	}) {
		this.req = requestClient
	}
	/* Params */
	params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const endpoint = "juno/cwhooks/v1/params"
		return await this.req.get<QueryParamsResponse>(endpoint)
	}
	/* StakingContracts */
	stakingContracts = async (
		_params: QueryStakingContractsRequest = {}
	): Promise<QueryStakingContractsResponse> => {
		const endpoint = "juno/cwhooks/v1/staking_contracts"
		return await this.req.get<QueryStakingContractsResponse>(endpoint)
	}
	/* GovernanceContracts */
	governanceContracts = async (
		_params: QueryGovernanceContractsRequest = {}
	): Promise<QueryGovernanceContractsResponse> => {
		const endpoint = "juno/cwhooks/v1/governance_contracts"
		return await this.req.get<QueryGovernanceContractsResponse>(endpoint)
	}
}
