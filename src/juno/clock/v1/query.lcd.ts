import type { LCDClient } from "@cosmology/lcd"
import { setPaginationParams } from "../../../helpers"
import type {
	QueryClockContractRequest,
	QueryClockContractResponse,
	QueryClockContractsRequest,
	QueryClockContractsResponse,
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
	/* ClockContracts */
	clockContracts = async (
		params: QueryClockContractsRequest = {
			pagination: undefined
		}
	): Promise<QueryClockContractsResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = "juno/clock/v1/contracts"
		return await this.req.get<QueryClockContractsResponse>(endpoint, options)
	}
	/* ClockContract */
	clockContract = async (
		params: QueryClockContractRequest
	): Promise<QueryClockContractResponse> => {
		const endpoint = `juno/clock/v1/contracts/${params.contractAddress}`
		return await this.req.get<QueryClockContractResponse>(endpoint)
	}
	/* Params */
	params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const endpoint = "juno/clock/v1/params"
		return await this.req.get<QueryParamsResponse>(endpoint)
	}
}
