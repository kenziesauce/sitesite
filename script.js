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

//ABOUT

$('.photos img').hover(
    function(){
        $(this).find('img').stop().fadeTo('slow', 0.4);
    },
    function(){
        $(this).find('img').stop().fadeTo('slow', 1);
    });




$('#aboutEmail').click(function() {
    $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
            key: "9qqG4b1sJMUYAWp90EuXxA",
            message: {
                from_email: "makenziesiteemail@gmail.com",
                to: [
                    {
                        email: "kenziesauce@gmail.com",
                        name: "RECIPIENT NAME (OPTIONAL)",
                        type: "to"
                    }

                ],
                autotext: "true",
                subject:"YOUR SUBJECT HERE!",
                html: "YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!"
            }
        }
    }).done(function(response) {
        console.log(response); // if you're into that sorta thing
    });

});