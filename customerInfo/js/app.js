var app = angular.module("myApp", []);

app.controller("DataController", function($scope){

  var data = [
    {
      name: "Matthew Pagan",
      email: "mastapegs01@gmail.com",
      phone: "401-332-7084"
    },
    {
      name: "Amanda Blanchette",
      email: "mandabear456@gmail.com",
      phone: "401-719-6173"
    },
    {
      name: "Johnston GetWireless Now",
      email: "mpagan@getwirelessnow.com",
      phone: "401-351-5600"
    },
    {
      name: "John Doe",
      email: "jDoe@gmail.com",
      phone: "203-234-5678"
    }
  ]; // data

  $scope.customers = data;
  $scope.newCustomer = {};
  $scope.addCustomer = function(){
    $scope.customers.push($scope.newCustomer);
    $scope.newCustomer = {};
  }

}); // DataController
