const numGameHomePage = {
  async render() {
    return `
      <div class="container home">
        <div class="wrap-header">
          <div class="row head-game">
            <h1>Number Game</h1>
          </div>
        </div>

        <div class="wrap-menu row">
          <div class="list-menu">
            <div class="item-menu row">
              <a href="#/play" class="btn btn-menu btn-link text-center">Play Now</a>
            </div>
            <div class="item-menu row">
              <a href="#/rules" class="btn btn-menu btn-link text-center">How to Play</a>
            </div>
            <div class="item-menu row">
              <a href="#/about" class="btn btn-menu btn-link text-center">About</a>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

module.exports = numGameHomePage;
