import { BinaryReader } from "../../../binary"
import type { TxRpc } from "../../../types"
import { QueryParamsRequest, QueryParamsResponse } from "./query"
/** Query defines the gRPC querier service. */
export interface Query {
	/** Params queries the parameters of x/consensus module. */
	params(request?: QueryParamsRequest): Promise<QueryParamsResponse>
}
export class QueryClientImpl implements Query {
	private readonly rpc: TxRpc
	constructor(rpc: TxRpc) {
		this.rpc = rpc
	}
	/* Params queries the parameters of x/consensus module. */
	params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const data = QueryParamsRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.consensus.v1.Query", "Params", data)
		return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)))
	}
}
export const createClientImpl = (rpc: TxRpc) => {
	return new QueryClientImpl(rpc)
}
