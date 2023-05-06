class SearchBar extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
   
    connectedCallback(){
      this.render();
    }
   
    set clickEvent(event) {
      this._clickEvent = event;
      this.render();
    }
   
    get value() {
      return this.querySelector('#searchElement').value;
    }
   
    render() {
      this.shadowDOM.innerHTML = `
      <style>
      .search-container {
        max-width: 800px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        padding: 16px;
        border-radius: 5px;
        display: flex;
        position: sticky;
        top: 10px;
        background-color: white;
      }
      
      .search-container > input {
        width: 75%;
        padding: 16px;
        border: 0;
        border-bottom: 1px solid #c79685;
        font-weight: bold;
      }
      
      .search-container > input:focus {
        outline: 0;
        border-bottom: 2px solid #c79685;
      }
      
      .search-container > input:focus::placeholder {
        font-weight: bold;
      }
      
      .search-container > input::placeholder {
        color: #c79685;
        font-weight: normal;
      }
      
      .search-container > button {
        width: 23%;
        cursor: pointer;
        margin-left: auto;
        padding: 16px;
        background-image: linear-gradient(180deg, #ffc0a9 0, #ffb5a6 16.67%, #ffa9a2 33.33%, #f29d9d 50%, #de9297 66.67%, #cc8891 83.33%, #bb7f8b 100%);
        color: white;
        border: 0;
        text-transform: uppercase;
      }
      
      @media screen and (max-width: 550px) {
        .search-container {
          flex-direction: column;
          position: static;
        }
      
        .search-container > input {
          width: 100%;
          margin-bottom: 12px;
        }
      
        .search-container > button {
          width: 100%;
        }
      }
      </style>
        <div id="search-container" class="search-container">
          <input placeholder="Search MakeUp" id="searchElement" type="search">
          <button id="searchButtonElement" type="submit">Search</button>
        </div>
      `;
   
      this.shadowDOM.querySelector('#searchButtonElement')
      .addEventListener('click', this._clickEvent);
    }
  }
   
  customElements.define('search-bar', SearchBar);
  