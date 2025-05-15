import type { LCDClient } from "@cosmology/lcd"
import { setPaginationParams } from "../../../helpers"
import type {
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
export class LCDQueryClient {
	req: LCDClient
	constructor({
		requestClient
	}: {
		requestClient: LCDClient
	}) {
		this.req = requestClient
	}
	/* Balance queries the balance of a single coin for a single account. */
	balance = async (params: QueryBalanceRequest): Promise<QueryBalanceResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.denom !== "undefined") {
			options.params.denom = params.denom
		}
		const endpoint = `cosmos/bank/v1beta1/balances/${params.address}/by_denom`
		return await this.req.get<QueryBalanceResponse>(endpoint, options)
	}
	/* AllBalances queries the balance of all coins for a single account.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
	allBalances = async (params: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		if (typeof params?.resolveDenom !== "undefined") {
			options.params.resolve_denom = params.resolveDenom
		}
		const endpoint = `cosmos/bank/v1beta1/balances/${params.address}`
		return await this.req.get<QueryAllBalancesResponse>(endpoint, options)
	}
	/* SpendableBalances queries the spendable balance of all coins for a single
   account.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set.
  
   Since: cosmos-sdk 0.46 */
	spendableBalances = async (
		params: QuerySpendableBalancesRequest
	): Promise<QuerySpendableBalancesResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = `cosmos/bank/v1beta1/spendable_balances/${params.address}`
		return await this.req.get<QuerySpendableBalancesResponse>(endpoint, options)
	}
	/* SpendableBalanceByDenom queries the spendable balance of a single denom for
   a single account.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set.
  
   Since: cosmos-sdk 0.47 */
	spendableBalanceByDenom = async (
		params: QuerySpendableBalanceByDenomRequest
	): Promise<QuerySpendableBalanceByDenomResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.denom !== "undefined") {
			options.params.denom = params.denom
		}
		const endpoint = `cosmos/bank/v1beta1/spendable_balances/${params.address}/by_denom`
		return await this.req.get<QuerySpendableBalanceByDenomResponse>(endpoint, options)
	}
	/* TotalSupply queries the total supply of all coins.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
	totalSupply = async (
		params: QueryTotalSupplyRequest = {
			pagination: undefined
		}
	): Promise<QueryTotalSupplyResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = "cosmos/bank/v1beta1/supply"
		return await this.req.get<QueryTotalSupplyResponse>(endpoint, options)
	}
	/* SupplyOf queries the supply of a single coin.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
	supplyOf = async (params: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.denom !== "undefined") {
			options.params.denom = params.denom
		}
		const endpoint = "cosmos/bank/v1beta1/supply/by_denom"
		return await this.req.get<QuerySupplyOfResponse>(endpoint, options)
	}
	/* Params queries the parameters of x/bank module. */
	params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const endpoint = "cosmos/bank/v1beta1/params"
		return await this.req.get<QueryParamsResponse>(endpoint)
	}
	/* DenomMetadata queries the client metadata of a given coin denomination. */
	denomMetadata = async (
		params: QueryDenomMetadataRequest
	): Promise<QueryDenomMetadataResponse> => {
		const endpoint = `cosmos/bank/v1beta1/denoms_metadata/${params.denom}`
		return await this.req.get<QueryDenomMetadataResponse>(endpoint)
	}
	/* DenomMetadataByQueryString queries the client metadata of a given coin denomination. */
	denomMetadataByQueryString = async (
		params: QueryDenomMetadataByQueryStringRequest
	): Promise<QueryDenomMetadataByQueryStringResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.denom !== "undefined") {
			options.params.denom = params.denom
		}
		const endpoint = "cosmos/bank/v1beta1/denoms_metadata_by_query_string"
		return await this.req.get<QueryDenomMetadataByQueryStringResponse>(endpoint, options)
	}
	/* DenomsMetadata queries the client metadata for all registered coin
   denominations. */
	denomsMetadata = async (
		params: QueryDenomsMetadataRequest = {
			pagination: undefined
		}
	): Promise<QueryDenomsMetadataResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = "cosmos/bank/v1beta1/denoms_metadata"
		return await this.req.get<QueryDenomsMetadataResponse>(endpoint, options)
	}
	/* DenomOwners queries for all account addresses that own a particular token
   denomination.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set.
  
   Since: cosmos-sdk 0.46 */
	denomOwners = async (params: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = `cosmos/bank/v1beta1/denom_owners/${params.denom}`
		return await this.req.get<QueryDenomOwnersResponse>(endpoint, options)
	}
	/* DenomOwnersByQuery queries for all account addresses that own a particular token
   denomination.
  
   Since: cosmos-sdk 0.50.3 */
	denomOwnersByQuery = async (
		params: QueryDenomOwnersByQueryRequest
	): Promise<QueryDenomOwnersByQueryResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.denom !== "undefined") {
			options.params.denom = params.denom
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = "cosmos/bank/v1beta1/denom_owners_by_query"
		return await this.req.get<QueryDenomOwnersByQueryResponse>(endpoint, options)
	}
	/* SendEnabled queries for SendEnabled entries.
  
   This query only returns denominations that have specific SendEnabled settings.
   Any denomination that does not have a specific setting will use the default
   params.default_send_enabled, and will not be returned by this query.
  
   Since: cosmos-sdk 0.47 */
	sendEnabled = async (params: QuerySendEnabledRequest): Promise<QuerySendEnabledResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.denoms !== "undefined") {
			options.params.denoms = params.denoms
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = "cosmos/bank/v1beta1/send_enabled"
		return await this.req.get<QuerySendEnabledResponse>(endpoint, options)
	}
}
