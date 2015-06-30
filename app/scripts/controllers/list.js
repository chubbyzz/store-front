'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
  .controller('ListCtrl', function ($scope) {
    $scope.products = [
      {id: 1, name: 'Relogio', price: 3330.99,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/t/h/thcan1011ba0821.jpg' ,quantite: 1},
      {id: 2, name: 'Oculos de sol', price: 1339.20,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/b/r/breitling-superocean-44-black-dial-stainless-steel-automatic-mens-watch-a1739102-ba77ss.jpg' ,quantite: 1},
      {id: 3, name: 'Camiseta', price: 1124.30,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/r/l/rlx116660bkso_13.jpg' ,quantite: 1},
      {id: 1, name: 'Relogio', price: 3330.99,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/t/h/thcan1011ba0821.jpg' ,quantite: 1},
      {id: 2, name: 'Oculos de sol', price: 1339.20,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/b/r/breitling-superocean-44-black-dial-stainless-steel-automatic-mens-watch-a1739102-ba77ss.jpg' ,quantite: 1},
      {id: 3, name: 'Camiseta', price: 1124.30,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/r/l/rlx116660bkso_13.jpg' ,quantite: 1},
      {id: 1, name: 'Relogio', price: 3330.99,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/t/h/thcan1011ba0821.jpg' ,quantite: 1},
      {id: 2, name: 'Oculos de sol', price: 1339.20,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/b/r/breitling-superocean-44-black-dial-stainless-steel-automatic-mens-watch-a1739102-ba77ss.jpg' ,quantite: 1},
      {id: 3, name: 'Camiseta', price: 1124.30,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/r/l/rlx116660bkso_13.jpg' ,quantite: 1},
      {id: 1, name: 'Relogio', price: 3330.99,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/t/h/thcan1011ba0821.jpg' ,quantite: 1},
      {id: 2, name: 'Oculos de sol', price: 1339.20,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/b/r/breitling-superocean-44-black-dial-stainless-steel-automatic-mens-watch-a1739102-ba77ss.jpg' ,quantite: 1},
      {id: 3, name: 'Camiseta', price: 1124.30,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/r/l/rlx116660bkso_13.jpg' ,quantite: 1},
      {id: 1, name: 'Relogio', price: 3330.99,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/t/h/thcan1011ba0821.jpg' ,quantite: 1},
      {id: 2, name: 'Oculos de sol', price: 1339.20,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/b/r/breitling-superocean-44-black-dial-stainless-steel-automatic-mens-watch-a1739102-ba77ss.jpg' ,quantite: 1},
      {id: 3, name: 'Camiseta', price: 1124.30,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/r/l/rlx116660bkso_13.jpg' ,quantite: 1},
      {id: 1, name: 'Relogio', price: 3330.99,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/t/h/thcan1011ba0821.jpg' ,quantite: 1},
      {id: 2, name: 'Oculos de sol', price: 1339.20,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/b/r/breitling-superocean-44-black-dial-stainless-steel-automatic-mens-watch-a1739102-ba77ss.jpg' ,quantite: 1},
      {id: 3, name: 'Camiseta', price: 1124.30,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/r/l/rlx116660bkso_13.jpg' ,quantite: 1},
      {id: 1, name: 'Relogio', price: 3330.99,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/t/h/thcan1011ba0821.jpg' ,quantite: 1},
      {id: 2, name: 'Oculos de sol', price: 1339.20,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/b/r/breitling-superocean-44-black-dial-stainless-steel-automatic-mens-watch-a1739102-ba77ss.jpg' ,quantite: 1},
      {id: 3, name: 'Camiseta', price: 1124.30,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/r/l/rlx116660bkso_13.jpg' ,quantite: 1},
      {id: 1, name: 'Relogio', price: 3330.99,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/t/h/thcan1011ba0821.jpg' ,quantite: 1},
      {id: 2, name: 'Oculos de sol', price: 1339.20,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/b/r/breitling-superocean-44-black-dial-stainless-steel-automatic-mens-watch-a1739102-ba77ss.jpg' ,quantite: 1},
      {id: 3, name: 'Camiseta', price: 1124.30,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/r/l/rlx116660bkso_13.jpg' ,quantite: 1},
      {id: 1, name: 'Relogio', price: 3330.99,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/t/h/thcan1011ba0821.jpg' ,quantite: 1},
      {id: 2, name: 'Oculos de sol', price: 1339.20,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/b/r/breitling-superocean-44-black-dial-stainless-steel-automatic-mens-watch-a1739102-ba77ss.jpg' ,quantite: 1},
      {id: 3, name: 'Camiseta', price: 1124.30,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/r/l/rlx116660bkso_13.jpg' ,quantite: 1},
      {id: 1, name: 'Relogio', price: 3330.99,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/t/h/thcan1011ba0821.jpg' ,quantite: 1},
      {id: 2, name: 'Oculos de sol', price: 1339.20,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/b/r/breitling-superocean-44-black-dial-stainless-steel-automatic-mens-watch-a1739102-ba77ss.jpg' ,quantite: 1},
      {id: 3, name: 'Camiseta', price: 1124.30,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/r/l/rlx116660bkso_13.jpg' ,quantite: 1},
      {id: 1, name: 'Relogio', price: 3330.99,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/t/h/thcan1011ba0821.jpg' ,quantite: 1},
      {id: 2, name: 'Oculos de sol', price: 1339.20,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/b/r/breitling-superocean-44-black-dial-stainless-steel-automatic-mens-watch-a1739102-ba77ss.jpg' ,quantite: 1},
      {id: 3, name: 'Camiseta', price: 1124.30,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/r/l/rlx116660bkso_13.jpg' ,quantite: 1},
      {id: 1, name: 'Relogio', price: 3330.99,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/t/h/thcan1011ba0821.jpg' ,quantite: 1},
      {id: 2, name: 'Oculos de sol', price: 1339.20,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/b/r/breitling-superocean-44-black-dial-stainless-steel-automatic-mens-watch-a1739102-ba77ss.jpg' ,quantite: 1},
      {id: 3, name: 'Camiseta', price: 1124.30,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/r/l/rlx116660bkso_13.jpg' ,quantite: 1},
      {id: 1, name: 'Relogio', price: 3330.99,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/t/h/thcan1011ba0821.jpg' ,quantite: 1},
      {id: 2, name: 'Oculos de sol', price: 1339.20,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/b/r/breitling-superocean-44-black-dial-stainless-steel-automatic-mens-watch-a1739102-ba77ss.jpg' ,quantite: 1},
      {id: 3, name: 'Camiseta', price: 1124.30,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/r/l/rlx116660bkso_13.jpg' ,quantite: 1},
      {id: 1, name: 'Relogio', price: 3330.99,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/t/h/thcan1011ba0821.jpg' ,quantite: 1},
      {id: 2, name: 'Oculos de sol', price: 1339.20,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/b/r/breitling-superocean-44-black-dial-stainless-steel-automatic-mens-watch-a1739102-ba77ss.jpg' ,quantite: 1},
      {id: 3, name: 'Camiseta', price: 1124.30,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/r/l/rlx116660bkso_13.jpg' ,quantite: 1},
      {id: 1, name: 'Relogio', price: 3330.99,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/t/h/thcan1011ba0821.jpg' ,quantite: 1},
      {id: 2, name: 'Oculos de sol', price: 1339.20,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/b/r/breitling-superocean-44-black-dial-stainless-steel-automatic-mens-watch-a1739102-ba77ss.jpg' ,quantite: 1},
      {id: 3, name: 'Camiseta', price: 1124.30,image: 'http://cdn2.jomashop.com/media/catalog/product/cache/1/image/490x490/9df78eab33525d08d6e5fb8d27136e95/r/l/rlx116660bkso_13.jpg' ,quantite: 1}

      ];
  });
