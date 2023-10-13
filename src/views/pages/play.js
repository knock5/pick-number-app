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

      <div class="wrap-game-content">
        <div class="row wrap-game-section">
          <div class="wrap-game-board text-center">
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

          <div class="col">
            <div class="local-stats" id="total-stats">
              <h2>Local Stats</h2>
              <hr />
              <div id="all-local-stats">
                <div class="local-stat-item">
                  <h3>Jumlah permainan yang berhasil dimenangkan:</h3>
                  <h3 id="local-total-victory-field" class="text-center"></h3>
                </div>
                <div class="local-stat-item">
                  <h3>Jumlah tebakan salah terbanyak sekali main:</h3>
                  <h3 id="local-maximum-attempt-field" class="text-center"></h3>
                </div>
                <div class="text-center">
                  <button class="btn btn-clear-data" id="destroy-data-button">
                    Hapus semua data
                  </button>
                </div>
              </div>
            </div>

            <div class="session-stats" id="session-stats">
              <h2>Game Session Stats</h2>
              <hr />
              <div id="all-session-stats">
                <div class="session-stat-item">
                  <h3>Jumlah Tebakan Salah:</h3>
                  <h3 id="session-user-attempts-amount-field" class="text-center"></h3>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
    `;
  },

  async afterRender() {
    //inisialiasi variabel untuk menampung elemen dokumen
    const localTotalVictoryField = document.getElementById(
      'local-total-victory-field'
    );
    const localMaximumAttemptField = document.getElementById(
      'local-maximum-attempt-field'
    );
    const destroyDataButton = document.getElementById('destroy-data-button');
    const playButton = document.getElementById('play-button');
    const beforeGameDisplay = document.getElementById('before-game-display');
    const duringGameDisplay = document.getElementById('during-game-display');
    const afterGameDisplay = document.getElementById('after-game-display');
    const answerButton1 = document.getElementById('answer-1-button');
    const answerButton2 = document.getElementById('answer-2-button');
    const answerButton3 = document.getElementById('answer-3-button');
    const sessionUserAnswerField = document.getElementById(
      'session-user-answer-field'
    );
    const sessionUserWrongAnswerField = document.getElementById(
      'session-user-wrong-answer-field'
    );
    const sessionTrueAnswerField = document.getElementById(
      'session-true-answer-field'
    );
    const sessionUserAttemptsField = document.getElementById(
      'session-user-attempts-amount-field'
    );

    //inisialiasi key untuk session storage
    const sessionAnswerKey = 'SESSION_ANSWER';
    const sessionUserAttemptsKey = 'SESSION_USER_ATTEMPTS';
    const sessionUserIsPlayingKey = 'SESSION_USER_IS_PLAYING';

    //inisialisasi key untuk local storage
    const localTotalVictoryKey = 'LOCAL_TOTAL_VICTORIES_PLAYED';
    const localMaximumAttemptsKey = 'LOCAL_MAXIMUM_ATTEMPTS';

    if (typeof Storage !== 'undefined') {
      // inisialisasi semua item web storage jika belum ada
      if (sessionStorage.getItem(sessionAnswerKey) === null) {
        sessionStorage.setItem(sessionAnswerKey, '');
      }
      if (sessionStorage.getItem(sessionUserAttemptsKey) === null) {
        sessionStorage.setItem(sessionUserAttemptsKey, 0);
      }
      if (localStorage.getItem(localTotalVictoryKey) === null) {
        localStorage.setItem(localTotalVictoryKey, 0);
      }
      if (localStorage.getItem(localMaximumAttemptsKey) === null) {
        localStorage.setItem(localMaximumAttemptsKey, 0);
      }
    } else {
      alert(
        'Maaf, browser yang Anda gunakan tidak mendukung fitur Web Storage.'
      );
    }

    //inisialisasi semua nilai field pada dokumen yang menggunakan nilai dari web storage
    sessionUserAttemptsField.innerText = sessionStorage.getItem(
      sessionUserAttemptsKey
    );
    localTotalVictoryField.innerText =
      localStorage.getItem(localTotalVictoryKey);
    localMaximumAttemptField.innerText = localStorage.getItem(
      localMaximumAttemptsKey
    );
  },
};

module.exports = numGamePlayPage;
