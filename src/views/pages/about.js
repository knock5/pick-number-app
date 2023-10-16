const numGameAboutPage = {
  async render() {
    return `
      <div class="container">
        <div class="wrap-header">
          <div class="row head-game ongame">
            <div class="btn-wrap">
              <div>
                <a href="#/" class="btn btn-back btn-link">Main Menu</a>
              </div>
            </div>
            <h1>Halaman About</h1>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

module.exports = numGameAboutPage;
