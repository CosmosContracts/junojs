import { BinaryReader } from "../../../binary"
import type { TxRpc } from "../../../types"
import {
	QueryClockContractRequest,
	QueryClockContractResponse,
	QueryClockContractsRequest,
	QueryClockContractsResponse,
	QueryParamsRequest,
	QueryParamsResponse
} from "./query"
/** Query defines the gRPC querier service. */
export interface Query {
	/** ClockContracts */
	clockContracts(request?: QueryClockContractsRequest): Promise<QueryClockContractsResponse>
	/** ClockContract */
	clockContract(request: QueryClockContractRequest): Promise<QueryClockContractResponse>
	/** Params */
	params(request?: QueryParamsRequest): Promise<QueryParamsResponse>
}
export class QueryClientImpl implements Query {
	private readonly rpc: TxRpc
	constructor(rpc: TxRpc) {
		this.rpc = rpc
	}
	/* ClockContracts */
	clockContracts = async (
		request: QueryClockContractsRequest = {
			pagination: undefined
		}
	): Promise<QueryClockContractsResponse> => {
		const data = QueryClockContractsRequest.encode(request).finish()
		const promise = this.rpc.request("juno.clock.v1.Query", "ClockContracts", data)
		return promise.then((data) => QueryClockContractsResponse.decode(new BinaryReader(data)))
	}
	/* ClockContract */
	clockContract = async (
		request: QueryClockContractRequest
	): Promise<QueryClockContractResponse> => {
		const data = QueryClockContractRequest.encode(request).finish()
		const promise = this.rpc.request("juno.clock.v1.Query", "ClockContract", data)
		return promise.then((data) => QueryClockContractResponse.decode(new BinaryReader(data)))
	}
	/* Params */
	params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const data = QueryParamsRequest.encode(request).finish()
		const promise = this.rpc.request("juno.clock.v1.Query", "Params", data)
		return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)))
	}
}
export const createClientImpl = (rpc: TxRpc) => {
	return new QueryClientImpl(rpc)
}
