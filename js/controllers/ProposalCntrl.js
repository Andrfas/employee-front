app.controller('ProposalCntrl', ['$scope', '$uibModal', 'StaticDataSrvc', 'AdvertSrvc', 'SkillsSrvc', function($scope, $uibModal, StaticDataSrvc, AdvertSrvc, SkillsSrvc){

	$scope.selectedCategories = [];
    $scope.selectedCities = [];
    $scope.selectedSkills = [];
    $scope.selectedEmplType = [];
    $scope.selectedPaid = [];
    $scope.selectedNeedPay = [];
    $scope.selectedHoursPerWeek = [];

    $scope.adverts = [];

    $scope.pager = {
        page:1,
        count: 10
    }

    $scope.getAdverts = function() {
        var reqObj = {
            page:$scope.pager.page,
            count:$scope.pager.count,
            subcategory:$scope.selectedCategories,
            cities: $scope.selectedCities,
            skills: $scope.selectedSkills,
            emplType: $scope.selectedEmplType,
            paid: $scope.selectedPaid,
            needPay: $scope.selectedNeedPay,
            hoursPerWeek: $scope.selectedHoursPerWeek
        }
        console.log('reqObj', reqObj);
        AdvertSrvc.getAdverts(reqObj)
            .then(function(res) {
                console.log('adverts', res);
                $scope.adverts = $scope.adverts.concat(res.data);
            })
    }
    $scope.getAdverts();

    $scope.showMore = function() {
        $scope.pager.page++;
        $scope.getAdverts();
    }

    $scope.applyFilter = function() {
        $scope.pager.page = 1;
        $scope.adverts = [];
        $scope.getAdverts();
    }


    $scope.openSelectCategoryModal = function() {
        var instance = $uibModal.open({
            animation: true,
            keyboard:true,
            templateUrl: '../templates/modals/SelectCategoriesModal.html',
            controller: 'SelectCategoriesModalCntrl',
            resolve: {
                selectedCategories: function () {
                    return $scope.selectedCategories;
                }
            }
        });

        instance.result.then(function (categories) {
            if(!categories) return;
            $scope.selectedCategories = categories;
        });
    }

    $scope.cities = StaticDataSrvc.cities;
    $scope.citySearchStr = '';
    $scope.selectCity = function($item, $model, $label, $event) {
        $scope.selectedCities.push($item);
        $scope.citySearchStr = '';
    }
    $scope.removeCity = function($index) {
        $scope.selectedCities.splice($index, 1);
    }



    $scope.skillSearchStr;
    $scope.getSkills = function(searchStr) {
        return SkillsSrvc.getSkills(searchStr)
            .then(function(res) {
                return res.data;
            })
    }
    $scope.selectSkill = function($item, $model, $label, $event) {
        $scope.selectedSkills.push($item.name);
        $scope.skillSearchStr = '';
    }
    $scope.removeSkill = function($index) {
        $scope.selectedSkills.splice($index, 1);
    }



    $scope.tmpEmplType = {};
    $scope.emplTypeChanged = function(emplType) {
        var index = $scope.selectedEmplType.indexOf(emplType);
        if(index === -1) {
            $scope.selectedEmplType.push(emplType);
        } else {
            $scope.selectedEmplType.splice(index, 1);
        }
    }


    $scope.tmpPaid = {};
    $scope.paidChanged = function(paid) {
        var index = $scope.selectedPaid.indexOf(paid);
        if(index === -1) {
            $scope.selectedPaid.push(paid);
        } else {
            $scope.selectedPaid.splice(index, 1);
        }
    }

    $scope.tmpNeedPay = {};
    $scope.needPayChanged = function(paid) {
        var index = $scope.selectedNeedPay.indexOf(paid);
        if(index === -1) {
            $scope.selectedNeedPay.push(paid);
        } else {
            $scope.selectedNeedPay.splice(index, 1);
        }
    }

    $scope.tmpHoursPerWeek = {};
    $scope.hoursPerWeekChanged = function(paid) {
        var index = $scope.selectedHoursPerWeek.indexOf(paid);
        if(index === -1) {
            $scope.selectedHoursPerWeek.push(paid);
        } else {
            $scope.selectedHoursPerWeek.splice(index, 1);
        }
    }


}])