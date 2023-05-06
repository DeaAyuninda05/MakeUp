class DataSource {
  static searchMakeup(keyword) {
    return fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${keyword}`)
    .then(response=>{
      return response.json();
    })
    .then(responseJson=>{
      if(responseJson){
        return Promise.resolve(responseJson);
      } else{
        return Promise.reject(`${keyword} is not found`);
      }
    });
  }
}

export default DataSource;