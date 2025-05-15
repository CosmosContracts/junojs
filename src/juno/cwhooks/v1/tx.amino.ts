import {
	MsgRegisterGovernance,
	MsgRegisterStaking,
	MsgUnregisterGovernance,
	MsgUnregisterStaking,
	MsgUpdateParams
} from "./tx"
export const AminoConverter = {
	"/juno.cwhooks.v1.MsgUpdateParams": {
		aminoType: "juno/x/cwhooks/MsgUpdateParams",
		toAmino: MsgUpdateParams.toAmino,
		fromAmino: MsgUpdateParams.fromAmino
	},
	"/juno.cwhooks.v1.MsgRegisterStaking": {
		aminoType: "juno/x/cwhooks/MsgRegisterStaking",
		toAmino: MsgRegisterStaking.toAmino,
		fromAmino: MsgRegisterStaking.fromAmino
	},
	"/juno.cwhooks.v1.MsgUnregisterStaking": {
		aminoType: "juno/x/cwhooks/MsgUnregisterStaking",
		toAmino: MsgUnregisterStaking.toAmino,
		fromAmino: MsgUnregisterStaking.fromAmino
	},
	"/juno.cwhooks.v1.MsgRegisterGovernance": {
		aminoType: "juno/x/cwhooks/MsgRegisterGovernance",
		toAmino: MsgRegisterGovernance.toAmino,
		fromAmino: MsgRegisterGovernance.fromAmino
	},
	"/juno.cwhooks.v1.MsgUnregisterGovernance": {
		aminoType: "juno/x/cwhooks/MsgUnregisterGovernance",
		toAmino: MsgUnregisterGovernance.toAmino,
		fromAmino: MsgUnregisterGovernance.fromAmino
	}
}
