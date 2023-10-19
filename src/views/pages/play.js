const numGamePlayPage = {
  async render() {
    return `
    <div class="container">
      <div id="modal-game" class="m-popup">
        <div class="m-popup-content">
          <div class="modal-header">
            <h2>Info NumGame</h2>
          </div>
          <div class="modal-body">
            <p>Data histori permainan telah dihapus</p>
            <p>Silahkan refresh halaman ini untuk memulai permainan baru</p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-close">Close</button>
          </div>
        </div>
      </div>

      <div class="wrap-header">
        <div class="row head-game ongame">
          <div class="btn-wrap">
            <div>
              <a href="#/" class="btn btn-back btn-link">Main Menu</a>
            </div>
          </div>
          <h1>NumGame</h1>
        </div>
      </div>

      <div class="wrap-game-content">
        <div class="row wrap-game-section">
          <div class="wrap-game-board text-center">
            <div class="game-board" id="gameboard">
              <h2 class="title-section">Game Board</h2>
              <hr />
              <div id="before-game-display">
                <h4>Tekan tombol "Play" di bawah jika sudah siap</h4>
                <button id="play-button" class="btn-play-game">
                  Play
                  <span></span>
                </button>
              </div>
              <div id="during-game-display" hidden>
                <div class="text-game">
                  <h4>Silahkan menebak angka!</h4>
                  <h4>Jawaban Anda:</h4>
                  <h2>
                    "<u><span id="session-user-answer-field" class="text-answer-game"></span></u>"
                  </h2>
                </div>
                <button class="btn-answer-play" id="answer-1-button">
                  <span class="transition"></span>
                  <span class="gradient"></span>
                  <span class="label">1</span>
                </button>
                <button class="btn-answer-play" id="answer-2-button">
                  <span class="transition"></span>
                  <span class="gradient"></span>
                  <span class="label">2</span>
                </button>
                <button class="btn-answer-play" id="answer-3-button">
                  <span class="transition"></span>
                  <span class="gradient"></span>
                  <span class="label">3</span>
                </button>
                <h4>
                  "<span id="session-user-wrong-answer-field" class="wrong-answer"></span>" salah,
                  coba lagi...
                </h4>
              </div>
              <div id="after-game-display" hidden>
                <h4>Selamat Tebakan Anda benar!</h4>
                <h4>Jawabannya adalah:</h4>
                <h2>"<span id="session-true-answer-field"></span>"</h2>
                <h4><i></i>Refresh halaman ini untuk mencoba lagi</h4>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="local-stats text-center" id="total-stats">
              <h3>Local Stats</h3>
              <hr />
              <div id="all-local-stats">
                <div class="local-stat-item">
                  <h4>Jumlah permainan yang berhasil dimenangkan:</h4>
                  <h4 id="local-total-victory-field" class="text-center text-victory"></h4>
                </div>
                <div class="local-stat-item">
                  <h4>Jumlah tebakan salah terbanyak sekali main:</h4>
                  <h4 id="local-maximum-attempt-field" class="text-center text-attempt"></h4>
                </div>
                <button class="noselect btn-delete-data" id="destroy-data-button">
                  <span class="text">Delete</span>
                  <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg>
                  </span>
                </button>
              </div>
            </div>

            <div class="session-stats text-center" id="session-stats">
              <h3>Game Session Stats</h3>
              <hr />
              <div id="all-session-stats">
                <div class="session-stat-item">
                  <h4>Jumlah Tebakan Salah:</h4>
                  <h4 id="session-user-attempts-amount-field" class="text-center text-amount"></h4>
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
    const mpopup = document.getElementById('modal-game');
    const btnClose = document.querySelector('.btn-close');

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

    // functions
    function getAnswer() {
      let answer = '123'.split('');
      for (let i = 0; i < answer.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = answer[i];
        answer[i] = answer[j];
        answer[j] = temp;
      }
      return answer.join('');
    }

    function checkAnswer(userGuess) {
      const answer = sessionStorage.getItem(sessionAnswerKey);
      if (userGuess == answer) {
        duringGameDisplay.setAttribute('hidden', true);
        afterGameDisplay.removeAttribute('hidden');
        sessionTrueAnswerField.innerText = answer;
        updateScore();
      } else {
        const previousAttemptAmount = parseInt(
          sessionStorage.getItem(sessionUserAttemptsKey)
        );
        sessionStorage.setItem(
          sessionUserAttemptsKey,
          previousAttemptAmount + 1
        );
        sessionUserAttemptsField.innerText = sessionStorage.getItem(
          sessionUserAttemptsKey
        );
        sessionUserAnswerField.innerText = '';
        sessionUserWrongAnswerField.innerText = userGuess;
      }
    }

    function updateScore() {
      const sessionAttemptsValue = parseInt(
        sessionStorage.getItem(sessionUserAttemptsKey)
      );
      const localAttemptsValue = parseInt(
        localStorage.getItem(localMaximumAttemptsKey)
      );
      if (sessionAttemptsValue > localAttemptsValue) {
        localStorage.setItem(localMaximumAttemptsKey, sessionAttemptsValue);
        localMaximumAttemptField.innerText = sessionAttemptsValue;
      }
      const previousTotalVictoryAmount = parseInt(
        localStorage.getItem(localTotalVictoryKey)
      );
      localStorage.setItem(
        localTotalVictoryKey,
        previousTotalVictoryAmount + 1
      );
      localTotalVictoryField.innerText =
        localStorage.getItem(localTotalVictoryKey);
    }

    playButton.addEventListener('click', function () {
      sessionStorage.setItem(sessionAnswerKey, getAnswer());
      beforeGameDisplay.setAttribute('hidden', true);
      duringGameDisplay.removeAttribute('hidden');
    });

    // button answer
    answerButton1.addEventListener('click', function () {
      sessionUserAnswerField.innerText += '1';
      if (sessionUserAnswerField.innerText.length == 3) {
        checkAnswer(sessionUserAnswerField.innerText);
      }
    });

    answerButton2.addEventListener('click', function () {
      sessionUserAnswerField.innerText += '2';
      if (sessionUserAnswerField.innerText.length == 3) {
        checkAnswer(sessionUserAnswerField.innerText);
      }
    });

    answerButton3.addEventListener('click', function () {
      sessionUserAnswerField.innerText += '3';
      if (sessionUserAnswerField.innerText.length == 3) {
        checkAnswer(sessionUserAnswerField.innerText);
      }
    });

    window.addEventListener('beforeunload', function () {
      sessionUserAnswerField.innerText = '';
      sessionUserWrongAnswerField.innerText = '';
      sessionStorage.setItem(sessionUserAttemptsKey, 0);
      sessionUserAttemptsField.innerText = sessionStorage.getItem(
        sessionUserAttemptsKey
      );
    });

    // clear all item storage
    destroyDataButton.addEventListener('click', function () {
      sessionStorage.removeItem(sessionAnswerKey);
      sessionStorage.removeItem(sessionUserAttemptsKey);
      sessionStorage.removeItem(sessionUserIsPlayingKey);
      localStorage.removeItem(localTotalVictoryKey);
      localStorage.removeItem(localMaximumAttemptsKey);

      // show modal
      mpopup.style.display = 'block';
    });

    btnClose.addEventListener('click', function () {
      mpopup.style.display = 'none';
    });
  },
};

module.exports = numGamePlayPage;
