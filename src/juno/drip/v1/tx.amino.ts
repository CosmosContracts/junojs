import { MsgDistributeTokens, MsgUpdateParams } from "./tx"
export const AminoConverter = {
	"/juno.drip.v1.MsgDistributeTokens": {
		aminoType: "juno/x/drip/MsgDistributeTokens",
		toAmino: MsgDistributeTokens.toAmino,
		fromAmino: MsgDistributeTokens.fromAmino
	},
	"/juno.drip.v1.MsgUpdateParams": {
		aminoType: "juno/x/drip/MsgUpdateParams",
		toAmino: MsgUpdateParams.toAmino,
		fromAmino: MsgUpdateParams.fromAmino
	}
}
