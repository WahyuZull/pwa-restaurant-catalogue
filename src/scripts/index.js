import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
// import swRegister from './utils/sw-register';
import App from './view/app';
import './component/header-element';
import './component/footer-element';

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  // swRegister();
});
