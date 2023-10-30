import drawPage from "./page/pageView";
import { IApp } from "./common/types";
import { makePhoneMask, openPopup, submitForm } from "./page/pageController";
import closePopup from "./popup/popupController";

class AppController implements IApp {
	public start(): void {
		drawPage();
		openPopup();
		closePopup();
		makePhoneMask();
		submitForm();
	}
}

export default AppController;
