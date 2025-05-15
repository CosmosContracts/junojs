import type { LCDClient } from "@cosmology/lcd"
import { setPaginationParams } from "../../../helpers"
import type {
	QueryAllContractStateRequest,
	QueryAllContractStateResponse,
	QueryBuildAddressRequest,
	QueryBuildAddressResponse,
	QueryCodeInfoRequest,
	QueryCodeInfoResponse,
	QueryCodeRequest,
	QueryCodeResponse,
	QueryCodesRequest,
	QueryCodesResponse,
	QueryContractHistoryRequest,
	QueryContractHistoryResponse,
	QueryContractInfoRequest,
	QueryContractInfoResponse,
	QueryContractsByCodeRequest,
	QueryContractsByCodeResponse,
	QueryContractsByCreatorRequest,
	QueryContractsByCreatorResponse,
	QueryParamsRequest,
	QueryParamsResponse,
	QueryPinnedCodesRequest,
	QueryPinnedCodesResponse,
	QueryRawContractStateRequest,
	QueryRawContractStateResponse,
	QuerySmartContractStateRequest,
	QuerySmartContractStateResponse,
	QueryWasmLimitsConfigRequest,
	QueryWasmLimitsConfigResponse
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
	/* ContractInfo gets the contract meta data */
	contractInfo = async (params: QueryContractInfoRequest): Promise<QueryContractInfoResponse> => {
		const endpoint = `cosmwasm/wasm/v1/contract/${params.address}`
		return await this.req.get<QueryContractInfoResponse>(endpoint)
	}
	/* ContractHistory gets the contract code history */
	contractHistory = async (
		params: QueryContractHistoryRequest
	): Promise<QueryContractHistoryResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/history`
		return await this.req.get<QueryContractHistoryResponse>(endpoint, options)
	}
	/* ContractsByCode lists all smart contracts for a code id */
	contractsByCode = async (
		params: QueryContractsByCodeRequest
	): Promise<QueryContractsByCodeResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = `cosmwasm/wasm/v1/code/${params.codeId}/contracts`
		return await this.req.get<QueryContractsByCodeResponse>(endpoint, options)
	}
	/* AllContractState gets all raw store data for a single contract */
	allContractState = async (
		params: QueryAllContractStateRequest
	): Promise<QueryAllContractStateResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/state`
		return await this.req.get<QueryAllContractStateResponse>(endpoint, options)
	}
	/* RawContractState gets single key from the raw store data of a contract */
	rawContractState = async (
		params: QueryRawContractStateRequest
	): Promise<QueryRawContractStateResponse> => {
		const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/raw/${params.queryData}`
		return await this.req.get<QueryRawContractStateResponse>(endpoint)
	}
	/* SmartContractState get smart query result from the contract */
	smartContractState = async (
		params: QuerySmartContractStateRequest
	): Promise<QuerySmartContractStateResponse> => {
		const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/smart/${params.queryData}`
		return await this.req.get<QuerySmartContractStateResponse>(endpoint)
	}
	/* Code gets the binary code and metadata for a single wasm code */
	code = async (params: QueryCodeRequest): Promise<QueryCodeResponse> => {
		const endpoint = `cosmwasm/wasm/v1/code/${params.codeId}`
		return await this.req.get<QueryCodeResponse>(endpoint)
	}
	/* Codes gets the metadata for all stored wasm codes */
	codes = async (
		params: QueryCodesRequest = {
			pagination: undefined
		}
	): Promise<QueryCodesResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = "cosmwasm/wasm/v1/code"
		return await this.req.get<QueryCodesResponse>(endpoint, options)
	}
	/* CodeInfo gets the metadata for a single wasm code */
	codeInfo = async (params: QueryCodeInfoRequest): Promise<QueryCodeInfoResponse> => {
		const endpoint = `cosmwasm/wasm/v1/code-info/${params.codeId}`
		return await this.req.get<QueryCodeInfoResponse>(endpoint)
	}
	/* PinnedCodes gets the pinned code ids */
	pinnedCodes = async (
		params: QueryPinnedCodesRequest = {
			pagination: undefined
		}
	): Promise<QueryPinnedCodesResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = "cosmwasm/wasm/v1/codes/pinned"
		return await this.req.get<QueryPinnedCodesResponse>(endpoint, options)
	}
	/* Params gets the module params */
	params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const endpoint = "cosmwasm/wasm/v1/codes/params"
		return await this.req.get<QueryParamsResponse>(endpoint)
	}
	/* ContractsByCreator gets the contracts by creator */
	contractsByCreator = async (
		params: QueryContractsByCreatorRequest
	): Promise<QueryContractsByCreatorResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = `cosmwasm/wasm/v1/contracts/creator/${params.creatorAddress}`
		return await this.req.get<QueryContractsByCreatorResponse>(endpoint, options)
	}
	/* WasmLimitsConfig gets the configured limits for static validation of Wasm
   files, encoded in JSON. */
	wasmLimitsConfig = async (
		_params: QueryWasmLimitsConfigRequest = {}
	): Promise<QueryWasmLimitsConfigResponse> => {
		const endpoint = "cosmwasm/wasm/v1/wasm-limits-config"
		return await this.req.get<QueryWasmLimitsConfigResponse>(endpoint)
	}
	/* BuildAddress builds a contract address */
	buildAddress = async (params: QueryBuildAddressRequest): Promise<QueryBuildAddressResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.codeHash !== "undefined") {
			options.params.code_hash = params.codeHash
		}
		if (typeof params?.creatorAddress !== "undefined") {
			options.params.creator_address = params.creatorAddress
		}
		if (typeof params?.salt !== "undefined") {
			options.params.salt = params.salt
		}
		if (typeof params?.initArgs !== "undefined") {
			options.params.init_args = params.initArgs
		}
		const endpoint = "cosmwasm/wasm/v1/contract/build_address"
		return await this.req.get<QueryBuildAddressResponse>(endpoint, options)
	}
}
