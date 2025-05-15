import { BinaryReader, BinaryWriter } from "../../binary"
import { Timestamp } from "../../google/protobuf/timestamp"
import { base64FromBytes, bytesFromBase64, fromTimestamp, toTimestamp } from "../../helpers"
import {
	Event,
	type EventAmino,
	ExecTxResult,
	type ExecTxResultAmino,
	ResponseFinalizeBlock,
	type ResponseFinalizeBlockAmino,
	ValidatorUpdate,
	type ValidatorUpdateAmino
} from "../abci/types"
import { ConsensusParams, type ConsensusParamsAmino } from "../types/params"
import { BlockID, type BlockIDAmino } from "../types/types"
import { ValidatorSet, type ValidatorSetAmino } from "../types/validator"
import { Consensus, type ConsensusAmino } from "../version/types"
/**
 * LegacyABCIResponses retains the responses
 * of the legacy ABCI calls during block processing.
 * Note ReponseDeliverTx is renamed to ExecTxResult but they are semantically the same
 * Kept for backwards compatibility for versions prior to v0.38
 */
export interface LegacyABCIResponses {
	deliverTxs: ExecTxResult[]
	endBlock?: ResponseEndBlock
	beginBlock?: ResponseBeginBlock
}
export interface LegacyABCIResponsesProtoMsg {
	typeUrl: "/tendermint.state.LegacyABCIResponses"
	value: Uint8Array
}
/**
 * LegacyABCIResponses retains the responses
 * of the legacy ABCI calls during block processing.
 * Note ReponseDeliverTx is renamed to ExecTxResult but they are semantically the same
 * Kept for backwards compatibility for versions prior to v0.38
 */
export interface LegacyABCIResponsesAmino {
	deliver_txs?: ExecTxResultAmino[]
	end_block?: ResponseEndBlockAmino
	begin_block?: ResponseBeginBlockAmino
}
export interface LegacyABCIResponsesAminoMsg {
	type: "/tendermint.state.LegacyABCIResponses"
	value: LegacyABCIResponsesAmino
}
/** ResponseBeginBlock is kept for backwards compatibility for versions prior to v0.38 */
export interface ResponseBeginBlock {
	events: Event[]
}
export interface ResponseBeginBlockProtoMsg {
	typeUrl: "/tendermint.state.ResponseBeginBlock"
	value: Uint8Array
}
/** ResponseBeginBlock is kept for backwards compatibility for versions prior to v0.38 */
export interface ResponseBeginBlockAmino {
	events?: EventAmino[]
}
export interface ResponseBeginBlockAminoMsg {
	type: "/tendermint.state.ResponseBeginBlock"
	value: ResponseBeginBlockAmino
}
/** ResponseEndBlock is kept for backwards compatibility for versions prior to v0.38 */
export interface ResponseEndBlock {
	validatorUpdates: ValidatorUpdate[]
	consensusParamUpdates?: ConsensusParams
	events: Event[]
}
export interface ResponseEndBlockProtoMsg {
	typeUrl: "/tendermint.state.ResponseEndBlock"
	value: Uint8Array
}
/** ResponseEndBlock is kept for backwards compatibility for versions prior to v0.38 */
export interface ResponseEndBlockAmino {
	validator_updates?: ValidatorUpdateAmino[]
	consensus_param_updates?: ConsensusParamsAmino
	events?: EventAmino[]
}
export interface ResponseEndBlockAminoMsg {
	type: "/tendermint.state.ResponseEndBlock"
	value: ResponseEndBlockAmino
}
/** ValidatorsInfo represents the latest validator set, or the last height it changed */
export interface ValidatorsInfo {
	validatorSet?: ValidatorSet
	lastHeightChanged: bigint
}
export interface ValidatorsInfoProtoMsg {
	typeUrl: "/tendermint.state.ValidatorsInfo"
	value: Uint8Array
}
/** ValidatorsInfo represents the latest validator set, or the last height it changed */
export interface ValidatorsInfoAmino {
	validator_set?: ValidatorSetAmino
	last_height_changed?: string
}
export interface ValidatorsInfoAminoMsg {
	type: "/tendermint.state.ValidatorsInfo"
	value: ValidatorsInfoAmino
}
/** ConsensusParamsInfo represents the latest consensus params, or the last height it changed */
export interface ConsensusParamsInfo {
	consensusParams: ConsensusParams
	lastHeightChanged: bigint
}
export interface ConsensusParamsInfoProtoMsg {
	typeUrl: "/tendermint.state.ConsensusParamsInfo"
	value: Uint8Array
}
/** ConsensusParamsInfo represents the latest consensus params, or the last height it changed */
export interface ConsensusParamsInfoAmino {
	consensus_params?: ConsensusParamsAmino
	last_height_changed?: string
}
export interface ConsensusParamsInfoAminoMsg {
	type: "/tendermint.state.ConsensusParamsInfo"
	value: ConsensusParamsInfoAmino
}
export interface ABCIResponsesInfo {
	legacyAbciResponses?: LegacyABCIResponses
	height: bigint
	responseFinalizeBlock?: ResponseFinalizeBlock
}
export interface ABCIResponsesInfoProtoMsg {
	typeUrl: "/tendermint.state.ABCIResponsesInfo"
	value: Uint8Array
}
export interface ABCIResponsesInfoAmino {
	legacy_abci_responses?: LegacyABCIResponsesAmino
	height?: string
	response_finalize_block?: ResponseFinalizeBlockAmino
}
export interface ABCIResponsesInfoAminoMsg {
	type: "/tendermint.state.ABCIResponsesInfo"
	value: ABCIResponsesInfoAmino
}
export interface Version {
	consensus: Consensus
	software: string
}
export interface VersionProtoMsg {
	typeUrl: "/tendermint.state.Version"
	value: Uint8Array
}
export interface VersionAmino {
	consensus?: ConsensusAmino
	software?: string
}
export interface VersionAminoMsg {
	type: "/tendermint.state.Version"
	value: VersionAmino
}
export interface State {
	version: Version
	/** immutable */
	chainId: string
	initialHeight: bigint
	/** LastBlockHeight=0 at genesis (ie. block(H=0) does not exist) */
	lastBlockHeight: bigint
	lastBlockId: BlockID
	lastBlockTime: Date
	/**
	 * LastValidators is used to validate block.LastCommit.
	 * Validators are persisted to the database separately every time they change,
	 * so we can query for historical validator sets.
	 * Note that if s.LastBlockHeight causes a valset change,
	 * we set s.LastHeightValidatorsChanged = s.LastBlockHeight + 1 + 1
	 * Extra +1 due to nextValSet delay.
	 */
	nextValidators?: ValidatorSet
	validators?: ValidatorSet
	lastValidators?: ValidatorSet
	lastHeightValidatorsChanged: bigint
	/**
	 * Consensus parameters used for validating blocks.
	 * Changes returned by EndBlock and updated after Commit.
	 */
	consensusParams: ConsensusParams
	lastHeightConsensusParamsChanged: bigint
	/** Merkle root of the results from executing prev block */
	lastResultsHash: Uint8Array
	/** the latest AppHash we've received from calling abci.Commit() */
	appHash: Uint8Array
}
export interface StateProtoMsg {
	typeUrl: "/tendermint.state.State"
	value: Uint8Array
}
export interface StateAmino {
	version?: VersionAmino
	/** immutable */
	chain_id?: string
	initial_height?: string
	/** LastBlockHeight=0 at genesis (ie. block(H=0) does not exist) */
	last_block_height?: string
	last_block_id?: BlockIDAmino
	last_block_time?: string
	/**
	 * LastValidators is used to validate block.LastCommit.
	 * Validators are persisted to the database separately every time they change,
	 * so we can query for historical validator sets.
	 * Note that if s.LastBlockHeight causes a valset change,
	 * we set s.LastHeightValidatorsChanged = s.LastBlockHeight + 1 + 1
	 * Extra +1 due to nextValSet delay.
	 */
	next_validators?: ValidatorSetAmino
	validators?: ValidatorSetAmino
	last_validators?: ValidatorSetAmino
	last_height_validators_changed?: string
	/**
	 * Consensus parameters used for validating blocks.
	 * Changes returned by EndBlock and updated after Commit.
	 */
	consensus_params?: ConsensusParamsAmino
	last_height_consensus_params_changed?: string
	/** Merkle root of the results from executing prev block */
	last_results_hash?: string
	/** the latest AppHash we've received from calling abci.Commit() */
	app_hash?: string
}
export interface StateAminoMsg {
	type: "/tendermint.state.State"
	value: StateAmino
}
function createBaseLegacyABCIResponses(): LegacyABCIResponses {
	return {
		deliverTxs: [],
		endBlock: undefined,
		beginBlock: undefined
	}
}
export const LegacyABCIResponses = {
	typeUrl: "/tendermint.state.LegacyABCIResponses",
	encode(
		message: LegacyABCIResponses,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		for (const v of message.deliverTxs) {
			ExecTxResult.encode(v!, writer.uint32(10).fork()).ldelim()
		}
		if (message.endBlock !== undefined) {
			ResponseEndBlock.encode(message.endBlock, writer.uint32(18).fork()).ldelim()
		}
		if (message.beginBlock !== undefined) {
			ResponseBeginBlock.encode(message.beginBlock, writer.uint32(26).fork()).ldelim()
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): LegacyABCIResponses {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseLegacyABCIResponses()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.deliverTxs.push(ExecTxResult.decode(reader, reader.uint32()))
					break
				case 2:
					message.endBlock = ResponseEndBlock.decode(reader, reader.uint32())
					break
				case 3:
					message.beginBlock = ResponseBeginBlock.decode(reader, reader.uint32())
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<LegacyABCIResponses>): LegacyABCIResponses {
		const message = createBaseLegacyABCIResponses()
		message.deliverTxs = object.deliverTxs?.map((e) => ExecTxResult.fromPartial(e)) || []
		message.endBlock =
			object.endBlock !== undefined && object.endBlock !== null
				? ResponseEndBlock.fromPartial(object.endBlock)
				: undefined
		message.beginBlock =
			object.beginBlock !== undefined && object.beginBlock !== null
				? ResponseBeginBlock.fromPartial(object.beginBlock)
				: undefined
		return message
	},
	fromAmino(object: LegacyABCIResponsesAmino): LegacyABCIResponses {
		const message = createBaseLegacyABCIResponses()
		message.deliverTxs = object.deliver_txs?.map((e) => ExecTxResult.fromAmino(e)) || []
		if (object.end_block !== undefined && object.end_block !== null) {
			message.endBlock = ResponseEndBlock.fromAmino(object.end_block)
		}
		if (object.begin_block !== undefined && object.begin_block !== null) {
			message.beginBlock = ResponseBeginBlock.fromAmino(object.begin_block)
		}
		return message
	},
	toAmino(message: LegacyABCIResponses): LegacyABCIResponsesAmino {
		const obj: any = {}
		if (message.deliverTxs) {
			obj.deliver_txs = message.deliverTxs.map((e) => (e ? ExecTxResult.toAmino(e) : undefined))
		} else {
			obj.deliver_txs = message.deliverTxs
		}
		obj.end_block = message.endBlock ? ResponseEndBlock.toAmino(message.endBlock) : undefined
		obj.begin_block = message.beginBlock
			? ResponseBeginBlock.toAmino(message.beginBlock)
			: undefined
		return obj
	},
	fromAminoMsg(object: LegacyABCIResponsesAminoMsg): LegacyABCIResponses {
		return LegacyABCIResponses.fromAmino(object.value)
	},
	fromProtoMsg(message: LegacyABCIResponsesProtoMsg): LegacyABCIResponses {
		return LegacyABCIResponses.decode(message.value)
	},
	toProto(message: LegacyABCIResponses): Uint8Array {
		return LegacyABCIResponses.encode(message).finish()
	},
	toProtoMsg(message: LegacyABCIResponses): LegacyABCIResponsesProtoMsg {
		return {
			typeUrl: "/tendermint.state.LegacyABCIResponses",
			value: LegacyABCIResponses.encode(message).finish()
		}
	}
}
function createBaseResponseBeginBlock(): ResponseBeginBlock {
	return {
		events: []
	}
}
export const ResponseBeginBlock = {
	typeUrl: "/tendermint.state.ResponseBeginBlock",
	encode(message: ResponseBeginBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		for (const v of message.events) {
			Event.encode(v!, writer.uint32(10).fork()).ldelim()
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): ResponseBeginBlock {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseResponseBeginBlock()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.events.push(Event.decode(reader, reader.uint32()))
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<ResponseBeginBlock>): ResponseBeginBlock {
		const message = createBaseResponseBeginBlock()
		message.events = object.events?.map((e) => Event.fromPartial(e)) || []
		return message
	},
	fromAmino(object: ResponseBeginBlockAmino): ResponseBeginBlock {
		const message = createBaseResponseBeginBlock()
		message.events = object.events?.map((e) => Event.fromAmino(e)) || []
		return message
	},
	toAmino(message: ResponseBeginBlock): ResponseBeginBlockAmino {
		const obj: any = {}
		if (message.events) {
			obj.events = message.events.map((e) => (e ? Event.toAmino(e) : undefined))
		} else {
			obj.events = message.events
		}
		return obj
	},
	fromAminoMsg(object: ResponseBeginBlockAminoMsg): ResponseBeginBlock {
		return ResponseBeginBlock.fromAmino(object.value)
	},
	fromProtoMsg(message: ResponseBeginBlockProtoMsg): ResponseBeginBlock {
		return ResponseBeginBlock.decode(message.value)
	},
	toProto(message: ResponseBeginBlock): Uint8Array {
		return ResponseBeginBlock.encode(message).finish()
	},
	toProtoMsg(message: ResponseBeginBlock): ResponseBeginBlockProtoMsg {
		return {
			typeUrl: "/tendermint.state.ResponseBeginBlock",
			value: ResponseBeginBlock.encode(message).finish()
		}
	}
}
function createBaseResponseEndBlock(): ResponseEndBlock {
	return {
		validatorUpdates: [],
		consensusParamUpdates: undefined,
		events: []
	}
}
export const ResponseEndBlock = {
	typeUrl: "/tendermint.state.ResponseEndBlock",
	encode(message: ResponseEndBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		for (const v of message.validatorUpdates) {
			ValidatorUpdate.encode(v!, writer.uint32(10).fork()).ldelim()
		}
		if (message.consensusParamUpdates !== undefined) {
			ConsensusParams.encode(message.consensusParamUpdates, writer.uint32(18).fork()).ldelim()
		}
		for (const v of message.events) {
			Event.encode(v!, writer.uint32(26).fork()).ldelim()
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): ResponseEndBlock {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseResponseEndBlock()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.validatorUpdates.push(ValidatorUpdate.decode(reader, reader.uint32()))
					break
				case 2:
					message.consensusParamUpdates = ConsensusParams.decode(reader, reader.uint32())
					break
				case 3:
					message.events.push(Event.decode(reader, reader.uint32()))
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<ResponseEndBlock>): ResponseEndBlock {
		const message = createBaseResponseEndBlock()
		message.validatorUpdates =
			object.validatorUpdates?.map((e) => ValidatorUpdate.fromPartial(e)) || []
		message.consensusParamUpdates =
			object.consensusParamUpdates !== undefined && object.consensusParamUpdates !== null
				? ConsensusParams.fromPartial(object.consensusParamUpdates)
				: undefined
		message.events = object.events?.map((e) => Event.fromPartial(e)) || []
		return message
	},
	fromAmino(object: ResponseEndBlockAmino): ResponseEndBlock {
		const message = createBaseResponseEndBlock()
		message.validatorUpdates =
			object.validator_updates?.map((e) => ValidatorUpdate.fromAmino(e)) || []
		if (object.consensus_param_updates !== undefined && object.consensus_param_updates !== null) {
			message.consensusParamUpdates = ConsensusParams.fromAmino(object.consensus_param_updates)
		}
		message.events = object.events?.map((e) => Event.fromAmino(e)) || []
		return message
	},
	toAmino(message: ResponseEndBlock): ResponseEndBlockAmino {
		const obj: any = {}
		if (message.validatorUpdates) {
			obj.validator_updates = message.validatorUpdates.map((e) =>
				e ? ValidatorUpdate.toAmino(e) : undefined
			)
		} else {
			obj.validator_updates = message.validatorUpdates
		}
		obj.consensus_param_updates = message.consensusParamUpdates
			? ConsensusParams.toAmino(message.consensusParamUpdates)
			: undefined
		if (message.events) {
			obj.events = message.events.map((e) => (e ? Event.toAmino(e) : undefined))
		} else {
			obj.events = message.events
		}
		return obj
	},
	fromAminoMsg(object: ResponseEndBlockAminoMsg): ResponseEndBlock {
		return ResponseEndBlock.fromAmino(object.value)
	},
	fromProtoMsg(message: ResponseEndBlockProtoMsg): ResponseEndBlock {
		return ResponseEndBlock.decode(message.value)
	},
	toProto(message: ResponseEndBlock): Uint8Array {
		return ResponseEndBlock.encode(message).finish()
	},
	toProtoMsg(message: ResponseEndBlock): ResponseEndBlockProtoMsg {
		return {
			typeUrl: "/tendermint.state.ResponseEndBlock",
			value: ResponseEndBlock.encode(message).finish()
		}
	}
}
function createBaseValidatorsInfo(): ValidatorsInfo {
	return {
		validatorSet: undefined,
		lastHeightChanged: BigInt(0)
	}
}
export const ValidatorsInfo = {
	typeUrl: "/tendermint.state.ValidatorsInfo",
	encode(message: ValidatorsInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.validatorSet !== undefined) {
			ValidatorSet.encode(message.validatorSet, writer.uint32(10).fork()).ldelim()
		}
		if (message.lastHeightChanged !== undefined) {
			writer.uint32(16).int64(message.lastHeightChanged)
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): ValidatorsInfo {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseValidatorsInfo()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.validatorSet = ValidatorSet.decode(reader, reader.uint32())
					break
				case 2:
					message.lastHeightChanged = reader.int64()
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<ValidatorsInfo>): ValidatorsInfo {
		const message = createBaseValidatorsInfo()
		message.validatorSet =
			object.validatorSet !== undefined && object.validatorSet !== null
				? ValidatorSet.fromPartial(object.validatorSet)
				: undefined
		message.lastHeightChanged =
			object.lastHeightChanged !== undefined && object.lastHeightChanged !== null
				? BigInt(object.lastHeightChanged.toString())
				: BigInt(0)
		return message
	},
	fromAmino(object: ValidatorsInfoAmino): ValidatorsInfo {
		const message = createBaseValidatorsInfo()
		if (object.validator_set !== undefined && object.validator_set !== null) {
			message.validatorSet = ValidatorSet.fromAmino(object.validator_set)
		}
		if (object.last_height_changed !== undefined && object.last_height_changed !== null) {
			message.lastHeightChanged = BigInt(object.last_height_changed)
		}
		return message
	},
	toAmino(message: ValidatorsInfo): ValidatorsInfoAmino {
		const obj: any = {}
		obj.validator_set = message.validatorSet
			? ValidatorSet.toAmino(message.validatorSet)
			: undefined
		obj.last_height_changed =
			message.lastHeightChanged !== BigInt(0) ? message.lastHeightChanged?.toString() : undefined
		return obj
	},
	fromAminoMsg(object: ValidatorsInfoAminoMsg): ValidatorsInfo {
		return ValidatorsInfo.fromAmino(object.value)
	},
	fromProtoMsg(message: ValidatorsInfoProtoMsg): ValidatorsInfo {
		return ValidatorsInfo.decode(message.value)
	},
	toProto(message: ValidatorsInfo): Uint8Array {
		return ValidatorsInfo.encode(message).finish()
	},
	toProtoMsg(message: ValidatorsInfo): ValidatorsInfoProtoMsg {
		return {
			typeUrl: "/tendermint.state.ValidatorsInfo",
			value: ValidatorsInfo.encode(message).finish()
		}
	}
}
function createBaseConsensusParamsInfo(): ConsensusParamsInfo {
	return {
		consensusParams: ConsensusParams.fromPartial({}),
		lastHeightChanged: BigInt(0)
	}
}
export const ConsensusParamsInfo = {
	typeUrl: "/tendermint.state.ConsensusParamsInfo",
	encode(
		message: ConsensusParamsInfo,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		if (message.consensusParams !== undefined) {
			ConsensusParams.encode(message.consensusParams, writer.uint32(10).fork()).ldelim()
		}
		if (message.lastHeightChanged !== undefined) {
			writer.uint32(16).int64(message.lastHeightChanged)
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): ConsensusParamsInfo {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseConsensusParamsInfo()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.consensusParams = ConsensusParams.decode(reader, reader.uint32())
					break
				case 2:
					message.lastHeightChanged = reader.int64()
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<ConsensusParamsInfo>): ConsensusParamsInfo {
		const message = createBaseConsensusParamsInfo()
		message.consensusParams =
			object.consensusParams !== undefined && object.consensusParams !== null
				? ConsensusParams.fromPartial(object.consensusParams)
				: undefined
		message.lastHeightChanged =
			object.lastHeightChanged !== undefined && object.lastHeightChanged !== null
				? BigInt(object.lastHeightChanged.toString())
				: BigInt(0)
		return message
	},
	fromAmino(object: ConsensusParamsInfoAmino): ConsensusParamsInfo {
		const message = createBaseConsensusParamsInfo()
		if (object.consensus_params !== undefined && object.consensus_params !== null) {
			message.consensusParams = ConsensusParams.fromAmino(object.consensus_params)
		}
		if (object.last_height_changed !== undefined && object.last_height_changed !== null) {
			message.lastHeightChanged = BigInt(object.last_height_changed)
		}
		return message
	},
	toAmino(message: ConsensusParamsInfo): ConsensusParamsInfoAmino {
		const obj: any = {}
		obj.consensus_params = message.consensusParams
			? ConsensusParams.toAmino(message.consensusParams)
			: undefined
		obj.last_height_changed =
			message.lastHeightChanged !== BigInt(0) ? message.lastHeightChanged?.toString() : undefined
		return obj
	},
	fromAminoMsg(object: ConsensusParamsInfoAminoMsg): ConsensusParamsInfo {
		return ConsensusParamsInfo.fromAmino(object.value)
	},
	fromProtoMsg(message: ConsensusParamsInfoProtoMsg): ConsensusParamsInfo {
		return ConsensusParamsInfo.decode(message.value)
	},
	toProto(message: ConsensusParamsInfo): Uint8Array {
		return ConsensusParamsInfo.encode(message).finish()
	},
	toProtoMsg(message: ConsensusParamsInfo): ConsensusParamsInfoProtoMsg {
		return {
			typeUrl: "/tendermint.state.ConsensusParamsInfo",
			value: ConsensusParamsInfo.encode(message).finish()
		}
	}
}
function createBaseABCIResponsesInfo(): ABCIResponsesInfo {
	return {
		legacyAbciResponses: undefined,
		height: BigInt(0),
		responseFinalizeBlock: undefined
	}
}
export const ABCIResponsesInfo = {
	typeUrl: "/tendermint.state.ABCIResponsesInfo",
	encode(message: ABCIResponsesInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.legacyAbciResponses !== undefined) {
			LegacyABCIResponses.encode(message.legacyAbciResponses, writer.uint32(10).fork()).ldelim()
		}
		if (message.height !== undefined) {
			writer.uint32(16).int64(message.height)
		}
		if (message.responseFinalizeBlock !== undefined) {
			ResponseFinalizeBlock.encode(
				message.responseFinalizeBlock,
				writer.uint32(26).fork()
			).ldelim()
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): ABCIResponsesInfo {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseABCIResponsesInfo()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.legacyAbciResponses = LegacyABCIResponses.decode(reader, reader.uint32())
					break
				case 2:
					message.height = reader.int64()
					break
				case 3:
					message.responseFinalizeBlock = ResponseFinalizeBlock.decode(reader, reader.uint32())
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<ABCIResponsesInfo>): ABCIResponsesInfo {
		const message = createBaseABCIResponsesInfo()
		message.legacyAbciResponses =
			object.legacyAbciResponses !== undefined && object.legacyAbciResponses !== null
				? LegacyABCIResponses.fromPartial(object.legacyAbciResponses)
				: undefined
		message.height =
			object.height !== undefined && object.height !== null
				? BigInt(object.height.toString())
				: BigInt(0)
		message.responseFinalizeBlock =
			object.responseFinalizeBlock !== undefined && object.responseFinalizeBlock !== null
				? ResponseFinalizeBlock.fromPartial(object.responseFinalizeBlock)
				: undefined
		return message
	},
	fromAmino(object: ABCIResponsesInfoAmino): ABCIResponsesInfo {
		const message = createBaseABCIResponsesInfo()
		if (object.legacy_abci_responses !== undefined && object.legacy_abci_responses !== null) {
			message.legacyAbciResponses = LegacyABCIResponses.fromAmino(object.legacy_abci_responses)
		}
		if (object.height !== undefined && object.height !== null) {
			message.height = BigInt(object.height)
		}
		if (object.response_finalize_block !== undefined && object.response_finalize_block !== null) {
			message.responseFinalizeBlock = ResponseFinalizeBlock.fromAmino(
				object.response_finalize_block
			)
		}
		return message
	},
	toAmino(message: ABCIResponsesInfo): ABCIResponsesInfoAmino {
		const obj: any = {}
		obj.legacy_abci_responses = message.legacyAbciResponses
			? LegacyABCIResponses.toAmino(message.legacyAbciResponses)
			: undefined
		obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined
		obj.response_finalize_block = message.responseFinalizeBlock
			? ResponseFinalizeBlock.toAmino(message.responseFinalizeBlock)
			: undefined
		return obj
	},
	fromAminoMsg(object: ABCIResponsesInfoAminoMsg): ABCIResponsesInfo {
		return ABCIResponsesInfo.fromAmino(object.value)
	},
	fromProtoMsg(message: ABCIResponsesInfoProtoMsg): ABCIResponsesInfo {
		return ABCIResponsesInfo.decode(message.value)
	},
	toProto(message: ABCIResponsesInfo): Uint8Array {
		return ABCIResponsesInfo.encode(message).finish()
	},
	toProtoMsg(message: ABCIResponsesInfo): ABCIResponsesInfoProtoMsg {
		return {
			typeUrl: "/tendermint.state.ABCIResponsesInfo",
			value: ABCIResponsesInfo.encode(message).finish()
		}
	}
}
function createBaseVersion(): Version {
	return {
		consensus: Consensus.fromPartial({}),
		software: ""
	}
}
export const Version = {
	typeUrl: "/tendermint.state.Version",
	encode(message: Version, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.consensus !== undefined) {
			Consensus.encode(message.consensus, writer.uint32(10).fork()).ldelim()
		}
		if (message.software !== undefined) {
			writer.uint32(18).string(message.software)
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): Version {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseVersion()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.consensus = Consensus.decode(reader, reader.uint32())
					break
				case 2:
					message.software = reader.string()
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<Version>): Version {
		const message = createBaseVersion()
		message.consensus =
			object.consensus !== undefined && object.consensus !== null
				? Consensus.fromPartial(object.consensus)
				: undefined
		message.software = object.software ?? ""
		return message
	},
	fromAmino(object: VersionAmino): Version {
		const message = createBaseVersion()
		if (object.consensus !== undefined && object.consensus !== null) {
			message.consensus = Consensus.fromAmino(object.consensus)
		}
		if (object.software !== undefined && object.software !== null) {
			message.software = object.software
		}
		return message
	},
	toAmino(message: Version): VersionAmino {
		const obj: any = {}
		obj.consensus = message.consensus ? Consensus.toAmino(message.consensus) : undefined
		obj.software = message.software === "" ? undefined : message.software
		return obj
	},
	fromAminoMsg(object: VersionAminoMsg): Version {
		return Version.fromAmino(object.value)
	},
	fromProtoMsg(message: VersionProtoMsg): Version {
		return Version.decode(message.value)
	},
	toProto(message: Version): Uint8Array {
		return Version.encode(message).finish()
	},
	toProtoMsg(message: Version): VersionProtoMsg {
		return {
			typeUrl: "/tendermint.state.Version",
			value: Version.encode(message).finish()
		}
	}
}
function createBaseState(): State {
	return {
		version: Version.fromPartial({}),
		chainId: "",
		initialHeight: BigInt(0),
		lastBlockHeight: BigInt(0),
		lastBlockId: BlockID.fromPartial({}),
		lastBlockTime: new Date(),
		nextValidators: undefined,
		validators: undefined,
		lastValidators: undefined,
		lastHeightValidatorsChanged: BigInt(0),
		consensusParams: ConsensusParams.fromPartial({}),
		lastHeightConsensusParamsChanged: BigInt(0),
		lastResultsHash: new Uint8Array(),
		appHash: new Uint8Array()
	}
}
export const State = {
	typeUrl: "/tendermint.state.State",
	encode(message: State, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.version !== undefined) {
			Version.encode(message.version, writer.uint32(10).fork()).ldelim()
		}
		if (message.chainId !== undefined) {
			writer.uint32(18).string(message.chainId)
		}
		if (message.initialHeight !== undefined) {
			writer.uint32(112).int64(message.initialHeight)
		}
		if (message.lastBlockHeight !== undefined) {
			writer.uint32(24).int64(message.lastBlockHeight)
		}
		if (message.lastBlockId !== undefined) {
			BlockID.encode(message.lastBlockId, writer.uint32(34).fork()).ldelim()
		}
		if (message.lastBlockTime !== undefined) {
			Timestamp.encode(toTimestamp(message.lastBlockTime), writer.uint32(42).fork()).ldelim()
		}
		if (message.nextValidators !== undefined) {
			ValidatorSet.encode(message.nextValidators, writer.uint32(50).fork()).ldelim()
		}
		if (message.validators !== undefined) {
			ValidatorSet.encode(message.validators, writer.uint32(58).fork()).ldelim()
		}
		if (message.lastValidators !== undefined) {
			ValidatorSet.encode(message.lastValidators, writer.uint32(66).fork()).ldelim()
		}
		if (message.lastHeightValidatorsChanged !== undefined) {
			writer.uint32(72).int64(message.lastHeightValidatorsChanged)
		}
		if (message.consensusParams !== undefined) {
			ConsensusParams.encode(message.consensusParams, writer.uint32(82).fork()).ldelim()
		}
		if (message.lastHeightConsensusParamsChanged !== undefined) {
			writer.uint32(88).int64(message.lastHeightConsensusParamsChanged)
		}
		if (message.lastResultsHash.length !== 0) {
			writer.uint32(98).bytes(message.lastResultsHash)
		}
		if (message.appHash.length !== 0) {
			writer.uint32(106).bytes(message.appHash)
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): State {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseState()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.version = Version.decode(reader, reader.uint32())
					break
				case 2:
					message.chainId = reader.string()
					break
				case 14:
					message.initialHeight = reader.int64()
					break
				case 3:
					message.lastBlockHeight = reader.int64()
					break
				case 4:
					message.lastBlockId = BlockID.decode(reader, reader.uint32())
					break
				case 5:
					message.lastBlockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()))
					break
				case 6:
					message.nextValidators = ValidatorSet.decode(reader, reader.uint32())
					break
				case 7:
					message.validators = ValidatorSet.decode(reader, reader.uint32())
					break
				case 8:
					message.lastValidators = ValidatorSet.decode(reader, reader.uint32())
					break
				case 9:
					message.lastHeightValidatorsChanged = reader.int64()
					break
				case 10:
					message.consensusParams = ConsensusParams.decode(reader, reader.uint32())
					break
				case 11:
					message.lastHeightConsensusParamsChanged = reader.int64()
					break
				case 12:
					message.lastResultsHash = reader.bytes()
					break
				case 13:
					message.appHash = reader.bytes()
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<State>): State {
		const message = createBaseState()
		message.version =
			object.version !== undefined && object.version !== null
				? Version.fromPartial(object.version)
				: undefined
		message.chainId = object.chainId ?? ""
		message.initialHeight =
			object.initialHeight !== undefined && object.initialHeight !== null
				? BigInt(object.initialHeight.toString())
				: BigInt(0)
		message.lastBlockHeight =
			object.lastBlockHeight !== undefined && object.lastBlockHeight !== null
				? BigInt(object.lastBlockHeight.toString())
				: BigInt(0)
		message.lastBlockId =
			object.lastBlockId !== undefined && object.lastBlockId !== null
				? BlockID.fromPartial(object.lastBlockId)
				: undefined
		message.lastBlockTime = object.lastBlockTime ?? undefined
		message.nextValidators =
			object.nextValidators !== undefined && object.nextValidators !== null
				? ValidatorSet.fromPartial(object.nextValidators)
				: undefined
		message.validators =
			object.validators !== undefined && object.validators !== null
				? ValidatorSet.fromPartial(object.validators)
				: undefined
		message.lastValidators =
			object.lastValidators !== undefined && object.lastValidators !== null
				? ValidatorSet.fromPartial(object.lastValidators)
				: undefined
		message.lastHeightValidatorsChanged =
			object.lastHeightValidatorsChanged !== undefined &&
			object.lastHeightValidatorsChanged !== null
				? BigInt(object.lastHeightValidatorsChanged.toString())
				: BigInt(0)
		message.consensusParams =
			object.consensusParams !== undefined && object.consensusParams !== null
				? ConsensusParams.fromPartial(object.consensusParams)
				: undefined
		message.lastHeightConsensusParamsChanged =
			object.lastHeightConsensusParamsChanged !== undefined &&
			object.lastHeightConsensusParamsChanged !== null
				? BigInt(object.lastHeightConsensusParamsChanged.toString())
				: BigInt(0)
		message.lastResultsHash = object.lastResultsHash ?? new Uint8Array()
		message.appHash = object.appHash ?? new Uint8Array()
		return message
	},
	fromAmino(object: StateAmino): State {
		const message = createBaseState()
		if (object.version !== undefined && object.version !== null) {
			message.version = Version.fromAmino(object.version)
		}
		if (object.chain_id !== undefined && object.chain_id !== null) {
			message.chainId = object.chain_id
		}
		if (object.initial_height !== undefined && object.initial_height !== null) {
			message.initialHeight = BigInt(object.initial_height)
		}
		if (object.last_block_height !== undefined && object.last_block_height !== null) {
			message.lastBlockHeight = BigInt(object.last_block_height)
		}
		if (object.last_block_id !== undefined && object.last_block_id !== null) {
			message.lastBlockId = BlockID.fromAmino(object.last_block_id)
		}
		if (object.last_block_time !== undefined && object.last_block_time !== null) {
			message.lastBlockTime = fromTimestamp(Timestamp.fromAmino(object.last_block_time))
		}
		if (object.next_validators !== undefined && object.next_validators !== null) {
			message.nextValidators = ValidatorSet.fromAmino(object.next_validators)
		}
		if (object.validators !== undefined && object.validators !== null) {
			message.validators = ValidatorSet.fromAmino(object.validators)
		}
		if (object.last_validators !== undefined && object.last_validators !== null) {
			message.lastValidators = ValidatorSet.fromAmino(object.last_validators)
		}
		if (
			object.last_height_validators_changed !== undefined &&
			object.last_height_validators_changed !== null
		) {
			message.lastHeightValidatorsChanged = BigInt(object.last_height_validators_changed)
		}
		if (object.consensus_params !== undefined && object.consensus_params !== null) {
			message.consensusParams = ConsensusParams.fromAmino(object.consensus_params)
		}
		if (
			object.last_height_consensus_params_changed !== undefined &&
			object.last_height_consensus_params_changed !== null
		) {
			message.lastHeightConsensusParamsChanged = BigInt(
				object.last_height_consensus_params_changed
			)
		}
		if (object.last_results_hash !== undefined && object.last_results_hash !== null) {
			message.lastResultsHash = bytesFromBase64(object.last_results_hash)
		}
		if (object.app_hash !== undefined && object.app_hash !== null) {
			message.appHash = bytesFromBase64(object.app_hash)
		}
		return message
	},
	toAmino(message: State): StateAmino {
		const obj: any = {}
		obj.version = message.version ? Version.toAmino(message.version) : undefined
		obj.chain_id = message.chainId === "" ? undefined : message.chainId
		obj.initial_height =
			message.initialHeight !== BigInt(0) ? message.initialHeight?.toString() : undefined
		obj.last_block_height =
			message.lastBlockHeight !== BigInt(0) ? message.lastBlockHeight?.toString() : undefined
		obj.last_block_id = message.lastBlockId ? BlockID.toAmino(message.lastBlockId) : undefined
		obj.last_block_time = message.lastBlockTime
			? Timestamp.toAmino(toTimestamp(message.lastBlockTime))
			: undefined
		obj.next_validators = message.nextValidators
			? ValidatorSet.toAmino(message.nextValidators)
			: undefined
		obj.validators = message.validators ? ValidatorSet.toAmino(message.validators) : undefined
		obj.last_validators = message.lastValidators
			? ValidatorSet.toAmino(message.lastValidators)
			: undefined
		obj.last_height_validators_changed =
			message.lastHeightValidatorsChanged !== BigInt(0)
				? message.lastHeightValidatorsChanged?.toString()
				: undefined
		obj.consensus_params = message.consensusParams
			? ConsensusParams.toAmino(message.consensusParams)
			: undefined
		obj.last_height_consensus_params_changed =
			message.lastHeightConsensusParamsChanged !== BigInt(0)
				? message.lastHeightConsensusParamsChanged?.toString()
				: undefined
		obj.last_results_hash = message.lastResultsHash
			? base64FromBytes(message.lastResultsHash)
			: undefined
		obj.app_hash = message.appHash ? base64FromBytes(message.appHash) : undefined
		return obj
	},
	fromAminoMsg(object: StateAminoMsg): State {
		return State.fromAmino(object.value)
	},
	fromProtoMsg(message: StateProtoMsg): State {
		return State.decode(message.value)
	},
	toProto(message: State): Uint8Array {
		return State.encode(message).finish()
	},
	toProtoMsg(message: State): StateProtoMsg {
		return {
			typeUrl: "/tendermint.state.State",
			value: State.encode(message).finish()
		}
	}
}
