app.controller('EmployeesCntrl', ['$scope', 'RegEmployeeSrvc', 'StaticDataSrvc', 'SkillsSrvc', function($scope, RegEmployeeSrvc, StaticDataSrvc, SkillsSrvc){

    $scope.employees = [];
    $scope.availability = {
        yes: true,
        no: false
    };
    $scope.selectedCities = [];
    $scope.selectedSkills = [];
    $scope.selectedLanguages = [];
    $scope.isInfiniteDisabled = false;

    $scope.pager = {
        page:1,
        count: 5
    }

    $scope.getEmployees = function() {
        var reqObj = {
            page:$scope.pager.page,
            count:$scope.pager.count,
            availability:$scope.availability,
            selectedCities:$scope.selectedCities,
            selectedSkills:$scope.selectedSkills,
            selectedLanguages:$scope.selectedLanguages
        }
        console.log('reqObj', reqObj);
        RegEmployeeSrvc.getEmployees(reqObj)
            .then(function(res) {
                console.log('employees', res);
                $scope.employees = $scope.employees.concat(res.data);
                $scope.isInfiniteDisabled = false;
            })
    }

    $scope.cities = StaticDataSrvc.cities;
    $scope.citySearchStr = '';
    $scope.selectCity = function($item, $model, $label, $event) {
        if ($scope.selectedCities && $scope.selectedCities.indexOf($item) === -1){
            $scope.selectedCities.push($item);
        }
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
        if ($scope.selectedSkills && $scope.selectedSkills.indexOf($item.name) === -1){
            $scope.selectedSkills.push($item.name);
        }
        $scope.skillSearchStr = '';
    }
    $scope.removeSkill = function($index) {
        $scope.selectedSkills.splice($index, 1);
    }

    $scope.languages = StaticDataSrvc.languages;
    $scope.languageSearchStr = '';
    $scope.selectLanguage = function($item, $model, $label, $event) {
        if ($scope.selectedLanguages && $scope.selectedLanguages.indexOf($item) === -1){
            $scope.selectedLanguages.push($item);
        }
        $scope.languageSearchStr = '';
    }
    $scope.removeLanguage = function($index) {
        $scope.selectedCities.splice($index, 1);
    }

    $scope.showMore = function() {
        $scope.isInfiniteDisabled = true;
        $scope.pager.page++;
        $scope.getEmployees();
    }

    $scope.applyFilter = function() {
        $scope.pager.page = 1;
        $scope.employees = [];
        $scope.getEmployees();
    }

    $scope.getEmployees();

}])