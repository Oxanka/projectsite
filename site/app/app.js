'use strict';
// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.home',
    'myApp.project',
    'myApp.teams',
    'myApp.tools',
    'myApp.infofeed',

])
    .config(function ($locationProvider, $routeProvider, $httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $routeProvider
            .when('/home',
            {
                templateUrl: 'home/home.html',
                controller: 'HomeCtrl'
            })
            .when('/project',{
                templateUrl: 'project/project.html',
                controller: 'ProjectCtrl'
            })
            .when('/team',{
                templateUrl: 'team/team.html',
                controller: 'TeamsCtrl'
            })
            .when('/tools',{
                templateUrl: 'tools/tools.html',
                controller: 'ToolsCtrl'
            })
            .when('/info_feed',{
                templateUrl: 'infoFeed/infoFeed.html',
                controller: 'InfoFeedCtrl'
            });

        $locationProvider.hashPrefix('!');
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
        $routeProvider.otherwise({redirectTo: '/home'});
    })

