"use strict";
function ResultsService($http) {
  const vm = this;
  vm.getResults = () => {
    return $http({
      url: "/results",
      method: "GET"
    }).then((response) => {
      vm.user = response.data;
      console.log(vm.user);
      return vm.user;
    });
  };
  vm.updateResults = (victory) => {
    return $http({
      url: "/results",
      method: "POST",
      data: victory
    }).then((response) => {
      vm.user = response.data;
      return vm.user;
    });
  };
}

angular
  .module("App")
  .service("ResultsService", ResultsService);