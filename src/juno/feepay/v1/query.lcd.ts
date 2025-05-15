import type { LCDClient } from "@cosmology/lcd"
import { setPaginationParams } from "../../../helpers"
import type {
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
export class LCDQueryClient {
	req: LCDClient
	constructor({
		requestClient
	}: {
		requestClient: LCDClient
	}) {
		this.req = requestClient
	}
	/* FeePayContract queries a single fee pay contract by address */
	feePayContract = async (
		params: QueryFeePayContractRequest
	): Promise<QueryFeePayContractResponse> => {
		const endpoint = `juno/feepay/v1/contract/${params.contractAddress}`
		return await this.req.get<QueryFeePayContractResponse>(endpoint)
	}
	/* Retrieve all fee pay contracts */
	feePayContracts = async (
		params: QueryFeePayContractsRequest = {
			pagination: undefined
		}
	): Promise<QueryFeePayContractsResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = "juno/feepay/v1/all_contracts"
		return await this.req.get<QueryFeePayContractsResponse>(endpoint, options)
	}
	/* Retrieve the number of uses on a fee pay contract by wallet */
	feePayContractUses = async (
		params: QueryFeePayContractUsesRequest
	): Promise<QueryFeePayContractUsesResponse> => {
		const endpoint = `juno/feepay/v1/contract/${params.contractAddress}/uses/${params.walletAddress}`
		return await this.req.get<QueryFeePayContractUsesResponse>(endpoint)
	}
	/* Query if sender is eligible for fee pay contract interaction */
	feePayWalletIsEligible = async (
		params: QueryFeePayWalletIsEligibleRequest
	): Promise<QueryFeePayWalletIsEligibleResponse> => {
		const endpoint = `juno/feepay/v1/contract/${params.contractAddress}/eligible/${params.walletAddress}`
		return await this.req.get<QueryFeePayWalletIsEligibleResponse>(endpoint)
	}
	/* Params retrieves the FeePay module params */
	params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const endpoint = "juno/feepay/v1/params"
		return await this.req.get<QueryParamsResponse>(endpoint)
	}
}
