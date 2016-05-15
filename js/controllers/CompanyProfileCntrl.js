app.controller('CompanyProfileCntrl', ['$scope', '$routeParams', 'RegCompanySrvc', 'PopUpSrvc', 'AdvertSrvc', '$uibModal', function($scope, $routeParams, RegCompanySrvc, PopUpSrvc, AdvertSrvc, $uibModal) {
    $scope.companyId = $routeParams.profileId;
    $scope.profile;
    $scope.adverts;
    $scope.selectedCategories = [];
    $scope.isCompany = false;
    if (localStorage.getItem('clientType') === 'company') {
        $scope.isCompany = true;
    }

    RegCompanySrvc.getCompany($scope.companyId)
        .then(function(res) {
            if(res.success) {
                console.log(res.data)
                $scope.profile = res.data;
                // $scope.profile.cities = $scope.profile.cities.join('-');
            } else {
                PopUpSrvc.error('Error', res.msg);
            }
        })
        .catch(function(err) {
            PopUpSrvc.error('Error', err);
        })

    $scope.advertsReqObj = {
        page: 1,
        count: 10,
        company: $scope.companyId,
        subcategory: []
    }
    $scope.getAdverts = function() {
        AdvertSrvc.getAdverts($scope.advertsReqObj)
            .then(function(res) {
                $scope.adverts = res.data;
            })
            .catch(function(err) {
                return console.error(err);
            })
    }
    $scope.getAdverts();
        
    $scope.openSelectCategoryModal = function() {
        var instance = $uibModal.open({
            animation: true,
            keyboard:true,
            templateUrl: '../templates/modals/SelectCategoriesModal.html',
            controller: 'SelectCategoriesModalCntrl',
            resolve: {
                selectedCategories: function () {
                    return $scope.advertsReqObj.subcategory;
                }
            }
        });

        instance.result.then(function (categories) {
            if(!categories) return;
            $scope.advertsReqObj.subcategory = categories;
            $scope.getAdverts();
        });
    }
}])

