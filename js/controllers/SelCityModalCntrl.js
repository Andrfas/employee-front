app.controller('SelCityModalCntrl', ['$scope', '$uibModalInstance', 'cities', function($scope, $uibModalInstance, cities) {
    $scope.selectedCities = cities.slice();
    $scope.searchStr = '';
    console.log(cities, $scope.cities);

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

    $scope.cities = ['Киев','Днепропетровск','Донецк','Запорожье','Кривой Рог','Львов','Луганск','Мариуполь','Николаев','Одесса','Севастополь','Симферополь','Харьков','Винница','Чернигов', 'Луцк'];
}])
