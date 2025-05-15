import { BinaryReader } from "../../../binary"
import type { TxRpc } from "../../../types"
import {
	QueryGovernanceContractsRequest,
	QueryGovernanceContractsResponse,
	QueryParamsRequest,
	QueryParamsResponse,
	QueryStakingContractsRequest,
	QueryStakingContractsResponse
} from "./query"
/** Query defines the gRPC querier service. */
export interface Query {
	/** Params */
	params(request?: QueryParamsRequest): Promise<QueryParamsResponse>
	/** StakingContracts */
	stakingContracts(request?: QueryStakingContractsRequest): Promise<QueryStakingContractsResponse>
	/** GovernanceContracts */
	governanceContracts(
		request?: QueryGovernanceContractsRequest
	): Promise<QueryGovernanceContractsResponse>
}
export class QueryClientImpl implements Query {
	private readonly rpc: TxRpc
	constructor(rpc: TxRpc) {
		this.rpc = rpc
	}
	/* Params */
	params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const data = QueryParamsRequest.encode(request).finish()
		const promise = this.rpc.request("juno.cwhooks.v1.Query", "Params", data)
		return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)))
	}
	/* StakingContracts */
	stakingContracts = async (
		request: QueryStakingContractsRequest = {}
	): Promise<QueryStakingContractsResponse> => {
		const data = QueryStakingContractsRequest.encode(request).finish()
		const promise = this.rpc.request("juno.cwhooks.v1.Query", "StakingContracts", data)
		return promise.then((data) => QueryStakingContractsResponse.decode(new BinaryReader(data)))
	}
	/* GovernanceContracts */
	governanceContracts = async (
		request: QueryGovernanceContractsRequest = {}
	): Promise<QueryGovernanceContractsResponse> => {
		const data = QueryGovernanceContractsRequest.encode(request).finish()
		const promise = this.rpc.request("juno.cwhooks.v1.Query", "GovernanceContracts", data)
		return promise.then((data) => QueryGovernanceContractsResponse.decode(new BinaryReader(data)))
	}
}
export const createClientImpl = (rpc: TxRpc) => {
	return new QueryClientImpl(rpc)
}
