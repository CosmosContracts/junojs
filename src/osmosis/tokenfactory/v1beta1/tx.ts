import { BinaryReader, BinaryWriter } from "../../../binary"
import {
	Metadata,
	type MetadataAmino,
	Params,
	type ParamsAmino
} from "../../../cosmos/bank/v1beta1/bank"
import { Coin, type CoinAmino } from "../../../cosmos/base/v1beta1/coin"
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 *
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 */
export interface MsgCreateDenom {
	sender: string
	/** subdenom can be up to 44 "alphanumeric" characters long. */
	subdenom: string
}
export interface MsgCreateDenomProtoMsg {
	typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom"
	value: Uint8Array
}
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 *
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 */
export interface MsgCreateDenomAmino {
	sender?: string
	/** subdenom can be up to 44 "alphanumeric" characters long. */
	subdenom?: string
}
export interface MsgCreateDenomAminoMsg {
	type: "juno/x/tokenfactory/MsgCreateDenom"
	value: MsgCreateDenomAmino
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponse {
	newTokenDenom: string
}
export interface MsgCreateDenomResponseProtoMsg {
	typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenomResponse"
	value: Uint8Array
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 */
export interface MsgCreateDenomResponseAmino {
	new_token_denom?: string
}
export interface MsgCreateDenomResponseAminoMsg {
	type: "osmosis/tokenfactory/create-denom-response"
	value: MsgCreateDenomResponseAmino
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.  For now, we only support minting to the sender account
 */
export interface MsgMint {
	sender: string
	amount: Coin
	mintToAddress: string
}
export interface MsgMintProtoMsg {
	typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint"
	value: Uint8Array
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.  For now, we only support minting to the sender account
 */
export interface MsgMintAmino {
	sender?: string
	amount: CoinAmino
	mint_to_address?: string
}
export interface MsgMintAminoMsg {
	type: "juno/x/tokenfactory/MsgMint"
	value: MsgMintAmino
}
/**
 * MsgMintResponse defines the response structure for an executed
 * MsgMint message.
 */
export type MsgMintResponse = {}
export interface MsgMintResponseProtoMsg {
	typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMintResponse"
	value: Uint8Array
}
/**
 * MsgMintResponse defines the response structure for an executed
 * MsgMint message.
 */
export type MsgMintResponseAmino = {}
export interface MsgMintResponseAminoMsg {
	type: "osmosis/tokenfactory/mint-response"
	value: MsgMintResponseAmino
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 */
export interface MsgBurn {
	sender: string
	amount: Coin
	burnFromAddress: string
}
export interface MsgBurnProtoMsg {
	typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn"
	value: Uint8Array
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 */
export interface MsgBurnAmino {
	sender?: string
	amount: CoinAmino
	burn_from_address?: string
}
export interface MsgBurnAminoMsg {
	type: "juno/x/tokenfactory/MsgBurn"
	value: MsgBurnAmino
}
/**
 * MsgBurnResponse defines the response structure for an executed
 * MsgBurn message.
 */
export type MsgBurnResponse = {}
export interface MsgBurnResponseProtoMsg {
	typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurnResponse"
	value: Uint8Array
}
/**
 * MsgBurnResponse defines the response structure for an executed
 * MsgBurn message.
 */
export type MsgBurnResponseAmino = {}
export interface MsgBurnResponseAminoMsg {
	type: "osmosis/tokenfactory/burn-response"
	value: MsgBurnResponseAmino
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 */
export interface MsgChangeAdmin {
	sender: string
	denom: string
	newAdmin: string
}
export interface MsgChangeAdminProtoMsg {
	typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin"
	value: Uint8Array
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 */
export interface MsgChangeAdminAmino {
	sender?: string
	denom?: string
	new_admin?: string
}
export interface MsgChangeAdminAminoMsg {
	type: "juno/x/tokenfactory/MsgChangeAdmin"
	value: MsgChangeAdminAmino
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 */
export type MsgChangeAdminResponse = {}
export interface MsgChangeAdminResponseProtoMsg {
	typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdminResponse"
	value: Uint8Array
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 */
export type MsgChangeAdminResponseAmino = {}
export interface MsgChangeAdminResponseAminoMsg {
	type: "osmosis/tokenfactory/change-admin-response"
	value: MsgChangeAdminResponseAmino
}
/**
 * MsgSetDenomMetadata is the sdk.Msg type for allowing an admin account to set
 * the denom's bank metadata
 */
export interface MsgSetDenomMetadata {
	sender: string
	metadata: Metadata
}
export interface MsgSetDenomMetadataProtoMsg {
	typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata"
	value: Uint8Array
}
/**
 * MsgSetDenomMetadata is the sdk.Msg type for allowing an admin account to set
 * the denom's bank metadata
 */
export interface MsgSetDenomMetadataAmino {
	sender?: string
	metadata: MetadataAmino
}
export interface MsgSetDenomMetadataAminoMsg {
	type: "juno/x/tokenfactory/MsgSetDenomMetadata"
	value: MsgSetDenomMetadataAmino
}
/**
 * MsgSetDenomMetadataResponse defines the response structure for an executed
 * MsgSetDenomMetadata message.
 */
export type MsgSetDenomMetadataResponse = {}
export interface MsgSetDenomMetadataResponseProtoMsg {
	typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadataResponse"
	value: Uint8Array
}
/**
 * MsgSetDenomMetadataResponse defines the response structure for an executed
 * MsgSetDenomMetadata message.
 */
export type MsgSetDenomMetadataResponseAmino = {}
export interface MsgSetDenomMetadataResponseAminoMsg {
	type: "osmosis/tokenfactory/set-denom-metadata-response"
	value: MsgSetDenomMetadataResponseAmino
}
/**
 * MsgForceTransfer is the sdk.Msg type for allowing an admin account to
 * forcefully transfer a token from one account to another
 */
export interface MsgForceTransfer {
	sender: string
	amount: Coin
	transferFromAddress: string
	transferToAddress: string
}
export interface MsgForceTransferProtoMsg {
	typeUrl: "/osmosis.tokenfactory.v1beta1.MsgForceTransfer"
	value: Uint8Array
}
/**
 * MsgForceTransfer is the sdk.Msg type for allowing an admin account to
 * forcefully transfer a token from one account to another
 */
export interface MsgForceTransferAmino {
	sender?: string
	amount: CoinAmino
	transfer_from_address?: string
	transfer_to_address?: string
}
export interface MsgForceTransferAminoMsg {
	type: "juno/x/tokenfactory/MsgForceTransfer"
	value: MsgForceTransferAmino
}
/**
 * MsgForceTransferResponse defines the response structure for an executed
 * MsgForceTransfer message.
 */
export type MsgForceTransferResponse = {}
export interface MsgForceTransferResponseProtoMsg {
	typeUrl: "/osmosis.tokenfactory.v1beta1.MsgForceTransferResponse"
	value: Uint8Array
}
/**
 * MsgForceTransferResponse defines the response structure for an executed
 * MsgForceTransfer message.
 */
export type MsgForceTransferResponseAmino = {}
export interface MsgForceTransferResponseAminoMsg {
	type: "osmosis/tokenfactory/force-transfer-response"
	value: MsgForceTransferResponseAmino
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
	/** authority is the address of the governance account. */
	authority: string
	/**
	 * params defines the x/mint parameters to update.
	 *
	 * NOTE: All parameters must be supplied.
	 */
	params: Params
}
export interface MsgUpdateParamsProtoMsg {
	typeUrl: "/osmosis.tokenfactory.v1beta1.MsgUpdateParams"
	value: Uint8Array
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsAmino {
	/** authority is the address of the governance account. */
	authority?: string
	/**
	 * params defines the x/mint parameters to update.
	 *
	 * NOTE: All parameters must be supplied.
	 */
	params?: ParamsAmino
}
export interface MsgUpdateParamsAminoMsg {
	type: "juno/x/tokenfactory/MsgUpdateParams"
	value: MsgUpdateParamsAmino
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export type MsgUpdateParamsResponse = {}
export interface MsgUpdateParamsResponseProtoMsg {
	typeUrl: "/osmosis.tokenfactory.v1beta1.MsgUpdateParamsResponse"
	value: Uint8Array
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export type MsgUpdateParamsResponseAmino = {}
export interface MsgUpdateParamsResponseAminoMsg {
	type: "osmosis/tokenfactory/update-params-response"
	value: MsgUpdateParamsResponseAmino
}
function createBaseMsgCreateDenom(): MsgCreateDenom {
	return {
		sender: "",
		subdenom: ""
	}
}
export const MsgCreateDenom = {
	typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom",
	encode(message: MsgCreateDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.sender !== undefined) {
			writer.uint32(10).string(message.sender)
		}
		if (message.subdenom !== undefined) {
			writer.uint32(18).string(message.subdenom)
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDenom {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseMsgCreateDenom()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.sender = reader.string()
					break
				case 2:
					message.subdenom = reader.string()
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<MsgCreateDenom>): MsgCreateDenom {
		const message = createBaseMsgCreateDenom()
		message.sender = object.sender ?? ""
		message.subdenom = object.subdenom ?? ""
		return message
	},
	fromAmino(object: MsgCreateDenomAmino): MsgCreateDenom {
		const message = createBaseMsgCreateDenom()
		if (object.sender !== undefined && object.sender !== null) {
			message.sender = object.sender
		}
		if (object.subdenom !== undefined && object.subdenom !== null) {
			message.subdenom = object.subdenom
		}
		return message
	},
	toAmino(message: MsgCreateDenom): MsgCreateDenomAmino {
		const obj: any = {}
		obj.sender = message.sender === "" ? undefined : message.sender
		obj.subdenom = message.subdenom === "" ? undefined : message.subdenom
		return obj
	},
	fromAminoMsg(object: MsgCreateDenomAminoMsg): MsgCreateDenom {
		return MsgCreateDenom.fromAmino(object.value)
	},
	toAminoMsg(message: MsgCreateDenom): MsgCreateDenomAminoMsg {
		return {
			type: "juno/x/tokenfactory/MsgCreateDenom",
			value: MsgCreateDenom.toAmino(message)
		}
	},
	fromProtoMsg(message: MsgCreateDenomProtoMsg): MsgCreateDenom {
		return MsgCreateDenom.decode(message.value)
	},
	toProto(message: MsgCreateDenom): Uint8Array {
		return MsgCreateDenom.encode(message).finish()
	},
	toProtoMsg(message: MsgCreateDenom): MsgCreateDenomProtoMsg {
		return {
			typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom",
			value: MsgCreateDenom.encode(message).finish()
		}
	}
}
function createBaseMsgCreateDenomResponse(): MsgCreateDenomResponse {
	return {
		newTokenDenom: ""
	}
}
export const MsgCreateDenomResponse = {
	typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenomResponse",
	encode(
		message: MsgCreateDenomResponse,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		if (message.newTokenDenom !== undefined) {
			writer.uint32(10).string(message.newTokenDenom)
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDenomResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseMsgCreateDenomResponse()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.newTokenDenom = reader.string()
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<MsgCreateDenomResponse>): MsgCreateDenomResponse {
		const message = createBaseMsgCreateDenomResponse()
		message.newTokenDenom = object.newTokenDenom ?? ""
		return message
	},
	fromAmino(object: MsgCreateDenomResponseAmino): MsgCreateDenomResponse {
		const message = createBaseMsgCreateDenomResponse()
		if (object.new_token_denom !== undefined && object.new_token_denom !== null) {
			message.newTokenDenom = object.new_token_denom
		}
		return message
	},
	toAmino(message: MsgCreateDenomResponse): MsgCreateDenomResponseAmino {
		const obj: any = {}
		obj.new_token_denom = message.newTokenDenom === "" ? undefined : message.newTokenDenom
		return obj
	},
	fromAminoMsg(object: MsgCreateDenomResponseAminoMsg): MsgCreateDenomResponse {
		return MsgCreateDenomResponse.fromAmino(object.value)
	},
	toAminoMsg(message: MsgCreateDenomResponse): MsgCreateDenomResponseAminoMsg {
		return {
			type: "osmosis/tokenfactory/create-denom-response",
			value: MsgCreateDenomResponse.toAmino(message)
		}
	},
	fromProtoMsg(message: MsgCreateDenomResponseProtoMsg): MsgCreateDenomResponse {
		return MsgCreateDenomResponse.decode(message.value)
	},
	toProto(message: MsgCreateDenomResponse): Uint8Array {
		return MsgCreateDenomResponse.encode(message).finish()
	},
	toProtoMsg(message: MsgCreateDenomResponse): MsgCreateDenomResponseProtoMsg {
		return {
			typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenomResponse",
			value: MsgCreateDenomResponse.encode(message).finish()
		}
	}
}
function createBaseMsgMint(): MsgMint {
	return {
		sender: "",
		amount: Coin.fromPartial({}),
		mintToAddress: ""
	}
}
export const MsgMint = {
	typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint",
	encode(message: MsgMint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.sender !== undefined) {
			writer.uint32(10).string(message.sender)
		}
		if (message.amount !== undefined) {
			Coin.encode(message.amount, writer.uint32(18).fork()).ldelim()
		}
		if (message.mintToAddress !== undefined) {
			writer.uint32(26).string(message.mintToAddress)
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgMint {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseMsgMint()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.sender = reader.string()
					break
				case 2:
					message.amount = Coin.decode(reader, reader.uint32())
					break
				case 3:
					message.mintToAddress = reader.string()
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<MsgMint>): MsgMint {
		const message = createBaseMsgMint()
		message.sender = object.sender ?? ""
		message.amount =
			object.amount !== undefined && object.amount !== null
				? Coin.fromPartial(object.amount)
				: undefined
		message.mintToAddress = object.mintToAddress ?? ""
		return message
	},
	fromAmino(object: MsgMintAmino): MsgMint {
		const message = createBaseMsgMint()
		if (object.sender !== undefined && object.sender !== null) {
			message.sender = object.sender
		}
		if (object.amount !== undefined && object.amount !== null) {
			message.amount = Coin.fromAmino(object.amount)
		}
		if (object.mint_to_address !== undefined && object.mint_to_address !== null) {
			message.mintToAddress = object.mint_to_address
		}
		return message
	},
	toAmino(message: MsgMint): MsgMintAmino {
		const obj: any = {}
		obj.sender = message.sender === "" ? undefined : message.sender
		obj.amount = message.amount
			? Coin.toAmino(message.amount)
			: Coin.toAmino(Coin.fromPartial({}))
		obj.mint_to_address = message.mintToAddress === "" ? undefined : message.mintToAddress
		return obj
	},
	fromAminoMsg(object: MsgMintAminoMsg): MsgMint {
		return MsgMint.fromAmino(object.value)
	},
	toAminoMsg(message: MsgMint): MsgMintAminoMsg {
		return {
			type: "juno/x/tokenfactory/MsgMint",
			value: MsgMint.toAmino(message)
		}
	},
	fromProtoMsg(message: MsgMintProtoMsg): MsgMint {
		return MsgMint.decode(message.value)
	},
	toProto(message: MsgMint): Uint8Array {
		return MsgMint.encode(message).finish()
	},
	toProtoMsg(message: MsgMint): MsgMintProtoMsg {
		return {
			typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint",
			value: MsgMint.encode(message).finish()
		}
	}
}
function createBaseMsgMintResponse(): MsgMintResponse {
	return {}
}
export const MsgMintResponse = {
	typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMintResponse",
	encode(_: MsgMintResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgMintResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseMsgMintResponse()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(_: Partial<MsgMintResponse>): MsgMintResponse {
		const message = createBaseMsgMintResponse()
		return message
	},
	fromAmino(_: MsgMintResponseAmino): MsgMintResponse {
		const message = createBaseMsgMintResponse()
		return message
	},
	toAmino(_: MsgMintResponse): MsgMintResponseAmino {
		const obj: any = {}
		return obj
	},
	fromAminoMsg(object: MsgMintResponseAminoMsg): MsgMintResponse {
		return MsgMintResponse.fromAmino(object.value)
	},
	toAminoMsg(message: MsgMintResponse): MsgMintResponseAminoMsg {
		return {
			type: "osmosis/tokenfactory/mint-response",
			value: MsgMintResponse.toAmino(message)
		}
	},
	fromProtoMsg(message: MsgMintResponseProtoMsg): MsgMintResponse {
		return MsgMintResponse.decode(message.value)
	},
	toProto(message: MsgMintResponse): Uint8Array {
		return MsgMintResponse.encode(message).finish()
	},
	toProtoMsg(message: MsgMintResponse): MsgMintResponseProtoMsg {
		return {
			typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMintResponse",
			value: MsgMintResponse.encode(message).finish()
		}
	}
}
function createBaseMsgBurn(): MsgBurn {
	return {
		sender: "",
		amount: Coin.fromPartial({}),
		burnFromAddress: ""
	}
}
export const MsgBurn = {
	typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn",
	encode(message: MsgBurn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.sender !== undefined) {
			writer.uint32(10).string(message.sender)
		}
		if (message.amount !== undefined) {
			Coin.encode(message.amount, writer.uint32(18).fork()).ldelim()
		}
		if (message.burnFromAddress !== undefined) {
			writer.uint32(26).string(message.burnFromAddress)
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgBurn {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseMsgBurn()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.sender = reader.string()
					break
				case 2:
					message.amount = Coin.decode(reader, reader.uint32())
					break
				case 3:
					message.burnFromAddress = reader.string()
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<MsgBurn>): MsgBurn {
		const message = createBaseMsgBurn()
		message.sender = object.sender ?? ""
		message.amount =
			object.amount !== undefined && object.amount !== null
				? Coin.fromPartial(object.amount)
				: undefined
		message.burnFromAddress = object.burnFromAddress ?? ""
		return message
	},
	fromAmino(object: MsgBurnAmino): MsgBurn {
		const message = createBaseMsgBurn()
		if (object.sender !== undefined && object.sender !== null) {
			message.sender = object.sender
		}
		if (object.amount !== undefined && object.amount !== null) {
			message.amount = Coin.fromAmino(object.amount)
		}
		if (object.burn_from_address !== undefined && object.burn_from_address !== null) {
			message.burnFromAddress = object.burn_from_address
		}
		return message
	},
	toAmino(message: MsgBurn): MsgBurnAmino {
		const obj: any = {}
		obj.sender = message.sender === "" ? undefined : message.sender
		obj.amount = message.amount
			? Coin.toAmino(message.amount)
			: Coin.toAmino(Coin.fromPartial({}))
		obj.burn_from_address = message.burnFromAddress === "" ? undefined : message.burnFromAddress
		return obj
	},
	fromAminoMsg(object: MsgBurnAminoMsg): MsgBurn {
		return MsgBurn.fromAmino(object.value)
	},
	toAminoMsg(message: MsgBurn): MsgBurnAminoMsg {
		return {
			type: "juno/x/tokenfactory/MsgBurn",
			value: MsgBurn.toAmino(message)
		}
	},
	fromProtoMsg(message: MsgBurnProtoMsg): MsgBurn {
		return MsgBurn.decode(message.value)
	},
	toProto(message: MsgBurn): Uint8Array {
		return MsgBurn.encode(message).finish()
	},
	toProtoMsg(message: MsgBurn): MsgBurnProtoMsg {
		return {
			typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn",
			value: MsgBurn.encode(message).finish()
		}
	}
}
function createBaseMsgBurnResponse(): MsgBurnResponse {
	return {}
}
export const MsgBurnResponse = {
	typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurnResponse",
	encode(_: MsgBurnResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseMsgBurnResponse()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(_: Partial<MsgBurnResponse>): MsgBurnResponse {
		const message = createBaseMsgBurnResponse()
		return message
	},
	fromAmino(_: MsgBurnResponseAmino): MsgBurnResponse {
		const message = createBaseMsgBurnResponse()
		return message
	},
	toAmino(_: MsgBurnResponse): MsgBurnResponseAmino {
		const obj: any = {}
		return obj
	},
	fromAminoMsg(object: MsgBurnResponseAminoMsg): MsgBurnResponse {
		return MsgBurnResponse.fromAmino(object.value)
	},
	toAminoMsg(message: MsgBurnResponse): MsgBurnResponseAminoMsg {
		return {
			type: "osmosis/tokenfactory/burn-response",
			value: MsgBurnResponse.toAmino(message)
		}
	},
	fromProtoMsg(message: MsgBurnResponseProtoMsg): MsgBurnResponse {
		return MsgBurnResponse.decode(message.value)
	},
	toProto(message: MsgBurnResponse): Uint8Array {
		return MsgBurnResponse.encode(message).finish()
	},
	toProtoMsg(message: MsgBurnResponse): MsgBurnResponseProtoMsg {
		return {
			typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurnResponse",
			value: MsgBurnResponse.encode(message).finish()
		}
	}
}
function createBaseMsgChangeAdmin(): MsgChangeAdmin {
	return {
		sender: "",
		denom: "",
		newAdmin: ""
	}
}
export const MsgChangeAdmin = {
	typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin",
	encode(message: MsgChangeAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.sender !== undefined) {
			writer.uint32(10).string(message.sender)
		}
		if (message.denom !== undefined) {
			writer.uint32(18).string(message.denom)
		}
		if (message.newAdmin !== undefined) {
			writer.uint32(26).string(message.newAdmin)
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeAdmin {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseMsgChangeAdmin()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.sender = reader.string()
					break
				case 2:
					message.denom = reader.string()
					break
				case 3:
					message.newAdmin = reader.string()
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<MsgChangeAdmin>): MsgChangeAdmin {
		const message = createBaseMsgChangeAdmin()
		message.sender = object.sender ?? ""
		message.denom = object.denom ?? ""
		message.newAdmin = object.newAdmin ?? ""
		return message
	},
	fromAmino(object: MsgChangeAdminAmino): MsgChangeAdmin {
		const message = createBaseMsgChangeAdmin()
		if (object.sender !== undefined && object.sender !== null) {
			message.sender = object.sender
		}
		if (object.denom !== undefined && object.denom !== null) {
			message.denom = object.denom
		}
		if (object.new_admin !== undefined && object.new_admin !== null) {
			message.newAdmin = object.new_admin
		}
		return message
	},
	toAmino(message: MsgChangeAdmin): MsgChangeAdminAmino {
		const obj: any = {}
		obj.sender = message.sender === "" ? undefined : message.sender
		obj.denom = message.denom === "" ? undefined : message.denom
		obj.new_admin = message.newAdmin === "" ? undefined : message.newAdmin
		return obj
	},
	fromAminoMsg(object: MsgChangeAdminAminoMsg): MsgChangeAdmin {
		return MsgChangeAdmin.fromAmino(object.value)
	},
	toAminoMsg(message: MsgChangeAdmin): MsgChangeAdminAminoMsg {
		return {
			type: "juno/x/tokenfactory/MsgChangeAdmin",
			value: MsgChangeAdmin.toAmino(message)
		}
	},
	fromProtoMsg(message: MsgChangeAdminProtoMsg): MsgChangeAdmin {
		return MsgChangeAdmin.decode(message.value)
	},
	toProto(message: MsgChangeAdmin): Uint8Array {
		return MsgChangeAdmin.encode(message).finish()
	},
	toProtoMsg(message: MsgChangeAdmin): MsgChangeAdminProtoMsg {
		return {
			typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin",
			value: MsgChangeAdmin.encode(message).finish()
		}
	}
}
function createBaseMsgChangeAdminResponse(): MsgChangeAdminResponse {
	return {}
}
export const MsgChangeAdminResponse = {
	typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdminResponse",
	encode(_: MsgChangeAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeAdminResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseMsgChangeAdminResponse()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(_: Partial<MsgChangeAdminResponse>): MsgChangeAdminResponse {
		const message = createBaseMsgChangeAdminResponse()
		return message
	},
	fromAmino(_: MsgChangeAdminResponseAmino): MsgChangeAdminResponse {
		const message = createBaseMsgChangeAdminResponse()
		return message
	},
	toAmino(_: MsgChangeAdminResponse): MsgChangeAdminResponseAmino {
		const obj: any = {}
		return obj
	},
	fromAminoMsg(object: MsgChangeAdminResponseAminoMsg): MsgChangeAdminResponse {
		return MsgChangeAdminResponse.fromAmino(object.value)
	},
	toAminoMsg(message: MsgChangeAdminResponse): MsgChangeAdminResponseAminoMsg {
		return {
			type: "osmosis/tokenfactory/change-admin-response",
			value: MsgChangeAdminResponse.toAmino(message)
		}
	},
	fromProtoMsg(message: MsgChangeAdminResponseProtoMsg): MsgChangeAdminResponse {
		return MsgChangeAdminResponse.decode(message.value)
	},
	toProto(message: MsgChangeAdminResponse): Uint8Array {
		return MsgChangeAdminResponse.encode(message).finish()
	},
	toProtoMsg(message: MsgChangeAdminResponse): MsgChangeAdminResponseProtoMsg {
		return {
			typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdminResponse",
			value: MsgChangeAdminResponse.encode(message).finish()
		}
	}
}
function createBaseMsgSetDenomMetadata(): MsgSetDenomMetadata {
	return {
		sender: "",
		metadata: Metadata.fromPartial({})
	}
}
export const MsgSetDenomMetadata = {
	typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata",
	encode(
		message: MsgSetDenomMetadata,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		if (message.sender !== undefined) {
			writer.uint32(10).string(message.sender)
		}
		if (message.metadata !== undefined) {
			Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim()
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomMetadata {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseMsgSetDenomMetadata()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.sender = reader.string()
					break
				case 2:
					message.metadata = Metadata.decode(reader, reader.uint32())
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<MsgSetDenomMetadata>): MsgSetDenomMetadata {
		const message = createBaseMsgSetDenomMetadata()
		message.sender = object.sender ?? ""
		message.metadata =
			object.metadata !== undefined && object.metadata !== null
				? Metadata.fromPartial(object.metadata)
				: undefined
		return message
	},
	fromAmino(object: MsgSetDenomMetadataAmino): MsgSetDenomMetadata {
		const message = createBaseMsgSetDenomMetadata()
		if (object.sender !== undefined && object.sender !== null) {
			message.sender = object.sender
		}
		if (object.metadata !== undefined && object.metadata !== null) {
			message.metadata = Metadata.fromAmino(object.metadata)
		}
		return message
	},
	toAmino(message: MsgSetDenomMetadata): MsgSetDenomMetadataAmino {
		const obj: any = {}
		obj.sender = message.sender === "" ? undefined : message.sender
		obj.metadata = message.metadata
			? Metadata.toAmino(message.metadata)
			: Metadata.toAmino(Metadata.fromPartial({}))
		return obj
	},
	fromAminoMsg(object: MsgSetDenomMetadataAminoMsg): MsgSetDenomMetadata {
		return MsgSetDenomMetadata.fromAmino(object.value)
	},
	toAminoMsg(message: MsgSetDenomMetadata): MsgSetDenomMetadataAminoMsg {
		return {
			type: "juno/x/tokenfactory/MsgSetDenomMetadata",
			value: MsgSetDenomMetadata.toAmino(message)
		}
	},
	fromProtoMsg(message: MsgSetDenomMetadataProtoMsg): MsgSetDenomMetadata {
		return MsgSetDenomMetadata.decode(message.value)
	},
	toProto(message: MsgSetDenomMetadata): Uint8Array {
		return MsgSetDenomMetadata.encode(message).finish()
	},
	toProtoMsg(message: MsgSetDenomMetadata): MsgSetDenomMetadataProtoMsg {
		return {
			typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata",
			value: MsgSetDenomMetadata.encode(message).finish()
		}
	}
}
function createBaseMsgSetDenomMetadataResponse(): MsgSetDenomMetadataResponse {
	return {}
}
export const MsgSetDenomMetadataResponse = {
	typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadataResponse",
	encode(
		_: MsgSetDenomMetadataResponse,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomMetadataResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseMsgSetDenomMetadataResponse()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(_: Partial<MsgSetDenomMetadataResponse>): MsgSetDenomMetadataResponse {
		const message = createBaseMsgSetDenomMetadataResponse()
		return message
	},
	fromAmino(_: MsgSetDenomMetadataResponseAmino): MsgSetDenomMetadataResponse {
		const message = createBaseMsgSetDenomMetadataResponse()
		return message
	},
	toAmino(_: MsgSetDenomMetadataResponse): MsgSetDenomMetadataResponseAmino {
		const obj: any = {}
		return obj
	},
	fromAminoMsg(object: MsgSetDenomMetadataResponseAminoMsg): MsgSetDenomMetadataResponse {
		return MsgSetDenomMetadataResponse.fromAmino(object.value)
	},
	toAminoMsg(message: MsgSetDenomMetadataResponse): MsgSetDenomMetadataResponseAminoMsg {
		return {
			type: "osmosis/tokenfactory/set-denom-metadata-response",
			value: MsgSetDenomMetadataResponse.toAmino(message)
		}
	},
	fromProtoMsg(message: MsgSetDenomMetadataResponseProtoMsg): MsgSetDenomMetadataResponse {
		return MsgSetDenomMetadataResponse.decode(message.value)
	},
	toProto(message: MsgSetDenomMetadataResponse): Uint8Array {
		return MsgSetDenomMetadataResponse.encode(message).finish()
	},
	toProtoMsg(message: MsgSetDenomMetadataResponse): MsgSetDenomMetadataResponseProtoMsg {
		return {
			typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadataResponse",
			value: MsgSetDenomMetadataResponse.encode(message).finish()
		}
	}
}
function createBaseMsgForceTransfer(): MsgForceTransfer {
	return {
		sender: "",
		amount: Coin.fromPartial({}),
		transferFromAddress: "",
		transferToAddress: ""
	}
}
export const MsgForceTransfer = {
	typeUrl: "/osmosis.tokenfactory.v1beta1.MsgForceTransfer",
	encode(message: MsgForceTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.sender !== undefined) {
			writer.uint32(10).string(message.sender)
		}
		if (message.amount !== undefined) {
			Coin.encode(message.amount, writer.uint32(18).fork()).ldelim()
		}
		if (message.transferFromAddress !== undefined) {
			writer.uint32(26).string(message.transferFromAddress)
		}
		if (message.transferToAddress !== undefined) {
			writer.uint32(34).string(message.transferToAddress)
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgForceTransfer {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseMsgForceTransfer()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.sender = reader.string()
					break
				case 2:
					message.amount = Coin.decode(reader, reader.uint32())
					break
				case 3:
					message.transferFromAddress = reader.string()
					break
				case 4:
					message.transferToAddress = reader.string()
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<MsgForceTransfer>): MsgForceTransfer {
		const message = createBaseMsgForceTransfer()
		message.sender = object.sender ?? ""
		message.amount =
			object.amount !== undefined && object.amount !== null
				? Coin.fromPartial(object.amount)
				: undefined
		message.transferFromAddress = object.transferFromAddress ?? ""
		message.transferToAddress = object.transferToAddress ?? ""
		return message
	},
	fromAmino(object: MsgForceTransferAmino): MsgForceTransfer {
		const message = createBaseMsgForceTransfer()
		if (object.sender !== undefined && object.sender !== null) {
			message.sender = object.sender
		}
		if (object.amount !== undefined && object.amount !== null) {
			message.amount = Coin.fromAmino(object.amount)
		}
		if (object.transfer_from_address !== undefined && object.transfer_from_address !== null) {
			message.transferFromAddress = object.transfer_from_address
		}
		if (object.transfer_to_address !== undefined && object.transfer_to_address !== null) {
			message.transferToAddress = object.transfer_to_address
		}
		return message
	},
	toAmino(message: MsgForceTransfer): MsgForceTransferAmino {
		const obj: any = {}
		obj.sender = message.sender === "" ? undefined : message.sender
		obj.amount = message.amount
			? Coin.toAmino(message.amount)
			: Coin.toAmino(Coin.fromPartial({}))
		obj.transfer_from_address =
			message.transferFromAddress === "" ? undefined : message.transferFromAddress
		obj.transfer_to_address =
			message.transferToAddress === "" ? undefined : message.transferToAddress
		return obj
	},
	fromAminoMsg(object: MsgForceTransferAminoMsg): MsgForceTransfer {
		return MsgForceTransfer.fromAmino(object.value)
	},
	toAminoMsg(message: MsgForceTransfer): MsgForceTransferAminoMsg {
		return {
			type: "juno/x/tokenfactory/MsgForceTransfer",
			value: MsgForceTransfer.toAmino(message)
		}
	},
	fromProtoMsg(message: MsgForceTransferProtoMsg): MsgForceTransfer {
		return MsgForceTransfer.decode(message.value)
	},
	toProto(message: MsgForceTransfer): Uint8Array {
		return MsgForceTransfer.encode(message).finish()
	},
	toProtoMsg(message: MsgForceTransfer): MsgForceTransferProtoMsg {
		return {
			typeUrl: "/osmosis.tokenfactory.v1beta1.MsgForceTransfer",
			value: MsgForceTransfer.encode(message).finish()
		}
	}
}
function createBaseMsgForceTransferResponse(): MsgForceTransferResponse {
	return {}
}
export const MsgForceTransferResponse = {
	typeUrl: "/osmosis.tokenfactory.v1beta1.MsgForceTransferResponse",
	encode(_: MsgForceTransferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgForceTransferResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseMsgForceTransferResponse()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(_: Partial<MsgForceTransferResponse>): MsgForceTransferResponse {
		const message = createBaseMsgForceTransferResponse()
		return message
	},
	fromAmino(_: MsgForceTransferResponseAmino): MsgForceTransferResponse {
		const message = createBaseMsgForceTransferResponse()
		return message
	},
	toAmino(_: MsgForceTransferResponse): MsgForceTransferResponseAmino {
		const obj: any = {}
		return obj
	},
	fromAminoMsg(object: MsgForceTransferResponseAminoMsg): MsgForceTransferResponse {
		return MsgForceTransferResponse.fromAmino(object.value)
	},
	toAminoMsg(message: MsgForceTransferResponse): MsgForceTransferResponseAminoMsg {
		return {
			type: "osmosis/tokenfactory/force-transfer-response",
			value: MsgForceTransferResponse.toAmino(message)
		}
	},
	fromProtoMsg(message: MsgForceTransferResponseProtoMsg): MsgForceTransferResponse {
		return MsgForceTransferResponse.decode(message.value)
	},
	toProto(message: MsgForceTransferResponse): Uint8Array {
		return MsgForceTransferResponse.encode(message).finish()
	},
	toProtoMsg(message: MsgForceTransferResponse): MsgForceTransferResponseProtoMsg {
		return {
			typeUrl: "/osmosis.tokenfactory.v1beta1.MsgForceTransferResponse",
			value: MsgForceTransferResponse.encode(message).finish()
		}
	}
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
	return {
		authority: "",
		params: Params.fromPartial({})
	}
}
export const MsgUpdateParams = {
	typeUrl: "/osmosis.tokenfactory.v1beta1.MsgUpdateParams",
	encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.authority !== undefined) {
			writer.uint32(10).string(message.authority)
		}
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(18).fork()).ldelim()
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseMsgUpdateParams()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.authority = reader.string()
					break
				case 2:
					message.params = Params.decode(reader, reader.uint32())
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
		const message = createBaseMsgUpdateParams()
		message.authority = object.authority ?? ""
		message.params =
			object.params !== undefined && object.params !== null
				? Params.fromPartial(object.params)
				: undefined
		return message
	},
	fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
		const message = createBaseMsgUpdateParams()
		if (object.authority !== undefined && object.authority !== null) {
			message.authority = object.authority
		}
		if (object.params !== undefined && object.params !== null) {
			message.params = Params.fromAmino(object.params)
		}
		return message
	},
	toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
		const obj: any = {}
		obj.authority = message.authority === "" ? undefined : message.authority
		obj.params = message.params ? Params.toAmino(message.params) : undefined
		return obj
	},
	fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
		return MsgUpdateParams.fromAmino(object.value)
	},
	toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
		return {
			type: "juno/x/tokenfactory/MsgUpdateParams",
			value: MsgUpdateParams.toAmino(message)
		}
	},
	fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
		return MsgUpdateParams.decode(message.value)
	},
	toProto(message: MsgUpdateParams): Uint8Array {
		return MsgUpdateParams.encode(message).finish()
	},
	toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
		return {
			typeUrl: "/osmosis.tokenfactory.v1beta1.MsgUpdateParams",
			value: MsgUpdateParams.encode(message).finish()
		}
	}
}
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
	return {}
}
export const MsgUpdateParamsResponse = {
	typeUrl: "/osmosis.tokenfactory.v1beta1.MsgUpdateParamsResponse",
	encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseMsgUpdateParamsResponse()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
		const message = createBaseMsgUpdateParamsResponse()
		return message
	},
	fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
		const message = createBaseMsgUpdateParamsResponse()
		return message
	},
	toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
		const obj: any = {}
		return obj
	},
	fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
		return MsgUpdateParamsResponse.fromAmino(object.value)
	},
	toAminoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseAminoMsg {
		return {
			type: "osmosis/tokenfactory/update-params-response",
			value: MsgUpdateParamsResponse.toAmino(message)
		}
	},
	fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
		return MsgUpdateParamsResponse.decode(message.value)
	},
	toProto(message: MsgUpdateParamsResponse): Uint8Array {
		return MsgUpdateParamsResponse.encode(message).finish()
	},
	toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
		return {
			typeUrl: "/osmosis.tokenfactory.v1beta1.MsgUpdateParamsResponse",
			value: MsgUpdateParamsResponse.encode(message).finish()
		}
	}
}
