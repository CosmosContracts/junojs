import type { LCDClient } from "@cosmology/lcd"
import type { ConfigRequest, ConfigResponse, StatusRequest, StatusResponse } from "./query"
export class LCDQueryClient {
	req: LCDClient
	constructor({
		requestClient
	}: {
		requestClient: LCDClient
	}) {
		this.req = requestClient
	}
	/* Config queries for the operator configuration. */
	config = async (_params: ConfigRequest = {}): Promise<ConfigResponse> => {
		const endpoint = "cosmos/base/node/v1beta1/config"
		return await this.req.get<ConfigResponse>(endpoint)
	}
	/* Status queries for the node status. */
	status = async (_params: StatusRequest = {}): Promise<StatusResponse> => {
		const endpoint = "cosmos/base/node/v1beta1/status"
		return await this.req.get<StatusResponse>(endpoint)
	}
}
