import { BinaryReader } from "../../../binary"
import type { TxRpc } from "../../../types"
import { QueryMinimumGasPricesRequest, QueryMinimumGasPricesResponse } from "./query"
/** Query defines the gRPC querier service. */
export interface Query {
	/** MinimumGasPrices queries the minimum gas prices. */
	minimumGasPrices(request?: QueryMinimumGasPricesRequest): Promise<QueryMinimumGasPricesResponse>
}
export class QueryClientImpl implements Query {
	private readonly rpc: TxRpc
	constructor(rpc: TxRpc) {
		this.rpc = rpc
	}
	/* MinimumGasPrices queries the minimum gas prices. */
	minimumGasPrices = async (
		request: QueryMinimumGasPricesRequest = {}
	): Promise<QueryMinimumGasPricesResponse> => {
		const data = QueryMinimumGasPricesRequest.encode(request).finish()
		const promise = this.rpc.request("gaia.globalfee.v1beta1.Query", "MinimumGasPrices", data)
		return promise.then((data) => QueryMinimumGasPricesResponse.decode(new BinaryReader(data)))
	}
}
export const createClientImpl = (rpc: TxRpc) => {
	return new QueryClientImpl(rpc)
}
