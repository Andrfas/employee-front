app.controller('CompanyProfileCntrl', ['$scope', '$routeParams', 'RegCompanySrvc', 'PopUpSrvc', 'AdvertSrvc', '$uibModal', function($scope, $routeParams, RegCompanySrvc, PopUpSrvc, AdvertSrvc, $uibModal) {
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

    $scope.openSelectCategoryModal = function() {
        console.log('aaaaaaaaaaaaa');
        var instance = $uibModal.open({
            animation: true,
            keyboard:true,
            templateUrl: '../templates/modals/SelectCategoryModal.html',
            controller: 'SelectCategoryModalCntrl',
            resolve: {
                category: function () {
                    return selectedCategory;
                }
            }
        });

        instance.result.then(function (category) {
            if(!category) return;
            selectedCategory = category;
            $scope.advertData.category = category.categ;
            $scope.advertData.subcategory = category.subCateg;
        });
    }
}])

