app.controller('CompanyProfileCntrl', ['$scope', '$routeParams', 'RegCompanySrvc', 'PopUpSrvc', function($scope, $routeParams, RegCompanySrvc, PopUpSrvc) {
    $scope.companyId = $routeParams.profileId;
    $scope.profile;

    RegCompanySrvc.getCompany($scope.companyId)
        .then(function(res) {
            if(res.success) {
                console.log(res.data)
                $scope.profile = res.data;
                $scope.profile.cities = $scope.profile.cities.join('-');
            } else {
                PopUpSrvc.error('Error', res.msg);
            }
        })
        .catch(function(err) {
            PopUpSrvc.error('Error', err);
        })
}])

