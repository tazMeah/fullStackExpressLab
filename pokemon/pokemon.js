"use strict";
const pokeball = [
  {
    id: 1,
    product: "Bic For Her Medium Ballpoint Pen",
    price: 9.30,
    quantity: 2,
    atk() {
      return Math.floor(Math.random() * 6 + 1);  
    }
  },
  {
    id: 2,
    product: "Wenger 169999 Swiss Army Knife Giant",
    price: 8499,
    quantity: 1,
    atk() {
      return Math.floor(Math.random() * 6 + 1);  
    }
  },
  {
    id: 3,
    product: "Where is Baby's Belly Button?",
    price: 4.99,
    quantity: 1,
    atk() {
      return Math.floor(Math.random() * 6 + 1);  
    }
  },
  {
    id: 4,
    product: "Star Wars Battlefront - Deluxe Edition",
    price: 34.99,
    quantity: 1,
    atk() {
      return Math.floor(Math.random() * 6 + 1);  
    }
  },
  {
    id: 5,
    product: "Haribo Sugar Free Gummy Bears 5lb Bag",
    price: 12.15,
    quantity: 1,
    atk() {
      return Math.floor(Math.random() * 6 + 1);  
    }
  },
];

module.exports = pokeball;