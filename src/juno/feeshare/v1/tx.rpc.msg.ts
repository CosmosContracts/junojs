import { BinaryReader } from "../../../binary"
import type { TxRpc } from "../../../types"
import {
	MsgCancelFeeShare,
	MsgCancelFeeShareResponse,
	MsgRegisterFeeShare,
	MsgRegisterFeeShareResponse,
	MsgUpdateFeeShare,
	MsgUpdateFeeShareResponse,
	MsgUpdateParams,
	MsgUpdateParamsResponse
} from "./tx"
/** Msg defines the fees Msg service. */
export interface Msg {
	/** RegisterFeeShare registers a new contract for receiving transaction fees */
	registerFeeShare(request: MsgRegisterFeeShare): Promise<MsgRegisterFeeShareResponse>
	/** UpdateFeeShare updates the withdrawer address of a FeeShare */
	updateFeeShare(request: MsgUpdateFeeShare): Promise<MsgUpdateFeeShareResponse>
	/**
	 * CancelFeeShare cancels a contract's fee registration and further receival
	 * of transaction fees
	 */
	cancelFeeShare(request: MsgCancelFeeShare): Promise<MsgCancelFeeShareResponse>
	/** Update the params of the module through gov v1 type. */
	updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>
}
export class MsgClientImpl implements Msg {
	private readonly rpc: TxRpc
	constructor(rpc: TxRpc) {
		this.rpc = rpc
	}
	/* RegisterFeeShare registers a new contract for receiving transaction fees */
	registerFeeShare = async (
		request: MsgRegisterFeeShare
	): Promise<MsgRegisterFeeShareResponse> => {
		const data = MsgRegisterFeeShare.encode(request).finish()
		const promise = this.rpc.request("juno.feeshare.v1.Msg", "RegisterFeeShare", data)
		return promise.then((data) => MsgRegisterFeeShareResponse.decode(new BinaryReader(data)))
	}
	/* UpdateFeeShare updates the withdrawer address of a FeeShare */
	updateFeeShare = async (request: MsgUpdateFeeShare): Promise<MsgUpdateFeeShareResponse> => {
		const data = MsgUpdateFeeShare.encode(request).finish()
		const promise = this.rpc.request("juno.feeshare.v1.Msg", "UpdateFeeShare", data)
		return promise.then((data) => MsgUpdateFeeShareResponse.decode(new BinaryReader(data)))
	}
	/* CancelFeeShare cancels a contract's fee registration and further receival
   of transaction fees */
	cancelFeeShare = async (request: MsgCancelFeeShare): Promise<MsgCancelFeeShareResponse> => {
		const data = MsgCancelFeeShare.encode(request).finish()
		const promise = this.rpc.request("juno.feeshare.v1.Msg", "CancelFeeShare", data)
		return promise.then((data) => MsgCancelFeeShareResponse.decode(new BinaryReader(data)))
	}
	/* Update the params of the module through gov v1 type. */
	updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
		const data = MsgUpdateParams.encode(request).finish()
		const promise = this.rpc.request("juno.feeshare.v1.Msg", "UpdateParams", data)
		return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)))
	}
}
export const createClientImpl = (rpc: TxRpc) => {
	return new MsgClientImpl(rpc)
}
