import { BinaryReader } from "../../../binary"
import type { TxRpc } from "../../../types"
import {
	QueryGranteeGrantsRequest,
	QueryGranteeGrantsResponse,
	QueryGranterGrantsRequest,
	QueryGranterGrantsResponse,
	QueryGrantsRequest,
	QueryGrantsResponse
} from "./query"
/** Query defines the gRPC querier service. */
export interface Query {
	/** Returns list of `Authorization`, granted to the grantee by the granter. */
	grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse>
	/**
	 * GranterGrants returns list of `GrantAuthorization`, granted by granter.
	 *
	 * Since: cosmos-sdk 0.46
	 */
	granterGrants(request: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponse>
	/**
	 * GranteeGrants returns a list of `GrantAuthorization` by grantee.
	 *
	 * Since: cosmos-sdk 0.46
	 */
	granteeGrants(request: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponse>
}
export class QueryClientImpl implements Query {
	private readonly rpc: TxRpc
	constructor(rpc: TxRpc) {
		this.rpc = rpc
	}
	/* Returns list of `Authorization`, granted to the grantee by the granter. */
	grants = async (request: QueryGrantsRequest): Promise<QueryGrantsResponse> => {
		const data = QueryGrantsRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "Grants", data)
		return promise.then((data) => QueryGrantsResponse.decode(new BinaryReader(data)))
	}
	/* GranterGrants returns list of `GrantAuthorization`, granted by granter.
  
   Since: cosmos-sdk 0.46 */
	granterGrants = async (
		request: QueryGranterGrantsRequest
	): Promise<QueryGranterGrantsResponse> => {
		const data = QueryGranterGrantsRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "GranterGrants", data)
		return promise.then((data) => QueryGranterGrantsResponse.decode(new BinaryReader(data)))
	}
	/* GranteeGrants returns a list of `GrantAuthorization` by grantee.
  
   Since: cosmos-sdk 0.46 */
	granteeGrants = async (
		request: QueryGranteeGrantsRequest
	): Promise<QueryGranteeGrantsResponse> => {
		const data = QueryGranteeGrantsRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "GranteeGrants", data)
		return promise.then((data) => QueryGranteeGrantsResponse.decode(new BinaryReader(data)))
	}
}
export const createClientImpl = (rpc: TxRpc) => {
	return new QueryClientImpl(rpc)
}
