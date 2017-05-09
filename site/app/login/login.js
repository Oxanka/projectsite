'use strict';

angular.module('myApp.login', ['ngRoute'])



    .controller('LoginCtrl', function($scope, $rootScope, $location) {

        $scope.user = {
            name: "",
            password: ""
        };

        $scope.newUser = {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }

        $('#login-form-link').click(function(e) {
            $("#login-form").delay(100).fadeIn(100);
            $("#register-form").fadeOut(100);
            $('#register-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
        $('#register-form-link').click(function(e) {
            $("#register-form").delay(100).fadeIn(100);
            $("#login-form").fadeOut(100);
            $('#login-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });

        $scope.loginUser = function () {
            console.log($scope.user);
            // if($scope.user.name == "test" && $scope.user.password == "test"){
                window.localStorage.login_user = JSON.stringify($scope.user);
                $location.path('/home');
            // }
            // else {
            //     alert("Проверьте корректность логина и/или пароля");
            // }
        }
    });