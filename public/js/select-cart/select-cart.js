"use strict";
const selectCart = {
  templateUrl: `./js/select-cart/select-cart.html`,
  controller: ["CartService", function(CartService) {
    const vm = this;
    CartService.getAllItems().then((response) => {
      vm.cartList = response;
    });
    vm.selectCart = (id) => {
      CartService.getIndividualCart(id).then((response) => {
        vm.msg = `You have selected ${response.name}`;
      });
    };
  }]
};

angular
  .module("App")
  .component("selectCart", selectCart);