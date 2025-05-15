import type { LCDClient } from "@cosmology/lcd"
import { setPaginationParams } from "../../../../helpers"
import type {
	QueryClientParamsRequest,
	QueryClientParamsResponse,
	QueryClientStateRequest,
	QueryClientStateResponse,
	QueryClientStatesRequest,
	QueryClientStatesResponse,
	QueryClientStatusRequest,
	QueryClientStatusResponse,
	QueryConsensusStateHeightsRequest,
	QueryConsensusStateHeightsResponse,
	QueryConsensusStateRequest,
	QueryConsensusStateResponse,
	QueryConsensusStatesRequest,
	QueryConsensusStatesResponse,
	QueryUpgradedClientStateRequest,
	QueryUpgradedClientStateResponse,
	QueryUpgradedConsensusStateRequest,
	QueryUpgradedConsensusStateResponse
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
	/* ClientState queries an IBC light client. */
	clientState = async (params: QueryClientStateRequest): Promise<QueryClientStateResponse> => {
		const endpoint = `ibc/core/client/v1/client_states/${params.clientId}`
		return await this.req.get<QueryClientStateResponse>(endpoint)
	}
	/* ClientStates queries all the IBC light clients of a chain. */
	clientStates = async (
		params: QueryClientStatesRequest = {
			pagination: undefined
		}
	): Promise<QueryClientStatesResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = "ibc/core/client/v1/client_states"
		return await this.req.get<QueryClientStatesResponse>(endpoint, options)
	}
	/* ConsensusState queries a consensus state associated with a client state at
   a given height. */
	consensusState = async (
		params: QueryConsensusStateRequest
	): Promise<QueryConsensusStateResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.latestHeight !== "undefined") {
			options.params.latest_height = params.latestHeight
		}
		const endpoint = `ibc/core/client/v1/consensus_states/${params.clientId}/revision/${params.revisionNumber}/height/${params.revisionHeight}`
		return await this.req.get<QueryConsensusStateResponse>(endpoint, options)
	}
	/* ConsensusStates queries all the consensus state associated with a given
   client. */
	consensusStates = async (
		params: QueryConsensusStatesRequest
	): Promise<QueryConsensusStatesResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = `ibc/core/client/v1/consensus_states/${params.clientId}`
		return await this.req.get<QueryConsensusStatesResponse>(endpoint, options)
	}
	/* ConsensusStateHeights queries the height of every consensus states associated with a given client. */
	consensusStateHeights = async (
		params: QueryConsensusStateHeightsRequest
	): Promise<QueryConsensusStateHeightsResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = `ibc/core/client/v1/consensus_states/${params.clientId}/heights`
		return await this.req.get<QueryConsensusStateHeightsResponse>(endpoint, options)
	}
	/* Status queries the status of an IBC client. */
	clientStatus = async (params: QueryClientStatusRequest): Promise<QueryClientStatusResponse> => {
		const endpoint = `ibc/core/client/v1/client_status/${params.clientId}`
		return await this.req.get<QueryClientStatusResponse>(endpoint)
	}
	/* ClientParams queries all parameters of the ibc client submodule. */
	clientParams = async (
		_params: QueryClientParamsRequest = {}
	): Promise<QueryClientParamsResponse> => {
		const endpoint = "ibc/core/client/v1/params"
		return await this.req.get<QueryClientParamsResponse>(endpoint)
	}
	/* UpgradedClientState queries an Upgraded IBC light client. */
	upgradedClientState = async (
		_params: QueryUpgradedClientStateRequest = {}
	): Promise<QueryUpgradedClientStateResponse> => {
		const endpoint = "ibc/core/client/v1/upgraded_client_states"
		return await this.req.get<QueryUpgradedClientStateResponse>(endpoint)
	}
	/* UpgradedConsensusState queries an Upgraded IBC consensus state. */
	upgradedConsensusState = async (
		_params: QueryUpgradedConsensusStateRequest = {}
	): Promise<QueryUpgradedConsensusStateResponse> => {
		const endpoint = "ibc/core/client/v1/upgraded_consensus_states"
		return await this.req.get<QueryUpgradedConsensusStateResponse>(endpoint)
	}
}
