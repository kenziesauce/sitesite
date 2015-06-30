var scotchApp = angular.module('scotchApp', ['ngRoute']);

scotchApp.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })

        .when('/design', {
            templateUrl : 'pages/design.html',
            controller  : 'designController'
        })
        .when('/web', {
            templateUrl : 'pages/web.html',
            controller  : 'contactController'
        });
});

scotchApp.controller('mainController', function($scope) {
    $scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

scotchApp.controller('designController', function($scope) {
    $scope.message = 'Look! I am an about page.';

    $scope.imageArray = [
        //{name:"image", src:"images/LogoBLACK400px.png"},
        {name:"image", src:"http://lorempixel.com/200/200"},
        {name:"image", src:"http://lorempixel.com/200/200"},
        {name:"image", src:"http://lorempixel.com/200/200"},
        {name:"image", src:"http://lorempixel.com/200/200"}
    ];
});

scotchApp.controller('contactController', function($scope) {


});


$(document).ready(function ($) {

    // delegate calls to data-toggle="lightbox"
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
        event.preventDefault();
        return $(this).ekkoLightbox({
            always_show_close: true
        });
    });

});
