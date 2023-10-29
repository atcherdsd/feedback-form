import drawPage from './page/pageView';
import { IApp } from './common/types';

class App implements IApp {
  public start(): void {
    drawPage();
  }
}

export default App;
