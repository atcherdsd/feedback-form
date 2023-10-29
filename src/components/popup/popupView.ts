import { popupContent } from "../common/utils";

const drawPopup = (): string => `
 	<div class="overlay">
		<div class="popup-container">
			<h2 class="popup-title">${popupContent[0].title}</h2>
			<ul>
				<li>${popupContent[1].item}</li>
				<li>${popupContent[2].item}
				</li>
			</ul>
			<button class="btn-close" id="close">${popupContent.at(-1).button}</button>
		</div>
	</div>
`;

export default drawPopup;
