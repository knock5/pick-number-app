const UrlParser = require('../routes/url-parser');
const routes = require('../routes/routes');

class App {
  constructor({ content }) {
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
  }
}

module.exports = App;
