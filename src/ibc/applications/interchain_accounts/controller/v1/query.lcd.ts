import type { LCDClient } from "@cosmology/lcd"
import type {
	QueryInterchainAccountRequest,
	QueryInterchainAccountResponse,
	QueryParamsRequest,
	QueryParamsResponse
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
	/* InterchainAccount returns the interchain account address for a given owner address on a given connection */
	interchainAccount = async (
		params: QueryInterchainAccountRequest
	): Promise<QueryInterchainAccountResponse> => {
		const endpoint = `ibc/apps/interchain_accounts/controller/v1/owners/${params.owner}/connections/${params.connectionId}`
		return await this.req.get<QueryInterchainAccountResponse>(endpoint)
	}
	/* Params queries all parameters of the ICA controller submodule. */
	params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const endpoint = "ibc/apps/interchain_accounts/controller/v1/params"
		return await this.req.get<QueryParamsResponse>(endpoint)
	}
}
