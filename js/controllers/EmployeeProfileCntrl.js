app.controller('EmployeeProfileCntrl', ['$scope', '$routeParams', 'RegEmployeeSrvc', 'PopUpSrvc', function($scope, $routeParams, RegEmployeeSrvc, PopUpSrvc) {
    $scope.employeeId = $routeParams.profileId;

    RegEmployeeSrvc.getEmployee($scope.employeeId)
        .then(function(res) {
            if(res.success) {
            	console.log(res);
                $scope.profile = res.data;
                if ($scope.profile.availability === true) {
                	$scope.isAvailable = true; 
                	$scope.available = "AVALIABLE"
                } else {
                	$scope.isAvailable = false;
                	$scope.available = "NOT AVAILABLE"
                }
            } else {
                PopUpSrvc.error('Error', res.msg);
            }
        })
        .catch(function(err) {
            PopUpSrvc.error('Error', err);
       	})

    $scope.setAvailability = function(){
    	$scope.profile.availability = true;
    	$scope.isAvailable = true;
    	console.log($scope.profile);
    }
}])

