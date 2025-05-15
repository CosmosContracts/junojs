import { MsgCancelFeeShare, MsgRegisterFeeShare, MsgUpdateFeeShare, MsgUpdateParams } from "./tx"
export const AminoConverter = {
	"/juno.feeshare.v1.MsgRegisterFeeShare": {
		aminoType: "juno/x/feeshare/MsgRegisterFeeShare",
		toAmino: MsgRegisterFeeShare.toAmino,
		fromAmino: MsgRegisterFeeShare.fromAmino
	},
	"/juno.feeshare.v1.MsgUpdateFeeShare": {
		aminoType: "juno/x/feeshare/MsgUpdateFeeShare",
		toAmino: MsgUpdateFeeShare.toAmino,
		fromAmino: MsgUpdateFeeShare.fromAmino
	},
	"/juno.feeshare.v1.MsgCancelFeeShare": {
		aminoType: "juno/x/feeshare/MsgCancelFeeShare",
		toAmino: MsgCancelFeeShare.toAmino,
		fromAmino: MsgCancelFeeShare.fromAmino
	},
	"/juno.feeshare.v1.MsgUpdateParams": {
		aminoType: "juno/x/feeshare/MsgUpdateParams",
		toAmino: MsgUpdateParams.toAmino,
		fromAmino: MsgUpdateParams.fromAmino
	}
}
