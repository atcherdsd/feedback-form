import { makePhoneMask } from "../page/pageController";
import { errors } from "./utils";

const validate = (): boolean => {
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
	const regexpEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
	const maskPhone = makePhoneMask();
	let hasError: boolean;

	if (nameInput.value.trim() === "") {
		nameInput.classList.add("error-field");
		errorBoxName.classList.remove("hidden");
		hasError = true;
	} else {
		nameInput.classList.remove("error-field");
		errorBoxName.classList.add("hidden");
		hasError = false;
	}
	if (emailInput.value.trim() === "") {
		emailInput.classList.add("error-field");
		errorBoxEmail.classList.remove("hidden");
		errorBoxEmail.innerHTML = errors.empty;
		hasError = true;
	} else if (!emailInput.value.match(regexpEmail)) {
		emailInput.classList.add("error-field");
		errorBoxEmail.classList.remove("hidden");
		errorBoxEmail.innerHTML = errors.email;
		hasError = true;
	} else {
		emailInput.classList.remove("error-field");
		errorBoxEmail.classList.add("hidden");
		hasError = false;
	}
	if (phoneInput.value.trim() === "") {
		phoneInput.classList.add("error-field");
		errorBoxPhone.classList.remove("hidden");
		errorBoxPhone.innerHTML = errors.empty;
		hasError = true;
	} else if (!maskPhone.masked.isComplete) {
		phoneInput.classList.add("error-field");
		errorBoxPhone.classList.remove("hidden");
		errorBoxPhone.innerHTML = errors.phone;
		hasError = true;
	} else {
		phoneInput.classList.remove("error-field");
		errorBoxPhone.classList.add("hidden");
		hasError = false;
	}
	if (messageInput.value.trim() === "") {
		messageInput.classList.add("error-field");
		errorBoxMessage.classList.remove("hidden");
		hasError = true;
	} else {
		messageInput.classList.remove("error-field");
		errorBoxMessage.classList.add("hidden");
		hasError = false;
	}
	return hasError;
};

export default validate;
