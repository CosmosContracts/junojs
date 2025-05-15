import type { LCDClient } from "@cosmology/lcd"
import { setPaginationParams } from "../../../helpers"
import type {
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
export class LCDQueryClient {
	req: LCDClient
	constructor({
		requestClient
	}: {
		requestClient: LCDClient
	}) {
		this.req = requestClient
	}
	/* Accounts returns all the existing accounts.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set.
  
   Since: cosmos-sdk 0.43 */
	accounts = async (
		params: QueryAccountsRequest = {
			pagination: undefined
		}
	): Promise<QueryAccountsResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = "cosmos/auth/v1beta1/accounts"
		return await this.req.get<QueryAccountsResponse>(endpoint, options)
	}
	/* Account returns account details based on address. */
	account = async (params: QueryAccountRequest): Promise<QueryAccountResponse> => {
		const endpoint = `cosmos/auth/v1beta1/accounts/${params.address}`
		return await this.req.get<QueryAccountResponse>(endpoint)
	}
	/* AccountAddressByID returns account address based on account number.
  
   Since: cosmos-sdk 0.46.2 */
	accountAddressByID = async (
		params: QueryAccountAddressByIDRequest
	): Promise<QueryAccountAddressByIDResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.accountId !== "undefined") {
			options.params.account_id = params.accountId
		}
		const endpoint = `cosmos/auth/v1beta1/address_by_id/${params.id}`
		return await this.req.get<QueryAccountAddressByIDResponse>(endpoint, options)
	}
	/* Params queries all parameters. */
	params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const endpoint = "cosmos/auth/v1beta1/params"
		return await this.req.get<QueryParamsResponse>(endpoint)
	}
	/* ModuleAccounts returns all the existing module accounts.
  
   Since: cosmos-sdk 0.46 */
	moduleAccounts = async (
		_params: QueryModuleAccountsRequest = {}
	): Promise<QueryModuleAccountsResponse> => {
		const endpoint = "cosmos/auth/v1beta1/module_accounts"
		return await this.req.get<QueryModuleAccountsResponse>(endpoint)
	}
	/* ModuleAccountByName returns the module account info by module name */
	moduleAccountByName = async (
		params: QueryModuleAccountByNameRequest
	): Promise<QueryModuleAccountByNameResponse> => {
		const endpoint = `cosmos/auth/v1beta1/module_accounts/${params.name}`
		return await this.req.get<QueryModuleAccountByNameResponse>(endpoint)
	}
	/* Bech32Prefix queries bech32Prefix
  
   Since: cosmos-sdk 0.46 */
	bech32Prefix = async (_params: Bech32PrefixRequest = {}): Promise<Bech32PrefixResponse> => {
		const endpoint = "cosmos/auth/v1beta1/bech32"
		return await this.req.get<Bech32PrefixResponse>(endpoint)
	}
	/* AddressBytesToString converts Account Address bytes to string
  
   Since: cosmos-sdk 0.46 */
	addressBytesToString = async (
		params: AddressBytesToStringRequest
	): Promise<AddressBytesToStringResponse> => {
		const endpoint = `cosmos/auth/v1beta1/bech32/${params.addressBytes}`
		return await this.req.get<AddressBytesToStringResponse>(endpoint)
	}
	/* AddressStringToBytes converts Address string to bytes
  
   Since: cosmos-sdk 0.46 */
	addressStringToBytes = async (
		params: AddressStringToBytesRequest
	): Promise<AddressStringToBytesResponse> => {
		const endpoint = `cosmos/auth/v1beta1/bech32/${params.addressString}`
		return await this.req.get<AddressStringToBytesResponse>(endpoint)
	}
	/* AccountInfo queries account info which is common to all account types.
  
   Since: cosmos-sdk 0.47 */
	accountInfo = async (params: QueryAccountInfoRequest): Promise<QueryAccountInfoResponse> => {
		const endpoint = `cosmos/auth/v1beta1/account_info/${params.address}`
		return await this.req.get<QueryAccountInfoResponse>(endpoint)
	}
}
