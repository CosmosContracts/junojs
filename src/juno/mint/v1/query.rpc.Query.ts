import { BinaryReader } from "../../../binary"
import type { TxRpc } from "../../../types"
import {
	QueryAnnualProvisionsRequest,
	QueryAnnualProvisionsResponse,
	QueryInflationRequest,
	QueryInflationResponse,
	QueryParamsRequest,
	QueryParamsResponse,
	QueryTargetSupplyRequest,
	QueryTargetSupplyResponse
} from "./query"
/** Query provides defines the gRPC querier service. */
export interface Query {
	/** Params returns the total set of minting parameters. */
	params(request?: QueryParamsRequest): Promise<QueryParamsResponse>
	/** Inflation returns the current minting inflation value. */
	inflation(request?: QueryInflationRequest): Promise<QueryInflationResponse>
	/** AnnualProvisions current minting annual provisions value. */
	annualProvisions(request?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse>
	/** TargetSupply current target supply for this phase value. */
	targetSupply(request?: QueryTargetSupplyRequest): Promise<QueryTargetSupplyResponse>
}
export class QueryClientImpl implements Query {
	private readonly rpc: TxRpc
	constructor(rpc: TxRpc) {
		this.rpc = rpc
	}
	/* Params returns the total set of minting parameters. */
	params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const data = QueryParamsRequest.encode(request).finish()
		const promise = this.rpc.request("juno.mint.v1.Query", "Params", data)
		return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)))
	}
	/* Inflation returns the current minting inflation value. */
	inflation = async (request: QueryInflationRequest = {}): Promise<QueryInflationResponse> => {
		const data = QueryInflationRequest.encode(request).finish()
		const promise = this.rpc.request("juno.mint.v1.Query", "Inflation", data)
		return promise.then((data) => QueryInflationResponse.decode(new BinaryReader(data)))
	}
	/* AnnualProvisions current minting annual provisions value. */
	annualProvisions = async (
		request: QueryAnnualProvisionsRequest = {}
	): Promise<QueryAnnualProvisionsResponse> => {
		const data = QueryAnnualProvisionsRequest.encode(request).finish()
		const promise = this.rpc.request("juno.mint.v1.Query", "AnnualProvisions", data)
		return promise.then((data) => QueryAnnualProvisionsResponse.decode(new BinaryReader(data)))
	}
	/* TargetSupply current target supply for this phase value. */
	targetSupply = async (
		request: QueryTargetSupplyRequest = {}
	): Promise<QueryTargetSupplyResponse> => {
		const data = QueryTargetSupplyRequest.encode(request).finish()
		const promise = this.rpc.request("juno.mint.v1.Query", "TargetSupply", data)
		return promise.then((data) => QueryTargetSupplyResponse.decode(new BinaryReader(data)))
	}
}
export const createClientImpl = (rpc: TxRpc) => {
	return new QueryClientImpl(rpc)
}
