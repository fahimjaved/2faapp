var app = angular.module("myApp", ["ngRoute"]);

app.controller('myCtrl', function($scope,$location) {
    $scope.showMe = false;
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
	
	$scope.load_next = function() {
        $scope.showMe = false;
		$scope.inputName = $scope.name;
		$location.path('/login'); 
    }
	$scope.close_nxt=function(){
		$scope.showMe = false;
	}
	
});
	
app.config(function($routeProvider) {	
    $routeProvider
    .when("/", {
        templateUrl : "views/main.html",
    })
    .when("/login", {
        templateUrl : "views/login.html"
    });
    
});