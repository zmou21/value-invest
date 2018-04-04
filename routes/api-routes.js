//api routes to database
const db = require("../models");
const router = require("express").Router();
const yahooFinance = require('yahoo-finance');
const cheerio = require("cheerio");
const request = require("request");

let ticker = "";

// Routes
// =============================================================

  //reserved
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

  //reserved
  router.post("/api/ticker", (req, res) => {
    console.log("------------------------------------");
    console.log("api-route is being hit", req.body.ticker);
    ticker = req.body.ticker;

  });

  //reserved
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

  //reserved
  router.get("/api/growth", (req, res) => {
    console.log("get route 'api/growth' is connecting");
    let newSpan = "";

    request("https://finance.yahoo.com/quote/" + ticker + "/analysts?p=" + ticker, function(error, response, html) {

      var $ = cheerio.load(html);
      var results = [];

      $("tr.BdT").each(function(i, element) {
        const span = $(element).find("td").find("span").text();
        // console.log(span);

        results.push({
          span: span
        });

        for(let i = 0; i < results.length; i++) {
          if( results[i].span === "Next 5 Years (per annum)") {
            //console.log("text is found", results[i].span);
            newSpan = $(element).find("td").find("span").siblings().prevObject.prevObject[1].children[0].data;
            newSpan = newSpan.replace(/[!@#$%^&*]/g, "");
            //console.log("value is found", newSpan);
            res.end(newSpan);
          }
        }

      });

    });
  });

  //reserved
  router.post("/api/newuser", (req, res) => {
    console.log("------------------------------------");
    console.log("api-route for new user is being hit", req.body.data);
    db.User.create({
      email: req.body.data.email,
      username: req.body.data.username
    }).then(function(data) {
        //console.log(data);
    })
    .catch(err => console.log(err));
  });

  router.get("/api/getuserdata/:email", (req, res) => {
    //console.log("------------------------------------");
    //console.log("api-route for to get users name is being hit", req.params);
    //console.log("api-route for to get users name is being hit", req);
    db.User.findOne({
      where: {
        email: req.params.email
      }
    }).then(function(result) {
      console.log("this is the result of get request", result);
      res.json(result);
    })
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
// };


module.exports = router;
