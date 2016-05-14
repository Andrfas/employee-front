app.controller('HeaderCntrl', ['$scope', '$uibModal', 'AuthorizationSrvc', function($scope, $uibModal, AuthorizationSrvc) {
    console.log(AuthorizationSrvc)
    $scope.isLoggedIn = false;
    $scope.$watch(function(){
        return AuthorizationSrvc.isAuthorized;
    }, function(newVal) {
        $scope.isLoggedIn = newVal;
    })


    $scope.openSignInModal = function() {
        var instance = $uibModal.open({
            animation: true,
            keyboard: true,
            templateUrl: 'signInModal.html',
            controller: 'SignInCntrl',
            size: 'md'
        });
    }

    //ToDo
    $scope.signout = function() {
        AuthorizationSrvc.signOut()
            .then(function(res) {})
            .catch(function(err) {
                
            });
    }

    $scope.getProfileLink = function() {
        if(!AuthorizationSrvc.isAuthorized) {
            return null;
        }
        var link = '/#/';
        var clientType = localStorage.getItem('clientType');
        var clientId = localStorage.getItem('clientId');

        if(clientType === 'company') {
            link += 'company/'+clientId;
        } else if(clientType === 'employee') {
            link += 'employee/'+clientId;
        }
        return link;
    }
}])
