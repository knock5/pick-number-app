const numGameRulesPage = {
  async render() {
    return `
      <div class="container">
        <div class="wrap-header">
          <div class="row head-ongame">
            <div class="btn-wrap">
              <div>
                <a href="#/" class="btn btn-back btn-link">Kembali</a>
              </div>
            </div>
            <h1>Halaman Rules</h1>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

module.exports = numGameRulesPage;
