import { DataFromForm } from "../common/types";
import { errors } from "../common/utils";

const drawErrors = (dataFromForm: DataFromForm): void => {
	const nameInput = document.getElementById("form-name") as HTMLInputElement;
	const emailInput = document.getElementById("form-email") as HTMLInputElement;
	const phoneInput = document.getElementById("form-phone") as HTMLInputElement;
	const messageInput = document.getElementById(
		"form-message",
	) as HTMLTextAreaElement;
	const errorBoxName = document.querySelector(
		"div.item1 div.error-wrapper > div.error",
	) as HTMLDivElement;
	const errorBoxEmail = document.querySelector(
		"div.item2 div.error-wrapper > div.error",
	) as HTMLDivElement;
	const errorBoxPhone = document.querySelector(
		"div.item3 div.error-wrapper > div.error",
	) as HTMLDivElement;
	const errorBoxMessage = document.querySelector(
		"textarea ~ div.error-wrapper > div.error",
	) as HTMLDivElement;

	if (dataFromForm.inputName) {
		nameInput.classList.add("error-field");
		errorBoxName.classList.remove("hidden");
	} else {
		nameInput.classList.remove("error-field");
		errorBoxName.classList.add("hidden");
	}
	if (dataFromForm.inputEmail && dataFromForm.inputEmail === errors.empty) {
		emailInput.classList.add("error-field");
		errorBoxEmail.classList.remove("hidden");
		errorBoxEmail.innerHTML = errors.empty;
	} else if (
		dataFromForm.inputEmail &&
		dataFromForm.inputEmail === errors.email
	) {
		emailInput.classList.add("error-field");
		errorBoxEmail.classList.remove("hidden");
		errorBoxEmail.innerHTML = errors.email;
	} else {
		emailInput.classList.remove("error-field");
		errorBoxEmail.classList.add("hidden");
	}
	if (dataFromForm.inputPhone && dataFromForm.inputPhone === errors.empty) {
		phoneInput.classList.add("error-field");
		errorBoxPhone.classList.remove("hidden");
		errorBoxPhone.innerHTML = errors.empty;
	} else if (
		dataFromForm.inputPhone &&
		dataFromForm.inputPhone === errors.phone
	) {
		phoneInput.classList.add("error-field");
		errorBoxPhone.classList.remove("hidden");
		errorBoxPhone.innerHTML = errors.phone;
	} else {
		phoneInput.classList.remove("error-field");
		errorBoxPhone.classList.add("hidden");
	}
	if (dataFromForm.inputMessage) {
		messageInput.classList.add("error-field");
		errorBoxMessage.classList.remove("hidden");
	} else {
		messageInput.classList.remove("error-field");
		errorBoxMessage.classList.add("hidden");
	}
};

export default drawErrors;
