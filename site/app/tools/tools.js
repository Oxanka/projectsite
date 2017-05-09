'use strict';

angular.module('myApp.tools', ['ngRoute'])



    .controller('ToolsCtrl', function($scope, $rootScope) {

        $scope.user = JSON.parse(window.localStorage.login_user);

        $scope.tools = [
            {
                name: "Редактор UML",
                img: './img/tool1.jpg'
            },
            {
                name: "Редактор организационной структуры предприятия",
                img: './img/tool2.jpg'
            },
            {
                name: "Редактор схемы алгоритмов",
                img: './img/tool3.png'
            },
            {
                name: "Редактор графов",
                img: './img/tool4.png'
            }
        ]
    });