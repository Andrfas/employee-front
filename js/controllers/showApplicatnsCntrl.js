app.controller('ShowApplicatnsCntrl', ['$scope', 'AdvertSrvc', '$location', '$routeParams', function($scope, AdvertSrvc, $location, $routeParams){
	$scope.applicants;
	$scope.advertId = $routeParams.advertId;
	AdvertSrvc.getApplicants($scope.advertId, null)
		.then(function(res){
			$scope.applicants = res;
		})

	$scope.goToEmployee = function(id){
		$location.path('/employee/' + id)
	}

	$scope.setApplicationStatus = function(applicationId, status, index) {
		console.log('data', applicationId);
		AdvertSrvc.setApplicationStatus(applicationId, status)
			.then(function(res) {
				console.log('applicationDecition', res);
				$scope.applicants.splice(index, 1);
			})
	}
}])