app.controller('ShowApplicatnsCntrl', ['$scope', 'AdvertSrvc', '$location', '$routeParams', function($scope, AdvertSrvc, $location, $routeParams){
	$scope.applicants = [];
	$scope.advertId = $routeParams.advertId;
	AdvertSrvc.getApplicants($scope.advertId)
		.then(function(res){
			angular.forEach(res, function(r){
				$scope.applicants.push({id: r._id, firstName: r.firstName, lastName: r.lastName, coverLetter: r.letter})
			})
		})

	$scope.goToEmployee = function(id){
		$location.path('/employee/' + id)
	}

	$scope.setApplicationStatus = function(applicationId, status) {
		AdvertSrvc.setApplicationStatus()
	}
}])