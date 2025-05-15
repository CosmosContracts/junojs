import type { LCDClient } from "@cosmology/lcd"
import { setPaginationParams } from "../../../../helpers"
import type {
	QueryClientConnectionsRequest,
	QueryClientConnectionsResponse,
	QueryConnectionClientStateRequest,
	QueryConnectionClientStateResponse,
	QueryConnectionConsensusStateRequest,
	QueryConnectionConsensusStateResponse,
	QueryConnectionParamsRequest,
	QueryConnectionParamsResponse,
	QueryConnectionRequest,
	QueryConnectionResponse,
	QueryConnectionsRequest,
	QueryConnectionsResponse
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
	/* Connection queries an IBC connection end. */
	connection = async (params: QueryConnectionRequest): Promise<QueryConnectionResponse> => {
		const endpoint = `ibc/core/connection/v1/connections/${params.connectionId}`
		return await this.req.get<QueryConnectionResponse>(endpoint)
	}
	/* Connections queries all the IBC connections of a chain. */
	connections = async (
		params: QueryConnectionsRequest = {
			pagination: undefined
		}
	): Promise<QueryConnectionsResponse> => {
		const options: any = {
			params: {}
		}
		if (typeof params?.pagination !== "undefined") {
			setPaginationParams(options, params.pagination)
		}
		const endpoint = "ibc/core/connection/v1/connections"
		return await this.req.get<QueryConnectionsResponse>(endpoint, options)
	}
	/* ClientConnections queries the connection paths associated with a client
   state. */
	clientConnections = async (
		params: QueryClientConnectionsRequest
	): Promise<QueryClientConnectionsResponse> => {
		const endpoint = `ibc/core/connection/v1/client_connections/${params.clientId}`
		return await this.req.get<QueryClientConnectionsResponse>(endpoint)
	}
	/* ConnectionClientState queries the client state associated with the
   connection. */
	connectionClientState = async (
		params: QueryConnectionClientStateRequest
	): Promise<QueryConnectionClientStateResponse> => {
		const endpoint = `ibc/core/connection/v1/connections/${params.connectionId}/client_state`
		return await this.req.get<QueryConnectionClientStateResponse>(endpoint)
	}
	/* ConnectionConsensusState queries the consensus state associated with the
   connection. */
	connectionConsensusState = async (
		params: QueryConnectionConsensusStateRequest
	): Promise<QueryConnectionConsensusStateResponse> => {
		const endpoint = `ibc/core/connection/v1/connections/${params.connectionId}/consensus_state/revision/${params.revisionNumber}/height/${params.revisionHeight}`
		return await this.req.get<QueryConnectionConsensusStateResponse>(endpoint)
	}
	/* ConnectionParams queries all parameters of the ibc connection submodule. */
	connectionParams = async (
		_params: QueryConnectionParamsRequest = {}
	): Promise<QueryConnectionParamsResponse> => {
		const endpoint = "ibc/core/connection/v1/params"
		return await this.req.get<QueryConnectionParamsResponse>(endpoint)
	}
}
