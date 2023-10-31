import { DataFromForm } from "./types";
import { errors } from "./utils";

const serverValidate = (
	name: string,
	email: string,
	phone: string,
	msg: string,
	hasPhoneMatches: boolean,
): DataFromForm => {
	const regexpEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
	const dataFromForm = {
		inputName: "",
		inputEmail: "",
		inputPhone: "",
		inputMessage: "",
	} as DataFromForm;

	if (name.trim() === "") dataFromForm.inputName = errors.empty;
	if (email.trim() === "") dataFromForm.inputEmail = errors.empty;
	if (phone.trim() === "") dataFromForm.inputPhone = errors.empty;
	if (msg.trim() === "") dataFromForm.inputMessage = errors.empty;
	if (!email.match(regexpEmail)) dataFromForm.inputEmail = errors.email;
	if (hasPhoneMatches === false) dataFromForm.inputPhone = errors.phone;

	return dataFromForm;
};

export default serverValidate;
