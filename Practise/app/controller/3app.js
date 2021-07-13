var myapp=angular.module('myapp',[]);

myapp.controller('mycontroller',['$scope',function($scope){
    $scope.message="This message is from controller";
    $scope.games=[
        {"name":"Clash Royale","rate":500,"status":true},
        {"name":"Clash of clans","rate":400,"status":false},
        {"name":"Call of duty","rate":600,"status":true},
        {"name":"Pubg","rate":200,"status":false},
        {"name":"Fruit Ninja","rate":100,"status":false},
        {"name":"Angry Birds","rate":50,"status":true},
    ];
}]);