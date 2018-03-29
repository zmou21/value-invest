//user vote api routes
const db = require("../models");
const yahooFinance = require('yahoo-finance');
const Analysis = require("../models").Analysis;
const router = require("express").Router();

let ticker = "";

// Routes
// =============================================================
module.exports = function(app) {

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

  router.post("/api/favorite", (req, res) => {
    console.log("api-route is being hit", req);
    // db.Analysis.create({ticker: ticker})
    // .then(function(data) {
    //     console.log(data);
    // })
    // .catch(err => console.log(err))
  })



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
