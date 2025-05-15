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
	/* Params retrieves the Drip module params */
	params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const endpoint = "juno/drip/v1/params"
		return await this.req.get<QueryParamsResponse>(endpoint)
	}
}
