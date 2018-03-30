import axios from "axios";
// import morgan from "morgan";

export default {
  //get route to grab stock data from API
  getStocksIEX: function(ticker) {
    return (
    axios
      .get("https://api.iextrading.com/1.0/stock/" + ticker + "/batch?types=quote,news,chart&range=1m&last=10")
      .then(function(response) {
          //console.log(response.data.quote.companyName);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  //get route to grab logo from the API
  getStockLogo: function(ticker) {
    return (
    axios
      .get("https://api.iextrading.com/1.0/stock/" + ticker + "/logo")
      .then(function(response) {
          //console.log(response.data.quote.companyName);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  //get route to grab company info from the API
  getCompanyInfo: function(ticker) {
    return (
    axios
      .get("https://api.iextrading.com/1.0/stock/" + ticker + "/company")
      .then(function(response) {
          //console.log(response.data.quote.companyName);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  //post route that allows a user to favorite a stock
  postFavorite: function(ticker) {
    return (
      axios.post("/api/favorite", {ticker: ticker})
      .catch(err => console.log(err))
    )
  }
};
