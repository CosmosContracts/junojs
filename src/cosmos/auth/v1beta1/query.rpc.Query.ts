import { BinaryReader } from "../../../binary"
import type { TxRpc } from "../../../types"
import {
	AddressBytesToStringRequest,
	AddressBytesToStringResponse,
	AddressStringToBytesRequest,
	AddressStringToBytesResponse,
	Bech32PrefixRequest,
	Bech32PrefixResponse,
	QueryAccountAddressByIDRequest,
	QueryAccountAddressByIDResponse,
	QueryAccountInfoRequest,
	QueryAccountInfoResponse,
	QueryAccountRequest,
	QueryAccountResponse,
	QueryAccountsRequest,
	QueryAccountsResponse,
	QueryModuleAccountByNameRequest,
	QueryModuleAccountByNameResponse,
	QueryModuleAccountsRequest,
	QueryModuleAccountsResponse,
	QueryParamsRequest,
	QueryParamsResponse
} from "./query"
/** Query defines the gRPC querier service. */
export interface Query {
	/**
	 * Accounts returns all the existing accounts.
	 *
	 * When called from another module, this query might consume a high amount of
	 * gas if the pagination field is incorrectly set.
	 *
	 * Since: cosmos-sdk 0.43
	 */
	accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse>
	/** Account returns account details based on address. */
	account(request: QueryAccountRequest): Promise<QueryAccountResponse>
	/**
	 * AccountAddressByID returns account address based on account number.
	 *
	 * Since: cosmos-sdk 0.46.2
	 */
	accountAddressByID(
		request: QueryAccountAddressByIDRequest
	): Promise<QueryAccountAddressByIDResponse>
	/** Params queries all parameters. */
	params(request?: QueryParamsRequest): Promise<QueryParamsResponse>
	/**
	 * ModuleAccounts returns all the existing module accounts.
	 *
	 * Since: cosmos-sdk 0.46
	 */
	moduleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse>
	/** ModuleAccountByName returns the module account info by module name */
	moduleAccountByName(
		request: QueryModuleAccountByNameRequest
	): Promise<QueryModuleAccountByNameResponse>
	/**
	 * Bech32Prefix queries bech32Prefix
	 *
	 * Since: cosmos-sdk 0.46
	 */
	bech32Prefix(request?: Bech32PrefixRequest): Promise<Bech32PrefixResponse>
	/**
	 * AddressBytesToString converts Account Address bytes to string
	 *
	 * Since: cosmos-sdk 0.46
	 */
	addressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse>
	/**
	 * AddressStringToBytes converts Address string to bytes
	 *
	 * Since: cosmos-sdk 0.46
	 */
	addressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse>
	/**
	 * AccountInfo queries account info which is common to all account types.
	 *
	 * Since: cosmos-sdk 0.47
	 */
	accountInfo(request: QueryAccountInfoRequest): Promise<QueryAccountInfoResponse>
}
export class QueryClientImpl implements Query {
	private readonly rpc: TxRpc
	constructor(rpc: TxRpc) {
		this.rpc = rpc
	}
	/* Accounts returns all the existing accounts.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set.
  
   Since: cosmos-sdk 0.43 */
	accounts = async (
		request: QueryAccountsRequest = {
			pagination: undefined
		}
	): Promise<QueryAccountsResponse> => {
		const data = QueryAccountsRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Accounts", data)
		return promise.then((data) => QueryAccountsResponse.decode(new BinaryReader(data)))
	}
	/* Account returns account details based on address. */
	account = async (request: QueryAccountRequest): Promise<QueryAccountResponse> => {
		const data = QueryAccountRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Account", data)
		return promise.then((data) => QueryAccountResponse.decode(new BinaryReader(data)))
	}
	/* AccountAddressByID returns account address based on account number.
  
   Since: cosmos-sdk 0.46.2 */
	accountAddressByID = async (
		request: QueryAccountAddressByIDRequest
	): Promise<QueryAccountAddressByIDResponse> => {
		const data = QueryAccountAddressByIDRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AccountAddressByID", data)
		return promise.then((data) => QueryAccountAddressByIDResponse.decode(new BinaryReader(data)))
	}
	/* Params queries all parameters. */
	params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const data = QueryParamsRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Params", data)
		return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)))
	}
	/* ModuleAccounts returns all the existing module accounts.
  
   Since: cosmos-sdk 0.46 */
	moduleAccounts = async (
		request: QueryModuleAccountsRequest = {}
	): Promise<QueryModuleAccountsResponse> => {
		const data = QueryModuleAccountsRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccounts", data)
		return promise.then((data) => QueryModuleAccountsResponse.decode(new BinaryReader(data)))
	}
	/* ModuleAccountByName returns the module account info by module name */
	moduleAccountByName = async (
		request: QueryModuleAccountByNameRequest
	): Promise<QueryModuleAccountByNameResponse> => {
		const data = QueryModuleAccountByNameRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccountByName", data)
		return promise.then((data) => QueryModuleAccountByNameResponse.decode(new BinaryReader(data)))
	}
	/* Bech32Prefix queries bech32Prefix
  
   Since: cosmos-sdk 0.46 */
	bech32Prefix = async (request: Bech32PrefixRequest = {}): Promise<Bech32PrefixResponse> => {
		const data = Bech32PrefixRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Bech32Prefix", data)
		return promise.then((data) => Bech32PrefixResponse.decode(new BinaryReader(data)))
	}
	/* AddressBytesToString converts Account Address bytes to string
  
   Since: cosmos-sdk 0.46 */
	addressBytesToString = async (
		request: AddressBytesToStringRequest
	): Promise<AddressBytesToStringResponse> => {
		const data = AddressBytesToStringRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressBytesToString", data)
		return promise.then((data) => AddressBytesToStringResponse.decode(new BinaryReader(data)))
	}
	/* AddressStringToBytes converts Address string to bytes
  
   Since: cosmos-sdk 0.46 */
	addressStringToBytes = async (
		request: AddressStringToBytesRequest
	): Promise<AddressStringToBytesResponse> => {
		const data = AddressStringToBytesRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressStringToBytes", data)
		return promise.then((data) => AddressStringToBytesResponse.decode(new BinaryReader(data)))
	}
	/* AccountInfo queries account info which is common to all account types.
  
   Since: cosmos-sdk 0.47 */
	accountInfo = async (request: QueryAccountInfoRequest): Promise<QueryAccountInfoResponse> => {
		const data = QueryAccountInfoRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AccountInfo", data)
		return promise.then((data) => QueryAccountInfoResponse.decode(new BinaryReader(data)))
	}
}
export const createClientImpl = (rpc: TxRpc) => {
	return new QueryClientImpl(rpc)
}
