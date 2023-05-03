import '../component/makeup-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const makeupListElement = document.querySelector('makeup-list');  
  
  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchClub(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };
  const renderResult = results => {
    makeupListElement.makeups = results;
  };
  
  const fallbackResult = (message) => {
    makeupListElement.renderError(message)  };
 
  searchElement.clickEvent = onButtonSearchClicked;
};
export default main;