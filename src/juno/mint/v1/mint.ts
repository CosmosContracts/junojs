import { BinaryReader, BinaryWriter } from "../../../binary"
import { Decimal } from "../../../decimals"
/** Minter represents the minting state. */
export interface Minter {
	/** current annual inflation rate */
	inflation: string
	phase: bigint
	startPhaseBlock: bigint
	/** current annual expected provisions */
	annualProvisions: string
	targetSupply: string
}
export interface MinterProtoMsg {
	typeUrl: "/juno.mint.v1.Minter"
	value: Uint8Array
}
/** Minter represents the minting state. */
export interface MinterAmino {
	/** current annual inflation rate */
	inflation?: string
	phase?: string
	start_phase_block?: string
	/** current annual expected provisions */
	annual_provisions?: string
	target_supply?: string
}
export interface MinterAminoMsg {
	type: "/juno.mint.v1.Minter"
	value: MinterAmino
}
/** Params holds parameters for the mint module. */
export interface Params {
	/** type of coin to mint */
	mintDenom: string
	/** expected blocks per year */
	blocksPerYear: bigint
}
export interface ParamsProtoMsg {
	typeUrl: "/juno.mint.v1.Params"
	value: Uint8Array
}
/** Params holds parameters for the mint module. */
export interface ParamsAmino {
	/** type of coin to mint */
	mint_denom?: string
	/** expected blocks per year */
	blocks_per_year?: string
}
export interface ParamsAminoMsg {
	type: "cosmos-sdk/x/mint/Params"
	value: ParamsAmino
}
function createBaseMinter(): Minter {
	return {
		inflation: "",
		phase: BigInt(0),
		startPhaseBlock: BigInt(0),
		annualProvisions: "",
		targetSupply: ""
	}
}
export const Minter = {
	typeUrl: "/juno.mint.v1.Minter",
	encode(message: Minter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.inflation !== undefined) {
			writer.uint32(10).string(Decimal.fromUserInput(message.inflation, 18).atomics)
		}
		if (message.phase !== undefined) {
			writer.uint32(16).uint64(message.phase)
		}
		if (message.startPhaseBlock !== undefined) {
			writer.uint32(24).uint64(message.startPhaseBlock)
		}
		if (message.annualProvisions !== undefined) {
			writer.uint32(34).string(Decimal.fromUserInput(message.annualProvisions, 18).atomics)
		}
		if (message.targetSupply !== undefined) {
			writer.uint32(42).string(message.targetSupply)
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): Minter {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseMinter()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.inflation = Decimal.fromAtomics(reader.string(), 18).toString()
					break
				case 2:
					message.phase = reader.uint64()
					break
				case 3:
					message.startPhaseBlock = reader.uint64()
					break
				case 4:
					message.annualProvisions = Decimal.fromAtomics(reader.string(), 18).toString()
					break
				case 5:
					message.targetSupply = reader.string()
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<Minter>): Minter {
		const message = createBaseMinter()
		message.inflation = object.inflation ?? ""
		message.phase =
			object.phase !== undefined && object.phase !== null
				? BigInt(object.phase.toString())
				: BigInt(0)
		message.startPhaseBlock =
			object.startPhaseBlock !== undefined && object.startPhaseBlock !== null
				? BigInt(object.startPhaseBlock.toString())
				: BigInt(0)
		message.annualProvisions = object.annualProvisions ?? ""
		message.targetSupply = object.targetSupply ?? ""
		return message
	},
	fromAmino(object: MinterAmino): Minter {
		const message = createBaseMinter()
		if (object.inflation !== undefined && object.inflation !== null) {
			message.inflation = object.inflation
		}
		if (object.phase !== undefined && object.phase !== null) {
			message.phase = BigInt(object.phase)
		}
		if (object.start_phase_block !== undefined && object.start_phase_block !== null) {
			message.startPhaseBlock = BigInt(object.start_phase_block)
		}
		if (object.annual_provisions !== undefined && object.annual_provisions !== null) {
			message.annualProvisions = object.annual_provisions
		}
		if (object.target_supply !== undefined && object.target_supply !== null) {
			message.targetSupply = object.target_supply
		}
		return message
	},
	toAmino(message: Minter): MinterAmino {
		const obj: any = {}
		obj.inflation = message.inflation === "" ? undefined : message.inflation
		obj.phase = message.phase !== BigInt(0) ? message.phase?.toString() : undefined
		obj.start_phase_block =
			message.startPhaseBlock !== BigInt(0) ? message.startPhaseBlock?.toString() : undefined
		obj.annual_provisions = message.annualProvisions === "" ? undefined : message.annualProvisions
		obj.target_supply = message.targetSupply === "" ? undefined : message.targetSupply
		return obj
	},
	fromAminoMsg(object: MinterAminoMsg): Minter {
		return Minter.fromAmino(object.value)
	},
	fromProtoMsg(message: MinterProtoMsg): Minter {
		return Minter.decode(message.value)
	},
	toProto(message: Minter): Uint8Array {
		return Minter.encode(message).finish()
	},
	toProtoMsg(message: Minter): MinterProtoMsg {
		return {
			typeUrl: "/juno.mint.v1.Minter",
			value: Minter.encode(message).finish()
		}
	}
}
function createBaseParams(): Params {
	return {
		mintDenom: "",
		blocksPerYear: BigInt(0)
	}
}
export const Params = {
	typeUrl: "/juno.mint.v1.Params",
	encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.mintDenom !== undefined) {
			writer.uint32(10).string(message.mintDenom)
		}
		if (message.blocksPerYear !== undefined) {
			writer.uint32(16).uint64(message.blocksPerYear)
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): Params {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseParams()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.mintDenom = reader.string()
					break
				case 2:
					message.blocksPerYear = reader.uint64()
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<Params>): Params {
		const message = createBaseParams()
		message.mintDenom = object.mintDenom ?? ""
		message.blocksPerYear =
			object.blocksPerYear !== undefined && object.blocksPerYear !== null
				? BigInt(object.blocksPerYear.toString())
				: BigInt(0)
		return message
	},
	fromAmino(object: ParamsAmino): Params {
		const message = createBaseParams()
		if (object.mint_denom !== undefined && object.mint_denom !== null) {
			message.mintDenom = object.mint_denom
		}
		if (object.blocks_per_year !== undefined && object.blocks_per_year !== null) {
			message.blocksPerYear = BigInt(object.blocks_per_year)
		}
		return message
	},
	toAmino(message: Params): ParamsAmino {
		const obj: any = {}
		obj.mint_denom = message.mintDenom === "" ? undefined : message.mintDenom
		obj.blocks_per_year =
			message.blocksPerYear !== BigInt(0) ? message.blocksPerYear?.toString() : undefined
		return obj
	},
	fromAminoMsg(object: ParamsAminoMsg): Params {
		return Params.fromAmino(object.value)
	},
	toAminoMsg(message: Params): ParamsAminoMsg {
		return {
			type: "cosmos-sdk/x/mint/Params",
			value: Params.toAmino(message)
		}
	},
	fromProtoMsg(message: ParamsProtoMsg): Params {
		return Params.decode(message.value)
	},
	toProto(message: Params): Uint8Array {
		return Params.encode(message).finish()
	},
	toProtoMsg(message: Params): ParamsProtoMsg {
		return {
			typeUrl: "/juno.mint.v1.Params",
			value: Params.encode(message).finish()
		}
	}
}
