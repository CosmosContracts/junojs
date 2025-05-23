import { BinaryReader } from "../../../binary"
import type { TxRpc } from "../../../types"
import {
	QueryDelegationRequest,
	QueryDelegationResponse,
	QueryDelegatorDelegationsRequest,
	QueryDelegatorDelegationsResponse,
	QueryDelegatorUnbondingDelegationsRequest,
	QueryDelegatorUnbondingDelegationsResponse,
	QueryDelegatorValidatorRequest,
	QueryDelegatorValidatorResponse,
	QueryDelegatorValidatorsRequest,
	QueryDelegatorValidatorsResponse,
	QueryHistoricalInfoRequest,
	QueryHistoricalInfoResponse,
	QueryParamsRequest,
	QueryParamsResponse,
	QueryPoolRequest,
	QueryPoolResponse,
	QueryRedelegationsRequest,
	QueryRedelegationsResponse,
	QueryUnbondingDelegationRequest,
	QueryUnbondingDelegationResponse,
	QueryValidatorDelegationsRequest,
	QueryValidatorDelegationsResponse,
	QueryValidatorRequest,
	QueryValidatorResponse,
	QueryValidatorUnbondingDelegationsRequest,
	QueryValidatorUnbondingDelegationsResponse,
	QueryValidatorsRequest,
	QueryValidatorsResponse
} from "./query"
/** Query defines the gRPC querier service. */
export interface Query {
	/**
	 * Validators queries all validators that match the given status.
	 *
	 * When called from another module, this query might consume a high amount of
	 * gas if the pagination field is incorrectly set.
	 */
	validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse>
	/** Validator queries validator info for given validator address. */
	validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse>
	/**
	 * ValidatorDelegations queries delegate info for given validator.
	 *
	 * When called from another module, this query might consume a high amount of
	 * gas if the pagination field is incorrectly set.
	 */
	validatorDelegations(
		request: QueryValidatorDelegationsRequest
	): Promise<QueryValidatorDelegationsResponse>
	/**
	 * ValidatorUnbondingDelegations queries unbonding delegations of a validator.
	 *
	 * When called from another module, this query might consume a high amount of
	 * gas if the pagination field is incorrectly set.
	 */
	validatorUnbondingDelegations(
		request: QueryValidatorUnbondingDelegationsRequest
	): Promise<QueryValidatorUnbondingDelegationsResponse>
	/** Delegation queries delegate info for given validator delegator pair. */
	delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse>
	/**
	 * UnbondingDelegation queries unbonding info for given validator delegator
	 * pair.
	 */
	unbondingDelegation(
		request: QueryUnbondingDelegationRequest
	): Promise<QueryUnbondingDelegationResponse>
	/**
	 * DelegatorDelegations queries all delegations of a given delegator address.
	 *
	 * When called from another module, this query might consume a high amount of
	 * gas if the pagination field is incorrectly set.
	 */
	delegatorDelegations(
		request: QueryDelegatorDelegationsRequest
	): Promise<QueryDelegatorDelegationsResponse>
	/**
	 * DelegatorUnbondingDelegations queries all unbonding delegations of a given
	 * delegator address.
	 *
	 * When called from another module, this query might consume a high amount of
	 * gas if the pagination field is incorrectly set.
	 */
	delegatorUnbondingDelegations(
		request: QueryDelegatorUnbondingDelegationsRequest
	): Promise<QueryDelegatorUnbondingDelegationsResponse>
	/**
	 * Redelegations queries redelegations of given address.
	 *
	 * When called from another module, this query might consume a high amount of
	 * gas if the pagination field is incorrectly set.
	 */
	redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse>
	/**
	 * DelegatorValidators queries all validators info for given delegator
	 * address.
	 *
	 * When called from another module, this query might consume a high amount of
	 * gas if the pagination field is incorrectly set.
	 */
	delegatorValidators(
		request: QueryDelegatorValidatorsRequest
	): Promise<QueryDelegatorValidatorsResponse>
	/**
	 * DelegatorValidator queries validator info for given delegator validator
	 * pair.
	 */
	delegatorValidator(
		request: QueryDelegatorValidatorRequest
	): Promise<QueryDelegatorValidatorResponse>
	/** HistoricalInfo queries the historical info for given height. */
	historicalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse>
	/** Pool queries the pool info. */
	pool(request?: QueryPoolRequest): Promise<QueryPoolResponse>
	/** Parameters queries the staking parameters. */
	params(request?: QueryParamsRequest): Promise<QueryParamsResponse>
}
export class QueryClientImpl implements Query {
	private readonly rpc: TxRpc
	constructor(rpc: TxRpc) {
		this.rpc = rpc
	}
	/* Validators queries all validators that match the given status.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
	validators = async (request: QueryValidatorsRequest): Promise<QueryValidatorsResponse> => {
		const data = QueryValidatorsRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validators", data)
		return promise.then((data) => QueryValidatorsResponse.decode(new BinaryReader(data)))
	}
	/* Validator queries validator info for given validator address. */
	validator = async (request: QueryValidatorRequest): Promise<QueryValidatorResponse> => {
		const data = QueryValidatorRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validator", data)
		return promise.then((data) => QueryValidatorResponse.decode(new BinaryReader(data)))
	}
	/* ValidatorDelegations queries delegate info for given validator.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
	validatorDelegations = async (
		request: QueryValidatorDelegationsRequest
	): Promise<QueryValidatorDelegationsResponse> => {
		const data = QueryValidatorDelegationsRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorDelegations", data)
		return promise.then((data) =>
			QueryValidatorDelegationsResponse.decode(new BinaryReader(data))
		)
	}
	/* ValidatorUnbondingDelegations queries unbonding delegations of a validator.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
	validatorUnbondingDelegations = async (
		request: QueryValidatorUnbondingDelegationsRequest
	): Promise<QueryValidatorUnbondingDelegationsResponse> => {
		const data = QueryValidatorUnbondingDelegationsRequest.encode(request).finish()
		const promise = this.rpc.request(
			"cosmos.staking.v1beta1.Query",
			"ValidatorUnbondingDelegations",
			data
		)
		return promise.then((data) =>
			QueryValidatorUnbondingDelegationsResponse.decode(new BinaryReader(data))
		)
	}
	/* Delegation queries delegate info for given validator delegator pair. */
	delegation = async (request: QueryDelegationRequest): Promise<QueryDelegationResponse> => {
		const data = QueryDelegationRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Delegation", data)
		return promise.then((data) => QueryDelegationResponse.decode(new BinaryReader(data)))
	}
	/* UnbondingDelegation queries unbonding info for given validator delegator
   pair. */
	unbondingDelegation = async (
		request: QueryUnbondingDelegationRequest
	): Promise<QueryUnbondingDelegationResponse> => {
		const data = QueryUnbondingDelegationRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "UnbondingDelegation", data)
		return promise.then((data) => QueryUnbondingDelegationResponse.decode(new BinaryReader(data)))
	}
	/* DelegatorDelegations queries all delegations of a given delegator address.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
	delegatorDelegations = async (
		request: QueryDelegatorDelegationsRequest
	): Promise<QueryDelegatorDelegationsResponse> => {
		const data = QueryDelegatorDelegationsRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorDelegations", data)
		return promise.then((data) =>
			QueryDelegatorDelegationsResponse.decode(new BinaryReader(data))
		)
	}
	/* DelegatorUnbondingDelegations queries all unbonding delegations of a given
   delegator address.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
	delegatorUnbondingDelegations = async (
		request: QueryDelegatorUnbondingDelegationsRequest
	): Promise<QueryDelegatorUnbondingDelegationsResponse> => {
		const data = QueryDelegatorUnbondingDelegationsRequest.encode(request).finish()
		const promise = this.rpc.request(
			"cosmos.staking.v1beta1.Query",
			"DelegatorUnbondingDelegations",
			data
		)
		return promise.then((data) =>
			QueryDelegatorUnbondingDelegationsResponse.decode(new BinaryReader(data))
		)
	}
	/* Redelegations queries redelegations of given address.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
	redelegations = async (
		request: QueryRedelegationsRequest
	): Promise<QueryRedelegationsResponse> => {
		const data = QueryRedelegationsRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Redelegations", data)
		return promise.then((data) => QueryRedelegationsResponse.decode(new BinaryReader(data)))
	}
	/* DelegatorValidators queries all validators info for given delegator
   address.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
	delegatorValidators = async (
		request: QueryDelegatorValidatorsRequest
	): Promise<QueryDelegatorValidatorsResponse> => {
		const data = QueryDelegatorValidatorsRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidators", data)
		return promise.then((data) => QueryDelegatorValidatorsResponse.decode(new BinaryReader(data)))
	}
	/* DelegatorValidator queries validator info for given delegator validator
   pair. */
	delegatorValidator = async (
		request: QueryDelegatorValidatorRequest
	): Promise<QueryDelegatorValidatorResponse> => {
		const data = QueryDelegatorValidatorRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidator", data)
		return promise.then((data) => QueryDelegatorValidatorResponse.decode(new BinaryReader(data)))
	}
	/* HistoricalInfo queries the historical info for given height. */
	historicalInfo = async (
		request: QueryHistoricalInfoRequest
	): Promise<QueryHistoricalInfoResponse> => {
		const data = QueryHistoricalInfoRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "HistoricalInfo", data)
		return promise.then((data) => QueryHistoricalInfoResponse.decode(new BinaryReader(data)))
	}
	/* Pool queries the pool info. */
	pool = async (request: QueryPoolRequest = {}): Promise<QueryPoolResponse> => {
		const data = QueryPoolRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Pool", data)
		return promise.then((data) => QueryPoolResponse.decode(new BinaryReader(data)))
	}
	/* Parameters queries the staking parameters. */
	params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const data = QueryParamsRequest.encode(request).finish()
		const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Params", data)
		return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)))
	}
}
export const createClientImpl = (rpc: TxRpc) => {
	return new QueryClientImpl(rpc)
}
