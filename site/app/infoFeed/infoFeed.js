'use strict';

angular.module('myApp.infofeed', ['ngRoute'])



    .controller('InfoFeedCtrl', function($scope, $rootScope) {

        $scope.feed = $rootScope.one_new


    });