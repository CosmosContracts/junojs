import type { LCDClient } from "@cosmology/lcd"
import { setPaginationParams } from "../../../helpers"
import type {
	GetBlockWithTxsRequest,
	GetBlockWithTxsResponse,
	GetTxRequest,
	GetTxResponse,
	GetTxsEventRequest,
	GetTxsEventResponse
} from "./service"
export class LCDQueryClient {
	req: LCDClient
	constructor({
		requestClient
	}: {
		requestClient: LCDClient
	}) {
		this.req = requestClient
	}
	/* GetTx fetches a tx by hash. */
	getTx = async (params: GetTxRequest): Promise<GetTxResponse> => {
		const endpoint = `cosmos/tx/v1beta1/txs/${params.hash}`
		return await this.req.get<GetTxResponse>(endpoint)
	}
	/* GetTxsEvent fetches txs by event. */
	getTxsEvent = async (params: GetTxsEventRequest): Promise<GetTxsEventResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.events !== "undefined") {
			options.params.events = params.events
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		if (typeof params?.orderBy !== "undefined") {
			options.params.order_by = params.orderBy
		}
		if (typeof params?.page !== "undefined") {
			options.params.page = params.page
		}
		if (typeof params?.limit !== "undefined") {
			options.params.limit = params.limit
		}
		if (typeof params?.query !== "undefined") {
			options.params.query = params.query
		}
		const endpoint = "cosmos/tx/v1beta1/txs"
		return await this.req.get<GetTxsEventResponse>(endpoint, options)
	}
	/* GetBlockWithTxs fetches a block with decoded txs.
  
   Since: cosmos-sdk 0.45.2 */
	getBlockWithTxs = async (params: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = `cosmos/tx/v1beta1/txs/block/${params.height}`
		return await this.req.get<GetBlockWithTxsResponse>(endpoint, options)
	}
}
