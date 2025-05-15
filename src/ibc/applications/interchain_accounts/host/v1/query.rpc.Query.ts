import { BinaryReader } from "../../../../../binary"
import type { TxRpc } from "../../../../../types"
import { QueryParamsRequest, QueryParamsResponse } from "./query"
/** Query provides defines the gRPC querier service. */
export interface Query {
	/** Params queries all parameters of the ICA host submodule. */
	params(request?: QueryParamsRequest): Promise<QueryParamsResponse>
}
export class QueryClientImpl implements Query {
	private readonly rpc: TxRpc
	constructor(rpc: TxRpc) {
		this.rpc = rpc
	}
	/* Params queries all parameters of the ICA host submodule. */
	params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const data = QueryParamsRequest.encode(request).finish()
		const promise = this.rpc.request(
			"ibc.applications.interchain_accounts.host.v1.Query",
			"Params",
			data
		)
		return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)))
	}
}
export const createClientImpl = (rpc: TxRpc) => {
	return new QueryClientImpl(rpc)
}
