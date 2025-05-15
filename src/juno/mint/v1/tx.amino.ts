import { MsgUpdateParams } from "./tx"
export const AminoConverter = {
	"/juno.mint.v1.MsgUpdateParams": {
		aminoType: "juno/x/mint/MsgUpdateParams",
		toAmino: MsgUpdateParams.toAmino,
		fromAmino: MsgUpdateParams.fromAmino
	}
}
