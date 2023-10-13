require('../styles/main.css');
const App = require('../views/app');

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => app.renderPage());

window.addEventListener('load', () => {
  app.renderPage();
});
