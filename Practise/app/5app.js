var myapp=angular.module('myapp',[]);

myapp.controller('mycontroller',['$scope',function($scope){

    $scope.message="Hellllllllooo!! This is from controlleer";

    $scope.shows=[
        {name:"Attack on Titan",status:"on going",rate:100000,alvalible:true,rating:9.5},
        {name:"Naruto",status:"finished",rate:1000000,alvalible:true,rating:9.8},
        {name:"Jujutsu kaisen",status:"on going",rate:1000,alvalible:true,rating:9.3},
        {name:"One Piece",status:"on going",rate:1000000,alvalible:true,rating:9.0},
        {name:"My hero Acadedmia",status:"on going",rate:10000,alvalible:true,rating:8.9},
        {name:"Tokyo ghoul",status:"finished",rate:10,alvalible:true,rating:7.0},
        {name:"Monster",status:"finished",rate:100,alvalible:true,rating:8.0},
        {name:"Mob Psycho 100",status:"on going",rate:10000000,alvalible:true,rating:9.6},
        {name:"Demon Slayer",status:"on going",rate:10000000000,alvalible:true,rating:9.1},
    ];

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