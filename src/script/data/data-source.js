import { response } from "express";
import makeups from "./makeup.js";

class DataSource {
  static searchMakeup(keyword) {
    return fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
    .then(response=>{
      return response.json();
    })
    .then(responseJson=>{
      if(responseJson.merk){
        return Promise.resolve(responseJson.merk);
      } else{
        return Promise.reject(`${keyword} is not found`);
      }
    });
  }
}

export default DataSource;