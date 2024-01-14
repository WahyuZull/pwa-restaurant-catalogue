class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
        <div class="hero-inner">
          <h1 class="hero-title">Doyan Makan</h1>
          <p class="hero-tagline">Yuk makan-makan! Jangan takut gendut!</p>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-element', HeroElement);
