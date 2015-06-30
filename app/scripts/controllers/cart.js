'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
  .controller('CartCtrl', function ($scope, $routeParams) {
    var id = $routeParams.id -1;
    console.log(id);
     var products = [
       {id: 1, name: 'Relogio', price: 3330.99,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/t/h/thcan1011ba0821.jpg' ,quantite: 1},
       {id: 2, name: 'Oculos de sol', price: 1339.20,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/b/r/breitling-superocean-44-black-dial-stainless-steel-automatic-mens-watch-a1739102-ba77ss.jpg' ,quantite: 1},
       {id: 3, name: 'Camiseta', price: 1124.30,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/r/l/rlx116660bkso_13.jpg' ,quantite: 1}
     ];
     var cart = new Array();
     cart.push(products[id]);
      $scope.cart = cart;
    $scope.incrementQuantite = function(product){
      product.quantite++;
    };
    $scope.decrementQuantite = function(product){
      if(product.quantite > 0) product.quantite--;
    };
  });
