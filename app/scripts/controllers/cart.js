'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
  .controller('CartCtrl', function ($scope) {
    $scope.cart = [
      {id: 1, name: 'Relogio', price: 20.99,image: '/images/relogio.jpg' ,quantite: 1},
      {id: 2, name: 'Oculos de sol', price: 19.20,image: '/images/oculos.jpg' ,quantite: 1},
      {id: 3, name: 'Camiseta', price: 14.30,image: '/images/camiseta.jpg' ,quantite: 1}
      ];
    $scope.incrementQuantite = function(product){
      product.quantite++;
    };
    $scope.decrementQuantite = function(product){
      if(product.quantite > 0) product.quantite--;
    };
  });
