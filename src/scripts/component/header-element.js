class HeaderElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="logo">
        <a href="#">Doyan Makan</a>
      </div>
      <div class="nav-menu">
        <button aria-label="menu" id="menu">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </button>
      </div>  
      <nav class="nav" id="drawer">
        <ul class="nav-list">
          <li class="nav-item"><a href="#/home">Home</a></li>
          <li class="nav-item"><a href="#/favorite">Favorite</a></li>
          <li class="nav-item">
            <a href="https://wahyuzull.my.id" target="_blank">About Us</a>
          </li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('header-element', HeaderElement);
