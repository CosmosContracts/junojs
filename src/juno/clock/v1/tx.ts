import { BinaryReader, BinaryWriter } from "../../../binary"
import { Params, type ParamsAmino } from "./genesis"
/** MsgRegisterClockContract is the Msg/RegisterClockContract request type. */
export interface MsgRegisterClockContract {
	/** The address of the sender. */
	senderAddress: string
	/** The address of the contract to register. */
	contractAddress: string
}
export interface MsgRegisterClockContractProtoMsg {
	typeUrl: "/juno.clock.v1.MsgRegisterClockContract"
	value: Uint8Array
}
/** MsgRegisterClockContract is the Msg/RegisterClockContract request type. */
export interface MsgRegisterClockContractAmino {
	/** The address of the sender. */
	sender_address?: string
	/** The address of the contract to register. */
	contract_address?: string
}
export interface MsgRegisterClockContractAminoMsg {
	type: "juno/x/clock/MsgRegisterClockContract"
	value: MsgRegisterClockContractAmino
}
/**
 * MsgRegisterClockContractResponse defines the response structure for executing a
 * MsgRegisterClockContract message.
 */
export type MsgRegisterClockContractResponse = {}
export interface MsgRegisterClockContractResponseProtoMsg {
	typeUrl: "/juno.clock.v1.MsgRegisterClockContractResponse"
	value: Uint8Array
}
/**
 * MsgRegisterClockContractResponse defines the response structure for executing a
 * MsgRegisterClockContract message.
 */
export type MsgRegisterClockContractResponseAmino = {}
export interface MsgRegisterClockContractResponseAminoMsg {
	type: "/juno.clock.v1.MsgRegisterClockContractResponse"
	value: MsgRegisterClockContractResponseAmino
}
/** MsgUnregisterClockContract is the Msg/UnregisterClockContract request type. */
export interface MsgUnregisterClockContract {
	/** The address of the sender. */
	senderAddress: string
	/** The address of the contract to unregister. */
	contractAddress: string
}
export interface MsgUnregisterClockContractProtoMsg {
	typeUrl: "/juno.clock.v1.MsgUnregisterClockContract"
	value: Uint8Array
}
/** MsgUnregisterClockContract is the Msg/UnregisterClockContract request type. */
export interface MsgUnregisterClockContractAmino {
	/** The address of the sender. */
	sender_address?: string
	/** The address of the contract to unregister. */
	contract_address?: string
}
export interface MsgUnregisterClockContractAminoMsg {
	type: "juno/x/clock/MsgUnregisterClockContract"
	value: MsgUnregisterClockContractAmino
}
/**
 * MsgUnregisterClockContractResponse defines the response structure for executing a
 * MsgUnregisterClockContract message.
 */
export type MsgUnregisterClockContractResponse = {}
export interface MsgUnregisterClockContractResponseProtoMsg {
	typeUrl: "/juno.clock.v1.MsgUnregisterClockContractResponse"
	value: Uint8Array
}
/**
 * MsgUnregisterClockContractResponse defines the response structure for executing a
 * MsgUnregisterClockContract message.
 */
export type MsgUnregisterClockContractResponseAmino = {}
export interface MsgUnregisterClockContractResponseAminoMsg {
	type: "/juno.clock.v1.MsgUnregisterClockContractResponse"
	value: MsgUnregisterClockContractResponseAmino
}
/** MsgUnjailClockContract is the Msg/UnjailClockContract request type. */
export interface MsgUnjailClockContract {
	/** The address of the sender. */
	senderAddress: string
	/** The address of the contract to unjail. */
	contractAddress: string
}
export interface MsgUnjailClockContractProtoMsg {
	typeUrl: "/juno.clock.v1.MsgUnjailClockContract"
	value: Uint8Array
}
/** MsgUnjailClockContract is the Msg/UnjailClockContract request type. */
export interface MsgUnjailClockContractAmino {
	/** The address of the sender. */
	sender_address?: string
	/** The address of the contract to unjail. */
	contract_address?: string
}
export interface MsgUnjailClockContractAminoMsg {
	type: "juno/x/clock/MsgUnjailClockContract"
	value: MsgUnjailClockContractAmino
}
/**
 * MsgUnjailClockContractResponse defines the response structure for executing a
 * MsgUnjailClockContract message.
 */
export type MsgUnjailClockContractResponse = {}
export interface MsgUnjailClockContractResponseProtoMsg {
	typeUrl: "/juno.clock.v1.MsgUnjailClockContractResponse"
	value: Uint8Array
}
/**
 * MsgUnjailClockContractResponse defines the response structure for executing a
 * MsgUnjailClockContract message.
 */
export type MsgUnjailClockContractResponseAmino = {}
export interface MsgUnjailClockContractResponseAminoMsg {
	type: "/juno.clock.v1.MsgUnjailClockContractResponse"
	value: MsgUnjailClockContractResponseAmino
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
	/** authority is the address of the governance account. */
	authority: string
	/**
	 * params defines the x/clock parameters to update.
	 *
	 * NOTE: All parameters must be supplied.
	 */
	params: Params | undefined
}
export interface MsgUpdateParamsProtoMsg {
	typeUrl: "/juno.clock.v1.MsgUpdateParams"
	value: Uint8Array
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsAmino {
	/** authority is the address of the governance account. */
	authority?: string
	/**
	 * params defines the x/clock parameters to update.
	 *
	 * NOTE: All parameters must be supplied.
	 */
	params: ParamsAmino | undefined
}
export interface MsgUpdateParamsAminoMsg {
	type: "juno/x/clock/MsgUpdateParams"
	value: MsgUpdateParamsAmino
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export type MsgUpdateParamsResponse = {}
export interface MsgUpdateParamsResponseProtoMsg {
	typeUrl: "/juno.clock.v1.MsgUpdateParamsResponse"
	value: Uint8Array
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export type MsgUpdateParamsResponseAmino = {}
export interface MsgUpdateParamsResponseAminoMsg {
	type: "/juno.clock.v1.MsgUpdateParamsResponse"
	value: MsgUpdateParamsResponseAmino
}
function createBaseMsgRegisterClockContract(): MsgRegisterClockContract {
	return {
		senderAddress: "",
		contractAddress: ""
	}
}
export const MsgRegisterClockContract = {
	typeUrl: "/juno.clock.v1.MsgRegisterClockContract",
	encode(
		message: MsgRegisterClockContract,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		if (message.senderAddress && message.senderAddress !== "") {
			writer.uint32(10).string(message.senderAddress)
		}
		if (message.contractAddress && message.contractAddress !== "") {
			writer.uint32(18).string(message.contractAddress)
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterClockContract {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseMsgRegisterClockContract()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.senderAddress = reader.string()
					break
				case 2:
					message.contractAddress = reader.string()
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<MsgRegisterClockContract>): MsgRegisterClockContract {
		const message = createBaseMsgRegisterClockContract()
		message.senderAddress = object.senderAddress ?? ""
		message.contractAddress = object.contractAddress ?? ""
		return message
	},
	fromAmino(object: MsgRegisterClockContractAmino): MsgRegisterClockContract {
		const message = createBaseMsgRegisterClockContract()
		if (object.sender_address !== undefined && object.sender_address !== null) {
			message.senderAddress = object.sender_address
		}
		if (object.contract_address !== undefined && object.contract_address !== null) {
			message.contractAddress = object.contract_address
		}
		return message
	},
	toAmino(message: MsgRegisterClockContract): MsgRegisterClockContractAmino {
		const obj: any = {}
		obj.sender_address = message.senderAddress === "" ? undefined : message.senderAddress
		obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress
		return obj
	},
	fromAminoMsg(object: MsgRegisterClockContractAminoMsg): MsgRegisterClockContract {
		return MsgRegisterClockContract.fromAmino(object.value)
	},
	toAminoMsg(message: MsgRegisterClockContract): MsgRegisterClockContractAminoMsg {
		return {
			type: "juno/x/clock/MsgRegisterClockContract",
			value: MsgRegisterClockContract.toAmino(message)
		}
	},
	fromProtoMsg(message: MsgRegisterClockContractProtoMsg): MsgRegisterClockContract {
		return MsgRegisterClockContract.decode(message.value)
	},
	toProto(message: MsgRegisterClockContract): Uint8Array {
		return MsgRegisterClockContract.encode(message).finish()
	},
	toProtoMsg(message: MsgRegisterClockContract): MsgRegisterClockContractProtoMsg {
		return {
			typeUrl: "/juno.clock.v1.MsgRegisterClockContract",
			value: MsgRegisterClockContract.encode(message).finish()
		}
	}
}
function createBaseMsgRegisterClockContractResponse(): MsgRegisterClockContractResponse {
	return {}
}
export const MsgRegisterClockContractResponse = {
	typeUrl: "/juno.clock.v1.MsgRegisterClockContractResponse",
	encode(
		_: MsgRegisterClockContractResponse,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterClockContractResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseMsgRegisterClockContractResponse()
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
	fromPartial(_: Partial<MsgRegisterClockContractResponse>): MsgRegisterClockContractResponse {
		const message = createBaseMsgRegisterClockContractResponse()
		return message
	},
	fromAmino(_: MsgRegisterClockContractResponseAmino): MsgRegisterClockContractResponse {
		const message = createBaseMsgRegisterClockContractResponse()
		return message
	},
	toAmino(_: MsgRegisterClockContractResponse): MsgRegisterClockContractResponseAmino {
		const obj: any = {}
		return obj
	},
	fromAminoMsg(
		object: MsgRegisterClockContractResponseAminoMsg
	): MsgRegisterClockContractResponse {
		return MsgRegisterClockContractResponse.fromAmino(object.value)
	},
	fromProtoMsg(
		message: MsgRegisterClockContractResponseProtoMsg
	): MsgRegisterClockContractResponse {
		return MsgRegisterClockContractResponse.decode(message.value)
	},
	toProto(message: MsgRegisterClockContractResponse): Uint8Array {
		return MsgRegisterClockContractResponse.encode(message).finish()
	},
	toProtoMsg(message: MsgRegisterClockContractResponse): MsgRegisterClockContractResponseProtoMsg {
		return {
			typeUrl: "/juno.clock.v1.MsgRegisterClockContractResponse",
			value: MsgRegisterClockContractResponse.encode(message).finish()
		}
	}
}
function createBaseMsgUnregisterClockContract(): MsgUnregisterClockContract {
	return {
		senderAddress: "",
		contractAddress: ""
	}
}
export const MsgUnregisterClockContract = {
	typeUrl: "/juno.clock.v1.MsgUnregisterClockContract",
	encode(
		message: MsgUnregisterClockContract,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		if (message.senderAddress && message.senderAddress !== "") {
			writer.uint32(10).string(message.senderAddress)
		}
		if (message.contractAddress && message.contractAddress !== "") {
			writer.uint32(18).string(message.contractAddress)
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgUnregisterClockContract {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseMsgUnregisterClockContract()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.senderAddress = reader.string()
					break
				case 2:
					message.contractAddress = reader.string()
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<MsgUnregisterClockContract>): MsgUnregisterClockContract {
		const message = createBaseMsgUnregisterClockContract()
		message.senderAddress = object.senderAddress ?? ""
		message.contractAddress = object.contractAddress ?? ""
		return message
	},
	fromAmino(object: MsgUnregisterClockContractAmino): MsgUnregisterClockContract {
		const message = createBaseMsgUnregisterClockContract()
		if (object.sender_address !== undefined && object.sender_address !== null) {
			message.senderAddress = object.sender_address
		}
		if (object.contract_address !== undefined && object.contract_address !== null) {
			message.contractAddress = object.contract_address
		}
		return message
	},
	toAmino(message: MsgUnregisterClockContract): MsgUnregisterClockContractAmino {
		const obj: any = {}
		obj.sender_address = message.senderAddress === "" ? undefined : message.senderAddress
		obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress
		return obj
	},
	fromAminoMsg(object: MsgUnregisterClockContractAminoMsg): MsgUnregisterClockContract {
		return MsgUnregisterClockContract.fromAmino(object.value)
	},
	toAminoMsg(message: MsgUnregisterClockContract): MsgUnregisterClockContractAminoMsg {
		return {
			type: "juno/x/clock/MsgUnregisterClockContract",
			value: MsgUnregisterClockContract.toAmino(message)
		}
	},
	fromProtoMsg(message: MsgUnregisterClockContractProtoMsg): MsgUnregisterClockContract {
		return MsgUnregisterClockContract.decode(message.value)
	},
	toProto(message: MsgUnregisterClockContract): Uint8Array {
		return MsgUnregisterClockContract.encode(message).finish()
	},
	toProtoMsg(message: MsgUnregisterClockContract): MsgUnregisterClockContractProtoMsg {
		return {
			typeUrl: "/juno.clock.v1.MsgUnregisterClockContract",
			value: MsgUnregisterClockContract.encode(message).finish()
		}
	}
}
function createBaseMsgUnregisterClockContractResponse(): MsgUnregisterClockContractResponse {
	return {}
}
export const MsgUnregisterClockContractResponse = {
	typeUrl: "/juno.clock.v1.MsgUnregisterClockContractResponse",
	encode(
		_: MsgUnregisterClockContractResponse,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgUnregisterClockContractResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseMsgUnregisterClockContractResponse()
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
	fromPartial(_: Partial<MsgUnregisterClockContractResponse>): MsgUnregisterClockContractResponse {
		const message = createBaseMsgUnregisterClockContractResponse()
		return message
	},
	fromAmino(_: MsgUnregisterClockContractResponseAmino): MsgUnregisterClockContractResponse {
		const message = createBaseMsgUnregisterClockContractResponse()
		return message
	},
	toAmino(_: MsgUnregisterClockContractResponse): MsgUnregisterClockContractResponseAmino {
		const obj: any = {}
		return obj
	},
	fromAminoMsg(
		object: MsgUnregisterClockContractResponseAminoMsg
	): MsgUnregisterClockContractResponse {
		return MsgUnregisterClockContractResponse.fromAmino(object.value)
	},
	fromProtoMsg(
		message: MsgUnregisterClockContractResponseProtoMsg
	): MsgUnregisterClockContractResponse {
		return MsgUnregisterClockContractResponse.decode(message.value)
	},
	toProto(message: MsgUnregisterClockContractResponse): Uint8Array {
		return MsgUnregisterClockContractResponse.encode(message).finish()
	},
	toProtoMsg(
		message: MsgUnregisterClockContractResponse
	): MsgUnregisterClockContractResponseProtoMsg {
		return {
			typeUrl: "/juno.clock.v1.MsgUnregisterClockContractResponse",
			value: MsgUnregisterClockContractResponse.encode(message).finish()
		}
	}
}
function createBaseMsgUnjailClockContract(): MsgUnjailClockContract {
	return {
		senderAddress: "",
		contractAddress: ""
	}
}
export const MsgUnjailClockContract = {
	typeUrl: "/juno.clock.v1.MsgUnjailClockContract",
	encode(
		message: MsgUnjailClockContract,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		if (message.senderAddress && message.senderAddress !== "") {
			writer.uint32(10).string(message.senderAddress)
		}
		if (message.contractAddress && message.contractAddress !== "") {
			writer.uint32(18).string(message.contractAddress)
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgUnjailClockContract {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseMsgUnjailClockContract()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.senderAddress = reader.string()
					break
				case 2:
					message.contractAddress = reader.string()
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<MsgUnjailClockContract>): MsgUnjailClockContract {
		const message = createBaseMsgUnjailClockContract()
		message.senderAddress = object.senderAddress ?? ""
		message.contractAddress = object.contractAddress ?? ""
		return message
	},
	fromAmino(object: MsgUnjailClockContractAmino): MsgUnjailClockContract {
		const message = createBaseMsgUnjailClockContract()
		if (object.sender_address !== undefined && object.sender_address !== null) {
			message.senderAddress = object.sender_address
		}
		if (object.contract_address !== undefined && object.contract_address !== null) {
			message.contractAddress = object.contract_address
		}
		return message
	},
	toAmino(message: MsgUnjailClockContract): MsgUnjailClockContractAmino {
		const obj: any = {}
		obj.sender_address = message.senderAddress === "" ? undefined : message.senderAddress
		obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress
		return obj
	},
	fromAminoMsg(object: MsgUnjailClockContractAminoMsg): MsgUnjailClockContract {
		return MsgUnjailClockContract.fromAmino(object.value)
	},
	toAminoMsg(message: MsgUnjailClockContract): MsgUnjailClockContractAminoMsg {
		return {
			type: "juno/x/clock/MsgUnjailClockContract",
			value: MsgUnjailClockContract.toAmino(message)
		}
	},
	fromProtoMsg(message: MsgUnjailClockContractProtoMsg): MsgUnjailClockContract {
		return MsgUnjailClockContract.decode(message.value)
	},
	toProto(message: MsgUnjailClockContract): Uint8Array {
		return MsgUnjailClockContract.encode(message).finish()
	},
	toProtoMsg(message: MsgUnjailClockContract): MsgUnjailClockContractProtoMsg {
		return {
			typeUrl: "/juno.clock.v1.MsgUnjailClockContract",
			value: MsgUnjailClockContract.encode(message).finish()
		}
	}
}
function createBaseMsgUnjailClockContractResponse(): MsgUnjailClockContractResponse {
	return {}
}
export const MsgUnjailClockContractResponse = {
	typeUrl: "/juno.clock.v1.MsgUnjailClockContractResponse",
	encode(
		_: MsgUnjailClockContractResponse,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgUnjailClockContractResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseMsgUnjailClockContractResponse()
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
	fromPartial(_: Partial<MsgUnjailClockContractResponse>): MsgUnjailClockContractResponse {
		const message = createBaseMsgUnjailClockContractResponse()
		return message
	},
	fromAmino(_: MsgUnjailClockContractResponseAmino): MsgUnjailClockContractResponse {
		const message = createBaseMsgUnjailClockContractResponse()
		return message
	},
	toAmino(_: MsgUnjailClockContractResponse): MsgUnjailClockContractResponseAmino {
		const obj: any = {}
		return obj
	},
	fromAminoMsg(object: MsgUnjailClockContractResponseAminoMsg): MsgUnjailClockContractResponse {
		return MsgUnjailClockContractResponse.fromAmino(object.value)
	},
	fromProtoMsg(message: MsgUnjailClockContractResponseProtoMsg): MsgUnjailClockContractResponse {
		return MsgUnjailClockContractResponse.decode(message.value)
	},
	toProto(message: MsgUnjailClockContractResponse): Uint8Array {
		return MsgUnjailClockContractResponse.encode(message).finish()
	},
	toProtoMsg(message: MsgUnjailClockContractResponse): MsgUnjailClockContractResponseProtoMsg {
		return {
			typeUrl: "/juno.clock.v1.MsgUnjailClockContractResponse",
			value: MsgUnjailClockContractResponse.encode(message).finish()
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
	typeUrl: "/juno.clock.v1.MsgUpdateParams",
	encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.authority && message.authority !== "") {
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
		obj.params = message.params
			? Params.toAmino(message.params)
			: Params.toAmino(Params.fromPartial({}))
		return obj
	},
	fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
		return MsgUpdateParams.fromAmino(object.value)
	},
	toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
		return {
			type: "juno/x/clock/MsgUpdateParams",
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
			typeUrl: "/juno.clock.v1.MsgUpdateParams",
			value: MsgUpdateParams.encode(message).finish()
		}
	}
}
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
	return {}
}
export const MsgUpdateParamsResponse = {
	typeUrl: "/juno.clock.v1.MsgUpdateParamsResponse",
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
	fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
		return MsgUpdateParamsResponse.decode(message.value)
	},
	toProto(message: MsgUpdateParamsResponse): Uint8Array {
		return MsgUpdateParamsResponse.encode(message).finish()
	},
	toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
		return {
			typeUrl: "/juno.clock.v1.MsgUpdateParamsResponse",
			value: MsgUpdateParamsResponse.encode(message).finish()
		}
	}
}
