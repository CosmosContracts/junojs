import { BinaryReader } from "../../../binary"
import type { TxRpc } from "../../../types"
import {
	MsgDeposit,
	MsgDepositResponse,
	MsgSubmitProposal,
	MsgSubmitProposalResponse,
	MsgVote,
	MsgVoteResponse,
	MsgVoteWeighted,
	MsgVoteWeightedResponse
} from "./tx"
/** Msg defines the gov Msg service. */
export interface Msg {
	/** SubmitProposal defines a method to create new proposal given a content. */
	submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>
	/** Vote defines a method to add a vote on a specific proposal. */
	vote(request: MsgVote): Promise<MsgVoteResponse>
	/**
	 * VoteWeighted defines a method to add a weighted vote on a specific proposal.
	 *
	 * Since: cosmos-sdk 0.43
	 */
	voteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponse>
	/** Deposit defines a method to add deposit on a specific proposal. */
	deposit(request: MsgDeposit): Promise<MsgDepositResponse>
}
export class MsgClientImpl implements Msg {
	private readonly rpc: TxRpc
	constructor(rpc: TxRpc) {
		this.rpc = rpc
	}
	/* SubmitProposal defines a method to create new proposal given a content. */
	submitProposal = async (request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse> => {
		const data = MsgSubmitProposal.encode(request).finish()
		const promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "SubmitProposal", data)
		return promise.then((data) => MsgSubmitProposalResponse.decode(new BinaryReader(data)))
	}
	/* Vote defines a method to add a vote on a specific proposal. */
	vote = async (request: MsgVote): Promise<MsgVoteResponse> => {
		const data = MsgVote.encode(request).finish()
		const promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "Vote", data)
		return promise.then((data) => MsgVoteResponse.decode(new BinaryReader(data)))
	}
	/* VoteWeighted defines a method to add a weighted vote on a specific proposal.
  
   Since: cosmos-sdk 0.43 */
	voteWeighted = async (request: MsgVoteWeighted): Promise<MsgVoteWeightedResponse> => {
		const data = MsgVoteWeighted.encode(request).finish()
		const promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "VoteWeighted", data)
		return promise.then((data) => MsgVoteWeightedResponse.decode(new BinaryReader(data)))
	}
	/* Deposit defines a method to add deposit on a specific proposal. */
	deposit = async (request: MsgDeposit): Promise<MsgDepositResponse> => {
		const data = MsgDeposit.encode(request).finish()
		const promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "Deposit", data)
		return promise.then((data) => MsgDepositResponse.decode(new BinaryReader(data)))
	}
}
export const createClientImpl = (rpc: TxRpc) => {
	return new MsgClientImpl(rpc)
}
