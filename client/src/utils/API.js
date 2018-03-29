import axios from "axios";
import morgan from "morgan";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getStocksIEX: function(ticker) {
    return (
    axios
      .get("https://api.iextrading.com/1.0/stock/" + ticker + "/batch?types=quote,news,chart&range=1m&last=10")
      // .then(console.log(req))
      .then(function(response) {
          //console.log(response.data.quote.companyName);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  getStockLogo: function(ticker) {
    return (
    axios
      .get("https://api.iextrading.com/1.0/stock/" + ticker + "/logo")
      // .then(console.log(req))
      .then(function(response) {
          //console.log(response.data.quote.companyName);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  postFavorite: function(ticker) {

    return (
      axios
        .post("/api/favorite", {
          ticker: ticker
        })
        .then(function(data){
          console.log('api.js data', data);
          return data;
        })
        .catch(err => console.log(err))
    )
  }
};
