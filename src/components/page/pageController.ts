import store from "../common/store";
import sendData from "./pageModel";
import { ServerResponse, Status } from "../common/types";
import drawErrors from "../errors/errorsView";
import Inputmask from "inputmask";

export const makePhoneMask = () => {
	const selector = document.getElementById("form-phone") as HTMLInputElement;

	const im = new Inputmask("+375(99)999-99-99");
	im.mask(selector);
	return im;
};

export const openPopup = (): void => {
	const detailsBtn = document.querySelector(".details") as HTMLButtonElement;
	const popup = document.getElementById("popup-view") as HTMLDivElement;
	detailsBtn.addEventListener("click", () => {
		document.body.style.overflowY = "hidden";
		popup.classList.remove("hidden");
		popup.classList.add("opening");
	});
};

export const submitForm = (): void => {
	const inputs = document.querySelectorAll(
		"input:not(input[type='submit'])",
	) as NodeListOf<HTMLInputElement>;
	const errorBox = document.querySelectorAll(
		"div.error-wrapper > div.error",
	) as NodeListOf<HTMLInputElement>;
	const textarea = document.querySelector("textarea") as HTMLTextAreaElement;
	const form = document.getElementById("contact-data") as HTMLFormElement;
	const selector = document.getElementById("form-phone") as HTMLInputElement;

	const submittedForm = document.getElementById(
		"contact-data",
	) as HTMLFormElement;
	submittedForm.addEventListener("submit", async (event) => {
		event.preventDefault();
		store.nameValue = (form.elements[0] as HTMLInputElement).value;
		store.emailValue = (form.elements[1] as HTMLInputElement).value;
		store.phoneValue = (form.elements[2] as HTMLInputElement).value;
		store.messageValue = (form.elements[3] as HTMLInputElement).value;

		const unformattedMask = Inputmask.unmask(selector.value, {
			mask: "999-99-999-99-99",
		});
		if (unformattedMask.length < 12) store.hasPhoneMatches = false;
		else store.hasPhoneMatches = true;

		const response = (await sendData(store)) as ServerResponse;

		if (response.status === Status.Error) {
			drawErrors(response.fields);
		} else if (response.status === Status.Success) {
			inputs.forEach((input) => input.classList.remove("error-field"));
			textarea.classList.remove("error-field");
			errorBox.forEach((box) => box.classList.add("hidden"));

			const serverMsg = response.msg;
			const noticeDiv = document.querySelector(".notice") as HTMLDivElement;
			noticeDiv.classList.remove("hidden");
			noticeDiv.innerHTML = serverMsg;
			setTimeout(() => {
				noticeDiv.classList.add("hidden");
			}, 2000);
			inputs.forEach((elem) => (elem.value = ""));
			textarea.value = "";
		}
	});
};
