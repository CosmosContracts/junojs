import type { Registry } from "@cosmjs/proto-signing"
import type { TelescopeGeneratedType } from "../../../types"
import { MsgSend } from "./tx"
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [
	["/cosmos.nft.v1beta1.MsgSend", MsgSend]
]
export const load = (protoRegistry: Registry) => {
	registry.forEach(([typeUrl, mod]) => {
		protoRegistry.register(typeUrl, mod)
	})
}
export const MessageComposer = {
	encoded: {
		send(value: MsgSend) {
			return {
				typeUrl: "/cosmos.nft.v1beta1.MsgSend",
				value: MsgSend.encode(value).finish()
			}
		}
	},
	withTypeUrl: {
		send(value: MsgSend) {
			return {
				typeUrl: "/cosmos.nft.v1beta1.MsgSend",
				value
			}
		}
	},
	fromPartial: {
		send(value: MsgSend) {
			return {
				typeUrl: "/cosmos.nft.v1beta1.MsgSend",
				value: MsgSend.fromPartial(value)
			}
		}
	}
}
