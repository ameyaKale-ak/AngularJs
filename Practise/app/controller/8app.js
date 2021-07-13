var myapp=angular.module('myapp',['ngRoute','ngAnimate']);

myapp.directive('myDirective',[function(){
    return{
        restrict : 'E',
        scope : {
            shows:'=',
            title:'='
        },
        templateUrl :'/Practise/views/13CustomDirective.html',
        transclude :true,
        replace :true,
        controller :function($scope){
            $scope.random = Math.floor(Math.random()* 9)
        }
    }
}]);

myapp.config(['$routeProvider',function($routeProvider){

    $routeProvider
                .when('/home',{
                    templateUrl : '/Practise/views/11HomeView.html',
                    controller:'mycontroller'
                })
                .when('/aboutUs',{
                    templateUrl : '/Practise/views/11AboutView.html',
                    controller:'mycontroller'
            
                })
                .when('/contactUs',{
                    templateUrl : '/Practise/views/11ContactUSView.html',
                    controller:'contactController'
                })
                .when('/sendMessage',{
                    templateUrl : '/Practise/views/sendMessage.html',
                    controller:'contactController'
                })
                .otherwise({
                    redirectTo :'/home'
                });
}]);

myapp.controller('mycontroller',['$scope','$http',function($scope,$http){

    $http.get('../data/shows.json').then(function(response){
        $scope.shows=response.data
    });

    $scope.removeAll =function(){
        $scope.shows=[];
    }

    $scope.message="Hellllllllooo!! This is from controlleer";

    $scope.remove=function(x){
        var removeItem=$scope.shows.indexOf(x);
        $scope.shows.splice(removeItem,1);
    }

    $scope.addShow=function(){

        $scope.shows.push({
        name:$scope.show.Name,
        status:$scope.show.Status,
        rate:parseInt($scope.show.Rate),
        alvalible:true,
        rating:parseInt($scope.show.Rating)});

        $scope.show.Name="";
        $scope.show.Status="";
        $scope.show.Rate="";
        $scope.show.Rating="";
    }

}]);

myapp.controller('contactController',['$scope','$location',function($scope,$location){
    $scope.send=function(){
        $location.path('/sendMessage');
    }
}]);
