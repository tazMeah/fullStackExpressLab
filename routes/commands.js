"use strict";
const express = require("express");
const commands = express.Router();
// const store = require("../cart/cart");
// const store = require("../pg-connection-pool.js");
const pool = require("../pg-connection-pool.js");


commands.get("/cart-items", function(request, response){
  // says when the browser navigates to /cart-items, query the database and return the results from the query
  pool.query("select * from ShoppingCart").then(function(result){
    response.send(result.rows);
  });
});

commands.post("/cart-items/", function(request, response) {
  const data = request.body;
  pool.query(`insert into ShoppingCart (product, price, quantity)
   values ('${data.product}', ${data.price}, ${data.quantity})`).then(function(result){
    response.send(result.rows);
  });
});

// commands.put("/cart-items/put", (request, response) => {
//   // console.log("GET all.");
//   // res.send(store);
//   pool.query(`insert into ShoppingCart (product, price, quantity)
//    values ('test item', 99.99, 1)`).then(function(result){
//     response.send(result.rows);
//   });
// });

commands.delete("/cart-items/:id", function(request, response) {
  const id = request.params.id;
  
  pool.query(`DELETE FROM ShoppingCart where id =`+id).then(function(result){
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