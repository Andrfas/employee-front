app.controller('RegEmployeeCntrl', ['$scope', function($scope) {
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
            else{
                document.getElementById("errorField").innerHTML = "Different passwords"
            }
        }
            else {
            $scope.stud = person;
        }
    }
}])