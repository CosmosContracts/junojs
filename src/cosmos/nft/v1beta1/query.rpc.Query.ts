import { BinaryReader } from "../../../binary"
import type { TxRpc } from "../../../types"
import {
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
/** Query defines the gRPC querier service. */
export interface Query {
	/** Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
	balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>
	/** Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
	owner(request: QueryOwnerRequest): Promise<QueryOwnerResponse>
	/** Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
	supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>
	/**
	 * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
	 * ERC721Enumerable
	 */
	nFTs(request: QueryNFTsRequest): Promise<QueryNFTsResponse>
	/** NFT queries an NFT based on its class and id. */
	nFT(request: QueryNFTRequest): Promise<QueryNFTResponse>
	/** Class queries an NFT class based on its id */
	class(request: QueryClassRequest): Promise<QueryClassResponse>
	/** Classes queries all NFT classes */
	classes(request?: QueryClassesRequest): Promise<QueryClassesResponse>
}
export class QueryClientImpl implements Query {
	private readonly rpc: TxRpc
	constructor(rpc: TxRpc) {
		this.rpc = rpc
	}
	/* Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721 */
	balance = async (request: QueryBalanceRequest): Promise<QueryBalanceResponse> => {
		const data = QueryBalanceRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Balance", data)
		return promise.then((data) => QueryBalanceResponse.decode(new BinaryReader(data)))
	}
	/* Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721 */
	owner = async (request: QueryOwnerRequest): Promise<QueryOwnerResponse> => {
		const data = QueryOwnerRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Owner", data)
		return promise.then((data) => QueryOwnerResponse.decode(new BinaryReader(data)))
	}
	/* Supply queries the number of NFTs from the given class, same as totalSupply of ERC721. */
	supply = async (request: QuerySupplyRequest): Promise<QuerySupplyResponse> => {
		const data = QuerySupplyRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Supply", data)
		return promise.then((data) => QuerySupplyResponse.decode(new BinaryReader(data)))
	}
	/* NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
   ERC721Enumerable */
	nFTs = async (request: QueryNFTsRequest): Promise<QueryNFTsResponse> => {
		const data = QueryNFTsRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFTs", data)
		return promise.then((data) => QueryNFTsResponse.decode(new BinaryReader(data)))
	}
	/* NFT queries an NFT based on its class and id. */
	nFT = async (request: QueryNFTRequest): Promise<QueryNFTResponse> => {
		const data = QueryNFTRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFT", data)
		return promise.then((data) => QueryNFTResponse.decode(new BinaryReader(data)))
	}
	/* Class queries an NFT class based on its id */
	class = async (request: QueryClassRequest): Promise<QueryClassResponse> => {
		const data = QueryClassRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Class", data)
		return promise.then((data) => QueryClassResponse.decode(new BinaryReader(data)))
	}
	/* Classes queries all NFT classes */
	classes = async (
		request: QueryClassesRequest = {
			pagination: undefined
		}
	): Promise<QueryClassesResponse> => {
		const data = QueryClassesRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Classes", data)
		return promise.then((data) => QueryClassesResponse.decode(new BinaryReader(data)))
	}
}
export const createClientImpl = (rpc: TxRpc) => {
	return new QueryClientImpl(rpc)
}
