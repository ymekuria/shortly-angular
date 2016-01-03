angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function () {
    Links.addOne($scope.link);
    console.log("SHIT IS HAPPENING");
    $location.path('/');
  };

  $scope.changeView = function (view) {
    $location.path(view);
  };
});
