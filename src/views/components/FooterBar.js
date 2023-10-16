class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="wrap-footer row">
        <div class="footer-item">
          <p>Copyright &copy; 2023, <a class="footer-link" target="_blank" href="https://www.instagram.com/miftachulhd/">Miftachul Huda</a></p>
        </div>
      </div>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
