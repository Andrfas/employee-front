app.controller('SelCityModalCntrl', ['$scope', '$uibModalInstance', 'cities', function($scope, $uibModalInstance, cities) {
    $scope.selectedCities = cities.slice();
    $scope.searchStr = '';
    console.log(cities + $scope.cities);
    $scope.getCities = function(name) {
        name = name.toLowerCase();
        var res = [];
        cities.forEach(function(city) {
            if (city.toLowerCase().indexOf(name) !== -1) {
                res.push(city);
            }
        })
        return res;
    }

    $scope.selectedCity;
    $scope.selectCity = function() {
        $scope.selectedCities.push($scope.selectedCity);
        $scope.searchStr = '';
    }

    $scope.ok = function () {
        $uibModalInstance.close($scope.selectedCities);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    var cities = ['Киев','Днепропетровск','Донецк','Запорожье','Кривой Рог','Львов','Луганск','Мариуполь','Николаев','Одесса','Севастополь','Симферополь','Харьков','Винница','Чернигов', 'Луцк'];
}])
