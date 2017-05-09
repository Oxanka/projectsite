'use strict';

angular.module('myApp.project', ['ngRoute'])



    .controller('ProjectCtrl', function($scope, $rootScope) {

        $scope.user = JSON.parse(window.localStorage.login_user);

        $scope.projects = [
            {
                name: 'UML',
                file: [
                    {
                        name: 'Project1',
                        img: './img/uml1.png'
                    },
                    {
                        name: 'Project2',
                        img: './img/uml2.jpg'
                    },
                    {
                        name: 'Project3',
                        img: './img/uml3.jpg'
                    },

                ]
            },
            {
                name: 'Graph schema',
                file: [
                    {
                        name: 'Graph1',
                        img: './img/graph1.png'
                    },
                    {
                        name: 'Graph2',
                        img: './img/graph2.png'
                    },
                    {
                        name: 'Graph3',
                        img: './img/graph3.png'
                    },

                ]
            }
        ]

    });