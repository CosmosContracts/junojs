import { BinaryReader } from "../../../../../binary"
import type { TxRpc } from "../../../../../types"
import {
	QueryInterchainAccountRequest,
	QueryInterchainAccountResponse,
	QueryParamsRequest,
	QueryParamsResponse
} from "./query"
/** Query provides defines the gRPC querier service. */
export interface Query {
	/** InterchainAccount returns the interchain account address for a given owner address on a given connection */
	interchainAccount(
		request: QueryInterchainAccountRequest
	): Promise<QueryInterchainAccountResponse>
	/** Params queries all parameters of the ICA controller submodule. */
	params(request?: QueryParamsRequest): Promise<QueryParamsResponse>
}
export class QueryClientImpl implements Query {
	private readonly rpc: TxRpc
	constructor(rpc: TxRpc) {
		this.rpc = rpc
	}
	/* InterchainAccount returns the interchain account address for a given owner address on a given connection */
	interchainAccount = async (
		request: QueryInterchainAccountRequest
	): Promise<QueryInterchainAccountResponse> => {
		const data = QueryInterchainAccountRequest.encode(request).finish()
		const promise = this.rpc.request(
			"ibc.applications.interchain_accounts.controller.v1.Query",
			"InterchainAccount",
			data
		)
		return promise.then((data) => QueryInterchainAccountResponse.decode(new BinaryReader(data)))
	}
	/* Params queries all parameters of the ICA controller submodule. */
	params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const data = QueryParamsRequest.encode(request).finish()
		const promise = this.rpc.request(
			"ibc.applications.interchain_accounts.controller.v1.Query",
			"Params",
			data
		)
		return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)))
	}
}
export const createClientImpl = (rpc: TxRpc) => {
	return new QueryClientImpl(rpc)
}
