import type { Registry } from "@cosmjs/proto-signing"
import type { TelescopeGeneratedType } from "../../../types"
import { MsgUpdateParams } from "./tx"
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [
	["/gaia.globalfee.v1beta1.MsgUpdateParams", MsgUpdateParams]
]
export const load = (protoRegistry: Registry) => {
	registry.forEach(([typeUrl, mod]) => {
		protoRegistry.register(typeUrl, mod)
	})
}
export const MessageComposer = {
	encoded: {
		updateParams(value: MsgUpdateParams) {
			return {
				typeUrl: "/gaia.globalfee.v1beta1.MsgUpdateParams",
				value: MsgUpdateParams.encode(value).finish()
			}
		}
	},
	withTypeUrl: {
		updateParams(value: MsgUpdateParams) {
			return {
				typeUrl: "/gaia.globalfee.v1beta1.MsgUpdateParams",
				value
			}
		}
	},
	fromPartial: {
		updateParams(value: MsgUpdateParams) {
			return {
				typeUrl: "/gaia.globalfee.v1beta1.MsgUpdateParams",
				value: MsgUpdateParams.fromPartial(value)
			}
		}
	}
}
