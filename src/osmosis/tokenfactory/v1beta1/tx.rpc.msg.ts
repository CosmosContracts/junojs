import { BinaryReader } from "../../../binary"
import type { TxRpc } from "../../../types"
import {
	MsgBurn,
	MsgBurnResponse,
	MsgChangeAdmin,
	MsgChangeAdminResponse,
	MsgCreateDenom,
	MsgCreateDenomResponse,
	MsgForceTransfer,
	MsgForceTransferResponse,
	MsgMint,
	MsgMintResponse,
	MsgSetDenomMetadata,
	MsgSetDenomMetadataResponse,
	MsgUpdateParams,
	MsgUpdateParamsResponse
} from "./tx"
/** Msg defines the tokefactory module's gRPC message service. */
export interface Msg {
	/** CreateDenom creates a new native functional token and adds the creator as sole admin. */
	createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>
	/** Mint allows an admin account to mint supply of a token. */
	mint(request: MsgMint): Promise<MsgMintResponse>
	/** Burn allows an admin account to burn supply of a token. */
	burn(request: MsgBurn): Promise<MsgBurnResponse>
	/** ChangeAdmin allows an admin account to reassign adminship of a denom to another account. */
	changeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponse>
	/** SetDenomMetadata allows an admin account to set the denom's bank metadata. */
	setDenomMetadata(request: MsgSetDenomMetadata): Promise<MsgSetDenomMetadataResponse>
	/** ForceTransfer allows an admin account to transfer a token from one account to another. */
	forceTransfer(request: MsgForceTransfer): Promise<MsgForceTransferResponse>
	/**
	 * UpdateParams defines a governance operation for updating the x/tokenfactory module
	 * parameters. The authority is hard-coded to the x/gov module account.
	 */
	updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>
}
export class MsgClientImpl implements Msg {
	private readonly rpc: TxRpc
	constructor(rpc: TxRpc) {
		this.rpc = rpc
	}
	/* CreateDenom creates a new native functional token and adds the creator as sole admin. */
	createDenom = async (request: MsgCreateDenom): Promise<MsgCreateDenomResponse> => {
		const data = MsgCreateDenom.encode(request).finish()
		const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "CreateDenom", data)
		return promise.then((data) => MsgCreateDenomResponse.decode(new BinaryReader(data)))
	}
	/* Mint allows an admin account to mint supply of a token. */
	mint = async (request: MsgMint): Promise<MsgMintResponse> => {
		const data = MsgMint.encode(request).finish()
		const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "Mint", data)
		return promise.then((data) => MsgMintResponse.decode(new BinaryReader(data)))
	}
	/* Burn allows an admin account to burn supply of a token. */
	burn = async (request: MsgBurn): Promise<MsgBurnResponse> => {
		const data = MsgBurn.encode(request).finish()
		const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "Burn", data)
		return promise.then((data) => MsgBurnResponse.decode(new BinaryReader(data)))
	}
	/* ChangeAdmin allows an admin account to reassign adminship of a denom to another account. */
	changeAdmin = async (request: MsgChangeAdmin): Promise<MsgChangeAdminResponse> => {
		const data = MsgChangeAdmin.encode(request).finish()
		const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "ChangeAdmin", data)
		return promise.then((data) => MsgChangeAdminResponse.decode(new BinaryReader(data)))
	}
	/* SetDenomMetadata allows an admin account to set the denom's bank metadata. */
	setDenomMetadata = async (
		request: MsgSetDenomMetadata
	): Promise<MsgSetDenomMetadataResponse> => {
		const data = MsgSetDenomMetadata.encode(request).finish()
		const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "SetDenomMetadata", data)
		return promise.then((data) => MsgSetDenomMetadataResponse.decode(new BinaryReader(data)))
	}
	/* ForceTransfer allows an admin account to transfer a token from one account to another. */
	forceTransfer = async (request: MsgForceTransfer): Promise<MsgForceTransferResponse> => {
		const data = MsgForceTransfer.encode(request).finish()
		const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "ForceTransfer", data)
		return promise.then((data) => MsgForceTransferResponse.decode(new BinaryReader(data)))
	}
	/* UpdateParams defines a governance operation for updating the x/tokenfactory module
   parameters. The authority is hard-coded to the x/gov module account. */
	updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
		const data = MsgUpdateParams.encode(request).finish()
		const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "UpdateParams", data)
		return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)))
	}
}
export const createClientImpl = (rpc: TxRpc) => {
	return new MsgClientImpl(rpc)
}
