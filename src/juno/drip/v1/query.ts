import { BinaryReader, BinaryWriter } from "../../../binary"
import { Params, type ParamsAmino } from "./genesis"
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export type QueryParamsRequest = {}
export interface QueryParamsRequestProtoMsg {
	typeUrl: "/juno.drip.v1.QueryParamsRequest"
	value: Uint8Array
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export type QueryParamsRequestAmino = {}
export interface QueryParamsRequestAminoMsg {
	type: "/juno.drip.v1.QueryParamsRequest"
	value: QueryParamsRequestAmino
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
	/** params is the returned parameter from the module */
	params: Params | undefined
}
export interface QueryParamsResponseProtoMsg {
	typeUrl: "/juno.drip.v1.QueryParamsResponse"
	value: Uint8Array
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
	/** params is the returned parameter from the module */
	params: ParamsAmino | undefined
}
export interface QueryParamsResponseAminoMsg {
	type: "/juno.drip.v1.QueryParamsResponse"
	value: QueryParamsResponseAmino
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
	return {}
}
export const QueryParamsRequest = {
	typeUrl: "/juno.drip.v1.QueryParamsRequest",
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
			typeUrl: "/juno.drip.v1.QueryParamsRequest",
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
	typeUrl: "/juno.drip.v1.QueryParamsResponse",
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
			typeUrl: "/juno.drip.v1.QueryParamsResponse",
			value: QueryParamsResponse.encode(message).finish()
		}
	}
}
