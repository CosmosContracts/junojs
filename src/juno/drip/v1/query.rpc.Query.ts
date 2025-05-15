import { BinaryReader } from "../../../binary"
import type { TxRpc } from "../../../types"
import { QueryParamsRequest, QueryParamsResponse } from "./query"
/** Query defines the gRPC querier service. */
export interface Query {
	/** Params retrieves the Drip module params */
	params(request?: QueryParamsRequest): Promise<QueryParamsResponse>
}
export class QueryClientImpl implements Query {
	private readonly rpc: TxRpc
	constructor(rpc: TxRpc) {
		this.rpc = rpc
	}
	/* Params retrieves the Drip module params */
	params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const data = QueryParamsRequest.encode(request).finish()
		const promise = this.rpc.request("juno.drip.v1.Query", "Params", data)
		return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)))
	}
}
export const createClientImpl = (rpc: TxRpc) => {
	return new QueryClientImpl(rpc)
}
