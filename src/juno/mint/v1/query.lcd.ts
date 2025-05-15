import type { LCDClient } from "@cosmology/lcd"
import type {
	QueryAnnualProvisionsRequest,
	QueryAnnualProvisionsResponse,
	QueryInflationRequest,
	QueryInflationResponse,
	QueryParamsRequest,
	QueryParamsResponse,
	QueryTargetSupplyRequest,
	QueryTargetSupplyResponse
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
	/* Params returns the total set of minting parameters. */
	params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const endpoint = "cosmos/mint/v1beta1/params"
		return await this.req.get<QueryParamsResponse>(endpoint)
	}
	/* Inflation returns the current minting inflation value. */
	inflation = async (_params: QueryInflationRequest = {}): Promise<QueryInflationResponse> => {
		const endpoint = "cosmos/mint/v1beta1/inflation"
		return await this.req.get<QueryInflationResponse>(endpoint)
	}
	/* AnnualProvisions current minting annual provisions value. */
	annualProvisions = async (
		_params: QueryAnnualProvisionsRequest = {}
	): Promise<QueryAnnualProvisionsResponse> => {
		const endpoint = "cosmos/mint/v1beta1/annual_provisions"
		return await this.req.get<QueryAnnualProvisionsResponse>(endpoint)
	}
	/* TargetSupply current target supply for this phase value. */
	targetSupply = async (
		_params: QueryTargetSupplyRequest = {}
	): Promise<QueryTargetSupplyResponse> => {
		const endpoint = "cosmos/mint/v1beta1/target_supply"
		return await this.req.get<QueryTargetSupplyResponse>(endpoint)
	}
}
