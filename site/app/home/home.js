'use strict';

angular.module('myApp.home', ['ngRoute'])



    .controller('HomeCtrl', function($scope, $rootScope, $location) {

        $scope.user = JSON.parse(window.localStorage.login_user);

        console.log($scope.user);
        $scope.news = [
            {
            name: "Новость 1",
            img: './img/it.JPG',
            date: '21/02/2017',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
            {
            name: "Новость 2",
            img: './img/IT-sektor.jpg',
            date: '02/03/2017',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. '
        }, {
            name: "Новость 3",
            img: './img/img_it.jpg',
            date: '10/03/2017',
            text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.'
        }
        ];

        $scope.openNew = function (feed) {
            console.log(feed);
            $rootScope.one_new = feed;
            $location.path('/info_feed');
        }

    });