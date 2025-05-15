import { BinaryReader } from "../../../binary"
import type { TxRpc } from "../../../types"
import {
	MsgRegisterClockContract,
	MsgRegisterClockContractResponse,
	MsgUnjailClockContract,
	MsgUnjailClockContractResponse,
	MsgUnregisterClockContract,
	MsgUnregisterClockContractResponse,
	MsgUpdateParams,
	MsgUpdateParamsResponse
} from "./tx"
/** Msg defines the Msg service. */
export interface Msg {
	/**
	 * RegisterClockContract defines the endpoint for
	 * registering a new clock contract.
	 */
	registerClockContract(
		request: MsgRegisterClockContract
	): Promise<MsgRegisterClockContractResponse>
	/**
	 * UnregisterClockContract defines the endpoint for
	 * unregistering a clock contract.
	 */
	unregisterClockContract(
		request: MsgUnregisterClockContract
	): Promise<MsgUnregisterClockContractResponse>
	/**
	 * UnjailClockContract defines the endpoint for
	 * unjailing a clock contract.
	 */
	unjailClockContract(request: MsgUnjailClockContract): Promise<MsgUnjailClockContractResponse>
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
	/* RegisterClockContract defines the endpoint for
   registering a new clock contract. */
	registerClockContract = async (
		request: MsgRegisterClockContract
	): Promise<MsgRegisterClockContractResponse> => {
		const data = MsgRegisterClockContract.encode(request).finish()
		const promise = this.rpc.request("juno.clock.v1.Msg", "RegisterClockContract", data)
		return promise.then((data) => MsgRegisterClockContractResponse.decode(new BinaryReader(data)))
	}
	/* UnregisterClockContract defines the endpoint for
   unregistering a clock contract. */
	unregisterClockContract = async (
		request: MsgUnregisterClockContract
	): Promise<MsgUnregisterClockContractResponse> => {
		const data = MsgUnregisterClockContract.encode(request).finish()
		const promise = this.rpc.request("juno.clock.v1.Msg", "UnregisterClockContract", data)
		return promise.then((data) =>
			MsgUnregisterClockContractResponse.decode(new BinaryReader(data))
		)
	}
	/* UnjailClockContract defines the endpoint for
   unjailing a clock contract. */
	unjailClockContract = async (
		request: MsgUnjailClockContract
	): Promise<MsgUnjailClockContractResponse> => {
		const data = MsgUnjailClockContract.encode(request).finish()
		const promise = this.rpc.request("juno.clock.v1.Msg", "UnjailClockContract", data)
		return promise.then((data) => MsgUnjailClockContractResponse.decode(new BinaryReader(data)))
	}
	/* UpdateParams defines a governance operation for updating the x/clock module
   parameters. The authority is hard-coded to the x/gov module account. */
	updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
		const data = MsgUpdateParams.encode(request).finish()
		const promise = this.rpc.request("juno.clock.v1.Msg", "UpdateParams", data)
		return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)))
	}
}
export const createClientImpl = (rpc: TxRpc) => {
	return new MsgClientImpl(rpc)
}
