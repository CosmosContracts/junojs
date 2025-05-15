import { BinaryReader, BinaryWriter } from "../../../binary"
import {
	PageRequest,
	type PageRequestAmino,
	PageResponse,
	type PageResponseAmino
} from "../../../cosmos/base/query/v1beta1/pagination"
import { ClockContract, type ClockContractAmino } from "./clock"
import { Params, type ParamsAmino } from "./genesis"
/** QueryClockContracts is the request type to get all contracts. */
export interface QueryClockContractsRequest {
	/** pagination defines an optional pagination for the request. */
	pagination?: PageRequest | undefined
}
export interface QueryClockContractsRequestProtoMsg {
	typeUrl: "/juno.clock.v1.QueryClockContractsRequest"
	value: Uint8Array
}
/** QueryClockContracts is the request type to get all contracts. */
export interface QueryClockContractsRequestAmino {
	/** pagination defines an optional pagination for the request. */
	pagination?: PageRequestAmino | undefined
}
export interface QueryClockContractsRequestAminoMsg {
	type: "/juno.clock.v1.QueryClockContractsRequest"
	value: QueryClockContractsRequestAmino
}
/** QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method. */
export interface QueryClockContractsResponse {
	/** clock_contracts are the clock contracts. */
	clockContracts: ClockContract[]
	/** pagination defines the pagination in the response. */
	pagination?: PageResponse | undefined
}
export interface QueryClockContractsResponseProtoMsg {
	typeUrl: "/juno.clock.v1.QueryClockContractsResponse"
	value: Uint8Array
}
/** QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method. */
export interface QueryClockContractsResponseAmino {
	/** clock_contracts are the clock contracts. */
	clock_contracts: ClockContractAmino[]
	/** pagination defines the pagination in the response. */
	pagination?: PageResponseAmino | undefined
}
export interface QueryClockContractsResponseAminoMsg {
	type: "/juno.clock.v1.QueryClockContractsResponse"
	value: QueryClockContractsResponseAmino
}
/** QueryClockContract is the request type to get a single contract. */
export interface QueryClockContractRequest {
	/** contract_address is the address of the contract to query. */
	contractAddress: string
}
export interface QueryClockContractRequestProtoMsg {
	typeUrl: "/juno.clock.v1.QueryClockContractRequest"
	value: Uint8Array
}
/** QueryClockContract is the request type to get a single contract. */
export interface QueryClockContractRequestAmino {
	/** contract_address is the address of the contract to query. */
	contract_address?: string
}
export interface QueryClockContractRequestAminoMsg {
	type: "/juno.clock.v1.QueryClockContractRequest"
	value: QueryClockContractRequestAmino
}
/** QueryClockContractResponse is the response type for the Query/ClockContract RPC method. */
export interface QueryClockContractResponse {
	/** contract is the clock contract. */
	clockContract: ClockContract | undefined
}
export interface QueryClockContractResponseProtoMsg {
	typeUrl: "/juno.clock.v1.QueryClockContractResponse"
	value: Uint8Array
}
/** QueryClockContractResponse is the response type for the Query/ClockContract RPC method. */
export interface QueryClockContractResponseAmino {
	/** contract is the clock contract. */
	clock_contract: ClockContractAmino | undefined
}
export interface QueryClockContractResponseAminoMsg {
	type: "/juno.clock.v1.QueryClockContractResponse"
	value: QueryClockContractResponseAmino
}
/** QueryParams is the request type to get all module params. */
export type QueryParamsRequest = {}
export interface QueryParamsRequestProtoMsg {
	typeUrl: "/juno.clock.v1.QueryParamsRequest"
	value: Uint8Array
}
/** QueryParams is the request type to get all module params. */
export type QueryParamsRequestAmino = {}
export interface QueryParamsRequestAminoMsg {
	type: "/juno.clock.v1.QueryParamsRequest"
	value: QueryParamsRequestAmino
}
/** QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method. */
export interface QueryParamsResponse {
	params: Params | undefined
}
export interface QueryParamsResponseProtoMsg {
	typeUrl: "/juno.clock.v1.QueryParamsResponse"
	value: Uint8Array
}
/** QueryClockContractsResponse is the response type for the Query/ClockContracts RPC method. */
export interface QueryParamsResponseAmino {
	params: ParamsAmino | undefined
}
export interface QueryParamsResponseAminoMsg {
	type: "/juno.clock.v1.QueryParamsResponse"
	value: QueryParamsResponseAmino
}
function createBaseQueryClockContractsRequest(): QueryClockContractsRequest {
	return {
		pagination: undefined
	}
}
export const QueryClockContractsRequest = {
	typeUrl: "/juno.clock.v1.QueryClockContractsRequest",
	encode(
		message: QueryClockContractsRequest,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryClockContractsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseQueryClockContractsRequest()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.pagination = PageRequest.decode(reader, reader.uint32())
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<QueryClockContractsRequest>): QueryClockContractsRequest {
		const message = createBaseQueryClockContractsRequest()
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromPartial(object.pagination)
				: undefined
		return message
	},
	fromAmino(object: QueryClockContractsRequestAmino): QueryClockContractsRequest {
		const message = createBaseQueryClockContractsRequest()
		if (object.pagination !== undefined && object.pagination !== null) {
			message.pagination = PageRequest.fromAmino(object.pagination)
		}
		return message
	},
	toAmino(message: QueryClockContractsRequest): QueryClockContractsRequestAmino {
		const obj: any = {}
		obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined
		return obj
	},
	fromAminoMsg(object: QueryClockContractsRequestAminoMsg): QueryClockContractsRequest {
		return QueryClockContractsRequest.fromAmino(object.value)
	},
	fromProtoMsg(message: QueryClockContractsRequestProtoMsg): QueryClockContractsRequest {
		return QueryClockContractsRequest.decode(message.value)
	},
	toProto(message: QueryClockContractsRequest): Uint8Array {
		return QueryClockContractsRequest.encode(message).finish()
	},
	toProtoMsg(message: QueryClockContractsRequest): QueryClockContractsRequestProtoMsg {
		return {
			typeUrl: "/juno.clock.v1.QueryClockContractsRequest",
			value: QueryClockContractsRequest.encode(message).finish()
		}
	}
}
function createBaseQueryClockContractsResponse(): QueryClockContractsResponse {
	return {
		clockContracts: [],
		pagination: undefined
	}
}
export const QueryClockContractsResponse = {
	typeUrl: "/juno.clock.v1.QueryClockContractsResponse",
	encode(
		message: QueryClockContractsResponse,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		for (const v of message.clockContracts) {
			ClockContract.encode(v!, writer.uint32(10).fork()).ldelim()
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryClockContractsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseQueryClockContractsResponse()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.clockContracts.push(ClockContract.decode(reader, reader.uint32()))
					break
				case 2:
					message.pagination = PageResponse.decode(reader, reader.uint32())
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<QueryClockContractsResponse>): QueryClockContractsResponse {
		const message = createBaseQueryClockContractsResponse()
		message.clockContracts = object.clockContracts?.map((e) => ClockContract.fromPartial(e)) || []
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromPartial(object.pagination)
				: undefined
		return message
	},
	fromAmino(object: QueryClockContractsResponseAmino): QueryClockContractsResponse {
		const message = createBaseQueryClockContractsResponse()
		message.clockContracts = object.clock_contracts?.map((e) => ClockContract.fromAmino(e)) || []
		if (object.pagination !== undefined && object.pagination !== null) {
			message.pagination = PageResponse.fromAmino(object.pagination)
		}
		return message
	},
	toAmino(message: QueryClockContractsResponse): QueryClockContractsResponseAmino {
		const obj: any = {}
		if (message.clockContracts) {
			obj.clock_contracts = message.clockContracts.map((e) =>
				e ? ClockContract.toAmino(e) : undefined
			)
		} else {
			obj.clock_contracts = message.clockContracts
		}
		obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined
		return obj
	},
	fromAminoMsg(object: QueryClockContractsResponseAminoMsg): QueryClockContractsResponse {
		return QueryClockContractsResponse.fromAmino(object.value)
	},
	fromProtoMsg(message: QueryClockContractsResponseProtoMsg): QueryClockContractsResponse {
		return QueryClockContractsResponse.decode(message.value)
	},
	toProto(message: QueryClockContractsResponse): Uint8Array {
		return QueryClockContractsResponse.encode(message).finish()
	},
	toProtoMsg(message: QueryClockContractsResponse): QueryClockContractsResponseProtoMsg {
		return {
			typeUrl: "/juno.clock.v1.QueryClockContractsResponse",
			value: QueryClockContractsResponse.encode(message).finish()
		}
	}
}
function createBaseQueryClockContractRequest(): QueryClockContractRequest {
	return {
		contractAddress: ""
	}
}
export const QueryClockContractRequest = {
	typeUrl: "/juno.clock.v1.QueryClockContractRequest",
	encode(
		message: QueryClockContractRequest,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		if (message.contractAddress && message.contractAddress !== "") {
			writer.uint32(10).string(message.contractAddress)
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryClockContractRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseQueryClockContractRequest()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.contractAddress = reader.string()
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<QueryClockContractRequest>): QueryClockContractRequest {
		const message = createBaseQueryClockContractRequest()
		message.contractAddress = object.contractAddress ?? ""
		return message
	},
	fromAmino(object: QueryClockContractRequestAmino): QueryClockContractRequest {
		const message = createBaseQueryClockContractRequest()
		if (object.contract_address !== undefined && object.contract_address !== null) {
			message.contractAddress = object.contract_address
		}
		return message
	},
	toAmino(message: QueryClockContractRequest): QueryClockContractRequestAmino {
		const obj: any = {}
		obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress
		return obj
	},
	fromAminoMsg(object: QueryClockContractRequestAminoMsg): QueryClockContractRequest {
		return QueryClockContractRequest.fromAmino(object.value)
	},
	fromProtoMsg(message: QueryClockContractRequestProtoMsg): QueryClockContractRequest {
		return QueryClockContractRequest.decode(message.value)
	},
	toProto(message: QueryClockContractRequest): Uint8Array {
		return QueryClockContractRequest.encode(message).finish()
	},
	toProtoMsg(message: QueryClockContractRequest): QueryClockContractRequestProtoMsg {
		return {
			typeUrl: "/juno.clock.v1.QueryClockContractRequest",
			value: QueryClockContractRequest.encode(message).finish()
		}
	}
}
function createBaseQueryClockContractResponse(): QueryClockContractResponse {
	return {
		clockContract: ClockContract.fromPartial({})
	}
}
export const QueryClockContractResponse = {
	typeUrl: "/juno.clock.v1.QueryClockContractResponse",
	encode(
		message: QueryClockContractResponse,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		if (message.clockContract !== undefined) {
			ClockContract.encode(message.clockContract, writer.uint32(10).fork()).ldelim()
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryClockContractResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseQueryClockContractResponse()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.clockContract = ClockContract.decode(reader, reader.uint32())
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<QueryClockContractResponse>): QueryClockContractResponse {
		const message = createBaseQueryClockContractResponse()
		message.clockContract =
			object.clockContract !== undefined && object.clockContract !== null
				? ClockContract.fromPartial(object.clockContract)
				: undefined
		return message
	},
	fromAmino(object: QueryClockContractResponseAmino): QueryClockContractResponse {
		const message = createBaseQueryClockContractResponse()
		if (object.clock_contract !== undefined && object.clock_contract !== null) {
			message.clockContract = ClockContract.fromAmino(object.clock_contract)
		}
		return message
	},
	toAmino(message: QueryClockContractResponse): QueryClockContractResponseAmino {
		const obj: any = {}
		obj.clock_contract = message.clockContract
			? ClockContract.toAmino(message.clockContract)
			: ClockContract.toAmino(ClockContract.fromPartial({}))
		return obj
	},
	fromAminoMsg(object: QueryClockContractResponseAminoMsg): QueryClockContractResponse {
		return QueryClockContractResponse.fromAmino(object.value)
	},
	fromProtoMsg(message: QueryClockContractResponseProtoMsg): QueryClockContractResponse {
		return QueryClockContractResponse.decode(message.value)
	},
	toProto(message: QueryClockContractResponse): Uint8Array {
		return QueryClockContractResponse.encode(message).finish()
	},
	toProtoMsg(message: QueryClockContractResponse): QueryClockContractResponseProtoMsg {
		return {
			typeUrl: "/juno.clock.v1.QueryClockContractResponse",
			value: QueryClockContractResponse.encode(message).finish()
		}
	}
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
	return {}
}
export const QueryParamsRequest = {
	typeUrl: "/juno.clock.v1.QueryParamsRequest",
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
			typeUrl: "/juno.clock.v1.QueryParamsRequest",
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
	typeUrl: "/juno.clock.v1.QueryParamsResponse",
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
			typeUrl: "/juno.clock.v1.QueryParamsResponse",
			value: QueryParamsResponse.encode(message).finish()
		}
	}
}
