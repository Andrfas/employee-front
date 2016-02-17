app.controller('RegEmployeeCntrl', ['$scope', '$uibModal', 'RegEmployeeSrvc', function($scope, $uibModal, RegEmployeeSrvc) {
    $scope.studInfo = {
        name: '',
        lastName: '',
        email: '',
        password: '',
        repeatPass: ''
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
                console.log('createEmployee', res)
            })
            .catch(function(err) {
                console.error('createEmployee', err)
            })
    }

    $scope.page = 1;
    $scope.changePage = function(page) {
        $scope.page = page;            
    }

        //opening modals
    $scope.openSelectLanguageWindow = function() {
        var instance = $uibModal.open({
            animation: true,
            backdrop: 'static',
            keyboard: true,
            templateUrl: '../templates/modals/selLanguageModal.html',
            controller: 'SelLanguageModalCntrl'

        })
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
    }

    $scope.openAddExperienceWindow = function() {
        var instance = $uibModal.open({
            animation: true,
            backdrop: 'static',
            keyboard: true,
            templateUrl: '../templates/modals/addExperienceModal.html',
            controller: 'AddExperienceModalCntrl'

        })
    }

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
