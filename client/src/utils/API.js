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
  //get route to grab company info from the API
  getKeyStats: function(ticker) {
    return (
    axios
      .get("https://api.iextrading.com/1.0/stock/" + ticker + "/stats")
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
  },
  getTickers: function() {
    return (
    axios
      .get("https://api.iextrading.com/1.0/ref-data/symbols")
      .then(function(response) {
          //console.log(response.data.quote.companyName);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  postTicker: function(ticker) {
    return (
      axios.post("/api/ticker", {ticker: ticker})
      .catch(err => console.log(err))
    )
  },
  getAdvancedData: function(ticker) {
    return (
      axios.get("/api/search", ticker)
      .then(function(response) {
        return response;
      })
      .catch(err => console.log(err))
    )
  },
  getGrowthData: function(ticker) {
    return (
      axios.get("/api/growth", ticker)
      .then(function(response) {
        return response;
      })
      .catch(err => console.log(err))
    )
  },
  postUserCredentials: function(data) {
    //console.log(data);
    return (
      axios.post("/api/newuser", {data: data})
      .catch(err => console.log(err))
    )
  },
  getUsersName: function(email) {
    console.log("from api utils folder", email);
    return (
      axios.get("/api/getuserdata/" + email)
      .then(function(response) {
        console.log(response);
        return response;
      })
      .catch(err => console.log(err))
    )
  },
  postComment: function(data) {
    //console.log("posting message", data);
    return (
      axios.post("/submit", {data: data})
      .catch(err => console.log(err))
    )
  },
  //*************************************************************************************************
  //HISTORICAL INCOME STATEMENT DATA
  //*************************************************************************************************
  getRevenue: function(ticker) {
    return (
      axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_REVENUE_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
        console.log(response);
        return response;
      })
      .catch(err => console.log(err))
    )
  },
  getGP: function(ticker) {
    return (
      axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_GP_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
        console.log(response);
        return response;
      })
      .catch(err => console.log(err))
    )
  },
  getIntExp: function(ticker) {
    return (
      axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_INTEXP_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
        console.log(response);
        return response;
      })
      .catch(err => console.log(err))
    )
  },
  getNetIncome: function(ticker) {
    return (
      axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_NETINC_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
        console.log(response);
        return response;
      })
      .catch(err => console.log(err))
    )
  },
  getCapEx: function(ticker) {
    return (
      axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_CAPEX_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
        console.log(response);
        return response;
      })
      .catch(err => console.log(err))
    )
  },
  getOperatingIncome: function(ticker) {
    return (
      axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_EBITUSD_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
        console.log(response);
        return response;
      })
      .catch(err => console.log(err))
    )
  },
  getDepAmor: function(ticker) {
    return (
      axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_DEPAMOR_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
        console.log(response);
        return response;
      })
      .catch(err => console.log(err))
    )
  },
  getEBITDA: function(ticker) {
    return (
      axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_EBITDAUSD_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
        console.log(response);
        return response;
      })
      .catch(err => console.log(err))
    )
  },
  getCOGS: function(ticker) {
    return (
      axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_COR_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
        console.log(response);
        return response;
      })
      .catch(err => console.log(err))
    )
  },
  getRND: function(ticker) {
    return (
      axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_RND_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
        console.log(response);
        return response;
      })
      .catch(err => console.log(err))
    )
  },
  getSGA: function(ticker) {
    return (
      axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_SGNA_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
        console.log(response);
        return response;
      })
      .catch(err => console.log(err))
    )
  },
  getEPS: function(ticker) {
    return (
      axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_EPSUSD_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
        console.log(response);
        return response;
      })
      .catch(err => console.log(err))
    )
  },
  getDivPMT: function(ticker) {
    return (
      axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_NCFDIV_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
        console.log(response);
        return response;
      })
      .catch(err => console.log(err))
    )
  },
  getDivPerShare: function(ticker) {
    return (
      axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_DPS_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
        console.log(response);
        return response;
      })
      .catch(err => console.log(err))
    )
  },
  //************************************************************************************************
  //HISTORICAL BALANCE SHEET DATA
  //************************************************************************************************
  getAssets: function(ticker) {
    return (
    axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_ASSETS_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
          console.log(response);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  getCurrentAssets: function(ticker) {
    return (
    axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_ASSETSC_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
          console.log(response);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  getCash: function(ticker) {
    return (
    axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_CASHNEQ_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
          console.log(response);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  getInventory: function(ticker) {
    return (
    axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_INVENTORY_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
          console.log(response);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  getNonCurrentAssets: function(ticker) {
    return (
    axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_ASSETSNC_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
          console.log(response);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  getTangibleAssets: function(ticker) {
    return (
    axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_TANGIBLES_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
          console.log(response);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  getCurrentLiab: function(ticker) {
    return (
    axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_LIABILITIESC_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
          console.log(response);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  getCurrentLiab: function(ticker) {
    return (
    axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_LIABILITIESC_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
          console.log(response);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  getPayables: function(ticker) {
    return (
    axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_PAYABLES_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
          console.log(response);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  getNonCurrentLiab: function(ticker) {
    return (
    axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_LIABILITIESNC_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
          console.log(response);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  getShareEq: function(ticker) {
    return (
    axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_EQUITY_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
          console.log(response);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  getRetainedEarnings: function(ticker) {
    return (
    axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_RETEARN_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
          console.log(response);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  getInvestedCapital: function(ticker) {
    return (
    axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_INVCAP_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
          console.log(response);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  //*********************************************
  //HISTORICAL STATEMENT OF CASH FLOW DATA
  //*********************************************
  getOperatingCF: function(ticker) {
    return (
    axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_NCFO_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
          console.log(response);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  getInvestingCF: function(ticker) {
    return (
    axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_NCFI_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
          console.log(response);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  getFinancialCF: function(ticker) {
    return (
    axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_NCFF_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
          console.log(response);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  getNetCF: function(ticker) {
    return (
    axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_NCF_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
          console.log(response);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  getFCF: function(ticker) {
    return (
    axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_FCF_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
          console.log(response);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  getFCFperShare: function(ticker) {
    return (
    axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_FCFPS_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
          console.log(response);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  //*********************************************
  //HISTORICAL RATIOS AND DATA
  //*********************************************
  getWorkingCap: function(ticker) {
    return (
    axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_WORKINGCAPITAL_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
          console.log(response);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  getCurrentRatio: function(ticker) {
    return (
    axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_CURRENTRATIO_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
          console.log(response);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  getDebtEquity: function(ticker) {
    return (
    axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_DE_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
          console.log(response);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  getDilutionRatio: function(ticker) {
    return (
    axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_DILUTIONRATIO_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
          console.log(response);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  getPB: function(ticker) {
    return (
    axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_PB_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
          console.log(response);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  getBookValue: function(ticker) {
    return (
    axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_BVPS_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
          console.log(response);
          return response;
      })
      .catch(err => console.log(err))
    );
  },
  getTangibleBookValue: function(ticker) {
    return (
    axios
      .get("https://www.quandl.com/api/v3/datasets/SF0/" + ticker +"_TBVPS_MRY.json?api_key=Wpp1zCt7Wzey7N383JNf")
      .then(function(response) {
          console.log(response);
          return response;
      })
      .catch(err => console.log(err))
    );
  }
};
