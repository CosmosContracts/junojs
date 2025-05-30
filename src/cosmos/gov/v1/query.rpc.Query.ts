import { BinaryReader } from "../../../binary"
import type { TxRpc } from "../../../types"
import {
	QueryConstitutionRequest,
	QueryConstitutionResponse,
	QueryDepositRequest,
	QueryDepositResponse,
	QueryDepositsRequest,
	QueryDepositsResponse,
	QueryParamsRequest,
	QueryParamsResponse,
	QueryProposalRequest,
	QueryProposalResponse,
	QueryProposalsRequest,
	QueryProposalsResponse,
	QueryTallyResultRequest,
	QueryTallyResultResponse,
	QueryVoteRequest,
	QueryVoteResponse,
	QueryVotesRequest,
	QueryVotesResponse
} from "./query"
/** Query defines the gRPC querier service for gov module */
export interface Query {
	/** Constitution queries the chain's constitution. */
	constitution(request?: QueryConstitutionRequest): Promise<QueryConstitutionResponse>
	/** Proposal queries proposal details based on ProposalID. */
	proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>
	/** Proposals queries all proposals based on given status. */
	proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse>
	/** Vote queries voted information based on proposalID, voterAddr. */
	vote(request: QueryVoteRequest): Promise<QueryVoteResponse>
	/** Votes queries votes of a given proposal. */
	votes(request: QueryVotesRequest): Promise<QueryVotesResponse>
	/** Params queries all parameters of the gov module. */
	params(request: QueryParamsRequest): Promise<QueryParamsResponse>
	/** Deposit queries single deposit information based on proposalID, depositAddr. */
	deposit(request: QueryDepositRequest): Promise<QueryDepositResponse>
	/** Deposits queries all deposits of a single proposal. */
	deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>
	/** TallyResult queries the tally of a proposal vote. */
	tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse>
}
export class QueryClientImpl implements Query {
	private readonly rpc: TxRpc
	constructor(rpc: TxRpc) {
		this.rpc = rpc
	}
	/* Constitution queries the chain's constitution. */
	constitution = async (
		request: QueryConstitutionRequest = {}
	): Promise<QueryConstitutionResponse> => {
		const data = QueryConstitutionRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.gov.v1.Query", "Constitution", data)
		return promise.then((data) => QueryConstitutionResponse.decode(new BinaryReader(data)))
	}
	/* Proposal queries proposal details based on ProposalID. */
	proposal = async (request: QueryProposalRequest): Promise<QueryProposalResponse> => {
		const data = QueryProposalRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.gov.v1.Query", "Proposal", data)
		return promise.then((data) => QueryProposalResponse.decode(new BinaryReader(data)))
	}
	/* Proposals queries all proposals based on given status. */
	proposals = async (request: QueryProposalsRequest): Promise<QueryProposalsResponse> => {
		const data = QueryProposalsRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.gov.v1.Query", "Proposals", data)
		return promise.then((data) => QueryProposalsResponse.decode(new BinaryReader(data)))
	}
	/* Vote queries voted information based on proposalID, voterAddr. */
	vote = async (request: QueryVoteRequest): Promise<QueryVoteResponse> => {
		const data = QueryVoteRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.gov.v1.Query", "Vote", data)
		return promise.then((data) => QueryVoteResponse.decode(new BinaryReader(data)))
	}
	/* Votes queries votes of a given proposal. */
	votes = async (request: QueryVotesRequest): Promise<QueryVotesResponse> => {
		const data = QueryVotesRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.gov.v1.Query", "Votes", data)
		return promise.then((data) => QueryVotesResponse.decode(new BinaryReader(data)))
	}
	/* Params queries all parameters of the gov module. */
	params = async (request: QueryParamsRequest): Promise<QueryParamsResponse> => {
		const data = QueryParamsRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.gov.v1.Query", "Params", data)
		return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)))
	}
	/* Deposit queries single deposit information based on proposalID, depositAddr. */
	deposit = async (request: QueryDepositRequest): Promise<QueryDepositResponse> => {
		const data = QueryDepositRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.gov.v1.Query", "Deposit", data)
		return promise.then((data) => QueryDepositResponse.decode(new BinaryReader(data)))
	}
	/* Deposits queries all deposits of a single proposal. */
	deposits = async (request: QueryDepositsRequest): Promise<QueryDepositsResponse> => {
		const data = QueryDepositsRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.gov.v1.Query", "Deposits", data)
		return promise.then((data) => QueryDepositsResponse.decode(new BinaryReader(data)))
	}
	/* TallyResult queries the tally of a proposal vote. */
	tallyResult = async (request: QueryTallyResultRequest): Promise<QueryTallyResultResponse> => {
		const data = QueryTallyResultRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.gov.v1.Query", "TallyResult", data)
		return promise.then((data) => QueryTallyResultResponse.decode(new BinaryReader(data)))
	}
}
export const createClientImpl = (rpc: TxRpc) => {
	return new QueryClientImpl(rpc)
}
