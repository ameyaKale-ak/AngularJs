var myapp =angular.module('myapp',[]);

myapp.controller('myappController',['$scope',function($scope){
    $scope.message="This is an example of filter";
    $scope.favCharacters=[
        {"Name":"Kakashi Hatake",
         "From" :"Naruto",
         "rate" :1000000000
        },
        {"Name":"Eren Yeager",
         "From" :"Attack on Titans",
         "rate" :100000
         },
        {"Name":"Togta Mirio",
         "From" :"My Hero Academia",
         "rate" :1000000
         },
        {"Name":"Saturo Gojo",
         "From" :"JJK",
         "rate" :10000000
         },
        {"Name":"Zenitsu",
         "From" :"Demon Slayer",
         "rate" :1000
         }
    ];
    
}]);