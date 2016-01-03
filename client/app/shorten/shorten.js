angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function (link) {
    Links.addOne(link);
    console.log("SHIT IS HAPPENING");
    $scope.link.link = '';
  };

  $scope.changeView = function (view) {
    $location.path(view);
  };
});
