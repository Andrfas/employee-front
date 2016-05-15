app.controller('CompaniesCntrl', ['$scope', 'RegCompanySrvc', 'StaticDataSrvc', 'SkillsSrvc', function($scope, RegCompanySrvc, StaticDataSrvc, SkillsSrvc){

    $scope.companies = [];
    $scope.selectedCities = [];
    $scope.name = [];
    $scope.isInfiniteDisabled = false;

    $scope.pager = {
        page:1,
        count: 5
    }

    $scope.getCompanies = function() {
        var reqObj = {
            page:$scope.pager.page,
            count:$scope.pager.count,
            cities:$scope.selectedCities
            name:$scope.name
        }
        console.log('reqObj', reqObj);
        RegCompanySrvc.getCompanies(reqObj)
            .then(function(res) {
                console.log('employees', res);
                $scope.companies = $scope.companies.concat(res.data);
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

    $scope.showMore = function() {
        $scope.isInfiniteDisabled = true;
        $scope.pager.page++;
        $scope.getCompanies();
    }

    $scope.applyFilter = function() {
        $scope.pager.page = 1;
        $scope.employees = [];
        $scope.getCompanies();
    }

    $scope.getCompanies();

}])