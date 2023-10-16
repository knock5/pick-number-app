const numGameRulesPage = {
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
            <h1>Halaman Rules</h1>
          </div>
        </div>

        <div class="wrap-rules">
            <h2 align="center">Cara bermain</h2>
            <hr>
            <h3 align="center">Selamat datang dalam Number Game, berikut instruksi-nya:</h3>
            <div class="list-rules row">
              <ul id="instructions-list" align="left">
                <li>Anda harus mencari kombinasi angka yang terdiri dari angka "1", "2", dan "3",
                  misalnya "231" dan "123".
                </li>
                <li>Angka yang ditebak hanya memiliki panjang 3 karakter saja,
                  sehingga kombinasi seperti "1231" tidak akan menjadi jawaban.
                </li>
                <li>Sebuah angka hanya akan muncul sekali dan hanya sekali,
                  sehingga kombinasi seperti "223" maupun "111" tidak akan menjadi jawaban.
                </li>
                <li><i>Have fun and don't cheat!</i></li>
              </ul>
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
