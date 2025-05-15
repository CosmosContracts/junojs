import { BinaryReader } from "../../../binary"
import type { TxRpc } from "../../../types"
import {
	MsgDistributeTokens,
	MsgDistributeTokensResponse,
	MsgUpdateParams,
	MsgUpdateParamsResponse
} from "./tx"
/** Msg defines the fees Msg service. */
export interface Msg {
	/** DistributeTokens distribute the sent tokens to all stakers in the next block */
	distributeTokens(request: MsgDistributeTokens): Promise<MsgDistributeTokensResponse>
	/**
	 * UpdateParams defines a governance operation for updating the x/clock module
	 * parameters. The authority is hard-coded to the x/gov module account.
	 */
	updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>
}
export class MsgClientImpl implements Msg {
	private readonly rpc: TxRpc
	constructor(rpc: TxRpc) {
		this.rpc = rpc
	}
	/* DistributeTokens distribute the sent tokens to all stakers in the next block */
	distributeTokens = async (
		request: MsgDistributeTokens
	): Promise<MsgDistributeTokensResponse> => {
		const data = MsgDistributeTokens.encode(request).finish()
		const promise = this.rpc.request("juno.drip.v1.Msg", "DistributeTokens", data)
		return promise.then((data) => MsgDistributeTokensResponse.decode(new BinaryReader(data)))
	}
	/* UpdateParams defines a governance operation for updating the x/clock module
   parameters. The authority is hard-coded to the x/gov module account. */
	updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
		const data = MsgUpdateParams.encode(request).finish()
		const promise = this.rpc.request("juno.drip.v1.Msg", "UpdateParams", data)
		return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)))
	}
}
export const createClientImpl = (rpc: TxRpc) => {
	return new MsgClientImpl(rpc)
}
