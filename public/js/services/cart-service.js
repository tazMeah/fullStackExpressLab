"use strict";
function CartService($http) {
  const vm = this;
  vm.getAllItems = function() {
    return $http({
      url: "/cart-items",
      method: "GET"
    }).then( function(response) {
      vm.cartList = response.data;
      return vm.cartList;
    });
  };
  vm.getIndividualCart = function (id) {
    return $http({
      url: "/cart/id/" + id,
      method: "GET"
    }).then((response) => {
      vm.userCart = response;
      return vm.userCart;
    });
  };

  vm.addItem = function(newItem){
    return $http({
      url: "/cart-items/post" + newItem,
      method: "POST"
    }).then(function(response){
      console.log("we are adding in cart-service.js.");
      vm.userCart = response;
      return vm.userCart;
    });
  };
  vm.updateItem = function(item){
    return $http({
      url: "/cart-items/id/update" + id, // to: commands.js
      method: "UPDATE"
    }).then(function(response){
      vm.userCart = response;
      return vm.userCart;
    });
  };
  vm.removeItem = function(id){
    return $http({
      url: "/cart-items/delete/",
      method: "DELETE"
    }).then(function(response){
      console.log(`We are in the cart-service file. Prepairing to delete id:${id}.`);
      vm.userCart = response;
      return vm.userCart;
    });
  };
  
}

angular
  .module("App")
  .service("CartService", CartService);