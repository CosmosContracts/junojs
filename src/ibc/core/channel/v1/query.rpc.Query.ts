import { BinaryReader } from "../../../../binary"
import type { TxRpc } from "../../../../types"
import {
	QueryChannelClientStateRequest,
	QueryChannelClientStateResponse,
	QueryChannelConsensusStateRequest,
	QueryChannelConsensusStateResponse,
	QueryChannelParamsRequest,
	QueryChannelParamsResponse,
	QueryChannelRequest,
	QueryChannelResponse,
	QueryChannelsRequest,
	QueryChannelsResponse,
	QueryConnectionChannelsRequest,
	QueryConnectionChannelsResponse,
	QueryNextSequenceReceiveRequest,
	QueryNextSequenceReceiveResponse,
	QueryNextSequenceSendRequest,
	QueryNextSequenceSendResponse,
	QueryPacketAcknowledgementRequest,
	QueryPacketAcknowledgementResponse,
	QueryPacketAcknowledgementsRequest,
	QueryPacketAcknowledgementsResponse,
	QueryPacketCommitmentRequest,
	QueryPacketCommitmentResponse,
	QueryPacketCommitmentsRequest,
	QueryPacketCommitmentsResponse,
	QueryPacketReceiptRequest,
	QueryPacketReceiptResponse,
	QueryUnreceivedAcksRequest,
	QueryUnreceivedAcksResponse,
	QueryUnreceivedPacketsRequest,
	QueryUnreceivedPacketsResponse,
	QueryUpgradeErrorRequest,
	QueryUpgradeErrorResponse,
	QueryUpgradeRequest,
	QueryUpgradeResponse
} from "./query"
/** Query provides defines the gRPC querier service */
export interface Query {
	/** Channel queries an IBC Channel. */
	channel(request: QueryChannelRequest): Promise<QueryChannelResponse>
	/** Channels queries all the IBC channels of a chain. */
	channels(request?: QueryChannelsRequest): Promise<QueryChannelsResponse>
	/**
	 * ConnectionChannels queries all the channels associated with a connection
	 * end.
	 */
	connectionChannels(
		request: QueryConnectionChannelsRequest
	): Promise<QueryConnectionChannelsResponse>
	/**
	 * ChannelClientState queries for the client state for the channel associated
	 * with the provided channel identifiers.
	 */
	channelClientState(
		request: QueryChannelClientStateRequest
	): Promise<QueryChannelClientStateResponse>
	/**
	 * ChannelConsensusState queries for the consensus state for the channel
	 * associated with the provided channel identifiers.
	 */
	channelConsensusState(
		request: QueryChannelConsensusStateRequest
	): Promise<QueryChannelConsensusStateResponse>
	/** PacketCommitment queries a stored packet commitment hash. */
	packetCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse>
	/**
	 * PacketCommitments returns all the packet commitments hashes associated
	 * with a channel.
	 */
	packetCommitments(
		request: QueryPacketCommitmentsRequest
	): Promise<QueryPacketCommitmentsResponse>
	/**
	 * PacketReceipt queries if a given packet sequence has been received on the
	 * queried chain
	 */
	packetReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse>
	/** PacketAcknowledgement queries a stored packet acknowledgement hash. */
	packetAcknowledgement(
		request: QueryPacketAcknowledgementRequest
	): Promise<QueryPacketAcknowledgementResponse>
	/**
	 * PacketAcknowledgements returns all the packet acknowledgements associated
	 * with a channel.
	 */
	packetAcknowledgements(
		request: QueryPacketAcknowledgementsRequest
	): Promise<QueryPacketAcknowledgementsResponse>
	/**
	 * UnreceivedPackets returns all the unreceived IBC packets associated with a
	 * channel and sequences.
	 */
	unreceivedPackets(
		request: QueryUnreceivedPacketsRequest
	): Promise<QueryUnreceivedPacketsResponse>
	/**
	 * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
	 * with a channel and sequences.
	 */
	unreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse>
	/** NextSequenceReceive returns the next receive sequence for a given channel. */
	nextSequenceReceive(
		request: QueryNextSequenceReceiveRequest
	): Promise<QueryNextSequenceReceiveResponse>
	/** NextSequenceSend returns the next send sequence for a given channel. */
	nextSequenceSend(request: QueryNextSequenceSendRequest): Promise<QueryNextSequenceSendResponse>
	/** UpgradeError returns the error receipt if the upgrade handshake failed. */
	upgradeError(request: QueryUpgradeErrorRequest): Promise<QueryUpgradeErrorResponse>
	/** Upgrade returns the upgrade for a given port and channel id. */
	upgrade(request: QueryUpgradeRequest): Promise<QueryUpgradeResponse>
	/** ChannelParams queries all parameters of the ibc channel submodule. */
	channelParams(request?: QueryChannelParamsRequest): Promise<QueryChannelParamsResponse>
}
export class QueryClientImpl implements Query {
	private readonly rpc: TxRpc
	constructor(rpc: TxRpc) {
		this.rpc = rpc
	}
	/* Channel queries an IBC Channel. */
	channel = async (request: QueryChannelRequest): Promise<QueryChannelResponse> => {
		const data = QueryChannelRequest.encode(request).finish()
		const promise = this.rpc.request("ibc.core.channel.v1.Query", "Channel", data)
		return promise.then((data) => QueryChannelResponse.decode(new BinaryReader(data)))
	}
	/* Channels queries all the IBC channels of a chain. */
	channels = async (
		request: QueryChannelsRequest = {
			pagination: undefined
		}
	): Promise<QueryChannelsResponse> => {
		const data = QueryChannelsRequest.encode(request).finish()
		const promise = this.rpc.request("ibc.core.channel.v1.Query", "Channels", data)
		return promise.then((data) => QueryChannelsResponse.decode(new BinaryReader(data)))
	}
	/* ConnectionChannels queries all the channels associated with a connection
   end. */
	connectionChannels = async (
		request: QueryConnectionChannelsRequest
	): Promise<QueryConnectionChannelsResponse> => {
		const data = QueryConnectionChannelsRequest.encode(request).finish()
		const promise = this.rpc.request("ibc.core.channel.v1.Query", "ConnectionChannels", data)
		return promise.then((data) => QueryConnectionChannelsResponse.decode(new BinaryReader(data)))
	}
	/* ChannelClientState queries for the client state for the channel associated
   with the provided channel identifiers. */
	channelClientState = async (
		request: QueryChannelClientStateRequest
	): Promise<QueryChannelClientStateResponse> => {
		const data = QueryChannelClientStateRequest.encode(request).finish()
		const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelClientState", data)
		return promise.then((data) => QueryChannelClientStateResponse.decode(new BinaryReader(data)))
	}
	/* ChannelConsensusState queries for the consensus state for the channel
   associated with the provided channel identifiers. */
	channelConsensusState = async (
		request: QueryChannelConsensusStateRequest
	): Promise<QueryChannelConsensusStateResponse> => {
		const data = QueryChannelConsensusStateRequest.encode(request).finish()
		const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelConsensusState", data)
		return promise.then((data) =>
			QueryChannelConsensusStateResponse.decode(new BinaryReader(data))
		)
	}
	/* PacketCommitment queries a stored packet commitment hash. */
	packetCommitment = async (
		request: QueryPacketCommitmentRequest
	): Promise<QueryPacketCommitmentResponse> => {
		const data = QueryPacketCommitmentRequest.encode(request).finish()
		const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitment", data)
		return promise.then((data) => QueryPacketCommitmentResponse.decode(new BinaryReader(data)))
	}
	/* PacketCommitments returns all the packet commitments hashes associated
   with a channel. */
	packetCommitments = async (
		request: QueryPacketCommitmentsRequest
	): Promise<QueryPacketCommitmentsResponse> => {
		const data = QueryPacketCommitmentsRequest.encode(request).finish()
		const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitments", data)
		return promise.then((data) => QueryPacketCommitmentsResponse.decode(new BinaryReader(data)))
	}
	/* PacketReceipt queries if a given packet sequence has been received on the
   queried chain */
	packetReceipt = async (
		request: QueryPacketReceiptRequest
	): Promise<QueryPacketReceiptResponse> => {
		const data = QueryPacketReceiptRequest.encode(request).finish()
		const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketReceipt", data)
		return promise.then((data) => QueryPacketReceiptResponse.decode(new BinaryReader(data)))
	}
	/* PacketAcknowledgement queries a stored packet acknowledgement hash. */
	packetAcknowledgement = async (
		request: QueryPacketAcknowledgementRequest
	): Promise<QueryPacketAcknowledgementResponse> => {
		const data = QueryPacketAcknowledgementRequest.encode(request).finish()
		const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgement", data)
		return promise.then((data) =>
			QueryPacketAcknowledgementResponse.decode(new BinaryReader(data))
		)
	}
	/* PacketAcknowledgements returns all the packet acknowledgements associated
   with a channel. */
	packetAcknowledgements = async (
		request: QueryPacketAcknowledgementsRequest
	): Promise<QueryPacketAcknowledgementsResponse> => {
		const data = QueryPacketAcknowledgementsRequest.encode(request).finish()
		const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgements", data)
		return promise.then((data) =>
			QueryPacketAcknowledgementsResponse.decode(new BinaryReader(data))
		)
	}
	/* UnreceivedPackets returns all the unreceived IBC packets associated with a
   channel and sequences. */
	unreceivedPackets = async (
		request: QueryUnreceivedPacketsRequest
	): Promise<QueryUnreceivedPacketsResponse> => {
		const data = QueryUnreceivedPacketsRequest.encode(request).finish()
		const promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedPackets", data)
		return promise.then((data) => QueryUnreceivedPacketsResponse.decode(new BinaryReader(data)))
	}
	/* UnreceivedAcks returns all the unreceived IBC acknowledgements associated
   with a channel and sequences. */
	unreceivedAcks = async (
		request: QueryUnreceivedAcksRequest
	): Promise<QueryUnreceivedAcksResponse> => {
		const data = QueryUnreceivedAcksRequest.encode(request).finish()
		const promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedAcks", data)
		return promise.then((data) => QueryUnreceivedAcksResponse.decode(new BinaryReader(data)))
	}
	/* NextSequenceReceive returns the next receive sequence for a given channel. */
	nextSequenceReceive = async (
		request: QueryNextSequenceReceiveRequest
	): Promise<QueryNextSequenceReceiveResponse> => {
		const data = QueryNextSequenceReceiveRequest.encode(request).finish()
		const promise = this.rpc.request("ibc.core.channel.v1.Query", "NextSequenceReceive", data)
		return promise.then((data) => QueryNextSequenceReceiveResponse.decode(new BinaryReader(data)))
	}
	/* NextSequenceSend returns the next send sequence for a given channel. */
	nextSequenceSend = async (
		request: QueryNextSequenceSendRequest
	): Promise<QueryNextSequenceSendResponse> => {
		const data = QueryNextSequenceSendRequest.encode(request).finish()
		const promise = this.rpc.request("ibc.core.channel.v1.Query", "NextSequenceSend", data)
		return promise.then((data) => QueryNextSequenceSendResponse.decode(new BinaryReader(data)))
	}
	/* UpgradeError returns the error receipt if the upgrade handshake failed. */
	upgradeError = async (request: QueryUpgradeErrorRequest): Promise<QueryUpgradeErrorResponse> => {
		const data = QueryUpgradeErrorRequest.encode(request).finish()
		const promise = this.rpc.request("ibc.core.channel.v1.Query", "UpgradeError", data)
		return promise.then((data) => QueryUpgradeErrorResponse.decode(new BinaryReader(data)))
	}
	/* Upgrade returns the upgrade for a given port and channel id. */
	upgrade = async (request: QueryUpgradeRequest): Promise<QueryUpgradeResponse> => {
		const data = QueryUpgradeRequest.encode(request).finish()
		const promise = this.rpc.request("ibc.core.channel.v1.Query", "Upgrade", data)
		return promise.then((data) => QueryUpgradeResponse.decode(new BinaryReader(data)))
	}
	/* ChannelParams queries all parameters of the ibc channel submodule. */
	channelParams = async (
		request: QueryChannelParamsRequest = {}
	): Promise<QueryChannelParamsResponse> => {
		const data = QueryChannelParamsRequest.encode(request).finish()
		const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelParams", data)
		return promise.then((data) => QueryChannelParamsResponse.decode(new BinaryReader(data)))
	}
}
export const createClientImpl = (rpc: TxRpc) => {
	return new QueryClientImpl(rpc)
}
