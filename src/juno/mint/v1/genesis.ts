import { BinaryReader, BinaryWriter } from "../../../binary"
import { Minter, type MinterAmino, Params, type ParamsAmino } from "./mint"
/** GenesisState defines the mint module's genesis state. */
export interface GenesisState {
	/** minter is a space for holding current inflation information. */
	minter: Minter | undefined
	/** params defines all the parameters of the module. */
	params: Params | undefined
}
export interface GenesisStateProtoMsg {
	typeUrl: "/juno.mint.v1.GenesisState"
	value: Uint8Array
}
/** GenesisState defines the mint module's genesis state. */
export interface GenesisStateAmino {
	/** minter is a space for holding current inflation information. */
	minter: MinterAmino | undefined
	/** params defines all the parameters of the module. */
	params: ParamsAmino | undefined
}
export interface GenesisStateAminoMsg {
	type: "/juno.mint.v1.GenesisState"
	value: GenesisStateAmino
}
function createBaseGenesisState(): GenesisState {
	return {
		minter: Minter.fromPartial({}),
		params: Params.fromPartial({})
	}
}
export const GenesisState = {
	typeUrl: "/juno.mint.v1.GenesisState",
	encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.minter !== undefined) {
			Minter.encode(message.minter, writer.uint32(10).fork()).ldelim()
		}
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(18).fork()).ldelim()
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseGenesisState()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.minter = Minter.decode(reader, reader.uint32())
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
	fromPartial(object: Partial<GenesisState>): GenesisState {
		const message = createBaseGenesisState()
		message.minter =
			object.minter !== undefined && object.minter !== null
				? Minter.fromPartial(object.minter)
				: undefined
		message.params =
			object.params !== undefined && object.params !== null
				? Params.fromPartial(object.params)
				: undefined
		return message
	},
	fromAmino(object: GenesisStateAmino): GenesisState {
		const message = createBaseGenesisState()
		if (object.minter !== undefined && object.minter !== null) {
			message.minter = Minter.fromAmino(object.minter)
		}
		if (object.params !== undefined && object.params !== null) {
			message.params = Params.fromAmino(object.params)
		}
		return message
	},
	toAmino(message: GenesisState): GenesisStateAmino {
		const obj: any = {}
		obj.minter = message.minter
			? Minter.toAmino(message.minter)
			: Minter.toAmino(Minter.fromPartial({}))
		obj.params = message.params
			? Params.toAmino(message.params)
			: Params.toAmino(Params.fromPartial({}))
		return obj
	},
	fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
		return GenesisState.fromAmino(object.value)
	},
	fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
		return GenesisState.decode(message.value)
	},
	toProto(message: GenesisState): Uint8Array {
		return GenesisState.encode(message).finish()
	},
	toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
		return {
			typeUrl: "/juno.mint.v1.GenesisState",
			value: GenesisState.encode(message).finish()
		}
	}
}
