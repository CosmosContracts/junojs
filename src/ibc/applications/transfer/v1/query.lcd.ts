import type { LCDClient } from "@cosmology/lcd"
import { setPaginationParams } from "../../../../helpers"
import type {
	QueryDenomHashRequest,
	QueryDenomHashResponse,
	QueryDenomTraceRequest,
	QueryDenomTraceResponse,
	QueryDenomTracesRequest,
	QueryDenomTracesResponse,
	QueryEscrowAddressRequest,
	QueryEscrowAddressResponse,
	QueryParamsRequest,
	QueryParamsResponse,
	QueryTotalEscrowForDenomRequest,
	QueryTotalEscrowForDenomResponse
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
	/* DenomTraces queries all denomination traces. */
	denomTraces = async (
		params: QueryDenomTracesRequest = {
			pagination: undefined
		}
	): Promise<QueryDenomTracesResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = "ibc/apps/transfer/v1/denom_traces"
		return await this.req.get<QueryDenomTracesResponse>(endpoint, options)
	}
	/* DenomTrace queries a denomination trace information. */
	denomTrace = async (params: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.hash !== "undefined") {
			options.params.hash = params.hash
		}
		const endpoint = `ibc/apps/transfer/v1/denom_traces/${params.hash}`
		return await this.req.get<QueryDenomTraceResponse>(endpoint, options)
	}
	/* Params queries all parameters of the ibc-transfer module. */
	params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const endpoint = "ibc/apps/transfer/v1/params"
		return await this.req.get<QueryParamsResponse>(endpoint)
	}
	/* DenomHash queries a denomination hash information. */
	denomHash = async (params: QueryDenomHashRequest): Promise<QueryDenomHashResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.trace !== "undefined") {
			options.params.trace = params.trace
		}
		const endpoint = `ibc/apps/transfer/v1/denom_hashes/${params.trace}`
		return await this.req.get<QueryDenomHashResponse>(endpoint, options)
	}
	/* EscrowAddress returns the escrow address for a particular port and channel id. */
	escrowAddress = async (
		params: QueryEscrowAddressRequest
	): Promise<QueryEscrowAddressResponse> => {
		const endpoint = `ibc/apps/transfer/v1/channels/${params.channelId}/ports/${params.portId}/escrow_address`
		return await this.req.get<QueryEscrowAddressResponse>(endpoint)
	}
	/* TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */
	totalEscrowForDenom = async (
		params: QueryTotalEscrowForDenomRequest
	): Promise<QueryTotalEscrowForDenomResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.denom !== "undefined") {
			options.params.denom = params.denom
		}
		const endpoint = `ibc/apps/transfer/v1/denoms/${params.denom}/total_escrow`
		return await this.req.get<QueryTotalEscrowForDenomResponse>(endpoint, options)
	}
}
