'use strict'
var app = angular.module('app', []);

app.controller("nameCtrl", function($scope, $http){
    
     $scope.check = function () {
        $http.get('http://localhost:8000/login')
            .then(function successCallback(response) {
                $scope.myWelcome = response.data;
            
            for (let i = 0; i < $scope.myWelcome.length; i++) {
                    if ($scope.myWelcome[i].login == $scope.login && $scope.myWelcome[i].password == $scope.password) {
                        $scope.result = "Wellcome "
                        break;
                    } else {
                        $scope.result = "Wrong login or password!!!";
                    }
                }

            }, function errorCallback(response) {
                console.log("Error!!!" + response.err);
            });
    };
    
});