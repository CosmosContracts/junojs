import type { LCDClient } from "@cosmology/lcd"
import { setPaginationParams } from "../../../helpers"
import type {
	QueryBalanceRequest,
	QueryBalanceResponse,
	QueryClassRequest,
	QueryClassResponse,
	QueryClassesRequest,
	QueryClassesResponse,
	QueryNFTRequest,
	QueryNFTResponse,
	QueryNFTsRequest,
	QueryNFTsResponse,
	QueryOwnerRequest,
	QueryOwnerResponse,
	QuerySupplyRequest,
	QuerySupplyResponse
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
	/* Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
	balance = async (params: QueryBalanceRequest): Promise<QueryBalanceResponse> => {
		const endpoint = `cosmos/nft/v1beta1/balance/${params.owner}/${params.classId}`
		return await this.req.get<QueryBalanceResponse>(endpoint)
	}
	/* Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
	owner = async (params: QueryOwnerRequest): Promise<QueryOwnerResponse> => {
		const endpoint = `cosmos/nft/v1beta1/owner/${params.classId}/${params.id}`
		return await this.req.get<QueryOwnerResponse>(endpoint)
	}
	/* Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
	supply = async (params: QuerySupplyRequest): Promise<QuerySupplyResponse> => {
		const endpoint = `cosmos/nft/v1beta1/supply/${params.classId}`
		return await this.req.get<QuerySupplyResponse>(endpoint)
	}
	/* NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
   ERC721Enumerable */
	nFTs = async (params: QueryNFTsRequest): Promise<QueryNFTsResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.classId !== "undefined") {
			options.params.class_id = params.classId
		}
		if (typeof params?.owner !== "undefined") {
			options.params.owner = params.owner
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = "cosmos/nft/v1beta1/nfts"
		return await this.req.get<QueryNFTsResponse>(endpoint, options)
	}
	/* NFT queries an NFT based on its class and id. */
	nFT = async (params: QueryNFTRequest): Promise<QueryNFTResponse> => {
		const endpoint = `cosmos/nft/v1beta1/nfts/${params.classId}/${params.id}`
		return await this.req.get<QueryNFTResponse>(endpoint)
	}
	/* Class queries an NFT class based on its id */
	class = async (params: QueryClassRequest): Promise<QueryClassResponse> => {
		const endpoint = `cosmos/nft/v1beta1/classes/${params.classId}`
		return await this.req.get<QueryClassResponse>(endpoint)
	}
	/* Classes queries all NFT classes */
	classes = async (
		params: QueryClassesRequest = {
			pagination: undefined
		}
	): Promise<QueryClassesResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = "cosmos/nft/v1beta1/classes"
		return await this.req.get<QueryClassesResponse>(endpoint, options)
	}
}
