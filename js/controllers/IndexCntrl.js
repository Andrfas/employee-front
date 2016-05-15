app.controller('IndexCntrl', ['$scope', 'FileUploader', 'AuthorizationSrvc', function($scope,FileUploader, AuthorizationSrvc) {
    $scope.$watch(function(){
        return AuthorizationSrvc.isAuthorized;
    }, function(newVal) {
        $scope.isLoggedIn = newVal;
    })

    
}])