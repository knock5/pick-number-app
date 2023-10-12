const numGamePlayPage = {
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
          <h1>Halaman Bermain</h1>
        </div>
      </div>

      // Tampilan game board di sini
      <div class="wrap-game-content">
        <div class="row">
          <div class="wrap-game-board">
            <div class="game-board" id="gameboard">
              <h2 class="title-section">Game Board</h2>
              <hr />
              <div id="before-game-display">
                <h3>Tekan tombol "Play" di bawah jika sudah siap</h3>
                <button class="btn" id="play-button">Bermain</button>
              </div>
              <div id="during-game-display" hidden>
                <h3>Silahkan menebak angka!</h3>
                <h3>Jawaban Anda:</h3>
                <h1>
                  "<u><span id="session-user-answer-field"></span></u>"
                </h1>
                <button class="answer-button" id="answer-1-button">1</button>
                <button class="answer-button" id="answer-2-button">2</button>
                <button class="answer-button" id="answer-3-button">3</button>
                <h3>
                  "<span id="session-user-wrong-answer-field"></span>" salah,
                  coba lagi...
                </h3>
              </div>
              <div id="after-game-display" hidden>
                <h3>Selamat Tebakan Anda benar!</h3>
                <h3>Jawabannya adalah:</h3>
                <h1>"<span id="session-true-answer-field"></span>"</h1>
                <h3><i></i>Refresh halaman ini untuk mencoba lagi</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="local-stats" id="total-stats">
        <h2>Local Stats</h2>
        <hr />
        <div id="all-local-stats">
          <div class="local-stat-item">
            <h3>Jumlah permainan yang berhasil dimenangkan:</h3>
            <h3 id="local-total-victory-field"></h3>
          </div>
          <div class="local-stat-item">
            <h3>Jumlah tebakan salah terbanyak sekali main:</h3>
            <h3 id="local-maximum-attempt-field"></h3>
          </div>
          <button class="button" id="destroy-data-button">
            Hapus semua data
          </button>
        </div>
      </div>

      <div class="session-stats" id="session-stats">
        <h2>Game Session Stat</h2>
        <hr />
        <div id="all-session-stats">
          <div class="session-stat-item">
            <h3>Jumlah Tebakan Salah:</h3>
            <h3 id="session-user-attempts-amount-field"></h3>
          </div>
        </div>
      </div>
    </div>
    `;
  },
};

module.exports = numGamePlayPage;
