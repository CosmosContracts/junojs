import type { LCDClient } from "@cosmology/lcd"
import type { QueryParamsRequest, QueryParamsResponse } from "./query"
export class LCDQueryClient {
	req: LCDClient
	constructor({
		requestClient
	}: {
		requestClient: LCDClient
	}) {
		this.req = requestClient
	}
	/* Params queries all parameters of the ICA host submodule. */
	params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const endpoint = "ibc/apps/interchain_accounts/host/v1/params"
		return await this.req.get<QueryParamsResponse>(endpoint)
	}
}
