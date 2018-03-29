//api routes to database
const db = require("../models");
const router = require("express").Router();

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
    .catch(err => console.log(err))
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
