"use strict";
const selectPokemon = {
  templateUrl: `./js/select-pokemon/select-pokemon.html`,
  controller: ["PokemonService", function(PokemonService) {
    const vm = this;
    PokemonService.getAllPokemon().then((response) => {
      vm.pokemonList = response;
    });
    vm.selectPokemon = (id) => {
      PokemonService.getIndividualPokemon(id).then((response) => {
        vm.msg = `You have selected ${response.name}`;
      });
    };
  }]
};

angular
  .module("App")
  .component("selectPokemon", selectPokemon);