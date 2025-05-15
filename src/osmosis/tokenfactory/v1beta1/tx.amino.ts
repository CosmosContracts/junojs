import {
	MsgBurn,
	MsgChangeAdmin,
	MsgCreateDenom,
	MsgForceTransfer,
	MsgMint,
	MsgSetDenomMetadata,
	MsgUpdateParams
} from "./tx"
export const AminoConverter = {
	"/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
		aminoType: "juno/x/tokenfactory/MsgCreateDenom",
		toAmino: MsgCreateDenom.toAmino,
		fromAmino: MsgCreateDenom.fromAmino
	},
	"/osmosis.tokenfactory.v1beta1.MsgMint": {
		aminoType: "juno/x/tokenfactory/MsgMint",
		toAmino: MsgMint.toAmino,
		fromAmino: MsgMint.fromAmino
	},
	"/osmosis.tokenfactory.v1beta1.MsgBurn": {
		aminoType: "juno/x/tokenfactory/MsgBurn",
		toAmino: MsgBurn.toAmino,
		fromAmino: MsgBurn.fromAmino
	},
	"/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
		aminoType: "juno/x/tokenfactory/MsgChangeAdmin",
		toAmino: MsgChangeAdmin.toAmino,
		fromAmino: MsgChangeAdmin.fromAmino
	},
	"/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
		aminoType: "juno/x/tokenfactory/MsgSetDenomMetadata",
		toAmino: MsgSetDenomMetadata.toAmino,
		fromAmino: MsgSetDenomMetadata.fromAmino
	},
	"/osmosis.tokenfactory.v1beta1.MsgForceTransfer": {
		aminoType: "juno/x/tokenfactory/MsgForceTransfer",
		toAmino: MsgForceTransfer.toAmino,
		fromAmino: MsgForceTransfer.fromAmino
	},
	"/osmosis.tokenfactory.v1beta1.MsgUpdateParams": {
		aminoType: "juno/x/tokenfactory/MsgUpdateParams",
		toAmino: MsgUpdateParams.toAmino,
		fromAmino: MsgUpdateParams.fromAmino
	}
}
