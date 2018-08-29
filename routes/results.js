const express = require("express");
const results = express.Router();

const user = {
  wins: 0,
  losses: 0,
  userWin() {
    this.wins++;
  },
  userLoss() {
    this.losses++;
  }
};

results.get("/results", (req, res) => {
  res.send(user);
});

results.post("/results", (req, res) => {
  if (req.body.victory) {
    user.userWin();
  } else {
    user.userLoss();
  }
  res.send(user);
});

module.exports = results;