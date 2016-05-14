app.controller('AdvertCntrl', ['$scope', '$routeParams', 'AdvertSrvc', function($scope, $routeParams, AdvertSrvc) {
    $scope.advertId = $routeParams.advertId;
    $scope.advert;

    $scope.getAdvertData = function() {
        var reqObj = {
            advertId: $scope.advertId
        }
        AdvertSrvc.getAdvert(reqObj)
            .then(function(res) {
                console.log('advert');
            })
            .catch(function(err){
                return console.error(err);
            })
    }
}])

