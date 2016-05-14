app.controller('EmployeeProfileCntrl', ['$scope', '$routeParams', 'RegEmployeeSrvc', 'PopUpSrvc', function($scope, $routeParams, RegEmployeeSrvc, PopUpSrvc) {
    $scope.employeeId = $routeParams.profileId;
    $scope.isAvailable = true;

    RegEmployeeSrvc.getEmployee($scope.employeeId)
        .then(function(res) {
            if(res.success) {
            	console.log(res);
                $scope.profile = res.data;
                if ($scope.profile.availability === null){
                	$scope.isAvailable = true;
                } else if ($scope.profile.availability === true) {
                	$scope.isAvailable = false;
                	$scope.setAvailable2 = true; 
                	$scope.available = "AVALIABLE"
                } else {
                	$scope.isAvailable = false;
                	$scope.setAvailable2 = true;
                	$scope.available = "NOT AVAILABLE"
                }
            } else {
                PopUpSrvc.error('Error', res.msg);
            }
        })
        .catch(function(err) {
            PopUpSrvc.error('Error', err);
       	})

    $scope.setAvailability = function(choice){
    	if (choice === 'yes') {
    		$scope.profile.availability = true;
    		$scope.setAvailable1 = false;
    		$scope.setAvailable2 = true;
    		$scope.available = "AVAILABLE";
    		$scope.setProfileAvailability($scope.employeeId, $scope.profile);
    	} else if (choice === 'no') {
    		$scope.profile.availability = false;
    		$scope.setAvailable1 = false;
    		$scope.setAvailable2 = true;
    		$scope.available = "NOT AVAILABLE";
    		$scope.setProfileAvailability($scope.employeeId, $scope.profile);
    	} else {
    		$scope.isAvailable = false;
    		$scope.setAvailable1 = true;
    	}
    }
    
    $scope.setProfileAvailability = function(id, profile){
    	RegEmployeeSrvc.updateEmployee(id, profile)
    		.then(function(res){
    			RegEmployeeSrvc.getEmployee($scope.employeeId)
    				.then(function(res) {
            			console.log(res);
    			})
    		})
    }	

    $scope.changeAvailability = function(){
    	$scope.setAvailable1 = true;
    	$scope.setAvailable2 = false;
    }
}])

