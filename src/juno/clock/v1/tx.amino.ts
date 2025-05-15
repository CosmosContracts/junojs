import {
	MsgRegisterClockContract,
	MsgUnjailClockContract,
	MsgUnregisterClockContract,
	MsgUpdateParams
} from "./tx"
export const AminoConverter = {
	"/juno.clock.v1.MsgRegisterClockContract": {
		aminoType: "juno/x/clock/MsgRegisterClockContract",
		toAmino: MsgRegisterClockContract.toAmino,
		fromAmino: MsgRegisterClockContract.fromAmino
	},
	"/juno.clock.v1.MsgUnregisterClockContract": {
		aminoType: "juno/x/clock/MsgUnregisterClockContract",
		toAmino: MsgUnregisterClockContract.toAmino,
		fromAmino: MsgUnregisterClockContract.fromAmino
	},
	"/juno.clock.v1.MsgUnjailClockContract": {
		aminoType: "juno/x/clock/MsgUnjailClockContract",
		toAmino: MsgUnjailClockContract.toAmino,
		fromAmino: MsgUnjailClockContract.fromAmino
	},
	"/juno.clock.v1.MsgUpdateParams": {
		aminoType: "juno/x/clock/MsgUpdateParams",
		toAmino: MsgUpdateParams.toAmino,
		fromAmino: MsgUpdateParams.fromAmino
	}
}
