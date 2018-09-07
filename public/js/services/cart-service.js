"use strict";
function CartService($http) {
  const vm = this;

  vm.getAllItems = function() {
    return $http({
      url: "/cart-items/",
      method: "GET"
    }).then( function(response) {
      vm.cartList = response.data;
      return vm.cartList;
    });
  };

  vm.addItem = function(data){
    $http.post("/cart-items", data);
    location.reload();
    
  };

  // vm.updateItem = function(item){
  //   return $http({
  //     url: `/cart-items/${item}` , // to: commands.js
  //     method: "UPDATE"
  //   }).then(function(response){
  //     vm.userCart = response;
  //     return vm.userCart;
  //   });
  // };
  
  vm.removeItem = function(id){
    // return $http({
    //   url: "/cart-items/:id",
    //   method: "DELETE"
    // }).then(function(response){
    //   console.log(`We are in the cart-service file. Prepairing to delete id:${id}.`);
    //   vm.userCart = response;
    //   return vm.userCart;
    // });
    $http.delete("/cart-items:id", function(req, res){
      const id = req.params.id;
      console.log(`The id is: ${id}`);

    })
  };
  
}

angular
  .module("App")
  .service("CartService", CartService);