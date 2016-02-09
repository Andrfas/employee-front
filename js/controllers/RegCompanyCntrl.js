app.controller('RegCompanyCntrl', ['$scope', '$uibModal', 'FileUploader', function($scope, $uibModal, FileUploader) {
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

    var uploader = $scope.uploader = new FileUploader({
        url: 'http://localhost:1337/image',
        method: 'PUT',
        autoUpload: true,
        queueLimit: 1
    });

    uploader.filters.push({
        name: 'imageFilter',
        fn: function(item /*{File|FileLikeObject}*/, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    });

    $scope.page = 1;
    $scope.changePage = function(page) {
        $scope.page = page;
    }
}])
