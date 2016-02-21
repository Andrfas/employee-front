app.controller('RegisterMainCntrl', ['$scope', '$rootScope', function($scope, $rootScope) {
	$scope.choose = ['employee', 'company'];

    $scope.clientType;
  	$scope.changeClientSelect = function(person){
  		$scope.clientType = person;
  	}


}])