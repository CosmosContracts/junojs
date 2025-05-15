import { BinaryReader } from "../../../binary"
import type { TxRpc } from "../../../types"
import {
	MsgRegisterGovernance,
	MsgRegisterGovernanceResponse,
	MsgRegisterStaking,
	MsgRegisterStakingResponse,
	MsgUnregisterGovernance,
	MsgUnregisterGovernanceResponse,
	MsgUnregisterStaking,
	MsgUnregisterStakingResponse,
	MsgUpdateParams,
	MsgUpdateParamsResponse
} from "./tx"
/** Msg defines the Msg service. */
export interface Msg {
	/**
	 * UpdateParams defines a governance operation for updating the x/clock module
	 * parameters. The authority is hard-coded to the x/gov module account.
	 */
	updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>
	/** RegisterStaking. */
	registerStaking(request: MsgRegisterStaking): Promise<MsgRegisterStakingResponse>
	/** UnregisterStaking. */
	unregisterStaking(request: MsgUnregisterStaking): Promise<MsgUnregisterStakingResponse>
	/** RegisterGovernance. */
	registerGovernance(request: MsgRegisterGovernance): Promise<MsgRegisterGovernanceResponse>
	/** UnregisterGovernance. */
	unregisterGovernance(request: MsgUnregisterGovernance): Promise<MsgUnregisterGovernanceResponse>
}
export class MsgClientImpl implements Msg {
	private readonly rpc: TxRpc
	constructor(rpc: TxRpc) {
		this.rpc = rpc
	}
	/* UpdateParams defines a governance operation for updating the x/clock module
   parameters. The authority is hard-coded to the x/gov module account. */
	updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
		const data = MsgUpdateParams.encode(request).finish()
		const promise = this.rpc.request("juno.cwhooks.v1.Msg", "UpdateParams", data)
		return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)))
	}
	/* RegisterStaking. */
	registerStaking = async (request: MsgRegisterStaking): Promise<MsgRegisterStakingResponse> => {
		const data = MsgRegisterStaking.encode(request).finish()
		const promise = this.rpc.request("juno.cwhooks.v1.Msg", "RegisterStaking", data)
		return promise.then((data) => MsgRegisterStakingResponse.decode(new BinaryReader(data)))
	}
	/* UnregisterStaking. */
	unregisterStaking = async (
		request: MsgUnregisterStaking
	): Promise<MsgUnregisterStakingResponse> => {
		const data = MsgUnregisterStaking.encode(request).finish()
		const promise = this.rpc.request("juno.cwhooks.v1.Msg", "UnregisterStaking", data)
		return promise.then((data) => MsgUnregisterStakingResponse.decode(new BinaryReader(data)))
	}
	/* RegisterGovernance. */
	registerGovernance = async (
		request: MsgRegisterGovernance
	): Promise<MsgRegisterGovernanceResponse> => {
		const data = MsgRegisterGovernance.encode(request).finish()
		const promise = this.rpc.request("juno.cwhooks.v1.Msg", "RegisterGovernance", data)
		return promise.then((data) => MsgRegisterGovernanceResponse.decode(new BinaryReader(data)))
	}
	/* UnregisterGovernance. */
	unregisterGovernance = async (
		request: MsgUnregisterGovernance
	): Promise<MsgUnregisterGovernanceResponse> => {
		const data = MsgUnregisterGovernance.encode(request).finish()
		const promise = this.rpc.request("juno.cwhooks.v1.Msg", "UnregisterGovernance", data)
		return promise.then((data) => MsgUnregisterGovernanceResponse.decode(new BinaryReader(data)))
	}
}
export const createClientImpl = (rpc: TxRpc) => {
	return new MsgClientImpl(rpc)
}
