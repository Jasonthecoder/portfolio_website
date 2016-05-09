"use strict";

angular.module("myApp", ["ngRoute"])

.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){

  $locationProvider.html5Mode(true);

  $routeProvider
  .when("/", {
    templateUrl: "partials/index.html",
    controller: "GalleryController"
  })
  .otherwise({ redirectTo: "/" });

}])

.controller("GalleryController", ["$scope", "$http", function($scope, $http){

  $scope.month0 = [];
  $http.get("img/month0/pics.json").success(function(data){
    $scope.month0 = data;
  });

  $scope.month1 = [];
  $http.get("img/month1/pics.json").success(function(data){
    $scope.month1 = data;
  });

  $scope.month2 = [];
  $http.get("img/month2/pics.json").success(function(data){
    $scope.month2 = data;
  });

  $scope.month3 = [];
  $http.get("img/month3/pics.json").success(function(data){
    $scope.month3 = data;
  });

  $scope.month4 = [];
  $http.get("img/month4/pics.json").success(function(data){
    $scope.month4 = data;
  });

  $scope.month5 = [];
  $http.get("img/month5/pics.json").success(function(data){
    $scope.month5 = data;
  });

  $scope.month6 = [];
  $http.get("img/month6/pics.json").success(function(data){
    $scope.month6 = data;
  });

}]);
