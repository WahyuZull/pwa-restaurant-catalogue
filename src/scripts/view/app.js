import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';
import { createErrorRoutesTemplate } from './templates/template-creator';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  // eslint-disable-next-line consistent-return
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    try {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      const errorRender = () => {
        this._content.innerHTML = createErrorRoutesTemplate(error);
      };
      return errorRender(error);
    }

    const skipLink = document.querySelector('.skip-link');
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#mainContent').focus();
    });
  }
}

export default App;
