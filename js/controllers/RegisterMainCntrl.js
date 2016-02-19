app.controller('RegisterMainCntrl', ['$scope', '$rootScope', function($scope, $rootScope) {
	$scope.choose = ['employee', 'company'];
	$rootScope.languages = ['Ukrainian', 'Russian', 'English', 'German', 'French'];
    $scope.clientType;
  	$scope.changeClientSelect = function(person){
  		$scope.clientType = person;
  	}

	$rootScope.removeLanguage = function(index){
		$scope.languages.splice(index, 1);
	}
}])