class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        *{margin: 0;padding: 0;box-sizing: border-box;}
        :host {display: flex; width: 100%; background-color: #497285;color: white;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);justify-content: center;align-items: center;gap: 5px;}
        img {width: 30px;}
        h2 {padding: 16px;}
      </style>
      <img src="src/image/logo.png" alt="soccer" />
      <h2>Club Finder</h2>`;
  }
}

customElements.define("app-bar", AppBar);
