import {
	MsgFundFeePayContract,
	MsgRegisterFeePayContract,
	MsgUnregisterFeePayContract,
	MsgUpdateFeePayContractWalletLimit,
	MsgUpdateParams
} from "./tx"
export const AminoConverter = {
	"/juno.feepay.v1.MsgRegisterFeePayContract": {
		aminoType: "juno/x/feepay/MsgRegisterFeePayContract",
		toAmino: MsgRegisterFeePayContract.toAmino,
		fromAmino: MsgRegisterFeePayContract.fromAmino
	},
	"/juno.feepay.v1.MsgUnregisterFeePayContract": {
		aminoType: "juno/x/feepay/MsgUnregisterFeePayContract",
		toAmino: MsgUnregisterFeePayContract.toAmino,
		fromAmino: MsgUnregisterFeePayContract.fromAmino
	},
	"/juno.feepay.v1.MsgFundFeePayContract": {
		aminoType: "juno/x/feepay/MsgFundFeePayContract",
		toAmino: MsgFundFeePayContract.toAmino,
		fromAmino: MsgFundFeePayContract.fromAmino
	},
	"/juno.feepay.v1.MsgUpdateFeePayContractWalletLimit": {
		aminoType: "juno/x/feepay/MsgUpdateFeePayContractWalletLimit",
		toAmino: MsgUpdateFeePayContractWalletLimit.toAmino,
		fromAmino: MsgUpdateFeePayContractWalletLimit.fromAmino
	},
	"/juno.feepay.v1.MsgUpdateParams": {
		aminoType: "juno/x/feepay/MsgUpdateParams",
		toAmino: MsgUpdateParams.toAmino,
		fromAmino: MsgUpdateParams.fromAmino
	}
}
