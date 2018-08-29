"use strict";
const express = require("express");
const commands = express.Router();
const pokeball = require("../pokemon/pokemon");

commands.get("/cart-items", (req, res) => {
  console.log("GET all.");
  res.send(pokeball);
});

commands.get("/pokemon/type/:type", (req, res) => {
  console.log("GET individual by type.")
  const list = [];
  for (let pokemon of pokeball) {
    if (pokemon.type.toLowerCase() == req.params.type) {
      list.push(pokemon);
    }
  }
  res.send(list);
});

commands.get("/pokemon/id/:id", (req, res) => {
  console.log("GET individual by id.");
  for (let pokemon of pokeball) {
    if (pokemon.id == req.params.id) {
      res.send(pokemon);
      break;
    }
  }
});

module.exports = commands;