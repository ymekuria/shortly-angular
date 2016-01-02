angular.module('shortly.links', [
  'shortly.services'
  ])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.Links = Links;

  Links.getAll().then(function (res) {
    $scope.data.links = res;
  });

});
