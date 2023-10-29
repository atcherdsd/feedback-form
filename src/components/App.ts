import drawPage from './page/pageView';
import { IApp } from './common/types';
import openPopup from './page/pageController';
import closePopup from './popup/popupController';

class App implements IApp {
  public start(): void {
    drawPage();
		openPopup();
		closePopup();
  }
}

export default App;
