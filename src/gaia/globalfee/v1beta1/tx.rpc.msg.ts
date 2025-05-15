import { BinaryReader } from "../../../binary"
import type { TxRpc } from "../../../types"
import { MsgUpdateParams, MsgUpdateParamsResponse } from "./tx"
/** Msg defines the x/globalfee Msg service. */
export interface Msg {
	/**
	 * UpdateParams defines a governance operation for updating the x/mint module
	 * parameters. The authority is hard-coded to the x/gov module account.
	 */
	updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>
}
export class MsgClientImpl implements Msg {
	private readonly rpc: TxRpc
	constructor(rpc: TxRpc) {
		this.rpc = rpc
	}
	/* UpdateParams defines a governance operation for updating the x/mint module
   parameters. The authority is hard-coded to the x/gov module account. */
	updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
		const data = MsgUpdateParams.encode(request).finish()
		const promise = this.rpc.request("gaia.globalfee.v1beta1.Msg", "UpdateParams", data)
		return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)))
	}
}
export const createClientImpl = (rpc: TxRpc) => {
	return new MsgClientImpl(rpc)
}
