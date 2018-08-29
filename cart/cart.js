"use strict";
const store = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/71zPg7nI4DL._SL1500_.jpg",
    id: 1,
    product: "Horse Head Mask",
    price: 9.35,
    quantity: 1,
    stars: "★★★★★",
    review: "It is day 87 and the horses have accepted me as one of their own. I have grown to understand and respect their gentle ways.",
    atk() {
      return Math.floor(Math.random() * 6 + 1);  
    }
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/71FHJU17djL._SL1204_.jpg",
    id: 2,
    product: "Wenger 169999 Swiss Army Knife Giant",
    price: 8499,
    quantity: 1,
    stars: "★★★★★",
    review: "I tried to file my nails, but in the process I accidentally fixed a small engine that was near by. Which was nice",
    atk() {
      return Math.floor(Math.random() * 6 + 1);  
    }
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51scITk38DL._SX448_BO1,204,203,200_.jpg",
    id: 3,
    product: "Where is Baby's Belly Button?",
    price: 4.99,
    quantity: 1,
    stars: "★★☆☆☆",
    review: "This book is completely misleading. The entire plot revolves around finding Baby's belly button; the title makes this much clear from the beginning. However, there is no mystery. There is no twist. Baby's belly button is right where it's supposed to be, on Baby's stomach. Right where it clearly SHOWS you it is on the COVER OF THE BOOK.",
    atk() {
      return Math.floor(Math.random() * 6 + 1);  
    }
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/716g2E6JdEL._AC_SX430_.jpg",
    id: 4,
    product: "Star Wars Battlefront - Deluxe Edition",
    price: 34.99,
    quantity: 1,
    stars: "★☆☆☆☆",
    review: "Congratulations EA. You earned one star. Additional stars can be purchased for $5.49 each.",
    atk() {
      return Math.floor(Math.random() * 6 + 1);  
    }
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81kiWqOWz7L._SL1500_.jpg",
    id: 5,
    product: "Three Wolf Moon T-Shirt",
    price: 8.98,
    quantity: 1,
    stars: "★★★★☆",
    review: "I had a two-wolf shirt for a while and I didn't think life could get any better. I was wrong. Life got 50% better, no lie.",
    atk() {
      return Math.floor(Math.random() * 6 + 1);  
    }
  },
];

module.exports = store;