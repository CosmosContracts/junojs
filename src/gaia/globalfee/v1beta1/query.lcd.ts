import type { LCDClient } from "@cosmology/lcd"
import type { QueryMinimumGasPricesRequest, QueryMinimumGasPricesResponse } from "./query"
export class LCDQueryClient {
	req: LCDClient
	constructor({
		requestClient
	}: {
		requestClient: LCDClient
	}) {
		this.req = requestClient
	}
	/* MinimumGasPrices queries the minimum gas prices. */
	minimumGasPrices = async (
		_params: QueryMinimumGasPricesRequest = {}
	): Promise<QueryMinimumGasPricesResponse> => {
		const endpoint = "gaia/globalfee/v1beta1/minimum_gas_prices"
		return await this.req.get<QueryMinimumGasPricesResponse>(endpoint)
	}
}
