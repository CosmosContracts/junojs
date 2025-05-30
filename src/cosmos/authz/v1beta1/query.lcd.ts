import type { LCDClient } from "@cosmology/lcd"
import { setPaginationParams } from "../../../helpers"
import type {
	QueryGranteeGrantsRequest,
	QueryGranteeGrantsResponse,
	QueryGranterGrantsRequest,
	QueryGranterGrantsResponse,
	QueryGrantsRequest,
	QueryGrantsResponse
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
	/* Returns list of `Authorization`, granted to the grantee by the granter. */
	grants = async (params: QueryGrantsRequest): Promise<QueryGrantsResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.granter !== "undefined") {
			options.params.granter = params.granter
		}
		if (typeof params?.grantee !== "undefined") {
			options.params.grantee = params.grantee
		}
		if (typeof params?.msgTypeUrl !== "undefined") {
			options.params.msg_type_url = params.msgTypeUrl
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = "cosmos/authz/v1beta1/grants"
		return await this.req.get<QueryGrantsResponse>(endpoint, options)
	}
	/* GranterGrants returns list of `GrantAuthorization`, granted by granter.
  
   Since: cosmos-sdk 0.46 */
	granterGrants = async (
		params: QueryGranterGrantsRequest
	): Promise<QueryGranterGrantsResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = `cosmos/authz/v1beta1/grants/granter/${params.granter}`
		return await this.req.get<QueryGranterGrantsResponse>(endpoint, options)
	}
	/* GranteeGrants returns a list of `GrantAuthorization` by grantee.
  
   Since: cosmos-sdk 0.46 */
	granteeGrants = async (
		params: QueryGranteeGrantsRequest
	): Promise<QueryGranteeGrantsResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = `cosmos/authz/v1beta1/grants/grantee/${params.grantee}`
		return await this.req.get<QueryGranteeGrantsResponse>(endpoint, options)
	}
}
