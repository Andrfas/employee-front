app.controller('RegCompanyCntrl', ['$scope', '$uibModal', function($scope, $uibModal) {
    $scope.cities = [];


    $scope.openSelectCityWindow = function() {
        var instance = $uibModal.open({
            animation: true,
            backdrop: 'static',
            keyboard:true,
            templateUrl: 'selCityModal.html',
            controller: 'SelCityModalCntrl',
            resolve: {
                cities: function () {
                    return $scope.cities;
                }
            }
        });

        instance.result.then(function (cities) {
            $scope.cities = cities.slice();
        }, function () {//dismiss
        });
    }

    $scope.removeCity = function(index) {
        $scope.cities.splice(index, 1);
    }
    // $scope.openSelectCityWindow();

    $scope.page = 1;
    $scope.changePage = function(page) {
        $scope.page = page;
    }
}])
