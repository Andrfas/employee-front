app.controller('SelCityModalCntrl', ['$scope', '$uibModalInstance', 'StaticDataSrvc', function($scope, $uibModalInstance, StaticDataSrvc) {
    $scope.selectedCities = [];
    $scope.searchStr = '';
    console.log(StaticDataSrvc.cities, $scope.cities);

    $scope.selectedCity;
    $scope.selectCity = function($item, $model, $label, $event) {
        $scope.selectedCities.push($item);
        $scope.searchStr = '';
    }

    $scope.ok = function () {
        $uibModalInstance.close($scope.selectedCities);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss($scope.selectedCities);
    };

    $scope.cities = StaticDataSrvc.cities
}])
