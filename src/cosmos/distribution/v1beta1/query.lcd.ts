import type { LCDClient } from "@cosmology/lcd"
import { setPaginationParams } from "../../../helpers"
import type {
	QueryCommunityPoolRequest,
	QueryCommunityPoolResponse,
	QueryDelegationRewardsRequest,
	QueryDelegationRewardsResponse,
	QueryDelegationTotalRewardsRequest,
	QueryDelegationTotalRewardsResponse,
	QueryDelegatorValidatorsRequest,
	QueryDelegatorValidatorsResponse,
	QueryDelegatorWithdrawAddressRequest,
	QueryDelegatorWithdrawAddressResponse,
	QueryParamsRequest,
	QueryParamsResponse,
	QueryValidatorCommissionRequest,
	QueryValidatorCommissionResponse,
	QueryValidatorDistributionInfoRequest,
	QueryValidatorDistributionInfoResponse,
	QueryValidatorOutstandingRewardsRequest,
	QueryValidatorOutstandingRewardsResponse,
	QueryValidatorSlashesRequest,
	QueryValidatorSlashesResponse
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
	/* Params queries params of the distribution module. */
	params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
		const endpoint = "cosmos/distribution/v1beta1/params"
		return await this.req.get<QueryParamsResponse>(endpoint)
	}
	/* ValidatorDistributionInfo queries validator commission and self-delegation rewards for validator */
	validatorDistributionInfo = async (
		params: QueryValidatorDistributionInfoRequest
	): Promise<QueryValidatorDistributionInfoResponse> => {
		const endpoint = `cosmos/distribution/v1beta1/validators/${params.validatorAddress}`
		return await this.req.get<QueryValidatorDistributionInfoResponse>(endpoint)
	}
	/* ValidatorOutstandingRewards queries rewards of a validator address. */
	validatorOutstandingRewards = async (
		params: QueryValidatorOutstandingRewardsRequest
	): Promise<QueryValidatorOutstandingRewardsResponse> => {
		const endpoint = `cosmos/distribution/v1beta1/validators/${params.validatorAddress}/outstanding_rewards`
		return await this.req.get<QueryValidatorOutstandingRewardsResponse>(endpoint)
	}
	/* ValidatorCommission queries accumulated commission for a validator. */
	validatorCommission = async (
		params: QueryValidatorCommissionRequest
	): Promise<QueryValidatorCommissionResponse> => {
		const endpoint = `cosmos/distribution/v1beta1/validators/${params.validatorAddress}/commission`
		return await this.req.get<QueryValidatorCommissionResponse>(endpoint)
	}
	/* ValidatorSlashes queries slash events of a validator. */
	validatorSlashes = async (
		params: QueryValidatorSlashesRequest
	): Promise<QueryValidatorSlashesResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.startingHeight !== "undefined") {
			options.params.starting_height = params.startingHeight
		}
		if (typeof params?.endingHeight !== "undefined") {
			options.params.ending_height = params.endingHeight
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = `cosmos/distribution/v1beta1/validators/${params.validatorAddress}/slashes`
		return await this.req.get<QueryValidatorSlashesResponse>(endpoint, options)
	}
	/* DelegationRewards queries the total rewards accrued by a delegation. */
	delegationRewards = async (
		params: QueryDelegationRewardsRequest
	): Promise<QueryDelegationRewardsResponse> => {
		const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegatorAddress}/rewards/${params.validatorAddress}`
		return await this.req.get<QueryDelegationRewardsResponse>(endpoint)
	}
	/* DelegationTotalRewards queries the total rewards accrued by each
   validator. */
	delegationTotalRewards = async (
		params: QueryDelegationTotalRewardsRequest
	): Promise<QueryDelegationTotalRewardsResponse> => {
		const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegatorAddress}/rewards`
		return await this.req.get<QueryDelegationTotalRewardsResponse>(endpoint)
	}
	/* DelegatorValidators queries the validators of a delegator. */
	delegatorValidators = async (
		params: QueryDelegatorValidatorsRequest
	): Promise<QueryDelegatorValidatorsResponse> => {
		const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegatorAddress}/validators`
		return await this.req.get<QueryDelegatorValidatorsResponse>(endpoint)
	}
	/* DelegatorWithdrawAddress queries withdraw address of a delegator. */
	delegatorWithdrawAddress = async (
		params: QueryDelegatorWithdrawAddressRequest
	): Promise<QueryDelegatorWithdrawAddressResponse> => {
		const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegatorAddress}/withdraw_address`
		return await this.req.get<QueryDelegatorWithdrawAddressResponse>(endpoint)
	}
	/* CommunityPool queries the community pool coins. */
	communityPool = async (
		_params: QueryCommunityPoolRequest = {}
	): Promise<QueryCommunityPoolResponse> => {
		const endpoint = "cosmos/distribution/v1beta1/community_pool"
		return await this.req.get<QueryCommunityPoolResponse>(endpoint)
	}
}
