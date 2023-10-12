const numGameHomePage = {
  async render() {
    return `
      <div class="container">
        <div class="wrap-header">
          <h1 class="title-game text-center">Number Game</h1>
        </div>
        <div class="wrap-menu">
          <button class="btn btn-menu">
            <a href="#/play" class="btn-link">Play Now</a>
          </button>
          <button class="btn btn-menu">
            <a href="#/rules" class="btn-link">How to Play</a>
          </button>
          <button class="btn btn-menu">
            <a href="#/about" class="btn-link">About</a>
          </button>
        </div>
      </div>
    `;
  },
};

module.exports = numGameHomePage;
