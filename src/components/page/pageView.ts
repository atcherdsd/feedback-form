import { errors, formSignatures, placeholders } from "../common/utils";
import drawPopup from "../popup/popupView";

const drawPage = (): void => {
	const markup = `
    <div class="form-container">
			<section class="form-section" id="form-view">
				<h1 class="form-title">${formSignatures.title}</h1>
				<div class="form-wrapper">
					<form class="form" id="contact-data">
						<div class="form-group item1">
							<label for="form-name">${formSignatures.name}</label>
							<input id="form-name" class="input" type="text" name="name" autocomplete="given-name">
							<div class="error-wrapper">
								<div class="error hidden">${errors.empty}</div>
							</div>
						</div>
						<div class="form-group item2">
							<label for="form-email">${formSignatures.email}</label>
							<input id="form-email" class="input" type="email" name="email" 
								placeholder="${placeholders.email}" autocomplete="email">
							<div class="error-wrapper">
								<div class="error hidden"></div>
							</div>
						</div>
						<div class="form-group item3">
							<label for="form-phone">${formSignatures.phone}</label>
							<input id="form-phone" class="input" type="text" name="phone" 
								placeholder="${placeholders.phone}" autocomplete="off">
							<div class="error-wrapper">
								<div class="error hidden"></div>
							</div>
						</div>
						<div class="form-group item4">
							<label for="form-message">${formSignatures.message}</label>
							<textarea id="form-message" class="textarea" name="message" rows="5" cols="33"
								placeholder="${
									placeholders.message
								}" maxlength="500" autocomplete="off"></textarea>
							<div class="error-wrapper">
								<div class="error hidden">${errors.empty}</div>
							</div>
						</div>
						<input id="submit" type="submit" value="${formSignatures.submit}">
					</form>
					<button class="details">${formSignatures.button}</button>
				</div>  
				<div class="notice-wrapper">
					<p class="notice hidden" id="server-notice"></p>
				</div>
			</section>
		</div>
    <div class="popup hidden" id="popup-view">${drawPopup()}</div>
  `;
	const main = document.createElement("main");
	main.classList.add("main");
	main.innerHTML = markup;
	document.body.appendChild(main);
};

export default drawPage;
