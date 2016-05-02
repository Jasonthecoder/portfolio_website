angular.module("myApp", ["ngRoute"])

.controller("BindingController", function($scope){

  $scope.name = "";
  $scope.isEmpty = function(){
    return $scope.name === "";
  };

})

.controller("NavController", function($scope){
  $scope.panel = 0;
  $scope.setPanel = function(newPanel){
    $scope.panel = newPanel;
  };
})

.config(function($routeProvider, $locationProvider){

  $locationProvider.html5Mode(true);

  $routeProvider
  .when("/", {
    templateUrl: "/angularLearning/partials/index.html",
    controller: "IndexController"
  })
  .when('/binding', {
    templateUrl: "/angularLearning/partials/binding.html",
    controller: "BindingController"
  })
  .otherwise({ redirectTo: "/" });

});
