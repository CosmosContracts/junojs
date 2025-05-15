import { MsgUpdateParams } from "./tx"
export const AminoConverter = {
	"/gaia.globalfee.v1beta1.MsgUpdateParams": {
		aminoType: "gaia/x/globalfee/MsgUpdateParams",
		toAmino: MsgUpdateParams.toAmino,
		fromAmino: MsgUpdateParams.fromAmino
	}
}
