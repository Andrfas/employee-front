app.controller('showApplicatnsCntrl', ['$scope', 'AdvertSrvc', '$location', function($scope, AdvertSrvc, $location){
	$scope.applicants = [];
	AdvertSrvc.getApplicants(AdvertSrvc.advertId)
		.then(function(res){
			angular.forEach(res, function(r){
				$scope.applicants.push({id: r._id, firstName: r.firstName, lastName: r.lastName, coverLetter: r.letter})
			})
		})

	$scope.goToEmployee = function(id){
		$location.path('/employee/' + id)
	}
}])