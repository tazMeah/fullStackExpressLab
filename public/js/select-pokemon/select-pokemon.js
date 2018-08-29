"use strict";
const selectPokemon = {
  templateUrl: `./js/select-pokemon/select-pokemon.html`,
  controller: ["CartService", function(CartService) {
    const vm = this;
    CartService.getAllItems().then((response) => {
      vm.pokemonList = response;
    });
    vm.selectPokemon = (id) => {
      CartService.getIndividualPokemon(id).then((response) => {
        vm.msg = `You have selected ${response.name}`;
      });
    };
  }]
};

angular
  .module("App")
  .component("selectPokemon", selectPokemon);