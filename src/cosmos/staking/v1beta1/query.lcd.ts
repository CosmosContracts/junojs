import type { LCDClient } from "@cosmology/lcd"
import { setPaginationParams } from "../../../helpers"
import type {
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
export class LCDQueryClient {
	req: LCDClient
	constructor({
		requestClient
	}: {
		requestClient: LCDClient
	}) {
		this.req = requestClient
	}
	/* Validators queries all validators that match the given status.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
	validators = async (params: QueryValidatorsRequest): Promise<QueryValidatorsResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.status !== "undefined") {
			options.params.status = params.status
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = "cosmos/staking/v1beta1/validators"
		return await this.req.get<QueryValidatorsResponse>(endpoint, options)
	}
	/* Validator queries validator info for given validator address. */
	validator = async (params: QueryValidatorRequest): Promise<QueryValidatorResponse> => {
		const endpoint = `cosmos/staking/v1beta1/validators/${params.validatorAddr}`
		return await this.req.get<QueryValidatorResponse>(endpoint)
	}
	/* ValidatorDelegations queries delegate info for given validator.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
	validatorDelegations = async (
		params: QueryValidatorDelegationsRequest
	): Promise<QueryValidatorDelegationsResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = `cosmos/staking/v1beta1/validators/${params.validatorAddr}/delegations`
		return await this.req.get<QueryValidatorDelegationsResponse>(endpoint, options)
	}
	/* ValidatorUnbondingDelegations queries unbonding delegations of a validator.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
	validatorUnbondingDelegations = async (
		params: QueryValidatorUnbondingDelegationsRequest
	): Promise<QueryValidatorUnbondingDelegationsResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = `cosmos/staking/v1beta1/validators/${params.validatorAddr}/unbonding_delegations`
		return await this.req.get<QueryValidatorUnbondingDelegationsResponse>(endpoint, options)
	}
	/* Delegation queries delegate info for given validator delegator pair. */
	delegation = async (params: QueryDelegationRequest): Promise<QueryDelegationResponse> => {
		const endpoint = `cosmos/staking/v1beta1/validators/${params.validatorAddr}/delegations/${params.delegatorAddr}`
		return await this.req.get<QueryDelegationResponse>(endpoint)
	}
	/* UnbondingDelegation queries unbonding info for given validator delegator
   pair. */
	unbondingDelegation = async (
		params: QueryUnbondingDelegationRequest
	): Promise<QueryUnbondingDelegationResponse> => {
		const endpoint = `cosmos/staking/v1beta1/validators/${params.validatorAddr}/delegations/${params.delegatorAddr}/unbonding_delegation`
		return await this.req.get<QueryUnbondingDelegationResponse>(endpoint)
	}
	/* DelegatorDelegations queries all delegations of a given delegator address.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
	delegatorDelegations = async (
		params: QueryDelegatorDelegationsRequest
	): Promise<QueryDelegatorDelegationsResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = `cosmos/staking/v1beta1/delegations/${params.delegatorAddr}`
		return await this.req.get<QueryDelegatorDelegationsResponse>(endpoint, options)
	}
	/* DelegatorUnbondingDelegations queries all unbonding delegations of a given
   delegator address.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
	delegatorUnbondingDelegations = async (
		params: QueryDelegatorUnbondingDelegationsRequest
	): Promise<QueryDelegatorUnbondingDelegationsResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = `cosmos/staking/v1beta1/delegators/${params.delegatorAddr}/unbonding_delegations`
		return await this.req.get<QueryDelegatorUnbondingDelegationsResponse>(endpoint, options)
	}
	/* Redelegations queries redelegations of given address.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
	redelegations = async (
		params: QueryRedelegationsRequest
	): Promise<QueryRedelegationsResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.srcValidatorAddr !== "undefined") {
			options.params.src_validator_addr = params.srcValidatorAddr
		}
		if (typeof params?.dstValidatorAddr !== "undefined") {
			options.params.dst_validator_addr = params.dstValidatorAddr
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = `cosmos/staking/v1beta1/delegators/${params.delegatorAddr}/redelegations`
		return await this.req.get<QueryRedelegationsResponse>(endpoint, options)
	}
	/* DelegatorValidators queries all validators info for given delegator
   address.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
	delegatorValidators = async (
		params: QueryDelegatorValidatorsRequest
	): Promise<QueryDelegatorValidatorsResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = `cosmos/staking/v1beta1/delegators/${params.delegatorAddr}/validators`
		return await this.req.get<QueryDelegatorValidatorsResponse>(endpoint, options)
	}
	/* DelegatorValidator queries validator info for given delegator validator
   pair. */
	delegatorValidator = async (
		params: QueryDelegatorValidatorRequest
	): Promise<QueryDelegatorValidatorResponse> => {
		const endpoint = `cosmos/staking/v1beta1/delegators/${params.delegatorAddr}/validators/${params.validatorAddr}`
		return await this.req.get<QueryDelegatorValidatorResponse>(endpoint)
	}
	/* HistoricalInfo queries the historical info for given height. */
	historicalInfo = async (
		params: QueryHistoricalInfoRequest
	): Promise<QueryHistoricalInfoResponse> => {
		const endpoint = `cosmos/staking/v1beta1/historical_info/${params.height}`
		return await this.req.get<QueryHistoricalInfoResponse>(endpoint)
	}
	/* Pool queries the pool info. */
	pool = async (_params: QueryPoolRequest = {}): Promise<QueryPoolResponse> => {
		const endpoint = "cosmos/staking/v1beta1/pool"
		return await this.req.get<QueryPoolResponse>(endpoint)
	}
	/* Parameters queries the staking parameters. */
	params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const endpoint = "cosmos/staking/v1beta1/params"
		return await this.req.get<QueryParamsResponse>(endpoint)
	}
}
