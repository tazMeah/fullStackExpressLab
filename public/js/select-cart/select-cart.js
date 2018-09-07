"use strict";
const cartItems = {
  template: `
  <p>{{ $ctrl.msg }}</p>



<form ng-submit="$ctrl.add($ctrl.item)">
    <label>
      <input placeholder="Add Item" ng-model="$ctrl.item.product">
    </label>
    <label>
      <input placeholder="Price" ng-model="$ctrl.item.price">
    </label>
    <label>
      <input placeholder="Quantity" ng-model="$ctrl.item.quantity">
    </label>
    <button type="submit" >Add</button> <!-- to: select-cart.js -->
  </form>
<section ng-repeat="cart in $ctrl.cartList">
  <figure>
      <div style="background:url({{cart.img}})">
        <p>ID: {{ cart.id }}</p>
      </div>
      <figcaption>
        <p>Product: {{ cart.product }}</p>
        <p>Price: {{cart.price}}</p>
        <p>Quantity: {{ cart.quantity }}</p>

      </figcaption>
  </figure>
  <article>
    <h2>{{cart.product}}</h2>
    <p class="stars">{{cart.stars}}</p>
    <p class="review">{{cart.review}}</p>
  </article>
  
  <div class="buttons">
    <button ng-click="$ctrl.delete(cart.id);">Delete</button> <!-- to select-cart.js -->
    <!-- <i class="fa fa-times" aria-hidden="true"></i> -->

  </div>
  

</section>
  `,
  
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
      CartService.removeItem(id); // to: cart-service.js
    };

    vm.add = function(item) { // from: select-cart.js
      CartService.addItem(item).then(function(response){
        vm.cartList = response;
      });

    };


  }]
};

angular
  .module("App")
  .component("cartItems", cartItems);