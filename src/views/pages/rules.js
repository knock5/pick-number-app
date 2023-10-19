const numGameRulesPage = {
  async render() {
    return `
      <div class="container">
        <div class="wrap-header">
          <div class="row head-game ongame">
            <a href="#/" class="button-back">
              <div class="button-box">
                <span class="button-elem">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 40">
                    <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                  </svg>
                </span>
                <span class="button-elem">
                  <svg viewBox="0 0 46 40">
                    <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                  </svg>
                </span>
              </div>
            </a>
            <h1>NumGame</h1>
          </div>
        </div>

        <div class="wrap-rules row">
          <div class="card-rules">
            <h2 align="center">Cara bermain</h2>
            <hr>
            <h4 align="center" class="subtext-rules">Selamat datang dalam NumGame, berikut instruksi-nya:</h4>
            <div class="list-rules row">
              <ul id="instructions-list" align="left">
                <li class="rules-item">Anda harus mencari kombinasi angka yang terdiri dari angka <span class="h-rules">"1"</span>, <span class="h-rules">"2"</span>, dan <span class="h-rules">"3"</span>,
                  misalnya <span class="h-rules">"231"</span> dan <span class="h-rules">"123"</span>.
                </li>
                <li class="rules-item">Angka yang ditebak hanya memiliki panjang 3 karakter saja,
                  sehingga kombinasi seperti <span class="h-rules">"1231"</span> tidak akan menjadi jawaban.
                </li>
                <li class="rules-item">Sebuah angka hanya akan muncul sekali dan hanya sekali,
                  sehingga kombinasi seperti <span class="h-rules">"223"</span> maupun <span class="h-rules">"111"</span> tidak akan menjadi jawaban.
                </li>
                <li class="rules-item"><i>Have fun and don't cheat!</i></li>
              </ul>
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

module.exports = numGameRulesPage;
