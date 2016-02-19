app.controller('SignInCntrl', ['$scope', '$uibModalInstance', 'AuthorizationSrvc', 'PopUpSrvc', function($scope, $uibModalInstance, AuthorizationSrvc, PopUpSrvc) {
    $scope.mail = '';
    $scope.password = '';

    $scope.signIn = function() {
        AuthorizationSrvc.signIn($scope.mail, $scope.password)
            .then(function(res) {
                if(res.success) {
                    $uibModalInstance.close();
                    PopUpSrvc.success('Hello', 'You signed in!');
                } else {
                    console.log('SignIn', res)
                    PopUpSrvc.error('SignIn failed', res.msg);
                }
            })
            .catch(function(err) {
                console.log(err);
            })
    }
}])
