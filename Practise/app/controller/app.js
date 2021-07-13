var myapp=angular.module('myapp',[]);

myapp.controller('myappController',function($scope){

    $scope.message="This message is from controller";
    $scope.array=['Kakashi','Gojo','Sukuna'];
    
});