class FooterElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const copyrightText = '© 2023 - Doyan Makan';
    this.innerHTML = `<p>${copyrightText}</p>`;
  }
}

customElements.define('footer-element', FooterElement);
