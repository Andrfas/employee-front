app.controller('SignInCntrl', ['$scope', '$uibModalInstance', 'AuthorizationSrvc', function($scope, $uibModalInstance, AuthorizationSrvc) {
    $scope.mail = '';
    $scope.password = '';

    $scope.signIn = function() {
        AuthorizationSrvc.signIn($scope.mail, $scope.password)
            .then(function(res) {
                if(res.success) {
                    $uibModalInstance.close();
                } else {
                    console.log(res)
                }
            })
            .catch(function(err) {
                console.log(err);
            })
    }
}])
