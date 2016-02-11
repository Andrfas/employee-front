app.controller('RegEmployeeCntrl', ['$scope', '$uibModal', function($scope, $uibModal) {
    $scope.studInfo = {
      name: '',
      lastName: '',
      email: '',
      password: '',
      repeatPass:''
    };
    $scope.checkPasswords = function(){
        return $scope.studInfo.password === $scope.studInfo.repeatPass;
    }
    $scope.stud = 'stud1';
    $scope.changeEmplSelect = function(person, direction){ //direction next or prev

        if (direction === 'next'){
            if ($scope.checkPasswords()) {
                $scope.stud = person;
            }
        }
            else {
            $scope.stud = person;
        }
    }

    $scope.openSelectLanguageWindow = function(){
        var instance = $uibModal.open({
            animation: true,
            backdrop: 'static',
            keyboard:true,
            templateUrl: '../templates/modals/selLanguageModal.html',
            controller: 'SelLanguageModalCntrl'

        })

    }
}])