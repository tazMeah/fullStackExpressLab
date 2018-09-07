"use strict";
angular
  .module("App")
  .config(["$routeProvider", function ($routeProvider){
    $routeProvider
      .when("/home", {
        template: `<h1>Connected to Config</h1>`
      })
      .when("/cart-items", {
        template: `<h1>Connected to Config</h1>`
      })
      .when("/select-cart", {
        template: `<cart-items></cart-items>`
      })
      
      .otherwise({ redirectTo: "/home" });
  }]);



