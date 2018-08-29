"use strict";
const express = require("express");
const commands = express.Router();
const store = require("../cart/cart");

commands.get("/cart-items", (req, res) => {
  console.log("GET all.");
  res.send(store);
});

commands.get("/cart/type/:type", (req, res) => {
  console.log("GET individual by type.")
  const list = [];
  for (let cart of store) {
    if (cart.type.toLowerCase() == req.params.type) {
      list.push(cart);
    }
  }
  res.send(list);
});

commands.get("/cart/id/:id", (req, res) => {
  console.log("GET individual by id.");
  for (let cart of store) {
    if (cart.id == req.params.id) {
      res.send(cart);
      break;
    }
  }
});

module.exports = commands;