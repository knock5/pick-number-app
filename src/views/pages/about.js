const numGameAboutPage = {
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
            <h2 align="center" class="title-about">Tentang NumGame</h2>
            <div class="about-content">
              <p>
              NumGame adalah game sederhana yang dibuat untuk menebak 3 digit angka. Game ini dibuat dengan JavaScript yang memanfaatkan teknologi PWA (Progressive Web App). Dalam game ini memanfaatkan penyimpanan data secara lokal pada browser. Tujuan dibuatnya game ini adalah untuk mempelajari bagaimana cara implementasi dalam mengakses, menambah, memodifikasi, dan menghapus data di web storage (session storage dan local storage).
              </p>
              <p>
                Jawaban angka akan dihasilkan secara random dan akan selalu berubah jika dilakukan refresh pada browser.
              </p>
              <p>
                Game ini dibuat secara native tanpa menggunakan framework apapun. Menggunakan routing dengan bantuan URL Parser manual. Memakai webpack sebagai module bundler dan menggunakan babel untuk transpiling. Untuk styling menggunakan CSS.
              </p>
              <p>
                Untuk mempelajari lebih lanjut tentang game ini, bisa dilihat di <a href="https://github.com/knock5/pick-number-app" target="_blank" class="link-repo">repository GitHub</a> saya.
              </p>
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

module.exports = numGameAboutPage;
