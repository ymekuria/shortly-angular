angular.module('shortly.links', [
  'shortly.services'
  ])

.controller('LinksController', function ($scope, $location, Links) {
  $scope.data = {};

  Links.getAll().then(function (data) {
    $scope.data.links = data;
  });

  $scope.changeView = function (view) {
    $location.path(view);
  };
});


