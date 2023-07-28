var app = angular.module("formApp", []);
app.controller("form", [
  "$scope",
  "$rootScope",
  function ($scope, $rootScope) {
    let uname = "admin";
    let pass = "1234";
    $scope.username = "";
    $scope.password = "";
    $scope.login = function () {
      if ($scope.username === uname && $scope.password === pass) {
        $rootScope.isLoggedIn = true;
        $rootScope.isLoggedOut = false;
        alert("You were Logged In!!");
      } else {
        $rootScope.isLoggedIn = false;
        $rootScope.isLoggedOut = true;
      }
    };
  },
]);
app.controller("navbar", [
  "$scope",
  "$rootScope",
  function ($scope, $rootScope) {
    $scope.isLoggedIn = false;
    $scope.isLoggedOut = false;
    $rootScope.$watchGroup(["isLoggedIn", "isLoggedOut"], function (newValues) {
      $scope.isLoggedIn = newValues[0];
      $scope.isLoggedOut = newValues[1];
    });
    $scope.logout = function () {
      $rootScope.isLoggedIn = false;
      $rootScope.isLoggedOut = true;
      alert("You were Logged Out!!");
    };
  },
]);
