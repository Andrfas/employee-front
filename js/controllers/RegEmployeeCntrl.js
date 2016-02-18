app.controller('RegEmployeeCntrl', ['$scope', '$uibModal', function($scope, $uibModal) {
    $scope.languages = [];
    $scope.studInfo = {
      name: '',
      lastName: '',
      email: '',
      password: '',
      repeatPass:'',
      languagesArr:[]
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
    $scope.removeLanguage = function(index){
        $scope.languages.splice(index,1);
    }
    //opening modals
    $scope.openSelectLanguageWindow = function(){
        var instance = $uibModal.open({
            animation: true,
            backdrop: 'static',
            keyboard:true,
            templateUrl: '../templates/modals/selLanguageModal.html',
            controller: 'SelLanguageModalCntrl'

        });
        instance.result.then(function (language) {
            $scope.languages.push(language);
            console.log(typeof $scope.languages);
        }, function () {//dismiss
        });
    }

    $scope.openSelectEducationWindow = function(){
        var instance = $uibModal.open({
            animation: true,
            backdrop: 'static',
            keyboard:true,
            templateUrl: '../templates/modals/addEducationModal.html',
            controller: 'SelEducationModalCntrl'

        })
    }
    $scope.openAddSkillWindow = function(){
        var instance = $uibModal.open({
            animation: true,
            backdrop: 'static',
            keyboard:true,
            templateUrl: '../templates/modals/addSkillModal.html',
            controller: 'AddSkillModalCntrl'

        })
    }

    $scope.openAddExperienceWindow = function(){
        var instance = $uibModal.open({
            animation: true,
            backdrop: 'static',
            keyboard:true,
            templateUrl: '../templates/modals/addExperienceModal.html',
            controller: 'AddExperienceModalCntrl'

    })
  }

  $scope.openAddPortfolioWindow = function(){
    var instance = $uibModal.open({
      animation: true,
      backdrop: 'static',
      keyboard:true,
      templateUrl: '../templates/modals/addPortfolioModal.html',
      controller: 'AddPortfolioModalCntrl'

    })
  }

}])
