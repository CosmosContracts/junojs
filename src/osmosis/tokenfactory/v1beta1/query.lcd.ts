import type { LCDClient } from "@cosmology/lcd"
import type {
	QueryDenomAuthorityMetadataRequest,
	QueryDenomAuthorityMetadataResponse,
	QueryDenomsFromCreatorRequest,
	QueryDenomsFromCreatorResponse,
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
	/* Params defines a gRPC query method that returns the tokenfactory module's
   parameters. */
	params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const endpoint = "osmosis/tokenfactory/v1beta1/params"
		return await this.req.get<QueryParamsResponse>(endpoint)
	}
	/* DenomAuthorityMetadata defines a gRPC query method for fetching
   DenomAuthorityMetadata for a particular denom. */
	denomAuthorityMetadata = async (
		params: QueryDenomAuthorityMetadataRequest
	): Promise<QueryDenomAuthorityMetadataResponse> => {
		const endpoint = `osmosis/tokenfactory/v1beta1/denoms/${params.denom}/authority_metadata`
		return await this.req.get<QueryDenomAuthorityMetadataResponse>(endpoint)
	}
	/* DenomsFromCreator defines a gRPC query method for fetching all
   denominations created by a specific admin/creator. */
	denomsFromCreator = async (
		params: QueryDenomsFromCreatorRequest
	): Promise<QueryDenomsFromCreatorResponse> => {
		const endpoint = `osmosis/tokenfactory/v1beta1/denoms_from_creator/${params.creator}`
		return await this.req.get<QueryDenomsFromCreatorResponse>(endpoint)
	}
}
