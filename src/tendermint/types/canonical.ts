import { BinaryReader, BinaryWriter } from "../../binary"
import { Timestamp } from "../../google/protobuf/timestamp"
import { base64FromBytes, bytesFromBase64, fromTimestamp, toTimestamp } from "../../helpers"
import type { SignedMsgType } from "./types"
export interface CanonicalBlockID {
	hash: Uint8Array
	partSetHeader: CanonicalPartSetHeader | undefined
}
export interface CanonicalBlockIDProtoMsg {
	typeUrl: "/tendermint.types.CanonicalBlockID"
	value: Uint8Array
}
export interface CanonicalBlockIDAmino {
	hash?: string
	part_set_header?: CanonicalPartSetHeaderAmino | undefined
}
export interface CanonicalBlockIDAminoMsg {
	type: "/tendermint.types.CanonicalBlockID"
	value: CanonicalBlockIDAmino
}
export interface CanonicalPartSetHeader {
	total: number
	hash: Uint8Array
}
export interface CanonicalPartSetHeaderProtoMsg {
	typeUrl: "/tendermint.types.CanonicalPartSetHeader"
	value: Uint8Array
}
export interface CanonicalPartSetHeaderAmino {
	total?: number
	hash?: string
}
export interface CanonicalPartSetHeaderAminoMsg {
	type: "/tendermint.types.CanonicalPartSetHeader"
	value: CanonicalPartSetHeaderAmino
}
export interface CanonicalProposal {
	/** type alias for byte */
	type: SignedMsgType
	/** canonicalization requires fixed size encoding here */
	height: bigint
	/** canonicalization requires fixed size encoding here */
	round: bigint
	polRound: bigint
	blockId?: CanonicalBlockID | undefined
	timestamp: Date | undefined
	chainId: string
}
export interface CanonicalProposalProtoMsg {
	typeUrl: "/tendermint.types.CanonicalProposal"
	value: Uint8Array
}
export interface CanonicalProposalAmino {
	/** type alias for byte */
	type?: SignedMsgType
	/** canonicalization requires fixed size encoding here */
	height?: string
	/** canonicalization requires fixed size encoding here */
	round?: string
	pol_round?: string
	block_id?: CanonicalBlockIDAmino | undefined
	timestamp?: string | undefined
	chain_id?: string
}
export interface CanonicalProposalAminoMsg {
	type: "/tendermint.types.CanonicalProposal"
	value: CanonicalProposalAmino
}
export interface CanonicalVote {
	/** type alias for byte */
	type: SignedMsgType
	/** canonicalization requires fixed size encoding here */
	height: bigint
	/** canonicalization requires fixed size encoding here */
	round: bigint
	blockId?: CanonicalBlockID | undefined
	timestamp: Date | undefined
	chainId: string
}
export interface CanonicalVoteProtoMsg {
	typeUrl: "/tendermint.types.CanonicalVote"
	value: Uint8Array
}
export interface CanonicalVoteAmino {
	/** type alias for byte */
	type?: SignedMsgType
	/** canonicalization requires fixed size encoding here */
	height?: string
	/** canonicalization requires fixed size encoding here */
	round?: string
	block_id?: CanonicalBlockIDAmino | undefined
	timestamp?: string | undefined
	chain_id?: string
}
export interface CanonicalVoteAminoMsg {
	type: "/tendermint.types.CanonicalVote"
	value: CanonicalVoteAmino
}
/**
 * CanonicalVoteExtension provides us a way to serialize a vote extension from
 * a particular validator such that we can sign over those serialized bytes.
 */
export interface CanonicalVoteExtension {
	extension: Uint8Array
	height: bigint
	round: bigint
	chainId: string
}
export interface CanonicalVoteExtensionProtoMsg {
	typeUrl: "/tendermint.types.CanonicalVoteExtension"
	value: Uint8Array
}
/**
 * CanonicalVoteExtension provides us a way to serialize a vote extension from
 * a particular validator such that we can sign over those serialized bytes.
 */
export interface CanonicalVoteExtensionAmino {
	extension?: string
	height?: string
	round?: string
	chain_id?: string
}
export interface CanonicalVoteExtensionAminoMsg {
	type: "/tendermint.types.CanonicalVoteExtension"
	value: CanonicalVoteExtensionAmino
}
function createBaseCanonicalBlockID(): CanonicalBlockID {
	return {
		hash: new Uint8Array(),
		partSetHeader: CanonicalPartSetHeader.fromPartial({})
	}
}
export const CanonicalBlockID = {
	typeUrl: "/tendermint.types.CanonicalBlockID",
	encode(message: CanonicalBlockID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.hash.length !== 0) {
			writer.uint32(10).bytes(message.hash)
		}
		if (message.partSetHeader !== undefined) {
			CanonicalPartSetHeader.encode(message.partSetHeader, writer.uint32(18).fork()).ldelim()
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): CanonicalBlockID {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseCanonicalBlockID()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.hash = reader.bytes()
					break
				case 2:
					message.partSetHeader = CanonicalPartSetHeader.decode(reader, reader.uint32())
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<CanonicalBlockID>): CanonicalBlockID {
		const message = createBaseCanonicalBlockID()
		message.hash = object.hash ?? new Uint8Array()
		message.partSetHeader =
			object.partSetHeader !== undefined && object.partSetHeader !== null
				? CanonicalPartSetHeader.fromPartial(object.partSetHeader)
				: undefined
		return message
	},
	fromAmino(object: CanonicalBlockIDAmino): CanonicalBlockID {
		const message = createBaseCanonicalBlockID()
		if (object.hash !== undefined && object.hash !== null) {
			message.hash = bytesFromBase64(object.hash)
		}
		if (object.part_set_header !== undefined && object.part_set_header !== null) {
			message.partSetHeader = CanonicalPartSetHeader.fromAmino(object.part_set_header)
		}
		return message
	},
	toAmino(message: CanonicalBlockID): CanonicalBlockIDAmino {
		const obj: any = {}
		obj.hash = message.hash ? base64FromBytes(message.hash) : undefined
		obj.part_set_header = message.partSetHeader
			? CanonicalPartSetHeader.toAmino(message.partSetHeader)
			: undefined
		return obj
	},
	fromAminoMsg(object: CanonicalBlockIDAminoMsg): CanonicalBlockID {
		return CanonicalBlockID.fromAmino(object.value)
	},
	fromProtoMsg(message: CanonicalBlockIDProtoMsg): CanonicalBlockID {
		return CanonicalBlockID.decode(message.value)
	},
	toProto(message: CanonicalBlockID): Uint8Array {
		return CanonicalBlockID.encode(message).finish()
	},
	toProtoMsg(message: CanonicalBlockID): CanonicalBlockIDProtoMsg {
		return {
			typeUrl: "/tendermint.types.CanonicalBlockID",
			value: CanonicalBlockID.encode(message).finish()
		}
	}
}
function createBaseCanonicalPartSetHeader(): CanonicalPartSetHeader {
	return {
		total: 0,
		hash: new Uint8Array()
	}
}
export const CanonicalPartSetHeader = {
	typeUrl: "/tendermint.types.CanonicalPartSetHeader",
	encode(
		message: CanonicalPartSetHeader,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		if (message.total && message.total !== 0) {
			writer.uint32(8).uint32(message.total)
		}
		if (message.hash.length !== 0) {
			writer.uint32(18).bytes(message.hash)
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): CanonicalPartSetHeader {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseCanonicalPartSetHeader()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.total = reader.uint32()
					break
				case 2:
					message.hash = reader.bytes()
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<CanonicalPartSetHeader>): CanonicalPartSetHeader {
		const message = createBaseCanonicalPartSetHeader()
		message.total = object.total ?? 0
		message.hash = object.hash ?? new Uint8Array()
		return message
	},
	fromAmino(object: CanonicalPartSetHeaderAmino): CanonicalPartSetHeader {
		const message = createBaseCanonicalPartSetHeader()
		if (object.total !== undefined && object.total !== null) {
			message.total = object.total
		}
		if (object.hash !== undefined && object.hash !== null) {
			message.hash = bytesFromBase64(object.hash)
		}
		return message
	},
	toAmino(message: CanonicalPartSetHeader): CanonicalPartSetHeaderAmino {
		const obj: any = {}
		obj.total = message.total === 0 ? undefined : message.total
		obj.hash = message.hash ? base64FromBytes(message.hash) : undefined
		return obj
	},
	fromAminoMsg(object: CanonicalPartSetHeaderAminoMsg): CanonicalPartSetHeader {
		return CanonicalPartSetHeader.fromAmino(object.value)
	},
	fromProtoMsg(message: CanonicalPartSetHeaderProtoMsg): CanonicalPartSetHeader {
		return CanonicalPartSetHeader.decode(message.value)
	},
	toProto(message: CanonicalPartSetHeader): Uint8Array {
		return CanonicalPartSetHeader.encode(message).finish()
	},
	toProtoMsg(message: CanonicalPartSetHeader): CanonicalPartSetHeaderProtoMsg {
		return {
			typeUrl: "/tendermint.types.CanonicalPartSetHeader",
			value: CanonicalPartSetHeader.encode(message).finish()
		}
	}
}
function createBaseCanonicalProposal(): CanonicalProposal {
	return {
		type: 0,
		height: BigInt(0),
		round: BigInt(0),
		polRound: BigInt(0),
		blockId: undefined,
		timestamp: new Date(),
		chainId: ""
	}
}
export const CanonicalProposal = {
	typeUrl: "/tendermint.types.CanonicalProposal",
	encode(message: CanonicalProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.type !== 0) {
			writer.uint32(8).int32(message.type)
		}
		if (message.height && message.height !== BigInt(0)) {
			writer.uint32(17).sfixed64(message.height)
		}
		if (message.round && message.round !== BigInt(0)) {
			writer.uint32(25).sfixed64(message.round)
		}
		if (message.polRound && message.polRound !== BigInt(0)) {
			writer.uint32(32).int64(message.polRound)
		}
		if (message.blockId !== undefined) {
			CanonicalBlockID.encode(message.blockId, writer.uint32(42).fork()).ldelim()
		}
		if (message.timestamp !== undefined) {
			Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(50).fork()).ldelim()
		}
		if (message.chainId && message.chainId !== "") {
			writer.uint32(58).string(message.chainId)
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): CanonicalProposal {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseCanonicalProposal()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.type = reader.int32() as any
					break
				case 2:
					message.height = reader.sfixed64()
					break
				case 3:
					message.round = reader.sfixed64()
					break
				case 4:
					message.polRound = reader.int64()
					break
				case 5:
					message.blockId = CanonicalBlockID.decode(reader, reader.uint32())
					break
				case 6:
					message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()))
					break
				case 7:
					message.chainId = reader.string()
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<CanonicalProposal>): CanonicalProposal {
		const message = createBaseCanonicalProposal()
		message.type = object.type ?? 0
		message.height =
			object.height !== undefined && object.height !== null
				? BigInt(object.height.toString())
				: BigInt(0)
		message.round =
			object.round !== undefined && object.round !== null
				? BigInt(object.round.toString())
				: BigInt(0)
		message.polRound =
			object.polRound !== undefined && object.polRound !== null
				? BigInt(object.polRound.toString())
				: BigInt(0)
		message.blockId =
			object.blockId !== undefined && object.blockId !== null
				? CanonicalBlockID.fromPartial(object.blockId)
				: undefined
		message.timestamp = object.timestamp ?? undefined
		message.chainId = object.chainId ?? ""
		return message
	},
	fromAmino(object: CanonicalProposalAmino): CanonicalProposal {
		const message = createBaseCanonicalProposal()
		if (object.type !== undefined && object.type !== null) {
			message.type = object.type
		}
		if (object.height !== undefined && object.height !== null) {
			message.height = BigInt(object.height)
		}
		if (object.round !== undefined && object.round !== null) {
			message.round = BigInt(object.round)
		}
		if (object.pol_round !== undefined && object.pol_round !== null) {
			message.polRound = BigInt(object.pol_round)
		}
		if (object.block_id !== undefined && object.block_id !== null) {
			message.blockId = CanonicalBlockID.fromAmino(object.block_id)
		}
		if (object.timestamp !== undefined && object.timestamp !== null) {
			message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp))
		}
		if (object.chain_id !== undefined && object.chain_id !== null) {
			message.chainId = object.chain_id
		}
		return message
	},
	toAmino(message: CanonicalProposal): CanonicalProposalAmino {
		const obj: any = {}
		obj.type = message.type === 0 ? undefined : message.type
		obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined
		obj.round = message.round !== BigInt(0) ? message.round?.toString() : undefined
		obj.pol_round = message.polRound !== BigInt(0) ? message.polRound?.toString() : undefined
		obj.block_id = message.blockId ? CanonicalBlockID.toAmino(message.blockId) : undefined
		obj.timestamp = message.timestamp
			? Timestamp.toAmino(toTimestamp(message.timestamp))
			: undefined
		obj.chain_id = message.chainId === "" ? undefined : message.chainId
		return obj
	},
	fromAminoMsg(object: CanonicalProposalAminoMsg): CanonicalProposal {
		return CanonicalProposal.fromAmino(object.value)
	},
	fromProtoMsg(message: CanonicalProposalProtoMsg): CanonicalProposal {
		return CanonicalProposal.decode(message.value)
	},
	toProto(message: CanonicalProposal): Uint8Array {
		return CanonicalProposal.encode(message).finish()
	},
	toProtoMsg(message: CanonicalProposal): CanonicalProposalProtoMsg {
		return {
			typeUrl: "/tendermint.types.CanonicalProposal",
			value: CanonicalProposal.encode(message).finish()
		}
	}
}
function createBaseCanonicalVote(): CanonicalVote {
	return {
		type: 0,
		height: BigInt(0),
		round: BigInt(0),
		blockId: undefined,
		timestamp: new Date(),
		chainId: ""
	}
}
export const CanonicalVote = {
	typeUrl: "/tendermint.types.CanonicalVote",
	encode(message: CanonicalVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.type !== 0) {
			writer.uint32(8).int32(message.type)
		}
		if (message.height && message.height !== BigInt(0)) {
			writer.uint32(17).sfixed64(message.height)
		}
		if (message.round && message.round !== BigInt(0)) {
			writer.uint32(25).sfixed64(message.round)
		}
		if (message.blockId !== undefined) {
			CanonicalBlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim()
		}
		if (message.timestamp !== undefined) {
			Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim()
		}
		if (message.chainId && message.chainId !== "") {
			writer.uint32(50).string(message.chainId)
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): CanonicalVote {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseCanonicalVote()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.type = reader.int32() as any
					break
				case 2:
					message.height = reader.sfixed64()
					break
				case 3:
					message.round = reader.sfixed64()
					break
				case 4:
					message.blockId = CanonicalBlockID.decode(reader, reader.uint32())
					break
				case 5:
					message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()))
					break
				case 6:
					message.chainId = reader.string()
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<CanonicalVote>): CanonicalVote {
		const message = createBaseCanonicalVote()
		message.type = object.type ?? 0
		message.height =
			object.height !== undefined && object.height !== null
				? BigInt(object.height.toString())
				: BigInt(0)
		message.round =
			object.round !== undefined && object.round !== null
				? BigInt(object.round.toString())
				: BigInt(0)
		message.blockId =
			object.blockId !== undefined && object.blockId !== null
				? CanonicalBlockID.fromPartial(object.blockId)
				: undefined
		message.timestamp = object.timestamp ?? undefined
		message.chainId = object.chainId ?? ""
		return message
	},
	fromAmino(object: CanonicalVoteAmino): CanonicalVote {
		const message = createBaseCanonicalVote()
		if (object.type !== undefined && object.type !== null) {
			message.type = object.type
		}
		if (object.height !== undefined && object.height !== null) {
			message.height = BigInt(object.height)
		}
		if (object.round !== undefined && object.round !== null) {
			message.round = BigInt(object.round)
		}
		if (object.block_id !== undefined && object.block_id !== null) {
			message.blockId = CanonicalBlockID.fromAmino(object.block_id)
		}
		if (object.timestamp !== undefined && object.timestamp !== null) {
			message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp))
		}
		if (object.chain_id !== undefined && object.chain_id !== null) {
			message.chainId = object.chain_id
		}
		return message
	},
	toAmino(message: CanonicalVote): CanonicalVoteAmino {
		const obj: any = {}
		obj.type = message.type === 0 ? undefined : message.type
		obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined
		obj.round = message.round !== BigInt(0) ? message.round?.toString() : undefined
		obj.block_id = message.blockId ? CanonicalBlockID.toAmino(message.blockId) : undefined
		obj.timestamp = message.timestamp
			? Timestamp.toAmino(toTimestamp(message.timestamp))
			: undefined
		obj.chain_id = message.chainId === "" ? undefined : message.chainId
		return obj
	},
	fromAminoMsg(object: CanonicalVoteAminoMsg): CanonicalVote {
		return CanonicalVote.fromAmino(object.value)
	},
	fromProtoMsg(message: CanonicalVoteProtoMsg): CanonicalVote {
		return CanonicalVote.decode(message.value)
	},
	toProto(message: CanonicalVote): Uint8Array {
		return CanonicalVote.encode(message).finish()
	},
	toProtoMsg(message: CanonicalVote): CanonicalVoteProtoMsg {
		return {
			typeUrl: "/tendermint.types.CanonicalVote",
			value: CanonicalVote.encode(message).finish()
		}
	}
}
function createBaseCanonicalVoteExtension(): CanonicalVoteExtension {
	return {
		extension: new Uint8Array(),
		height: BigInt(0),
		round: BigInt(0),
		chainId: ""
	}
}
export const CanonicalVoteExtension = {
	typeUrl: "/tendermint.types.CanonicalVoteExtension",
	encode(
		message: CanonicalVoteExtension,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		if (message.extension.length !== 0) {
			writer.uint32(10).bytes(message.extension)
		}
		if (message.height && message.height !== BigInt(0)) {
			writer.uint32(17).sfixed64(message.height)
		}
		if (message.round && message.round !== BigInt(0)) {
			writer.uint32(25).sfixed64(message.round)
		}
		if (message.chainId && message.chainId !== "") {
			writer.uint32(34).string(message.chainId)
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): CanonicalVoteExtension {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseCanonicalVoteExtension()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.extension = reader.bytes()
					break
				case 2:
					message.height = reader.sfixed64()
					break
				case 3:
					message.round = reader.sfixed64()
					break
				case 4:
					message.chainId = reader.string()
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<CanonicalVoteExtension>): CanonicalVoteExtension {
		const message = createBaseCanonicalVoteExtension()
		message.extension = object.extension ?? new Uint8Array()
		message.height =
			object.height !== undefined && object.height !== null
				? BigInt(object.height.toString())
				: BigInt(0)
		message.round =
			object.round !== undefined && object.round !== null
				? BigInt(object.round.toString())
				: BigInt(0)
		message.chainId = object.chainId ?? ""
		return message
	},
	fromAmino(object: CanonicalVoteExtensionAmino): CanonicalVoteExtension {
		const message = createBaseCanonicalVoteExtension()
		if (object.extension !== undefined && object.extension !== null) {
			message.extension = bytesFromBase64(object.extension)
		}
		if (object.height !== undefined && object.height !== null) {
			message.height = BigInt(object.height)
		}
		if (object.round !== undefined && object.round !== null) {
			message.round = BigInt(object.round)
		}
		if (object.chain_id !== undefined && object.chain_id !== null) {
			message.chainId = object.chain_id
		}
		return message
	},
	toAmino(message: CanonicalVoteExtension): CanonicalVoteExtensionAmino {
		const obj: any = {}
		obj.extension = message.extension ? base64FromBytes(message.extension) : undefined
		obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined
		obj.round = message.round !== BigInt(0) ? message.round?.toString() : undefined
		obj.chain_id = message.chainId === "" ? undefined : message.chainId
		return obj
	},
	fromAminoMsg(object: CanonicalVoteExtensionAminoMsg): CanonicalVoteExtension {
		return CanonicalVoteExtension.fromAmino(object.value)
	},
	fromProtoMsg(message: CanonicalVoteExtensionProtoMsg): CanonicalVoteExtension {
		return CanonicalVoteExtension.decode(message.value)
	},
	toProto(message: CanonicalVoteExtension): Uint8Array {
		return CanonicalVoteExtension.encode(message).finish()
	},
	toProtoMsg(message: CanonicalVoteExtension): CanonicalVoteExtensionProtoMsg {
		return {
			typeUrl: "/tendermint.types.CanonicalVoteExtension",
			value: CanonicalVoteExtension.encode(message).finish()
		}
	}
}
