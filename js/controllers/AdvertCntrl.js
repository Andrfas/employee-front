app.controller('AdvertCntrl', ['$scope', '$routeParams', 'AdvertSrvc', function($scope, $routeParams, AdvertSrvc) {
    $scope.advertId = $routeParams.advertId;
    $scope.advert;

    $scope.getAdvertData = function(advertId) {
        var reqObj = {
            advertId: advertId
        }
        AdvertSrvc.getAdvert(reqObj)
            .then(function(res) {
                console.log('advert', res);
                $scope.advert = res.data;
            })
            .catch(function(err){
                return console.error(err);
            })
    }
    $scope.getAdvertData($scope.advertId);
}])

