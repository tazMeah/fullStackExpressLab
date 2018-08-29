"use strict";
function CartService($http) {
  const vm = this;
  vm.getAllItems = () => {
    return $http({
      url: "/cart-items",
      method: "GET"
    }).then((response) => {
      vm.cartList = response.data;
      return vm.cartList;
    });
  };
  vm.getIndividualCart = (id) => {
    return $http({
      url: "/cart/id/" + id,
      method: "GET"
    }).then((response) => {
      vm.userCart = response;
      return vm.userCart;
    });
  };
  vm.getOpponent = () => {
    return $http({
      url: "/cart/id/" + 25,
      method: "GET"
    }).then((response) => {
      vm.opponentCart = response;
      return vm.opponentCart;
    });
  };
}

angular
  .module("App")
  .service("CartService", CartService);