import { BinaryReader, BinaryWriter } from "../../../binary"
import {
	PageRequest,
	type PageRequestAmino,
	PageResponse,
	type PageResponseAmino
} from "../../../cosmos/base/query/v1beta1/pagination"
import { FeePayContract, type FeePayContractAmino } from "./feepay"
import { Params, type ParamsAmino } from "./genesis"
/** QueryFeePayContractRequest retrieves a single fee pay contract */
export interface QueryFeePayContractRequest {
	/** contract_address defines the address of the fee pay contract */
	contractAddress: string
}
export interface QueryFeePayContractRequestProtoMsg {
	typeUrl: "/juno.feepay.v1.QueryFeePayContractRequest"
	value: Uint8Array
}
/** QueryFeePayContractRequest retrieves a single fee pay contract */
export interface QueryFeePayContractRequestAmino {
	/** contract_address defines the address of the fee pay contract */
	contract_address?: string
}
export interface QueryFeePayContractRequestAminoMsg {
	type: "/juno.feepay.v1.QueryFeePayContractRequest"
	value: QueryFeePayContractRequestAmino
}
/** QueryFeePayContractResponse defines the response for retrieving a single fee pay contract */
export interface QueryFeePayContractResponse {
	/** contract defines the fee pay contract */
	feePayContract: FeePayContract | undefined
}
export interface QueryFeePayContractResponseProtoMsg {
	typeUrl: "/juno.feepay.v1.QueryFeePayContractResponse"
	value: Uint8Array
}
/** QueryFeePayContractResponse defines the response for retrieving a single fee pay contract */
export interface QueryFeePayContractResponseAmino {
	/** contract defines the fee pay contract */
	fee_pay_contract: FeePayContractAmino | undefined
}
export interface QueryFeePayContractResponseAminoMsg {
	type: "/juno.feepay.v1.QueryFeePayContractResponse"
	value: QueryFeePayContractResponseAmino
}
/** Message for querying a list of fee pay contracts */
export interface QueryFeePayContractsRequest {
	/** Pagination defines an optional pagination for the request. */
	pagination?: PageRequest | undefined
}
export interface QueryFeePayContractsRequestProtoMsg {
	typeUrl: "/juno.feepay.v1.QueryFeePayContractsRequest"
	value: Uint8Array
}
/** Message for querying a list of fee pay contracts */
export interface QueryFeePayContractsRequestAmino {
	/** Pagination defines an optional pagination for the request. */
	pagination?: PageRequestAmino | undefined
}
export interface QueryFeePayContractsRequestAminoMsg {
	type: "/juno.feepay.v1.QueryFeePayContractsRequest"
	value: QueryFeePayContractsRequestAmino
}
/** The response for querying all fee pay contracts */
export interface QueryFeePayContractsResponse {
	/** A slice of all the stored fee pay contracts */
	feePayContracts: FeePayContract[]
	/** pagination defines the pagination in the response. */
	pagination?: PageResponse | undefined
}
export interface QueryFeePayContractsResponseProtoMsg {
	typeUrl: "/juno.feepay.v1.QueryFeePayContractsResponse"
	value: Uint8Array
}
/** The response for querying all fee pay contracts */
export interface QueryFeePayContractsResponseAmino {
	/** A slice of all the stored fee pay contracts */
	fee_pay_contracts: FeePayContractAmino[]
	/** pagination defines the pagination in the response. */
	pagination?: PageResponseAmino | undefined
}
export interface QueryFeePayContractsResponseAminoMsg {
	type: "/juno.feepay.v1.QueryFeePayContractsResponse"
	value: QueryFeePayContractsResponseAmino
}
/** Message for querying the number of uses on a fee pay contract by wallet */
export interface QueryFeePayContractUsesRequest {
	/** The contract address. */
	contractAddress: string
	/** The wallet address. */
	walletAddress: string
}
export interface QueryFeePayContractUsesRequestProtoMsg {
	typeUrl: "/juno.feepay.v1.QueryFeePayContractUsesRequest"
	value: Uint8Array
}
/** Message for querying the number of uses on a fee pay contract by wallet */
export interface QueryFeePayContractUsesRequestAmino {
	/** The contract address. */
	contract_address?: string
	/** The wallet address. */
	wallet_address?: string
}
export interface QueryFeePayContractUsesRequestAminoMsg {
	type: "/juno.feepay.v1.QueryFeePayContractUsesRequest"
	value: QueryFeePayContractUsesRequestAmino
}
/** The response for querying the number of uses on a fee pay contract by wallet */
export interface QueryFeePayContractUsesResponse {
	/** The number of uses on the fee pay contract by wallet */
	uses: bigint
}
export interface QueryFeePayContractUsesResponseProtoMsg {
	typeUrl: "/juno.feepay.v1.QueryFeePayContractUsesResponse"
	value: Uint8Array
}
/** The response for querying the number of uses on a fee pay contract by wallet */
export interface QueryFeePayContractUsesResponseAmino {
	/** The number of uses on the fee pay contract by wallet */
	uses?: string
}
export interface QueryFeePayContractUsesResponseAminoMsg {
	type: "/juno.feepay.v1.QueryFeePayContractUsesResponse"
	value: QueryFeePayContractUsesResponseAmino
}
/** Message for querying if a wallet is eligible for fee pay contract interactions */
export interface QueryFeePayWalletIsEligibleRequest {
	/** The contract address. */
	contractAddress: string
	/** The wallet address. */
	walletAddress: string
}
export interface QueryFeePayWalletIsEligibleRequestProtoMsg {
	typeUrl: "/juno.feepay.v1.QueryFeePayWalletIsEligibleRequest"
	value: Uint8Array
}
/** Message for querying if a wallet is eligible for fee pay contract interactions */
export interface QueryFeePayWalletIsEligibleRequestAmino {
	/** The contract address. */
	contract_address?: string
	/** The wallet address. */
	wallet_address?: string
}
export interface QueryFeePayWalletIsEligibleRequestAminoMsg {
	type: "/juno.feepay.v1.QueryFeePayWalletIsEligibleRequest"
	value: QueryFeePayWalletIsEligibleRequestAmino
}
/** The response for querying if a wallet is eligible for fee pay contract interactions */
export interface QueryFeePayWalletIsEligibleResponse {
	/** The eligibility of the wallet for fee pay contract interactions */
	eligible: boolean
}
export interface QueryFeePayWalletIsEligibleResponseProtoMsg {
	typeUrl: "/juno.feepay.v1.QueryFeePayWalletIsEligibleResponse"
	value: Uint8Array
}
/** The response for querying if a wallet is eligible for fee pay contract interactions */
export interface QueryFeePayWalletIsEligibleResponseAmino {
	/** The eligibility of the wallet for fee pay contract interactions */
	eligible?: boolean
}
export interface QueryFeePayWalletIsEligibleResponseAminoMsg {
	type: "/juno.feepay.v1.QueryFeePayWalletIsEligibleResponse"
	value: QueryFeePayWalletIsEligibleResponseAmino
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export type QueryParamsRequest = {}
export interface QueryParamsRequestProtoMsg {
	typeUrl: "/juno.feepay.v1.QueryParamsRequest"
	value: Uint8Array
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export type QueryParamsRequestAmino = {}
export interface QueryParamsRequestAminoMsg {
	type: "/juno.feepay.v1.QueryParamsRequest"
	value: QueryParamsRequestAmino
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
	/** params is the returned Feepay parameter */
	params: Params | undefined
}
export interface QueryParamsResponseProtoMsg {
	typeUrl: "/juno.feepay.v1.QueryParamsResponse"
	value: Uint8Array
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
	/** params is the returned Feepay parameter */
	params: ParamsAmino | undefined
}
export interface QueryParamsResponseAminoMsg {
	type: "/juno.feepay.v1.QueryParamsResponse"
	value: QueryParamsResponseAmino
}
function createBaseQueryFeePayContractRequest(): QueryFeePayContractRequest {
	return {
		contractAddress: ""
	}
}
export const QueryFeePayContractRequest = {
	typeUrl: "/juno.feepay.v1.QueryFeePayContractRequest",
	encode(
		message: QueryFeePayContractRequest,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		if (message.contractAddress && message.contractAddress !== "") {
			writer.uint32(10).string(message.contractAddress)
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryFeePayContractRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseQueryFeePayContractRequest()
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
	fromPartial(object: Partial<QueryFeePayContractRequest>): QueryFeePayContractRequest {
		const message = createBaseQueryFeePayContractRequest()
		message.contractAddress = object.contractAddress ?? ""
		return message
	},
	fromAmino(object: QueryFeePayContractRequestAmino): QueryFeePayContractRequest {
		const message = createBaseQueryFeePayContractRequest()
		if (object.contract_address !== undefined && object.contract_address !== null) {
			message.contractAddress = object.contract_address
		}
		return message
	},
	toAmino(message: QueryFeePayContractRequest): QueryFeePayContractRequestAmino {
		const obj: any = {}
		obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress
		return obj
	},
	fromAminoMsg(object: QueryFeePayContractRequestAminoMsg): QueryFeePayContractRequest {
		return QueryFeePayContractRequest.fromAmino(object.value)
	},
	fromProtoMsg(message: QueryFeePayContractRequestProtoMsg): QueryFeePayContractRequest {
		return QueryFeePayContractRequest.decode(message.value)
	},
	toProto(message: QueryFeePayContractRequest): Uint8Array {
		return QueryFeePayContractRequest.encode(message).finish()
	},
	toProtoMsg(message: QueryFeePayContractRequest): QueryFeePayContractRequestProtoMsg {
		return {
			typeUrl: "/juno.feepay.v1.QueryFeePayContractRequest",
			value: QueryFeePayContractRequest.encode(message).finish()
		}
	}
}
function createBaseQueryFeePayContractResponse(): QueryFeePayContractResponse {
	return {
		feePayContract: FeePayContract.fromPartial({})
	}
}
export const QueryFeePayContractResponse = {
	typeUrl: "/juno.feepay.v1.QueryFeePayContractResponse",
	encode(
		message: QueryFeePayContractResponse,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		if (message.feePayContract !== undefined) {
			FeePayContract.encode(message.feePayContract, writer.uint32(10).fork()).ldelim()
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryFeePayContractResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseQueryFeePayContractResponse()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.feePayContract = FeePayContract.decode(reader, reader.uint32())
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<QueryFeePayContractResponse>): QueryFeePayContractResponse {
		const message = createBaseQueryFeePayContractResponse()
		message.feePayContract =
			object.feePayContract !== undefined && object.feePayContract !== null
				? FeePayContract.fromPartial(object.feePayContract)
				: undefined
		return message
	},
	fromAmino(object: QueryFeePayContractResponseAmino): QueryFeePayContractResponse {
		const message = createBaseQueryFeePayContractResponse()
		if (object.fee_pay_contract !== undefined && object.fee_pay_contract !== null) {
			message.feePayContract = FeePayContract.fromAmino(object.fee_pay_contract)
		}
		return message
	},
	toAmino(message: QueryFeePayContractResponse): QueryFeePayContractResponseAmino {
		const obj: any = {}
		obj.fee_pay_contract = message.feePayContract
			? FeePayContract.toAmino(message.feePayContract)
			: FeePayContract.toAmino(FeePayContract.fromPartial({}))
		return obj
	},
	fromAminoMsg(object: QueryFeePayContractResponseAminoMsg): QueryFeePayContractResponse {
		return QueryFeePayContractResponse.fromAmino(object.value)
	},
	fromProtoMsg(message: QueryFeePayContractResponseProtoMsg): QueryFeePayContractResponse {
		return QueryFeePayContractResponse.decode(message.value)
	},
	toProto(message: QueryFeePayContractResponse): Uint8Array {
		return QueryFeePayContractResponse.encode(message).finish()
	},
	toProtoMsg(message: QueryFeePayContractResponse): QueryFeePayContractResponseProtoMsg {
		return {
			typeUrl: "/juno.feepay.v1.QueryFeePayContractResponse",
			value: QueryFeePayContractResponse.encode(message).finish()
		}
	}
}
function createBaseQueryFeePayContractsRequest(): QueryFeePayContractsRequest {
	return {
		pagination: undefined
	}
}
export const QueryFeePayContractsRequest = {
	typeUrl: "/juno.feepay.v1.QueryFeePayContractsRequest",
	encode(
		message: QueryFeePayContractsRequest,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryFeePayContractsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseQueryFeePayContractsRequest()
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
	fromPartial(object: Partial<QueryFeePayContractsRequest>): QueryFeePayContractsRequest {
		const message = createBaseQueryFeePayContractsRequest()
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromPartial(object.pagination)
				: undefined
		return message
	},
	fromAmino(object: QueryFeePayContractsRequestAmino): QueryFeePayContractsRequest {
		const message = createBaseQueryFeePayContractsRequest()
		if (object.pagination !== undefined && object.pagination !== null) {
			message.pagination = PageRequest.fromAmino(object.pagination)
		}
		return message
	},
	toAmino(message: QueryFeePayContractsRequest): QueryFeePayContractsRequestAmino {
		const obj: any = {}
		obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined
		return obj
	},
	fromAminoMsg(object: QueryFeePayContractsRequestAminoMsg): QueryFeePayContractsRequest {
		return QueryFeePayContractsRequest.fromAmino(object.value)
	},
	fromProtoMsg(message: QueryFeePayContractsRequestProtoMsg): QueryFeePayContractsRequest {
		return QueryFeePayContractsRequest.decode(message.value)
	},
	toProto(message: QueryFeePayContractsRequest): Uint8Array {
		return QueryFeePayContractsRequest.encode(message).finish()
	},
	toProtoMsg(message: QueryFeePayContractsRequest): QueryFeePayContractsRequestProtoMsg {
		return {
			typeUrl: "/juno.feepay.v1.QueryFeePayContractsRequest",
			value: QueryFeePayContractsRequest.encode(message).finish()
		}
	}
}
function createBaseQueryFeePayContractsResponse(): QueryFeePayContractsResponse {
	return {
		feePayContracts: [],
		pagination: undefined
	}
}
export const QueryFeePayContractsResponse = {
	typeUrl: "/juno.feepay.v1.QueryFeePayContractsResponse",
	encode(
		message: QueryFeePayContractsResponse,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		for (const v of message.feePayContracts) {
			FeePayContract.encode(v!, writer.uint32(10).fork()).ldelim()
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryFeePayContractsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseQueryFeePayContractsResponse()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.feePayContracts.push(FeePayContract.decode(reader, reader.uint32()))
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
	fromPartial(object: Partial<QueryFeePayContractsResponse>): QueryFeePayContractsResponse {
		const message = createBaseQueryFeePayContractsResponse()
		message.feePayContracts =
			object.feePayContracts?.map((e) => FeePayContract.fromPartial(e)) || []
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromPartial(object.pagination)
				: undefined
		return message
	},
	fromAmino(object: QueryFeePayContractsResponseAmino): QueryFeePayContractsResponse {
		const message = createBaseQueryFeePayContractsResponse()
		message.feePayContracts =
			object.fee_pay_contracts?.map((e) => FeePayContract.fromAmino(e)) || []
		if (object.pagination !== undefined && object.pagination !== null) {
			message.pagination = PageResponse.fromAmino(object.pagination)
		}
		return message
	},
	toAmino(message: QueryFeePayContractsResponse): QueryFeePayContractsResponseAmino {
		const obj: any = {}
		if (message.feePayContracts) {
			obj.fee_pay_contracts = message.feePayContracts.map((e) =>
				e ? FeePayContract.toAmino(e) : undefined
			)
		} else {
			obj.fee_pay_contracts = message.feePayContracts
		}
		obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined
		return obj
	},
	fromAminoMsg(object: QueryFeePayContractsResponseAminoMsg): QueryFeePayContractsResponse {
		return QueryFeePayContractsResponse.fromAmino(object.value)
	},
	fromProtoMsg(message: QueryFeePayContractsResponseProtoMsg): QueryFeePayContractsResponse {
		return QueryFeePayContractsResponse.decode(message.value)
	},
	toProto(message: QueryFeePayContractsResponse): Uint8Array {
		return QueryFeePayContractsResponse.encode(message).finish()
	},
	toProtoMsg(message: QueryFeePayContractsResponse): QueryFeePayContractsResponseProtoMsg {
		return {
			typeUrl: "/juno.feepay.v1.QueryFeePayContractsResponse",
			value: QueryFeePayContractsResponse.encode(message).finish()
		}
	}
}
function createBaseQueryFeePayContractUsesRequest(): QueryFeePayContractUsesRequest {
	return {
		contractAddress: "",
		walletAddress: ""
	}
}
export const QueryFeePayContractUsesRequest = {
	typeUrl: "/juno.feepay.v1.QueryFeePayContractUsesRequest",
	encode(
		message: QueryFeePayContractUsesRequest,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		if (message.contractAddress && message.contractAddress !== "") {
			writer.uint32(10).string(message.contractAddress)
		}
		if (message.walletAddress && message.walletAddress !== "") {
			writer.uint32(18).string(message.walletAddress)
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryFeePayContractUsesRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseQueryFeePayContractUsesRequest()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.contractAddress = reader.string()
					break
				case 2:
					message.walletAddress = reader.string()
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<QueryFeePayContractUsesRequest>): QueryFeePayContractUsesRequest {
		const message = createBaseQueryFeePayContractUsesRequest()
		message.contractAddress = object.contractAddress ?? ""
		message.walletAddress = object.walletAddress ?? ""
		return message
	},
	fromAmino(object: QueryFeePayContractUsesRequestAmino): QueryFeePayContractUsesRequest {
		const message = createBaseQueryFeePayContractUsesRequest()
		if (object.contract_address !== undefined && object.contract_address !== null) {
			message.contractAddress = object.contract_address
		}
		if (object.wallet_address !== undefined && object.wallet_address !== null) {
			message.walletAddress = object.wallet_address
		}
		return message
	},
	toAmino(message: QueryFeePayContractUsesRequest): QueryFeePayContractUsesRequestAmino {
		const obj: any = {}
		obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress
		obj.wallet_address = message.walletAddress === "" ? undefined : message.walletAddress
		return obj
	},
	fromAminoMsg(object: QueryFeePayContractUsesRequestAminoMsg): QueryFeePayContractUsesRequest {
		return QueryFeePayContractUsesRequest.fromAmino(object.value)
	},
	fromProtoMsg(message: QueryFeePayContractUsesRequestProtoMsg): QueryFeePayContractUsesRequest {
		return QueryFeePayContractUsesRequest.decode(message.value)
	},
	toProto(message: QueryFeePayContractUsesRequest): Uint8Array {
		return QueryFeePayContractUsesRequest.encode(message).finish()
	},
	toProtoMsg(message: QueryFeePayContractUsesRequest): QueryFeePayContractUsesRequestProtoMsg {
		return {
			typeUrl: "/juno.feepay.v1.QueryFeePayContractUsesRequest",
			value: QueryFeePayContractUsesRequest.encode(message).finish()
		}
	}
}
function createBaseQueryFeePayContractUsesResponse(): QueryFeePayContractUsesResponse {
	return {
		uses: BigInt(0)
	}
}
export const QueryFeePayContractUsesResponse = {
	typeUrl: "/juno.feepay.v1.QueryFeePayContractUsesResponse",
	encode(
		message: QueryFeePayContractUsesResponse,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		if (message.uses && message.uses !== BigInt(0)) {
			writer.uint32(8).uint64(message.uses)
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryFeePayContractUsesResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseQueryFeePayContractUsesResponse()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.uses = reader.uint64()
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(object: Partial<QueryFeePayContractUsesResponse>): QueryFeePayContractUsesResponse {
		const message = createBaseQueryFeePayContractUsesResponse()
		message.uses =
			object.uses !== undefined && object.uses !== null
				? BigInt(object.uses.toString())
				: BigInt(0)
		return message
	},
	fromAmino(object: QueryFeePayContractUsesResponseAmino): QueryFeePayContractUsesResponse {
		const message = createBaseQueryFeePayContractUsesResponse()
		if (object.uses !== undefined && object.uses !== null) {
			message.uses = BigInt(object.uses)
		}
		return message
	},
	toAmino(message: QueryFeePayContractUsesResponse): QueryFeePayContractUsesResponseAmino {
		const obj: any = {}
		obj.uses = message.uses !== BigInt(0) ? message.uses?.toString() : undefined
		return obj
	},
	fromAminoMsg(object: QueryFeePayContractUsesResponseAminoMsg): QueryFeePayContractUsesResponse {
		return QueryFeePayContractUsesResponse.fromAmino(object.value)
	},
	fromProtoMsg(message: QueryFeePayContractUsesResponseProtoMsg): QueryFeePayContractUsesResponse {
		return QueryFeePayContractUsesResponse.decode(message.value)
	},
	toProto(message: QueryFeePayContractUsesResponse): Uint8Array {
		return QueryFeePayContractUsesResponse.encode(message).finish()
	},
	toProtoMsg(message: QueryFeePayContractUsesResponse): QueryFeePayContractUsesResponseProtoMsg {
		return {
			typeUrl: "/juno.feepay.v1.QueryFeePayContractUsesResponse",
			value: QueryFeePayContractUsesResponse.encode(message).finish()
		}
	}
}
function createBaseQueryFeePayWalletIsEligibleRequest(): QueryFeePayWalletIsEligibleRequest {
	return {
		contractAddress: "",
		walletAddress: ""
	}
}
export const QueryFeePayWalletIsEligibleRequest = {
	typeUrl: "/juno.feepay.v1.QueryFeePayWalletIsEligibleRequest",
	encode(
		message: QueryFeePayWalletIsEligibleRequest,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		if (message.contractAddress && message.contractAddress !== "") {
			writer.uint32(10).string(message.contractAddress)
		}
		if (message.walletAddress && message.walletAddress !== "") {
			writer.uint32(18).string(message.walletAddress)
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryFeePayWalletIsEligibleRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseQueryFeePayWalletIsEligibleRequest()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.contractAddress = reader.string()
					break
				case 2:
					message.walletAddress = reader.string()
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(
		object: Partial<QueryFeePayWalletIsEligibleRequest>
	): QueryFeePayWalletIsEligibleRequest {
		const message = createBaseQueryFeePayWalletIsEligibleRequest()
		message.contractAddress = object.contractAddress ?? ""
		message.walletAddress = object.walletAddress ?? ""
		return message
	},
	fromAmino(object: QueryFeePayWalletIsEligibleRequestAmino): QueryFeePayWalletIsEligibleRequest {
		const message = createBaseQueryFeePayWalletIsEligibleRequest()
		if (object.contract_address !== undefined && object.contract_address !== null) {
			message.contractAddress = object.contract_address
		}
		if (object.wallet_address !== undefined && object.wallet_address !== null) {
			message.walletAddress = object.wallet_address
		}
		return message
	},
	toAmino(message: QueryFeePayWalletIsEligibleRequest): QueryFeePayWalletIsEligibleRequestAmino {
		const obj: any = {}
		obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress
		obj.wallet_address = message.walletAddress === "" ? undefined : message.walletAddress
		return obj
	},
	fromAminoMsg(
		object: QueryFeePayWalletIsEligibleRequestAminoMsg
	): QueryFeePayWalletIsEligibleRequest {
		return QueryFeePayWalletIsEligibleRequest.fromAmino(object.value)
	},
	fromProtoMsg(
		message: QueryFeePayWalletIsEligibleRequestProtoMsg
	): QueryFeePayWalletIsEligibleRequest {
		return QueryFeePayWalletIsEligibleRequest.decode(message.value)
	},
	toProto(message: QueryFeePayWalletIsEligibleRequest): Uint8Array {
		return QueryFeePayWalletIsEligibleRequest.encode(message).finish()
	},
	toProtoMsg(
		message: QueryFeePayWalletIsEligibleRequest
	): QueryFeePayWalletIsEligibleRequestProtoMsg {
		return {
			typeUrl: "/juno.feepay.v1.QueryFeePayWalletIsEligibleRequest",
			value: QueryFeePayWalletIsEligibleRequest.encode(message).finish()
		}
	}
}
function createBaseQueryFeePayWalletIsEligibleResponse(): QueryFeePayWalletIsEligibleResponse {
	return {
		eligible: false
	}
}
export const QueryFeePayWalletIsEligibleResponse = {
	typeUrl: "/juno.feepay.v1.QueryFeePayWalletIsEligibleResponse",
	encode(
		message: QueryFeePayWalletIsEligibleResponse,
		writer: BinaryWriter = BinaryWriter.create()
	): BinaryWriter {
		if (message.eligible === true) {
			writer.uint32(8).bool(message.eligible)
		}
		return writer
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryFeePayWalletIsEligibleResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input)
		const end = length === undefined ? reader.len : reader.pos + length
		const message = createBaseQueryFeePayWalletIsEligibleResponse()
		while (reader.pos < end) {
			const tag = reader.uint32()
			switch (tag >>> 3) {
				case 1:
					message.eligible = reader.bool()
					break
				default:
					reader.skipType(tag & 7)
					break
			}
		}
		return message
	},
	fromPartial(
		object: Partial<QueryFeePayWalletIsEligibleResponse>
	): QueryFeePayWalletIsEligibleResponse {
		const message = createBaseQueryFeePayWalletIsEligibleResponse()
		message.eligible = object.eligible ?? false
		return message
	},
	fromAmino(
		object: QueryFeePayWalletIsEligibleResponseAmino
	): QueryFeePayWalletIsEligibleResponse {
		const message = createBaseQueryFeePayWalletIsEligibleResponse()
		if (object.eligible !== undefined && object.eligible !== null) {
			message.eligible = object.eligible
		}
		return message
	},
	toAmino(message: QueryFeePayWalletIsEligibleResponse): QueryFeePayWalletIsEligibleResponseAmino {
		const obj: any = {}
		obj.eligible = message.eligible === false ? undefined : message.eligible
		return obj
	},
	fromAminoMsg(
		object: QueryFeePayWalletIsEligibleResponseAminoMsg
	): QueryFeePayWalletIsEligibleResponse {
		return QueryFeePayWalletIsEligibleResponse.fromAmino(object.value)
	},
	fromProtoMsg(
		message: QueryFeePayWalletIsEligibleResponseProtoMsg
	): QueryFeePayWalletIsEligibleResponse {
		return QueryFeePayWalletIsEligibleResponse.decode(message.value)
	},
	toProto(message: QueryFeePayWalletIsEligibleResponse): Uint8Array {
		return QueryFeePayWalletIsEligibleResponse.encode(message).finish()
	},
	toProtoMsg(
		message: QueryFeePayWalletIsEligibleResponse
	): QueryFeePayWalletIsEligibleResponseProtoMsg {
		return {
			typeUrl: "/juno.feepay.v1.QueryFeePayWalletIsEligibleResponse",
			value: QueryFeePayWalletIsEligibleResponse.encode(message).finish()
		}
	}
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
	return {}
}
export const QueryParamsRequest = {
	typeUrl: "/juno.feepay.v1.QueryParamsRequest",
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
			typeUrl: "/juno.feepay.v1.QueryParamsRequest",
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
	typeUrl: "/juno.feepay.v1.QueryParamsResponse",
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
			typeUrl: "/juno.feepay.v1.QueryParamsResponse",
			value: QueryParamsResponse.encode(message).finish()
		}
	}
}
