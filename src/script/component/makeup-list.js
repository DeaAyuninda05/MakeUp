import './makeup-item.js';
 
class MakeupList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }
 
  set makeups(makeups) {
    this._makeups = makeups;
    this.render();
  }
 
  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
 
  render() {
    this.shadowDOM.innerHTML = '' ;
    this._makeups.forEach(makeup => {
      const makeupItemElement = document.createElement('makeup-item');
      makeupItemElement.makeup = makeup;
      this.shadowDOM.appendChild(makeupItemElement);
    });
  }
}
 
customElements.define('makeup-list', MakeupList);