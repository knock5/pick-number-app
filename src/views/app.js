const UrlParser = require('../routes/url-parser');
const routes = require('../routes/routes');

class App {
  constructor({ content }) {
    this._content = content;
  }

  getAnswer() {
    let answer = '123'.split('');
    for (let i = 0; i < answer.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = answer[i];
      answer[i] = answer[j];
      answer[j] = temp;
    }
    return answer.join('');
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

module.exports = App;
