app.controller('RegEmployeeCntrl', ['$scope', '$uibModal', '$rootScope', 'RegEmployeeSrvc', 'PopUpSrvc', function($scope, $uibModal, $rootScope, RegEmployeeSrvc, PopUpSrvc) {
    $scope.languages = []; //fields name, level
    $scope.studInfo = {
      name: '',
      lastName: '',
      email: '',
      password: '',
      repeatPass:'',
      languagesArr:[]
    };

    $scope.isConfirmPasswordMatch = function() {
        return $scope.studInfo.password === $scope.studInfo.repeatPass;
    }

    $scope.createEmployee = function() {
        var data = {
            firstName: $scope.studInfo.name,
            lastName: $scope.studInfo.lastName,
            email: $scope.studInfo.email,
            password: $scope.studInfo.password
        };
        RegEmployeeSrvc.createEmployee(data)
            .then(function(res) {
                console.log('createEmployee', res);
                if(res.success) {
                    PopUpSrvc.success('Registration', 'Activation link has been sent to your email')
                } else {
                    PopUpSrvc.error('Registration', res.msg);               
                }
            })
            .catch(function(err) {
                console.error('createEmployee', err);
                PopUpSrvc.error('Registration', err); 
            })
    }

    $scope.page = 1;
    $scope.changePage = function(page) {
        $scope.page = page;
    }
    $scope.removeLanguage = function(index){
        $rootScope.languages.push($scope.languages[index].name);
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
        instance.result.then(function (languages) {
            $scope.languages = $scope.languages.concat(languages);
        }, function () {//dismiss
        });
    }

    $scope.openSelectEducationWindow = function() {
        var instance = $uibModal.open({
            animation: true,
            backdrop: 'static',
            keyboard: true,
            templateUrl: '../templates/modals/addEducationModal.html',
            controller: 'SelEducationModalCntrl'

        })
    }
    $scope.openAddSkillWindow = function() {
        var instance = $uibModal.open({
            animation: true,
            backdrop: 'static',
            keyboard: true,
            templateUrl: '../templates/modals/addSkillModal.html',
            controller: 'AddSkillModalCntrl'

        })
    };

    $scope.openAddExperienceWindow = function() {
        var instance = $uibModal.open({
            animation: true,
            backdrop: 'static',
            keyboard: true,
            templateUrl: '../templates/modals/addExperienceModal.html',
            controller: 'AddExperienceModalCntrl'

        })
    };

    $scope.openAddPortfolioWindow = function() {
        var instance = $uibModal.open({
            animation: true,
            backdrop: 'static',
            keyboard: true,
            templateUrl: '../templates/modals/addPortfolioModal.html',
            controller: 'AddPortfolioModalCntrl'

        })
    }

}])
