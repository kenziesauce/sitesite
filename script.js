// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/design', {
            templateUrl : 'pages/design.html',
            controller  : 'designController'
        })
        .when('/web', {
            templateUrl : 'pages/web.html',
            controller  : 'contactController'
        });
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
    // create a message to display in our view
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
    //$scope.message = 'Projects!';


});



