app.controller('EmployeesCntrl', ['$scope', 'RegEmployeeSrvc', function($scope, RegEmployeeSrvc){

    $scope.employees = [];
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


    $scope.showMore = function() {
        console.log('asdakjsdhkajsdh')
        $scope.isInfiniteDisabled = true;
        $scope.pager.page++;
        $scope.getEmployees();
    }

    $scope.getEmployees();

}])