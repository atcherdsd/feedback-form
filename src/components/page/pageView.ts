import { formSignatures, placeholders } from '../common/utils';

const drawPage = (): void => {
  const markup = `
    <div class="form-container">
			<section class="form-section" id="form-view">
				<h1 class="form-title">${formSignatures.title}</h1>
				<div class="form-wrapper">
					<form class="form" id="contact-data" action="mailto:example@gmail.com" enctype="text/plain" method="post">
						<div class="form-group item1">
							<label for="form-name">${formSignatures.name}</label>
							<input id="form-name" type="text" name="name" autocomplete="given-name" required>
						</div>
						<div class="form-group item2">
							<label for="form-email">${formSignatures.email}</label>
							<input id="form-email" type="email" name="email" 
								placeholder="${placeholders.email}" autocomplete="email" required>
						</div>
						<div class="form-group item3">
							<label for="form-phone">${formSignatures.phone}</label>
							<input id="form-phone" type="text" name="phone" autocomplete="tel" required>
						</div>
						<div class="form-group item4">
							<label for="form-message">${formSignatures.message}</label>
							<textarea id="form-message" name="message" rows="5" cols="33"
								placeholder="${placeholders.message}" autocomplete="off" required></textarea>
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
    <div class="popup" id="popup-view"></div>
  `;
  const main = document.createElement('main');
	main.classList.add('main');
  main.innerHTML = markup;
  document.body.appendChild(main);
};

export default drawPage;
