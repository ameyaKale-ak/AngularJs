var myapp=angular.module('myapp',[]);

myapp.controller('mycontroller',['$scope',function($scope){
    $scope.message="Message from controller";
    $scope.remove=function(x){
        var removedItem=$scope.array.indexOf(x);
        $scope.array.splice(removedItem,1);
    };
    $scope.array=[
        {"name":"Kakashi Hatake","rate":1000000000,"status":true,"belt":"black"},
        {"name":"Naruro Uzumaki","rate":10000000,"status":true,"belt":"orange"},
        {"name":"Eren Yeager","rate":10000,"status":false,"belt":"brown"},
        {"name":"Saturo Gojo","rate":100000000000,"status":true,"belt":"white"},
        {"name":"Togota Mirio","rate":100000000,"status":true,"belt":"blue"},
        {"name":"Minato Namikaze","rate":1000000,"status":true,"belt":"yellow"},
        {"name":"Itadori Yuji","rate":100000,"status":true,"belt":"red"}
    ];
}]);