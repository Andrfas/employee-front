app.controller('CreateAdvertCntrl',['$scope', 'SkillsSrvc', 'PopUpSrvc', 'AdvertSrvc', '$uibModal', 'StaticDataSrvc', '$location', function($scope, SkillsSrvc, PopUpSrvc, AdvertSrvc, $uibModal, StaticDataSrvc, $location){
    $scope.advertData = {
        company: localStorage.getItem('clientId'),
        category:null,
        subcategory:null,
        title:null,
        description:null,
        skills:[],
        cities:[],
        hoursPerWeek: null,
        paid:null,
        needPay:null,
        emplType:null,
        dateSelEnd:null
    }


    $scope.createAdvert = function() {
        console.log('advert', $scope.advertData);
        AdvertSrvc.createAdvert($scope.advertData)
            .then(function(res) {
                if(res.success) {
                    console.log('CreateAdvertSuccess!', res);
                    $location.path('/advert/'+res.advertId);
                } else {
                    PopUpSrvc.error('Creating advert failed', res.msg);
                }
            })
            .catch(function(err) {
                PopUpSrvc.error('Creating advert failed', err);
            })
    }

    var selectedCategory = null;
    $scope.openSelectCategoryModal = function() {
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


    $scope.searchCityStr;
    $scope.advertData.cities = [];
    $scope.selectCity = function($item, $model, $label, $event) {
        $scope.advertData.cities.push($item);
        $scope.searchCityStr = '';
    }
    $scope.removeCity = function($index) {
        $scope.advertData.cities.splice($index, 1);
    }
    $scope.cities = StaticDataSrvc.cities;

    $scope.searchSkillStr;
    $scope.advertData.skills = [];
    $scope.getSkills = function(searchStr) {
        return SkillsSrvc.getSkills(searchStr)
            .then(function(res) {
                return res.data;
            })
    }
    $scope.selectSkill = function($item, isNew) {
        if($item === '' || typeof $item === 'undefined') return;
        if(typeof isNew === 'undefined') {
            isNew = false;
        }
        $scope.advertData.skills.push({name: $item, isNew: isNew});
        $scope.searchSkillStr = '';
    }
    $scope.removeSkill = function($index) {
        $scope.advertData.skills.splice($index, 1);
    }
    $scope.skills = ['JQuery', 'JavaScript', 'AngularJS'];

    $scope.isDatepickerOpen = false;
    $scope.openDatepicker = function() {
        $scope.isDatepickerOpen = true;
    }
}])
