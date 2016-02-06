app.controller('SelCityModalCntrl', ['$scope', function($scope) {
    $scope.selectedCities = [];
    $scope.getCities = function() {
        return ['Киев', 'Харьков', 'Луцк'];
    }

    $scope.selectedCity;
    $scope.selectCity = function() {
        $scope.selectedCities.push($scope.selectedCity);
    }
}])