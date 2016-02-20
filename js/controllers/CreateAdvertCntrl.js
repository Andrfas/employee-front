app.controller('CreateAdvertCntrl',['$scope', 'SkillsSrvc', 'PopUpSrvc', 'AdvertSrvc', function($scope, SkillsSrvc, PopUpSrvc, AdvertSrvc){
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
                    console.log('CreateAdvertSuccess', res);
                } else {
                    PopUpSrvc.error('Creating advert failed', res.msg);
                }
            })
            .catch(function(err) {
                PopUpSrvc.error('Creating advert failed', err);
            })
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
    $scope.cities = ['Киев','Днепропетровск','Донецк','Запорожье','Кривой Рог','Львов','Луганск','Мариуполь','Николаев','Одесса','Севастополь','Симферополь','Харьков','Винница','Чернигов', 'Луцк'];



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
