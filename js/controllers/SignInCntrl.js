app.controller('SignInCntrl', ['$scope', '$uibModalInstance', 'AuthorizationSrvc', 'PopUpSrvc', 'FacebookLoginSrvc', function($scope, $uibModalInstance, AuthorizationSrvc, PopUpSrvc, FacebookLoginSrvc) {
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

    $scope.signInViaFb = function() {
        FacebookLoginSrvc.signIn()
            .then(function(res) {
                AuthorizationSrvc.signInViaFb(res.authResponse.userID, res.authResponse.accessToken)
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
            })
                
    }
}])
