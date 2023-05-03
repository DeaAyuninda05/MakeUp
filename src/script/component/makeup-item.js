class MakeupItem extends HTMLElement {
    constructor(){
      super();
      this.shadowDOM = this.attachShadow({mode:'open'});
    }
    set makeup(makeup) {
      this._makeup = makeup;
      this.render();
    }
 
  render() {
    this.shadowDOM.innerHTML = `
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      :host {
        display: block;
        margin-bottom: 18px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        overflow: hidden;
      .fan-art-makeup {
        width: 100%;
        max-height: 300px;
        object-fit: cover;
        object-position: center;
      }
      .makeup-info {
        padding: 24px;
      }
       
      .makeup-info > h2 {
        font-weight: lighter;
      }
      .makeup-info > h3 {
        font-weight:normal;
      }
       
      .makeup-info > p {
        margin-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 10; /* number of lines to show */
      }
    </style>

    <img class="fan-art-makeup" src="${this._makeup.strMerkBadge}" alt="Fan Art">
    <div class="makeup-info">
      <h2>${this._makeup.name}</h2>
      <h3>${this._makeup.product_type}</h3>
      <p>${this._makeup.description}</p>
    </div>
  `;

  }
}

customElements.define('makeup-item', MakeupItem);