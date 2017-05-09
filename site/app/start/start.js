'use strict';

angular.module('myApp.start', ['ngRoute'])



    .controller('StartCtrl', function($scope, $rootScope, $location) {

$scope.login = function () {
    $location.path('/login');
}

    });