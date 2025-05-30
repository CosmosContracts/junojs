import { BinaryReader } from "../../../binary"
import type { TxRpc } from "../../../types"
import {
	BroadcastTxRequest,
	BroadcastTxResponse,
	GetBlockWithTxsRequest,
	GetBlockWithTxsResponse,
	GetTxRequest,
	GetTxResponse,
	GetTxsEventRequest,
	GetTxsEventResponse,
	SimulateRequest,
	SimulateResponse,
	TxDecodeAminoRequest,
	TxDecodeAminoResponse,
	TxDecodeRequest,
	TxDecodeResponse,
	TxEncodeAminoRequest,
	TxEncodeAminoResponse,
	TxEncodeRequest,
	TxEncodeResponse
} from "./service"
/** Service defines a gRPC service for interacting with transactions. */
export interface Service {
	/** Simulate simulates executing a transaction for estimating gas usage. */
	simulate(request: SimulateRequest): Promise<SimulateResponse>
	/** GetTx fetches a tx by hash. */
	getTx(request: GetTxRequest): Promise<GetTxResponse>
	/** BroadcastTx broadcast transaction. */
	broadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse>
	/** GetTxsEvent fetches txs by event. */
	getTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse>
	/**
	 * GetBlockWithTxs fetches a block with decoded txs.
	 *
	 * Since: cosmos-sdk 0.45.2
	 */
	getBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse>
	/**
	 * TxDecode decodes the transaction.
	 *
	 * Since: cosmos-sdk 0.47
	 */
	txDecode(request: TxDecodeRequest): Promise<TxDecodeResponse>
	/**
	 * TxEncode encodes the transaction.
	 *
	 * Since: cosmos-sdk 0.47
	 */
	txEncode(request: TxEncodeRequest): Promise<TxEncodeResponse>
	/**
	 * TxEncodeAmino encodes an Amino transaction from JSON to encoded bytes.
	 *
	 * Since: cosmos-sdk 0.47
	 */
	txEncodeAmino(request: TxEncodeAminoRequest): Promise<TxEncodeAminoResponse>
	/**
	 * TxDecodeAmino decodes an Amino transaction from encoded bytes to JSON.
	 *
	 * Since: cosmos-sdk 0.47
	 */
	txDecodeAmino(request: TxDecodeAminoRequest): Promise<TxDecodeAminoResponse>
}
export class ServiceClientImpl implements Service {
	private readonly rpc: TxRpc
	constructor(rpc: TxRpc) {
		this.rpc = rpc
	}
	/* Simulate simulates executing a transaction for estimating gas usage. */
	simulate = async (request: SimulateRequest): Promise<SimulateResponse> => {
		const data = SimulateRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "Simulate", data)
		return promise.then((data) => SimulateResponse.decode(new BinaryReader(data)))
	}
	/* GetTx fetches a tx by hash. */
	getTx = async (request: GetTxRequest): Promise<GetTxResponse> => {
		const data = GetTxRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTx", data)
		return promise.then((data) => GetTxResponse.decode(new BinaryReader(data)))
	}
	/* BroadcastTx broadcast transaction. */
	broadcastTx = async (request: BroadcastTxRequest): Promise<BroadcastTxResponse> => {
		const data = BroadcastTxRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "BroadcastTx", data)
		return promise.then((data) => BroadcastTxResponse.decode(new BinaryReader(data)))
	}
	/* GetTxsEvent fetches txs by event. */
	getTxsEvent = async (request: GetTxsEventRequest): Promise<GetTxsEventResponse> => {
		const data = GetTxsEventRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTxsEvent", data)
		return promise.then((data) => GetTxsEventResponse.decode(new BinaryReader(data)))
	}
	/* GetBlockWithTxs fetches a block with decoded txs.
  
   Since: cosmos-sdk 0.45.2 */
	getBlockWithTxs = async (request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse> => {
		const data = GetBlockWithTxsRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetBlockWithTxs", data)
		return promise.then((data) => GetBlockWithTxsResponse.decode(new BinaryReader(data)))
	}
	/* TxDecode decodes the transaction.
  
   Since: cosmos-sdk 0.47 */
	txDecode = async (request: TxDecodeRequest): Promise<TxDecodeResponse> => {
		const data = TxDecodeRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxDecode", data)
		return promise.then((data) => TxDecodeResponse.decode(new BinaryReader(data)))
	}
	/* TxEncode encodes the transaction.
  
   Since: cosmos-sdk 0.47 */
	txEncode = async (request: TxEncodeRequest): Promise<TxEncodeResponse> => {
		const data = TxEncodeRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxEncode", data)
		return promise.then((data) => TxEncodeResponse.decode(new BinaryReader(data)))
	}
	/* TxEncodeAmino encodes an Amino transaction from JSON to encoded bytes.
  
   Since: cosmos-sdk 0.47 */
	txEncodeAmino = async (request: TxEncodeAminoRequest): Promise<TxEncodeAminoResponse> => {
		const data = TxEncodeAminoRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxEncodeAmino", data)
		return promise.then((data) => TxEncodeAminoResponse.decode(new BinaryReader(data)))
	}
	/* TxDecodeAmino decodes an Amino transaction from encoded bytes to JSON.
  
   Since: cosmos-sdk 0.47 */
	txDecodeAmino = async (request: TxDecodeAminoRequest): Promise<TxDecodeAminoResponse> => {
		const data = TxDecodeAminoRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxDecodeAmino", data)
		return promise.then((data) => TxDecodeAminoResponse.decode(new BinaryReader(data)))
	}
}
export const createClientImpl = (rpc: TxRpc) => {
	return new ServiceClientImpl(rpc)
}
