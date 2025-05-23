import { BinaryReader } from "../../../binary"
import type { TxRpc } from "../../../types"
import {
	QueryDenomAuthorityMetadataRequest,
	QueryDenomAuthorityMetadataResponse,
	QueryDenomsFromCreatorRequest,
	QueryDenomsFromCreatorResponse,
	QueryParamsRequest,
	QueryParamsResponse
} from "./query"
/** Query defines the gRPC querier service. */
export interface Query {
	/**
	 * Params defines a gRPC query method that returns the tokenfactory module's
	 * parameters.
	 */
	params(request?: QueryParamsRequest): Promise<QueryParamsResponse>
	/**
	 * DenomAuthorityMetadata defines a gRPC query method for fetching
	 * DenomAuthorityMetadata for a particular denom.
	 */
	denomAuthorityMetadata(
		request: QueryDenomAuthorityMetadataRequest
	): Promise<QueryDenomAuthorityMetadataResponse>
	/**
	 * DenomsFromCreator defines a gRPC query method for fetching all
	 * denominations created by a specific admin/creator.
	 */
	denomsFromCreator(
		request: QueryDenomsFromCreatorRequest
	): Promise<QueryDenomsFromCreatorResponse>
}
export class QueryClientImpl implements Query {
	private readonly rpc: TxRpc
	constructor(rpc: TxRpc) {
		this.rpc = rpc
	}
	/* Params defines a gRPC query method that returns the tokenfactory module's
   parameters. */
	params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const data = QueryParamsRequest.encode(request).finish()
		const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "Params", data)
		return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)))
	}
	/* DenomAuthorityMetadata defines a gRPC query method for fetching
   DenomAuthorityMetadata for a particular denom. */
	denomAuthorityMetadata = async (
		request: QueryDenomAuthorityMetadataRequest
	): Promise<QueryDenomAuthorityMetadataResponse> => {
		const data = QueryDenomAuthorityMetadataRequest.encode(request).finish()
		const promise = this.rpc.request(
			"osmosis.tokenfactory.v1beta1.Query",
			"DenomAuthorityMetadata",
			data
		)
		return promise.then((data) =>
			QueryDenomAuthorityMetadataResponse.decode(new BinaryReader(data))
		)
	}
	/* DenomsFromCreator defines a gRPC query method for fetching all
   denominations created by a specific admin/creator. */
	denomsFromCreator = async (
		request: QueryDenomsFromCreatorRequest
	): Promise<QueryDenomsFromCreatorResponse> => {
		const data = QueryDenomsFromCreatorRequest.encode(request).finish()
		const promise = this.rpc.request(
			"osmosis.tokenfactory.v1beta1.Query",
			"DenomsFromCreator",
			data
		)
		return promise.then((data) => QueryDenomsFromCreatorResponse.decode(new BinaryReader(data)))
	}
}
export const createClientImpl = (rpc: TxRpc) => {
	return new QueryClientImpl(rpc)
}
