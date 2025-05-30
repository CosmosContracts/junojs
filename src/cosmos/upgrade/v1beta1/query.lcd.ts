import type { LCDClient } from "@cosmology/lcd"
import type {
	QueryAppliedPlanRequest,
	QueryAppliedPlanResponse,
	QueryAuthorityRequest,
	QueryAuthorityResponse,
	QueryCurrentPlanRequest,
	QueryCurrentPlanResponse,
	QueryModuleVersionsRequest,
	QueryModuleVersionsResponse,
	QueryUpgradedConsensusStateRequest,
	QueryUpgradedConsensusStateResponse
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
	/* CurrentPlan queries the current upgrade plan. */
	currentPlan = async (
		_params: QueryCurrentPlanRequest = {}
	): Promise<QueryCurrentPlanResponse> => {
		const endpoint = "cosmos/upgrade/v1beta1/current_plan"
		return await this.req.get<QueryCurrentPlanResponse>(endpoint)
	}
	/* AppliedPlan queries a previously applied upgrade plan by its name. */
	appliedPlan = async (params: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse> => {
		const endpoint = `cosmos/upgrade/v1beta1/applied_plan/${params.name}`
		return await this.req.get<QueryAppliedPlanResponse>(endpoint)
	}
	/* UpgradedConsensusState queries the consensus state that will serve
   as a trusted kernel for the next version of this chain. It will only be
   stored at the last height of this chain.
   UpgradedConsensusState RPC not supported with legacy querier
   This rpc is deprecated now that IBC has its own replacement
   (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54) */
	upgradedConsensusState = async (
		params: QueryUpgradedConsensusStateRequest
	): Promise<QueryUpgradedConsensusStateResponse> => {
		const endpoint = `cosmos/upgrade/v1beta1/upgraded_consensus_state/${params.lastHeight}`
		return await this.req.get<QueryUpgradedConsensusStateResponse>(endpoint)
	}
	/* ModuleVersions queries the list of module versions from state.
  
   Since: cosmos-sdk 0.43 */
	moduleVersions = async (
		params: QueryModuleVersionsRequest
	): Promise<QueryModuleVersionsResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.moduleName !== "undefined") {
			options.params.module_name = params.moduleName
		}
		const endpoint = "cosmos/upgrade/v1beta1/module_versions"
		return await this.req.get<QueryModuleVersionsResponse>(endpoint, options)
	}
	/* Returns the account with authority to conduct upgrades
  
   Since: cosmos-sdk 0.46 */
	authority = async (_params: QueryAuthorityRequest = {}): Promise<QueryAuthorityResponse> => {
		const endpoint = "cosmos/upgrade/v1beta1/authority"
		return await this.req.get<QueryAuthorityResponse>(endpoint)
	}
}
