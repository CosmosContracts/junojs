import type { LCDClient } from "@cosmology/lcd"
import { setPaginationParams } from "../../../helpers"
import type {
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
export class LCDQueryClient {
	req: LCDClient
	constructor({
		requestClient
	}: {
		requestClient: LCDClient
	}) {
		this.req = requestClient
	}
	/* FeeShares retrieves all registered FeeShares */
	feeShares = async (
		params: QueryFeeSharesRequest = {
			pagination: undefined
		}
	): Promise<QueryFeeSharesResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = "juno/feeshare/v1/fee_shares"
		return await this.req.get<QueryFeeSharesResponse>(endpoint, options)
	}
	/* FeeShare retrieves a registered FeeShare for a given contract address */
	feeShare = async (params: QueryFeeShareRequest): Promise<QueryFeeShareResponse> => {
		const endpoint = `juno/feeshare/v1/fee_shares/${params.contractAddress}`
		return await this.req.get<QueryFeeShareResponse>(endpoint)
	}
	/* Params retrieves the FeeShare module params */
	params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const endpoint = "juno/feeshare/v1/params"
		return await this.req.get<QueryParamsResponse>(endpoint)
	}
	/* DeployerFeeShares retrieves all FeeShares that a given deployer has
   registered */
	deployerFeeShares = async (
		params: QueryDeployerFeeSharesRequest
	): Promise<QueryDeployerFeeSharesResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = `juno/feeshare/v1/fee_shares/${params.deployerAddress}`
		return await this.req.get<QueryDeployerFeeSharesResponse>(endpoint, options)
	}
	/* WithdrawerFeeShares retrieves all FeeShares with a given withdrawer
   address */
	withdrawerFeeShares = async (
		params: QueryWithdrawerFeeSharesRequest
	): Promise<QueryWithdrawerFeeSharesResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = `juno/feeshare/v1/fee_shares/${params.withdrawerAddress}`
		return await this.req.get<QueryWithdrawerFeeSharesResponse>(endpoint, options)
	}
}
