"use strict";
const express = require("express");
const commands = express.Router();
// const store = require("../cart/cart");
// const store = require("../pg-connection-pool.js");
const pool = require("../pg-connection-pool.js");


commands.get("/cart-items", (request, response) => {
  // console.log("GET all.");
  // res.send(store);
  pool.query("select * from ShoppingCart").then(function(result){
    response.send(result.rows);
  });
});

commands.post("/cart-items/post", (request, response) => {
  // console.log("GET all.");
  // res.send(store);
  pool.query(`insert into ShoppingCart (product, price, quantity)
   values ('test item', 99.99, 1)`).then(function(result){
    response.send(result.rows);
  });
});

commands.put("/cart-items/put", (request, response) => {
  // console.log("GET all.");
  // res.send(store);
  pool.query(`insert into ShoppingCart (product, price, quantity)
   values ('test item', 99.99, 1)`).then(function(result){
    response.send(result.rows);
  });
});

commands.delete("/cart-items/delete", (request, response) => {
  // console.log("GET all.");
  // res.send(store);
  pool.query(`insert into ShoppingCart (product, price, quantity)
   values ('test item', 99.99, 1)`).then(function(result){
    response.send(result.rows);
  });
});



// commands.get("/cart/type/:type", (req, res) => {
//   console.log("GET individual by type.")
//   const list = [];
//   for (let cart of store) {
//     if (cart.type.toLowerCase() == req.params.type) {
//       list.push(cart);
//     }
//   }
//   res.send(list);
// });

// commands.get("/cart/id/:id", (req, res) => {
//   console.log("GET individual by id.");
//   for (let cart of store) {
//     if (cart.id == req.params.id) {
//       res.send(cart);
//       break;
//     }
//   }
// });

module.exports = commands;