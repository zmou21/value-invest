  var yahooFinance = require('yahoo-finance');
  var inquirer = require("inquirer");
  // var express = require("express");
  // var app = express();
  // var PORT = 3000;

  // send out to database to store and retrieve


  let ticker;
  let priceClose;
  let forwardPE;

  function yahooQuote() {
    yahooFinance.quote({
      symbol: ticker,
      modules: ['price', 'summaryDetail', "defaultKeyStatistics"]       // optional; default modules.
    }, function(err, quote) {
      console.log(`Price = ${quote.price.regularMarketPrice}`);
      console.log(`forwardPE = ${quote.defaultKeyStatistics.forwardPE}`);

      priceClose = quote.price.regularMarketPrice;
      forwardPE = quote.defaultKeyStatistics.forwardPE;
        // {
        //   price: {
        //     // output from price module (see below)
        //   },
        //   summaryDetail: {
        //     // output from summaryDetail module (see below)
        //   }
        // }

    });
  }

  inquirer.prompt([
    {
      type: "input",
      name: "ticker",
      message: "Enter a ticker"
    }
  ]).then(function(response) {
    //console.log(response.ticker);
    ticker = response.ticker;
    yahooQuote();
  })

//Fundamental Analysis
  function earning() {
    //constructor for earnings results
    //analysis of whether the value is good or bad with commentary
    //last 5 years of earnings
  }

  function returns() {
    //function for ROE, ROA and ROI
    //analysis of whether the value is good or bad with commentary
  }

  function requiredReturn() {
    //function that takes in users required return and provides
  }

  // constructor with DCF calculation
    //FCF (quote.financialData.freeCashflow)
    // user server.js in 14-Starwars folder in express folder to see how to push and manipulate users search

  // constructor with P/E valuation

  // constructor with ROE valuation

  // Recommendation of purchase

  // function that compares intrinsic value of underlying stock
    // Also provides comparison to target mean Price from analysts
    // Optional: comparison on how often they hit on their calculations

//optional

  //Market Price
  // AlphaVantage API
    // check if o-auth necessary
    // Frontend: call alpha vantage api for market price with chart

  // Technical Analysis
    // add SMA capability
    // add RSI capability

  //Graphs that offer historic valuation for P/E and other metrics


// unused code
  // app.post("/api/ticker", function(req, res) {
  //   //show all articles voted on
  //   // console.log("---------------------");
  //   // console.log(req.body.stock);
  //   // console.log("---------------------");
  //
  //   ticker = req.body.stock;
  //   ticker = ticker.toUpperCase();
  //   console.log(ticker);
  //   yahooFinance.quote({
  //     symbol: ticker,
  //     modules: ['price', 'summaryDetail', "defaultKeyStatistics"]       // optional; default modules.
  //   }, function(err, quote) {
  //     //console.log(quote);
  //     //console.log(`Price = ${quote}`);
  //     console.log(`forwardPE = ${quote.defaultKeyStatistics.forwardPE}`);
  //
  //
  //     Analysis.create({
  //       ticker: quote.price.symbol,
  //       forwardPE: quote.price.regularMarketPrice,
  //       price: quote.defaultKeyStatistics.forwardPE
  //     }).then(function(data) {
  //       console.log("data sent back to database");
  //       res.json(data);
  //     });
  //
  //   });
  // });
  //
  // app.get("/api/:ticker", function(req, res) {
  //   //show stocks searched by user
  //   ticker = req.params.ticker;
  //   ticker = ticker.toUpperCase();
  //
  //   yahooFinance.quote({
  //     symbol: ticker,
  //     modules: ['price', 'summaryDetail', "defaultKeyStatistics"]       // optional; default modules.
  //   }, function(err, quote) {
  //     if(err) {
  //       console.log(err);
  //     } else {
  //       res.json(quote);
  //     }
  //   });
  // });
