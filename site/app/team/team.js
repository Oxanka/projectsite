'use strict';

angular.module('myApp.teams', ['ngRoute'])


    .controller('TeamsCtrl', function ($scope, $rootScope) {

        $scope.user = JSON.parse(window.localStorage.login_user);

        $scope.teams = [
            {
                name: 'Команды пользователя',
                team: [
                    {
                        name: 'Команда 1',
                        img: './img/team1.jpg'
                    },
                    {
                        name: 'Команда 2',
                        img: './img/team2.jpg'
                    }

                ]
            },
            {
                name: 'Другие команды',
                team: [
                    {
                        name: 'Команда 3',
                        img: './img/team3.jpg'
                    },
                    {
                        name: 'Команда 4',
                        img: './img/team4.jpg'
                    },
                    {
                        name: 'Команда 5',
                        img: './img/team5.jpg'
                    },

                ]
            }
        ]

    });