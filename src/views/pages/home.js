const numGameHomePage = {
  async render() {
    return `
      <div class="container">
        <div class="wrap-header">
          <h1 class="title-game text-center">Number Game</h1>
        </div>
        <div class="wrap-menu row">
          <div>
            <a href="#/play" class="btn btn-menu btn-link">Play Now</a>
          </div>
          <div>
            <a href="#/rules" class="btn btn-menu btn-link">How to Play</a>
          </div>
          <div>
            <a href="#/about" class="btn btn-menu btn-link">About</a>
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
