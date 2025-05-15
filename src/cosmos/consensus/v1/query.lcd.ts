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
	/* Params queries the parameters of x/consensus module. */
	params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const endpoint = "cosmos/consensus/v1/params"
		return await this.req.get<QueryParamsResponse>(endpoint)
	}
}
