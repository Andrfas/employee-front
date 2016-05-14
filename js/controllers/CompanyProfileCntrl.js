app.controller('CompanyProfileCntrl', ['$scope', '$routeParams', 'RegCompanySrvc', 'PopUpSrvc', 'AdvertSrvc', function($scope, $routeParams, RegCompanySrvc, PopUpSrvc, AdvertSrvc) {
    $scope.companyId = $routeParams.profileId;
    $scope.profile;
    $scope.adverts;

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

    var advertsReqObj = {
        page: 1,
        count: 10,
        company: $scope.companyId
    }
    AdvertSrvc.getAdverts(advertsReqObj)
        .then(function(res) {
            $scope.adverts = res.data;
        })
        .catch(function(err) {
            return console.error(err);
        })
}])

