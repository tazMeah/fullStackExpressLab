"use strict";
angular
  .module("App")
  .config(($routeProvider) => {
    $routeProvider
      .when("/select-cart", {
        template: "<select-cart></select-cart>"
      })
      // .when("/battleground", {
      //   template: "<battle-ground></battle-ground>"
      // })
      // .when("/results", {
      //   template: "<results></results>"
      // })
      .otherwise({ redirectTo: "/select-cart" });
  });