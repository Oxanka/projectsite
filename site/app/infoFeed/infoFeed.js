'use strict';

angular.module('myApp.infofeed', ['ngRoute'])



    .controller('InfoFeedCtrl', function($scope, $rootScope) {

        $scope.user = JSON.parse(window.localStorage.login_user);

        $scope.feed = $rootScope.one_new


    });