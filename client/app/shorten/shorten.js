angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.Links = Links;

  $scope.addLink = function (link) {
    Links.addOne(link);
  };
});
