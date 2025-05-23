import type { Registry } from "@cosmjs/proto-signing"
import type { TelescopeGeneratedType } from "../../../types"
import {
	MsgBurn,
	MsgChangeAdmin,
	MsgCreateDenom,
	MsgForceTransfer,
	MsgMint,
	MsgSetDenomMetadata,
	MsgUpdateParams
} from "./tx"
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [
	["/osmosis.tokenfactory.v1beta1.MsgCreateDenom", MsgCreateDenom],
	["/osmosis.tokenfactory.v1beta1.MsgMint", MsgMint],
	["/osmosis.tokenfactory.v1beta1.MsgBurn", MsgBurn],
	["/osmosis.tokenfactory.v1beta1.MsgChangeAdmin", MsgChangeAdmin],
	["/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata", MsgSetDenomMetadata],
	["/osmosis.tokenfactory.v1beta1.MsgForceTransfer", MsgForceTransfer],
	["/osmosis.tokenfactory.v1beta1.MsgUpdateParams", MsgUpdateParams]
]
export const load = (protoRegistry: Registry) => {
	registry.forEach(([typeUrl, mod]) => {
		protoRegistry.register(typeUrl, mod)
	})
}
export const MessageComposer = {
	encoded: {
		createDenom(value: MsgCreateDenom) {
			return {
				typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom",
				value: MsgCreateDenom.encode(value).finish()
			}
		},
		mint(value: MsgMint) {
			return {
				typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint",
				value: MsgMint.encode(value).finish()
			}
		},
		burn(value: MsgBurn) {
			return {
				typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn",
				value: MsgBurn.encode(value).finish()
			}
		},
		changeAdmin(value: MsgChangeAdmin) {
			return {
				typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin",
				value: MsgChangeAdmin.encode(value).finish()
			}
		},
		setDenomMetadata(value: MsgSetDenomMetadata) {
			return {
				typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata",
				value: MsgSetDenomMetadata.encode(value).finish()
			}
		},
		forceTransfer(value: MsgForceTransfer) {
			return {
				typeUrl: "/osmosis.tokenfactory.v1beta1.MsgForceTransfer",
				value: MsgForceTransfer.encode(value).finish()
			}
		},
		updateParams(value: MsgUpdateParams) {
			return {
				typeUrl: "/osmosis.tokenfactory.v1beta1.MsgUpdateParams",
				value: MsgUpdateParams.encode(value).finish()
			}
		}
	},
	withTypeUrl: {
		createDenom(value: MsgCreateDenom) {
			return {
				typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom",
				value
			}
		},
		mint(value: MsgMint) {
			return {
				typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint",
				value
			}
		},
		burn(value: MsgBurn) {
			return {
				typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn",
				value
			}
		},
		changeAdmin(value: MsgChangeAdmin) {
			return {
				typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin",
				value
			}
		},
		setDenomMetadata(value: MsgSetDenomMetadata) {
			return {
				typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata",
				value
			}
		},
		forceTransfer(value: MsgForceTransfer) {
			return {
				typeUrl: "/osmosis.tokenfactory.v1beta1.MsgForceTransfer",
				value
			}
		},
		updateParams(value: MsgUpdateParams) {
			return {
				typeUrl: "/osmosis.tokenfactory.v1beta1.MsgUpdateParams",
				value
			}
		}
	},
	fromPartial: {
		createDenom(value: MsgCreateDenom) {
			return {
				typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom",
				value: MsgCreateDenom.fromPartial(value)
			}
		},
		mint(value: MsgMint) {
			return {
				typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint",
				value: MsgMint.fromPartial(value)
			}
		},
		burn(value: MsgBurn) {
			return {
				typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn",
				value: MsgBurn.fromPartial(value)
			}
		},
		changeAdmin(value: MsgChangeAdmin) {
			return {
				typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin",
				value: MsgChangeAdmin.fromPartial(value)
			}
		},
		setDenomMetadata(value: MsgSetDenomMetadata) {
			return {
				typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata",
				value: MsgSetDenomMetadata.fromPartial(value)
			}
		},
		forceTransfer(value: MsgForceTransfer) {
			return {
				typeUrl: "/osmosis.tokenfactory.v1beta1.MsgForceTransfer",
				value: MsgForceTransfer.fromPartial(value)
			}
		},
		updateParams(value: MsgUpdateParams) {
			return {
				typeUrl: "/osmosis.tokenfactory.v1beta1.MsgUpdateParams",
				value: MsgUpdateParams.fromPartial(value)
			}
		}
	}
}
