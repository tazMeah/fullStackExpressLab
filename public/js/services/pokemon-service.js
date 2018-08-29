"use strict";
function PokemonService($http) {
  const vm = this;
  vm.getAllPokemon = () => {
    return $http({
      url: "/pokemon/all",
      method: "GET"
    }).then((response) => {
      vm.pokemonList = response.data;
      return vm.pokemonList;
    });
  };
  vm.getIndividualPokemon = (id) => {
    return $http({
      url: "/pokemon/id/" + id,
      method: "GET"
    }).then((response) => {
      vm.userPokemon = response;
      return vm.userPokemon;
    });
  };
  vm.getOpponent = () => {
    return $http({
      url: "/pokemon/id/" + 25,
      method: "GET"
    }).then((response) => {
      vm.opponentPokemon = response;
      return vm.opponentPokemon;
    });
  };
}

angular
  .module("App")
  .service("PokemonService", PokemonService);