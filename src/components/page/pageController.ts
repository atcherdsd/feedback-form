import IMask, { InputMask } from "imask";
import validate from "../common/validate";

export const makePhoneMask = (): InputMask<{
	mask: string;
}> => {
	const phoneInput = document.getElementById("form-phone") as HTMLInputElement;
	const maskOptions = {
		mask: "+{375}(00)000-00-00",
	};
	return IMask(phoneInput, maskOptions);
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
	const textarea = document.querySelector("textarea") as HTMLTextAreaElement;
	console.log(inputs);
	console.log(textarea.value === "");

	const submittedForm = document.getElementById(
		"contact-data",
	) as HTMLFormElement;
	submittedForm.addEventListener("submit", async (event) => {
		event.preventDefault();
		const hasError = validate();
		if (hasError) {
			return;
		} else {
			inputs.forEach((elem) => (elem.value = ""));
			textarea.value = "";
		}
	});
};
