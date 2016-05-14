app.controller('EmployeeProfileCntrl', ['$scope', '$routeParams', 'RegEmployeeSrvc', 'PopUpSrvc', '$uibModal', function($scope, $routeParams, RegEmployeeSrvc, PopUpSrvc, $uibModal) {
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
    		$scope.updateProfile($scope.employeeId, $scope.profile);
    	} else if (choice === 'no') {
    		$scope.profile.availability = false;
    		$scope.setAvailable1 = false;
    		$scope.setAvailable2 = true;
    		$scope.available = "NOT AVAILABLE";
    		$scope.updateProfile($scope.employeeId, $scope.profile);
    	} else {
    		$scope.isAvailable = false;
    		$scope.setAvailable1 = true;
    	}
    }
    
    $scope.updateProfile = function(id, profile){
    	RegEmployeeSrvc.updateEmployee(id, profile)
    		.then(function(res){
    			RegEmployeeSrvc.getEmployee($scope.employeeId)
    				.then(function(res) {
            			console.log(res);
    			})
    		})
    		.catch(function(err) {
    			console.log('here');
            	PopUpSrvc.error('Error', err);
       		})
    }	

    $scope.changeAvailability = function(){
    	$scope.setAvailable1 = true;
    	$scope.setAvailable2 = false;
    }
    
    $scope.openAddSkillsModal = function() {
        var selectedSkill = null;
        var instance = $uibModal.open({
            animation: true,
            keyboard:true,
            templateUrl: '../templates/modals/addSkillModal.html',
            controller: 'AddSkillModalCntrl',
            resolve: {
                skills: function () {
                    return selectedSkill;
                }
            }
        });

        instance.result.then(function (skills) {
            $scope.profile.skills.push(skills);
            $scope.updateProfile($scope.employeeId, $scope.profile);
        });
    };

    $scope.openWorkExperienceModal = function(){
    	var selectedExperience = null;
    	var instance = $uibModal.open({
            animation: true,
            keyboard:true,
            templateUrl: '../templates/modals/addExperienceModal.html',
            controller: 'AddExperienceModalCntrl',
            resolve: {
                exp: function () {
                    return selectedExperience;
                }
            }
        });
        instance.result.then(function (exp) {
            $scope.profile.workExperience.push(exp);
            $scope.updateProfile($scope.employeeId, $scope.profile);
        });
    }
}])

