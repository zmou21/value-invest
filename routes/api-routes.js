//user vote api routes
var db = require("../models");
var yahooFinance = require('yahoo-finance');
//var Analysis = require("../models").Analysis;

let ticker = "";

// Routes
// =============================================================
module.exports = function(app) {

  app.post("/api/ticker", function(req, res) {
    //show all articles voted on
    // console.log("---------------------");
    // console.log(req.body.stock);
    // console.log("---------------------");

    ticker = req.body.stock;
    ticker = ticker.toUpperCase();
    console.log(ticker);
    yahooFinance.quote({
      symbol: ticker,
      modules: ['price', 'summaryDetail', "defaultKeyStatistics"]       // optional; default modules.
    }, function(err, quote) {
      console.log(quote);
      console.log(`Price = ${quote}`);
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
  });

  app.get("/api/:ticker", function(req, res) {
    //show stocks searched by user
    ticker = req.params.ticker;
    ticker = ticker.toUpperCase();

    yahooFinance.quote({
      symbol: ticker,
      modules: ['price', 'summaryDetail', "defaultKeyStatistics"]       // optional; default modules.
    }, function(err, quote) {
      if(err) {
        console.log(err);
      } else {
        res.json(quote);
      }
    });
  });
  //
  // app.post("/api/ticker", function(req, res) {
  //   // console.log("---------------------");
  //   // console.log(req.body.articleURL);
  //   // console.log("---------------------");
  //   // console.log(db);
  //   Votes.create({
  //     userName: "Bob",
  //     faux: req.body.faux,
  //     real: req.body.real,
  //     source: req.body.source,
  //     articleURL: req.body.articleURL,
  //     articleTitle: req.body.articleTitle
  //   }).then(function(votes) {
  //     //console.log("user vote is set");
  //     res.json(votes); //for individual vote
  //   });
  // });
  //
  // app.put("/api/vote", function(req, res) {
  //   //to update the vote if need be
  //   db.Votes.update({
  //       where: {
  //         id: req.body.id
  //       }
  //     }).then(function(votes) {
  //     console.log(votes);
  //     res.json(votes)
  //   })
  // })
};
