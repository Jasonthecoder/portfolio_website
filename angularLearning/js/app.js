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

.controller("CustomerController", function($scope, $http){
  $scope.customers = [];
  $scope.newCustomer = {};

  $http.get("js/customers.json").success(function(data){
    $scope.customers = data;
  });

  $scope.addCustomer = function(){
    $scope.customers.push($scope.newCustomer);
    $scope.newCustomer = {};
  };
  
})

.config(function($routeProvider, $locationProvider){

  $locationProvider.html5Mode(true);

  $routeProvider
  .when("/", {
    templateUrl: "partials/index.html",
    controller: "IndexController"
  })
  .when('/binding', {
    templateUrl: "partials/binding.html",
    controller: "BindingController"
  })
  .when("/customerForm", {
    templateUrl: "partials/customerForm.html",
    controller: "CustomerController"
  })
  .otherwise({ redirectTo: "/" });

});
