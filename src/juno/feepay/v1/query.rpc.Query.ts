import { BinaryReader } from "../../../binary"
import type { TxRpc } from "../../../types"
import {
	QueryFeePayContractRequest,
	QueryFeePayContractResponse,
	QueryFeePayContractUsesRequest,
	QueryFeePayContractUsesResponse,
	QueryFeePayContractsRequest,
	QueryFeePayContractsResponse,
	QueryFeePayWalletIsEligibleRequest,
	QueryFeePayWalletIsEligibleResponse,
	QueryParamsRequest,
	QueryParamsResponse
} from "./query"
/** Query defines the gRPC querier service. */
export interface Query {
	/** FeePayContract queries a single fee pay contract by address */
	feePayContract(request: QueryFeePayContractRequest): Promise<QueryFeePayContractResponse>
	/** Retrieve all fee pay contracts */
	feePayContracts(request?: QueryFeePayContractsRequest): Promise<QueryFeePayContractsResponse>
	/** Retrieve the number of uses on a fee pay contract by wallet */
	feePayContractUses(
		request: QueryFeePayContractUsesRequest
	): Promise<QueryFeePayContractUsesResponse>
	/** Query if sender is eligible for fee pay contract interaction */
	feePayWalletIsEligible(
		request: QueryFeePayWalletIsEligibleRequest
	): Promise<QueryFeePayWalletIsEligibleResponse>
	/** Params retrieves the FeePay module params */
	params(request?: QueryParamsRequest): Promise<QueryParamsResponse>
}
export class QueryClientImpl implements Query {
	private readonly rpc: TxRpc
	constructor(rpc: TxRpc) {
		this.rpc = rpc
	}
	/* FeePayContract queries a single fee pay contract by address */
	feePayContract = async (
		request: QueryFeePayContractRequest
	): Promise<QueryFeePayContractResponse> => {
		const data = QueryFeePayContractRequest.encode(request).finish()
		const promise = this.rpc.request("juno.feepay.v1.Query", "FeePayContract", data)
		return promise.then((data) => QueryFeePayContractResponse.decode(new BinaryReader(data)))
	}
	/* Retrieve all fee pay contracts */
	feePayContracts = async (
		request: QueryFeePayContractsRequest = {
			pagination: undefined
		}
	): Promise<QueryFeePayContractsResponse> => {
		const data = QueryFeePayContractsRequest.encode(request).finish()
		const promise = this.rpc.request("juno.feepay.v1.Query", "FeePayContracts", data)
		return promise.then((data) => QueryFeePayContractsResponse.decode(new BinaryReader(data)))
	}
	/* Retrieve the number of uses on a fee pay contract by wallet */
	feePayContractUses = async (
		request: QueryFeePayContractUsesRequest
	): Promise<QueryFeePayContractUsesResponse> => {
		const data = QueryFeePayContractUsesRequest.encode(request).finish()
		const promise = this.rpc.request("juno.feepay.v1.Query", "FeePayContractUses", data)
		return promise.then((data) => QueryFeePayContractUsesResponse.decode(new BinaryReader(data)))
	}
	/* Query if sender is eligible for fee pay contract interaction */
	feePayWalletIsEligible = async (
		request: QueryFeePayWalletIsEligibleRequest
	): Promise<QueryFeePayWalletIsEligibleResponse> => {
		const data = QueryFeePayWalletIsEligibleRequest.encode(request).finish()
		const promise = this.rpc.request("juno.feepay.v1.Query", "FeePayWalletIsEligible", data)
		return promise.then((data) =>
			QueryFeePayWalletIsEligibleResponse.decode(new BinaryReader(data))
		)
	}
	/* Params retrieves the FeePay module params */
	params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const data = QueryParamsRequest.encode(request).finish()
		const promise = this.rpc.request("juno.feepay.v1.Query", "Params", data)
		return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)))
	}
}
export const createClientImpl = (rpc: TxRpc) => {
	return new QueryClientImpl(rpc)
}
