//api routes to database
const db = require("../models");
const router = require("express").Router();
const yahooFinance = require('yahoo-finance');

let ticker = "";

// Routes
// =============================================================

  router.post("/api/favorite", (req, res) => {
    console.log("------------------------------------");
    console.log("api-route is being hit", req.body.ticker);
    db.analyses.create({
      ticker: req.body.ticker
    }).then(function(data) {
        console.log(data);
    })
    .catch(err => console.log(err));
  });

  router.post("/api/ticker", (req, res) => {
    console.log("------------------------------------");
    console.log("api-route is being hit", req.body.ticker);
    ticker = req.body.ticker;

  });

  router.get("/api/search", (req, res) => {
    console.log("get route is connecting");
    
    yahooFinance.quote({
      symbol: ticker,
      modules: ['price', 'summaryDetail', "financialData", "defaultKeyStatistics"]       // optional; default modules.
    }, function(err, quote) {
      console.log(`General quote = ${quote}`);
      console.log(`forwardPE = ${quote.defaultKeyStatistics.forwardPE}`);
      res.json(quote);
    });
  });

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
// };

function yahooQuote(ticker) {
  yahooFinance.quote({
    symbol: ticker,
    modules: ['price', 'summaryDetail', "financialData", "defaultKeyStatistics"]       // optional; default modules.
  }, function(err, quote) {
    console.log(`General quote = ${quote}`);
    console.log(`forwardPE = ${quote.defaultKeyStatistics.forwardPE}`);
    res.json(quote);
  });
}

module.exports = router;
