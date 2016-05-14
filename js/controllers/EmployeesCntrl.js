app.controller('EmployeesCntrl', ['$scope', 'RegEmployeeSrvc', 'StaticDataSrvc', function($scope, RegEmployeeSrvc, StaticDataSrvc){

    $scope.employees = [];
    $scope.availability = {
        yes: true,
        no: false
    };
    $scope.selectedCities = [];
    $scope.isInfiniteDisabled = false;

    $scope.pager = {
        page:1,
        count: 5
    }

    $scope.getEmployees = function() {
        var reqObj = {
            page:$scope.pager.page,
            count:$scope.pager.count
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
        $scope.selectedCities.push($item);
        $scope.citySearchStr = '';
    }
    $scope.removeCity = function($index) {
        $scope.selectedCities.splice($index, 1);
    }

    $scope.showMore = function() {
        $scope.isInfiniteDisabled = true;
        $scope.pager.page++;
        $scope.getEmployees();
    }

    $scope.getEmployees();

}])