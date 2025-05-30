import { BinaryReader } from "../../../../binary"
import type { TxRpc } from "../../../../types"
import {
	MsgPayPacketFee,
	MsgPayPacketFeeAsync,
	MsgPayPacketFeeAsyncResponse,
	MsgPayPacketFeeResponse,
	MsgRegisterCounterpartyPayee,
	MsgRegisterCounterpartyPayeeResponse,
	MsgRegisterPayee,
	MsgRegisterPayeeResponse
} from "./tx"
/** Msg defines the ICS29 Msg service. */
export interface Msg {
	/**
	 * RegisterPayee defines a rpc handler method for MsgRegisterPayee
	 * RegisterPayee is called by the relayer on each channelEnd and allows them to set an optional
	 * payee to which reverse and timeout relayer packet fees will be paid out. The payee should be registered on
	 * the source chain from which packets originate as this is where fee distribution takes place. This function may be
	 * called more than once by a relayer, in which case, the latest payee is always used.
	 */
	registerPayee(request: MsgRegisterPayee): Promise<MsgRegisterPayeeResponse>
	/**
	 * RegisterCounterpartyPayee defines a rpc handler method for MsgRegisterCounterpartyPayee
	 * RegisterCounterpartyPayee is called by the relayer on each channelEnd and allows them to specify the counterparty
	 * payee address before relaying. This ensures they will be properly compensated for forward relaying since
	 * the destination chain must include the registered counterparty payee address in the acknowledgement. This function
	 * may be called more than once by a relayer, in which case, the latest counterparty payee address is always used.
	 */
	registerCounterpartyPayee(
		request: MsgRegisterCounterpartyPayee
	): Promise<MsgRegisterCounterpartyPayeeResponse>
	/**
	 * PayPacketFee defines a rpc handler method for MsgPayPacketFee
	 * PayPacketFee is an open callback that may be called by any module/user that wishes to escrow funds in order to
	 * incentivize the relaying of the packet at the next sequence
	 * NOTE: This method is intended to be used within a multi msg transaction, where the subsequent msg that follows
	 * initiates the lifecycle of the incentivized packet
	 */
	payPacketFee(request: MsgPayPacketFee): Promise<MsgPayPacketFeeResponse>
	/**
	 * PayPacketFeeAsync defines a rpc handler method for MsgPayPacketFeeAsync
	 * PayPacketFeeAsync is an open callback that may be called by any module/user that wishes to escrow funds in order to
	 * incentivize the relaying of a known packet (i.e. at a particular sequence)
	 */
	payPacketFeeAsync(request: MsgPayPacketFeeAsync): Promise<MsgPayPacketFeeAsyncResponse>
}
export class MsgClientImpl implements Msg {
	private readonly rpc: TxRpc
	constructor(rpc: TxRpc) {
		this.rpc = rpc
	}
	/* RegisterPayee defines a rpc handler method for MsgRegisterPayee
   RegisterPayee is called by the relayer on each channelEnd and allows them to set an optional
   payee to which reverse and timeout relayer packet fees will be paid out. The payee should be registered on
   the source chain from which packets originate as this is where fee distribution takes place. This function may be
   called more than once by a relayer, in which case, the latest payee is always used. */
	registerPayee = async (request: MsgRegisterPayee): Promise<MsgRegisterPayeeResponse> => {
		const data = MsgRegisterPayee.encode(request).finish()
		const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "RegisterPayee", data)
		return promise.then((data) => MsgRegisterPayeeResponse.decode(new BinaryReader(data)))
	}
	/* RegisterCounterpartyPayee defines a rpc handler method for MsgRegisterCounterpartyPayee
   RegisterCounterpartyPayee is called by the relayer on each channelEnd and allows them to specify the counterparty
   payee address before relaying. This ensures they will be properly compensated for forward relaying since
   the destination chain must include the registered counterparty payee address in the acknowledgement. This function
   may be called more than once by a relayer, in which case, the latest counterparty payee address is always used. */
	registerCounterpartyPayee = async (
		request: MsgRegisterCounterpartyPayee
	): Promise<MsgRegisterCounterpartyPayeeResponse> => {
		const data = MsgRegisterCounterpartyPayee.encode(request).finish()
		const promise = this.rpc.request(
			"ibc.applications.fee.v1.Msg",
			"RegisterCounterpartyPayee",
			data
		)
		return promise.then((data) =>
			MsgRegisterCounterpartyPayeeResponse.decode(new BinaryReader(data))
		)
	}
	/* PayPacketFee defines a rpc handler method for MsgPayPacketFee
   PayPacketFee is an open callback that may be called by any module/user that wishes to escrow funds in order to
   incentivize the relaying of the packet at the next sequence
   NOTE: This method is intended to be used within a multi msg transaction, where the subsequent msg that follows
   initiates the lifecycle of the incentivized packet */
	payPacketFee = async (request: MsgPayPacketFee): Promise<MsgPayPacketFeeResponse> => {
		const data = MsgPayPacketFee.encode(request).finish()
		const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "PayPacketFee", data)
		return promise.then((data) => MsgPayPacketFeeResponse.decode(new BinaryReader(data)))
	}
	/* PayPacketFeeAsync defines a rpc handler method for MsgPayPacketFeeAsync
   PayPacketFeeAsync is an open callback that may be called by any module/user that wishes to escrow funds in order to
   incentivize the relaying of a known packet (i.e. at a particular sequence) */
	payPacketFeeAsync = async (
		request: MsgPayPacketFeeAsync
	): Promise<MsgPayPacketFeeAsyncResponse> => {
		const data = MsgPayPacketFeeAsync.encode(request).finish()
		const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "PayPacketFeeAsync", data)
		return promise.then((data) => MsgPayPacketFeeAsyncResponse.decode(new BinaryReader(data)))
	}
}
export const createClientImpl = (rpc: TxRpc) => {
	return new MsgClientImpl(rpc)
}
