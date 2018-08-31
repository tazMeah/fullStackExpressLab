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

    vm.delete = function(id) { // from: select-cart.js
      console.log(id);
      CartService.removeItem(id); // to: cart-service.js
    };

    vm.add = function(newItem) { // from: select-cart.js
      console.log(newItem);
      CartService.addItem(newItem); // to: cart-service.js
    };


  }]
};

angular
  .module("App")
  .component("selectCart", selectCart);