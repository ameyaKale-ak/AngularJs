var myapp=angular.module('myapp',['ngRoute']);

myapp.config(['$routeProvider',function($routeProvider){

    $routeProvider
                 .when('/home',{
                     templateUrl :'/Practise/views/11HomeView.html'
                 })
                 .when('/aboutUs',{
                     templateUrl :'/Practise/views/11AboutView.html',
                     controller :'mycontroller'
                 })
                 .when('/contactUs',{
                     templateUrl :'/Practise/views/11ContactUsView.html'
                 })
                 .otherwise({
                     redirectTo:'/home'
                 });

}]);

myapp.controller('mycontroller',['$scope','$http',function($scope,$http){

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

    $http.get('../data/shows.json').then(function(response){
        $scope.shows=response.data;
    });

}]);