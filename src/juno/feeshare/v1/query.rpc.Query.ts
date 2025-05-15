import { BinaryReader } from "../../../binary"
import type { TxRpc } from "../../../types"
import {
	QueryDeployerFeeSharesRequest,
	QueryDeployerFeeSharesResponse,
	QueryFeeShareRequest,
	QueryFeeShareResponse,
	QueryFeeSharesRequest,
	QueryFeeSharesResponse,
	QueryParamsRequest,
	QueryParamsResponse,
	QueryWithdrawerFeeSharesRequest,
	QueryWithdrawerFeeSharesResponse
} from "./query"
/** Query defines the gRPC querier service. */
export interface Query {
	/** FeeShares retrieves all registered FeeShares */
	feeShares(request?: QueryFeeSharesRequest): Promise<QueryFeeSharesResponse>
	/** FeeShare retrieves a registered FeeShare for a given contract address */
	feeShare(request: QueryFeeShareRequest): Promise<QueryFeeShareResponse>
	/** Params retrieves the FeeShare module params */
	params(request?: QueryParamsRequest): Promise<QueryParamsResponse>
	/**
	 * DeployerFeeShares retrieves all FeeShares that a given deployer has
	 * registered
	 */
	deployerFeeShares(
		request: QueryDeployerFeeSharesRequest
	): Promise<QueryDeployerFeeSharesResponse>
	/**
	 * WithdrawerFeeShares retrieves all FeeShares with a given withdrawer
	 * address
	 */
	withdrawerFeeShares(
		request: QueryWithdrawerFeeSharesRequest
	): Promise<QueryWithdrawerFeeSharesResponse>
}
export class QueryClientImpl implements Query {
	private readonly rpc: TxRpc
	constructor(rpc: TxRpc) {
		this.rpc = rpc
	}
	/* FeeShares retrieves all registered FeeShares */
	feeShares = async (
		request: QueryFeeSharesRequest = {
			pagination: undefined
		}
	): Promise<QueryFeeSharesResponse> => {
		const data = QueryFeeSharesRequest.encode(request).finish()
		const promise = this.rpc.request("juno.feeshare.v1.Query", "FeeShares", data)
		return promise.then((data) => QueryFeeSharesResponse.decode(new BinaryReader(data)))
	}
	/* FeeShare retrieves a registered FeeShare for a given contract address */
	feeShare = async (request: QueryFeeShareRequest): Promise<QueryFeeShareResponse> => {
		const data = QueryFeeShareRequest.encode(request).finish()
		const promise = this.rpc.request("juno.feeshare.v1.Query", "FeeShare", data)
		return promise.then((data) => QueryFeeShareResponse.decode(new BinaryReader(data)))
	}
	/* Params retrieves the FeeShare module params */
	params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const data = QueryParamsRequest.encode(request).finish()
		const promise = this.rpc.request("juno.feeshare.v1.Query", "Params", data)
		return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)))
	}
	/* DeployerFeeShares retrieves all FeeShares that a given deployer has
   registered */
	deployerFeeShares = async (
		request: QueryDeployerFeeSharesRequest
	): Promise<QueryDeployerFeeSharesResponse> => {
		const data = QueryDeployerFeeSharesRequest.encode(request).finish()
		const promise = this.rpc.request("juno.feeshare.v1.Query", "DeployerFeeShares", data)
		return promise.then((data) => QueryDeployerFeeSharesResponse.decode(new BinaryReader(data)))
	}
	/* WithdrawerFeeShares retrieves all FeeShares with a given withdrawer
   address */
	withdrawerFeeShares = async (
		request: QueryWithdrawerFeeSharesRequest
	): Promise<QueryWithdrawerFeeSharesResponse> => {
		const data = QueryWithdrawerFeeSharesRequest.encode(request).finish()
		const promise = this.rpc.request("juno.feeshare.v1.Query", "WithdrawerFeeShares", data)
		return promise.then((data) => QueryWithdrawerFeeSharesResponse.decode(new BinaryReader(data)))
	}
}
export const createClientImpl = (rpc: TxRpc) => {
	return new QueryClientImpl(rpc)
}
