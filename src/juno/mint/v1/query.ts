import { BinaryReader, BinaryWriter } from "../../../binary"
import { base64FromBytes, bytesFromBase64 } from "../../../helpers"
import { Params, type ParamsAmino } from "./mint"
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export type QueryParamsRequest = {}
export interface QueryParamsRequestProtoMsg {
	typeUrl: "/juno.mint.v1.QueryParamsRequest"
	value: Uint8Array
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export type QueryParamsRequestAmino = {}
export interface QueryParamsRequestAminoMsg {
	type: "/juno.mint.v1.QueryParamsRequest"
	value: QueryParamsRequestAmino
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
	/** params defines the parameters of the module. */
	params: Params
}
export interface QueryParamsResponseProtoMsg {
	typeUrl: "/juno.mint.v1.QueryParamsResponse"
	value: Uint8Array
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
	/** params defines the parameters of the module. */
	params: ParamsAmino
}
export interface QueryParamsResponseAminoMsg {
	type: "/juno.mint.v1.QueryParamsResponse"
	value: QueryParamsResponseAmino
}
/** QueryInflationRequest is the request type for the Query/Inflation RPC method. */
export type QueryInflationRequest = {}
export interface QueryInflationRequestProtoMsg {
	typeUrl: "/juno.mint.v1.QueryInflationRequest"
	value: Uint8Array
}
/** QueryInflationRequest is the request type for the Query/Inflation RPC method. */
export type QueryInflationRequestAmino = {}
export interface QueryInflationRequestAminoMsg {
	type: "/juno.mint.v1.QueryInflationRequest"
	value: QueryInflationRequestAmino
}
/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 */
export interface QueryInflationResponse {
	/** inflation is the current minting inflation value. */
	inflation: Uint8Array
}
export interface QueryInflationResponseProtoMsg {
	typeUrl: "/juno.mint.v1.QueryInflationResponse"
	value: Uint8Array
}
/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 */
export interface QueryInflationResponseAmino {
	/** inflation is the current minting inflation value. */
	inflation: string
}
export interface QueryInflationResponseAminoMsg {
	type: "/juno.mint.v1.QueryInflationResponse"
	value: QueryInflationResponseAmino
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export type QueryAnnualProvisionsRequest = {}
export interface QueryAnnualProvisionsRequestProtoMsg {
	typeUrl: "/juno.mint.v1.QueryAnnualProvisionsRequest"
	value: Uint8Array
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export type QueryAnnualProvisionsRequestAmino = {}
export interface QueryAnnualProvisionsRequestAminoMsg {
	type: "/juno.mint.v1.QueryAnnualProvisionsRequest"
	value: QueryAnnualProvisionsRequestAmino
}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponse {
	/** annual_provisions is the current minting annual provisions value. */
	annualProvisions: Uint8Array
}
export interface QueryAnnualProvisionsResponseProtoMsg {
	typeUrl: "/juno.mint.v1.QueryAnnualProvisionsResponse"
	value: Uint8Array
}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponseAmino {
	/** annual_provisions is the current minting annual provisions value. */
	annual_provisions: string
}
export interface QueryAnnualProvisionsResponseAminoMsg {
	type: "/juno.mint.v1.QueryAnnualProvisionsResponse"
	value: QueryAnnualProvisionsResponseAmino
}
/**
 * QueryTargetSupplyRequest is the request type for the
 * Query/TargetSupply RPC method.
 */
export type QueryTargetSupplyRequest = {}
export interface QueryTargetSupplyRequestProtoMsg {
	typeUrl: "/juno.mint.v1.QueryTargetSupplyRequest"
	value: Uint8Array
}
/**
 * QueryTargetSupplyRequest is the request type for the
 * Query/TargetSupply RPC method.
 */
export type QueryTargetSupplyRequestAmino = {}
export interface QueryTargetSupplyRequestAminoMsg {
	type: "/juno.mint.v1.QueryTargetSupplyRequest"
	value: QueryTargetSupplyRequestAmino
}
/**
 * QueryTargetSupplyResponse is the response type for the
 * Query/TargetSupply RPC method.
 */
export interface QueryTargetSupplyResponse {
	/** target_supply is the target supply for this phase value. */
	targetSupply: Uint8Array
}
export interface QueryTargetSupplyResponseProtoMsg {
	typeUrl: "/juno.mint.v1.QueryTargetSupplyResponse"
	value: Uint8Array
}
/**
 * QueryTargetSupplyResponse is the response type for the
 * Query/TargetSupply RPC method.
 */
export interface QueryTargetSupplyResponseAmino {
	/** target_supply is the target supply for this phase value. */
	target_supply: string
}
export interface QueryTargetSupplyResponseAminoMsg {
	type: "/juno.mint.v1.QueryTargetSupplyResponse"
	value: QueryTargetSupplyResponseAmino
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
	return {}
}
export const QueryParamsRequest = {
	typeUrl: "/juno.mint.v1.QueryParamsRequest",
	encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseQueryParamsRequest()
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
	fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
		const message = createBaseQueryParamsRequest()
		return message
	},
	fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
		const message = createBaseQueryParamsRequest()
		return message
	},
	toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
		const obj: any = {}
		return obj
	},
	fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
		return QueryParamsRequest.fromAmino(object.value)
	},
	fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
		return QueryParamsRequest.decode(message.value)
	},
	toProto(message: QueryParamsRequest): Uint8Array {
		return QueryParamsRequest.encode(message).finish()
	},
	toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
		return {
			typeUrl: "/juno.mint.v1.QueryParamsRequest",
			value: QueryParamsRequest.encode(message).finish()
		}
	}
}
function createBaseQueryParamsResponse(): QueryParamsResponse {
	return {
		params: Params.fromPartial({})
	}
}
export const QueryParamsResponse = {
	typeUrl: "/juno.mint.v1.QueryParamsResponse",
	encode(
		message: QueryParamsResponse,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).ldelim()
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseQueryParamsResponse()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.params = Params.decode(reader, reader.uint32())
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
		const message = createBaseQueryParamsResponse()
		message.params =
			object.params !== undefined && object.params !== null
				? Params.fromPartial(object.params)
				: undefined
		return message
	},
	fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
		const message = createBaseQueryParamsResponse()
		if (object.params !== undefined && object.params !== null) {
			message.params = Params.fromAmino(object.params)
		}
		return message
	},
	toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
		const obj: any = {}
		obj.params = message.params
			? Params.toAmino(message.params)
			: Params.toAmino(Params.fromPartial({}))
		return obj
	},
	fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
		return QueryParamsResponse.fromAmino(object.value)
	},
	fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
		return QueryParamsResponse.decode(message.value)
	},
	toProto(message: QueryParamsResponse): Uint8Array {
		return QueryParamsResponse.encode(message).finish()
	},
	toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
		return {
			typeUrl: "/juno.mint.v1.QueryParamsResponse",
			value: QueryParamsResponse.encode(message).finish()
		}
	}
}
function createBaseQueryInflationRequest(): QueryInflationRequest {
	return {}
}
export const QueryInflationRequest = {
	typeUrl: "/juno.mint.v1.QueryInflationRequest",
	encode(_: QueryInflationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryInflationRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseQueryInflationRequest()
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
	fromPartial(_: Partial<QueryInflationRequest>): QueryInflationRequest {
		const message = createBaseQueryInflationRequest()
		return message
	},
	fromAmino(_: QueryInflationRequestAmino): QueryInflationRequest {
		const message = createBaseQueryInflationRequest()
		return message
	},
	toAmino(_: QueryInflationRequest): QueryInflationRequestAmino {
		const obj: any = {}
		return obj
	},
	fromAminoMsg(object: QueryInflationRequestAminoMsg): QueryInflationRequest {
		return QueryInflationRequest.fromAmino(object.value)
	},
	fromProtoMsg(message: QueryInflationRequestProtoMsg): QueryInflationRequest {
		return QueryInflationRequest.decode(message.value)
	},
	toProto(message: QueryInflationRequest): Uint8Array {
		return QueryInflationRequest.encode(message).finish()
	},
	toProtoMsg(message: QueryInflationRequest): QueryInflationRequestProtoMsg {
		return {
			typeUrl: "/juno.mint.v1.QueryInflationRequest",
			value: QueryInflationRequest.encode(message).finish()
		}
	}
}
function createBaseQueryInflationResponse(): QueryInflationResponse {
	return {
		inflation: new Uint8Array()
	}
}
export const QueryInflationResponse = {
	typeUrl: "/juno.mint.v1.QueryInflationResponse",
	encode(
		message: QueryInflationResponse,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		if (message.inflation.length !== 0) {
			writer.uint32(10).bytes(message.inflation)
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryInflationResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseQueryInflationResponse()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.inflation = reader.bytes()
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<QueryInflationResponse>): QueryInflationResponse {
		const message = createBaseQueryInflationResponse()
		message.inflation = object.inflation ?? new Uint8Array()
		return message
	},
	fromAmino(object: QueryInflationResponseAmino): QueryInflationResponse {
		const message = createBaseQueryInflationResponse()
		if (object.inflation !== undefined && object.inflation !== null) {
			message.inflation = bytesFromBase64(object.inflation)
		}
		return message
	},
	toAmino(message: QueryInflationResponse): QueryInflationResponseAmino {
		const obj: any = {}
		obj.inflation = message.inflation ? base64FromBytes(message.inflation) : ""
		return obj
	},
	fromAminoMsg(object: QueryInflationResponseAminoMsg): QueryInflationResponse {
		return QueryInflationResponse.fromAmino(object.value)
	},
	fromProtoMsg(message: QueryInflationResponseProtoMsg): QueryInflationResponse {
		return QueryInflationResponse.decode(message.value)
	},
	toProto(message: QueryInflationResponse): Uint8Array {
		return QueryInflationResponse.encode(message).finish()
	},
	toProtoMsg(message: QueryInflationResponse): QueryInflationResponseProtoMsg {
		return {
			typeUrl: "/juno.mint.v1.QueryInflationResponse",
			value: QueryInflationResponse.encode(message).finish()
		}
	}
}
function createBaseQueryAnnualProvisionsRequest(): QueryAnnualProvisionsRequest {
	return {}
}
export const QueryAnnualProvisionsRequest = {
	typeUrl: "/juno.mint.v1.QueryAnnualProvisionsRequest",
	encode(
		_: QueryAnnualProvisionsRequest,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryAnnualProvisionsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseQueryAnnualProvisionsRequest()
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
	fromPartial(_: Partial<QueryAnnualProvisionsRequest>): QueryAnnualProvisionsRequest {
		const message = createBaseQueryAnnualProvisionsRequest()
		return message
	},
	fromAmino(_: QueryAnnualProvisionsRequestAmino): QueryAnnualProvisionsRequest {
		const message = createBaseQueryAnnualProvisionsRequest()
		return message
	},
	toAmino(_: QueryAnnualProvisionsRequest): QueryAnnualProvisionsRequestAmino {
		const obj: any = {}
		return obj
	},
	fromAminoMsg(object: QueryAnnualProvisionsRequestAminoMsg): QueryAnnualProvisionsRequest {
		return QueryAnnualProvisionsRequest.fromAmino(object.value)
	},
	fromProtoMsg(message: QueryAnnualProvisionsRequestProtoMsg): QueryAnnualProvisionsRequest {
		return QueryAnnualProvisionsRequest.decode(message.value)
	},
	toProto(message: QueryAnnualProvisionsRequest): Uint8Array {
		return QueryAnnualProvisionsRequest.encode(message).finish()
	},
	toProtoMsg(message: QueryAnnualProvisionsRequest): QueryAnnualProvisionsRequestProtoMsg {
		return {
			typeUrl: "/juno.mint.v1.QueryAnnualProvisionsRequest",
			value: QueryAnnualProvisionsRequest.encode(message).finish()
		}
	}
}
function createBaseQueryAnnualProvisionsResponse(): QueryAnnualProvisionsResponse {
	return {
		annualProvisions: new Uint8Array()
	}
}
export const QueryAnnualProvisionsResponse = {
	typeUrl: "/juno.mint.v1.QueryAnnualProvisionsResponse",
	encode(
		message: QueryAnnualProvisionsResponse,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		if (message.annualProvisions.length !== 0) {
			writer.uint32(10).bytes(message.annualProvisions)
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryAnnualProvisionsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseQueryAnnualProvisionsResponse()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.annualProvisions = reader.bytes()
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<QueryAnnualProvisionsResponse>): QueryAnnualProvisionsResponse {
		const message = createBaseQueryAnnualProvisionsResponse()
		message.annualProvisions = object.annualProvisions ?? new Uint8Array()
		return message
	},
	fromAmino(object: QueryAnnualProvisionsResponseAmino): QueryAnnualProvisionsResponse {
		const message = createBaseQueryAnnualProvisionsResponse()
		if (object.annual_provisions !== undefined && object.annual_provisions !== null) {
			message.annualProvisions = bytesFromBase64(object.annual_provisions)
		}
		return message
	},
	toAmino(message: QueryAnnualProvisionsResponse): QueryAnnualProvisionsResponseAmino {
		const obj: any = {}
		obj.annual_provisions = message.annualProvisions
			? base64FromBytes(message.annualProvisions)
			: ""
		return obj
	},
	fromAminoMsg(object: QueryAnnualProvisionsResponseAminoMsg): QueryAnnualProvisionsResponse {
		return QueryAnnualProvisionsResponse.fromAmino(object.value)
	},
	fromProtoMsg(message: QueryAnnualProvisionsResponseProtoMsg): QueryAnnualProvisionsResponse {
		return QueryAnnualProvisionsResponse.decode(message.value)
	},
	toProto(message: QueryAnnualProvisionsResponse): Uint8Array {
		return QueryAnnualProvisionsResponse.encode(message).finish()
	},
	toProtoMsg(message: QueryAnnualProvisionsResponse): QueryAnnualProvisionsResponseProtoMsg {
		return {
			typeUrl: "/juno.mint.v1.QueryAnnualProvisionsResponse",
			value: QueryAnnualProvisionsResponse.encode(message).finish()
		}
	}
}
function createBaseQueryTargetSupplyRequest(): QueryTargetSupplyRequest {
	return {}
}
export const QueryTargetSupplyRequest = {
	typeUrl: "/juno.mint.v1.QueryTargetSupplyRequest",
	encode(_: QueryTargetSupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryTargetSupplyRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseQueryTargetSupplyRequest()
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
	fromPartial(_: Partial<QueryTargetSupplyRequest>): QueryTargetSupplyRequest {
		const message = createBaseQueryTargetSupplyRequest()
		return message
	},
	fromAmino(_: QueryTargetSupplyRequestAmino): QueryTargetSupplyRequest {
		const message = createBaseQueryTargetSupplyRequest()
		return message
	},
	toAmino(_: QueryTargetSupplyRequest): QueryTargetSupplyRequestAmino {
		const obj: any = {}
		return obj
	},
	fromAminoMsg(object: QueryTargetSupplyRequestAminoMsg): QueryTargetSupplyRequest {
		return QueryTargetSupplyRequest.fromAmino(object.value)
	},
	fromProtoMsg(message: QueryTargetSupplyRequestProtoMsg): QueryTargetSupplyRequest {
		return QueryTargetSupplyRequest.decode(message.value)
	},
	toProto(message: QueryTargetSupplyRequest): Uint8Array {
		return QueryTargetSupplyRequest.encode(message).finish()
	},
	toProtoMsg(message: QueryTargetSupplyRequest): QueryTargetSupplyRequestProtoMsg {
		return {
			typeUrl: "/juno.mint.v1.QueryTargetSupplyRequest",
			value: QueryTargetSupplyRequest.encode(message).finish()
		}
	}
}
function createBaseQueryTargetSupplyResponse(): QueryTargetSupplyResponse {
	return {
		targetSupply: new Uint8Array()
	}
}
export const QueryTargetSupplyResponse = {
	typeUrl: "/juno.mint.v1.QueryTargetSupplyResponse",
	encode(
		message: QueryTargetSupplyResponse,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		if (message.targetSupply.length !== 0) {
			writer.uint32(10).bytes(message.targetSupply)
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryTargetSupplyResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseQueryTargetSupplyResponse()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.targetSupply = reader.bytes()
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<QueryTargetSupplyResponse>): QueryTargetSupplyResponse {
		const message = createBaseQueryTargetSupplyResponse()
		message.targetSupply = object.targetSupply ?? new Uint8Array()
		return message
	},
	fromAmino(object: QueryTargetSupplyResponseAmino): QueryTargetSupplyResponse {
		const message = createBaseQueryTargetSupplyResponse()
		if (object.target_supply !== undefined && object.target_supply !== null) {
			message.targetSupply = bytesFromBase64(object.target_supply)
		}
		return message
	},
	toAmino(message: QueryTargetSupplyResponse): QueryTargetSupplyResponseAmino {
		const obj: any = {}
		obj.target_supply = message.targetSupply ? base64FromBytes(message.targetSupply) : ""
		return obj
	},
	fromAminoMsg(object: QueryTargetSupplyResponseAminoMsg): QueryTargetSupplyResponse {
		return QueryTargetSupplyResponse.fromAmino(object.value)
	},
	fromProtoMsg(message: QueryTargetSupplyResponseProtoMsg): QueryTargetSupplyResponse {
		return QueryTargetSupplyResponse.decode(message.value)
	},
	toProto(message: QueryTargetSupplyResponse): Uint8Array {
		return QueryTargetSupplyResponse.encode(message).finish()
	},
	toProtoMsg(message: QueryTargetSupplyResponse): QueryTargetSupplyResponseProtoMsg {
		return {
			typeUrl: "/juno.mint.v1.QueryTargetSupplyResponse",
			value: QueryTargetSupplyResponse.encode(message).finish()
		}
	}
}
