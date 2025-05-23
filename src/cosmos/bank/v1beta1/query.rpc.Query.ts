import { BinaryReader } from "../../../binary"
import type { TxRpc } from "../../../types"
import {
	QueryAllBalancesRequest,
	QueryAllBalancesResponse,
	QueryBalanceRequest,
	QueryBalanceResponse,
	QueryDenomMetadataByQueryStringRequest,
	QueryDenomMetadataByQueryStringResponse,
	QueryDenomMetadataRequest,
	QueryDenomMetadataResponse,
	QueryDenomOwnersByQueryRequest,
	QueryDenomOwnersByQueryResponse,
	QueryDenomOwnersRequest,
	QueryDenomOwnersResponse,
	QueryDenomsMetadataRequest,
	QueryDenomsMetadataResponse,
	QueryParamsRequest,
	QueryParamsResponse,
	QuerySendEnabledRequest,
	QuerySendEnabledResponse,
	QuerySpendableBalanceByDenomRequest,
	QuerySpendableBalanceByDenomResponse,
	QuerySpendableBalancesRequest,
	QuerySpendableBalancesResponse,
	QuerySupplyOfRequest,
	QuerySupplyOfResponse,
	QueryTotalSupplyRequest,
	QueryTotalSupplyResponse
} from "./query"
/** Query defines the gRPC querier service. */
export interface Query {
	/** Balance queries the balance of a single coin for a single account. */
	balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>
	/**
	 * AllBalances queries the balance of all coins for a single account.
	 *
	 * When called from another module, this query might consume a high amount of
	 * gas if the pagination field is incorrectly set.
	 */
	allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>
	/**
	 * SpendableBalances queries the spendable balance of all coins for a single
	 * account.
	 *
	 * When called from another module, this query might consume a high amount of
	 * gas if the pagination field is incorrectly set.
	 *
	 * Since: cosmos-sdk 0.46
	 */
	spendableBalances(
		request: QuerySpendableBalancesRequest
	): Promise<QuerySpendableBalancesResponse>
	/**
	 * SpendableBalanceByDenom queries the spendable balance of a single denom for
	 * a single account.
	 *
	 * When called from another module, this query might consume a high amount of
	 * gas if the pagination field is incorrectly set.
	 *
	 * Since: cosmos-sdk 0.47
	 */
	spendableBalanceByDenom(
		request: QuerySpendableBalanceByDenomRequest
	): Promise<QuerySpendableBalanceByDenomResponse>
	/**
	 * TotalSupply queries the total supply of all coins.
	 *
	 * When called from another module, this query might consume a high amount of
	 * gas if the pagination field is incorrectly set.
	 */
	totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>
	/**
	 * SupplyOf queries the supply of a single coin.
	 *
	 * When called from another module, this query might consume a high amount of
	 * gas if the pagination field is incorrectly set.
	 */
	supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>
	/** Params queries the parameters of x/bank module. */
	params(request?: QueryParamsRequest): Promise<QueryParamsResponse>
	/** DenomMetadata queries the client metadata of a given coin denomination. */
	denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>
	/** DenomMetadataByQueryString queries the client metadata of a given coin denomination. */
	denomMetadataByQueryString(
		request: QueryDenomMetadataByQueryStringRequest
	): Promise<QueryDenomMetadataByQueryStringResponse>
	/**
	 * DenomsMetadata queries the client metadata for all registered coin
	 * denominations.
	 */
	denomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse>
	/**
	 * DenomOwners queries for all account addresses that own a particular token
	 * denomination.
	 *
	 * When called from another module, this query might consume a high amount of
	 * gas if the pagination field is incorrectly set.
	 *
	 * Since: cosmos-sdk 0.46
	 */
	denomOwners(request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse>
	/**
	 * DenomOwnersByQuery queries for all account addresses that own a particular token
	 * denomination.
	 *
	 * Since: cosmos-sdk 0.50.3
	 */
	denomOwnersByQuery(
		request: QueryDenomOwnersByQueryRequest
	): Promise<QueryDenomOwnersByQueryResponse>
	/**
	 * SendEnabled queries for SendEnabled entries.
	 *
	 * This query only returns denominations that have specific SendEnabled settings.
	 * Any denomination that does not have a specific setting will use the default
	 * params.default_send_enabled, and will not be returned by this query.
	 *
	 * Since: cosmos-sdk 0.47
	 */
	sendEnabled(request: QuerySendEnabledRequest): Promise<QuerySendEnabledResponse>
}
export class QueryClientImpl implements Query {
	private readonly rpc: TxRpc
	constructor(rpc: TxRpc) {
		this.rpc = rpc
	}
	/* Balance queries the balance of a single coin for a single account. */
	balance = async (request: QueryBalanceRequest): Promise<QueryBalanceResponse> => {
		const data = QueryBalanceRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Balance", data)
		return promise.then((data) => QueryBalanceResponse.decode(new BinaryReader(data)))
	}
	/* AllBalances queries the balance of all coins for a single account.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
	allBalances = async (request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse> => {
		const data = QueryAllBalancesRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "AllBalances", data)
		return promise.then((data) => QueryAllBalancesResponse.decode(new BinaryReader(data)))
	}
	/* SpendableBalances queries the spendable balance of all coins for a single
   account.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set.
  
   Since: cosmos-sdk 0.46 */
	spendableBalances = async (
		request: QuerySpendableBalancesRequest
	): Promise<QuerySpendableBalancesResponse> => {
		const data = QuerySpendableBalancesRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalances", data)
		return promise.then((data) => QuerySpendableBalancesResponse.decode(new BinaryReader(data)))
	}
	/* SpendableBalanceByDenom queries the spendable balance of a single denom for
   a single account.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set.
  
   Since: cosmos-sdk 0.47 */
	spendableBalanceByDenom = async (
		request: QuerySpendableBalanceByDenomRequest
	): Promise<QuerySpendableBalanceByDenomResponse> => {
		const data = QuerySpendableBalanceByDenomRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalanceByDenom", data)
		return promise.then((data) =>
			QuerySpendableBalanceByDenomResponse.decode(new BinaryReader(data))
		)
	}
	/* TotalSupply queries the total supply of all coins.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
	totalSupply = async (
		request: QueryTotalSupplyRequest = {
			pagination: undefined
		}
	): Promise<QueryTotalSupplyResponse> => {
		const data = QueryTotalSupplyRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "TotalSupply", data)
		return promise.then((data) => QueryTotalSupplyResponse.decode(new BinaryReader(data)))
	}
	/* SupplyOf queries the supply of a single coin.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
	supplyOf = async (request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> => {
		const data = QuerySupplyOfRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SupplyOf", data)
		return promise.then((data) => QuerySupplyOfResponse.decode(new BinaryReader(data)))
	}
	/* Params queries the parameters of x/bank module. */
	params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const data = QueryParamsRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Params", data)
		return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)))
	}
	/* DenomMetadata queries the client metadata of a given coin denomination. */
	denomMetadata = async (
		request: QueryDenomMetadataRequest
	): Promise<QueryDenomMetadataResponse> => {
		const data = QueryDenomMetadataRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomMetadata", data)
		return promise.then((data) => QueryDenomMetadataResponse.decode(new BinaryReader(data)))
	}
	/* DenomMetadataByQueryString queries the client metadata of a given coin denomination. */
	denomMetadataByQueryString = async (
		request: QueryDenomMetadataByQueryStringRequest
	): Promise<QueryDenomMetadataByQueryStringResponse> => {
		const data = QueryDenomMetadataByQueryStringRequest.encode(request).finish()
		const promise = this.rpc.request(
			"cosmos.bank.v1beta1.Query",
			"DenomMetadataByQueryString",
			data
		)
		return promise.then((data) =>
			QueryDenomMetadataByQueryStringResponse.decode(new BinaryReader(data))
		)
	}
	/* DenomsMetadata queries the client metadata for all registered coin
   denominations. */
	denomsMetadata = async (
		request: QueryDenomsMetadataRequest = {
			pagination: undefined
		}
	): Promise<QueryDenomsMetadataResponse> => {
		const data = QueryDenomsMetadataRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomsMetadata", data)
		return promise.then((data) => QueryDenomsMetadataResponse.decode(new BinaryReader(data)))
	}
	/* DenomOwners queries for all account addresses that own a particular token
   denomination.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set.
  
   Since: cosmos-sdk 0.46 */
	denomOwners = async (request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse> => {
		const data = QueryDenomOwnersRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomOwners", data)
		return promise.then((data) => QueryDenomOwnersResponse.decode(new BinaryReader(data)))
	}
	/* DenomOwnersByQuery queries for all account addresses that own a particular token
   denomination.
  
   Since: cosmos-sdk 0.50.3 */
	denomOwnersByQuery = async (
		request: QueryDenomOwnersByQueryRequest
	): Promise<QueryDenomOwnersByQueryResponse> => {
		const data = QueryDenomOwnersByQueryRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomOwnersByQuery", data)
		return promise.then((data) => QueryDenomOwnersByQueryResponse.decode(new BinaryReader(data)))
	}
	/* SendEnabled queries for SendEnabled entries.
  
   This query only returns denominations that have specific SendEnabled settings.
   Any denomination that does not have a specific setting will use the default
   params.default_send_enabled, and will not be returned by this query.
  
   Since: cosmos-sdk 0.47 */
	sendEnabled = async (request: QuerySendEnabledRequest): Promise<QuerySendEnabledResponse> => {
		const data = QuerySendEnabledRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SendEnabled", data)
		return promise.then((data) => QuerySendEnabledResponse.decode(new BinaryReader(data)))
	}
}
export const createClientImpl = (rpc: TxRpc) => {
	return new QueryClientImpl(rpc)
}
