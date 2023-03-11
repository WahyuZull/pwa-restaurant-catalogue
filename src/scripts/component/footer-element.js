class FooterElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p>copyright &#169; 2023 - Doyan Makan</p>
    `;
  }
}

customElements.define('footer-element', FooterElement);
