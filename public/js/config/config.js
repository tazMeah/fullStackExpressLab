"use strict";
angular
  .module("App")
  .config(($routeProvider) => {
    $routeProvider
      .when("/select-pokemon", {
        template: "<select-pokemon></select-pokemon>"
      })
      .when("/battleground", {
        template: "<battle-ground></battle-ground>"
      })
      .when("/results", {
        template: "<results></results>"
      })
      .otherwise({ redirectTo: "/select-pokemon" });
  });