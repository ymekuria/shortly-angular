angular.module('shortly.links', [
  'shortly.services'
  ])

.controller('LinksController', function ($scope, $location, Links) {
  $scope.data = {};

  Links.getAll().then(function (res) {
    $scope.data.links = res;
  });

  $scope.changeView = function (view) {
    $location.path(view);
  };
});


