app.controller('RegEmployeeCntrl', ['$scope', '$uibModal', 'StaticDataSrvc', 'RegEmployeeSrvc', 'PopUpSrvc', function($scope, $uibModal, StaticDataSrvc, RegEmployeeSrvc, PopUpSrvc) {
    $scope.cities = StaticDataSrvc.cities;
    $scope.studInfo = {
        name: '',
        lastName: '',
        email: '',
        password: '',
        repeatPass:'',
        birthDate: null,
        currentCity:'',
        languagesArr:[],
        educationsArr: [],
        skillsArr: []

    };

    $scope.$watchCollection('studInfo.languagesArr', function (items) {
        $scope.regStudPage2.$setValidity('languages', $scope.studInfo.languagesArr.length > 0);
    });

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
        console.log($scope.studInfo);
    }
    $scope.removeLanguage = function(index){
        $scope.studInfo.languagesArr.splice(index,1);
    }

    $scope.removeEducation = function(index){
        $scope.studInfo.educationsArr.splice(index,1);
    }

    $scope.removeSkill = function(index){
        $scope.studInfo.skillsArr.splice(index,1);
    }

    $scope.citySelectConf = {
        noResFound: false,
        noResMessage: 'No results'
    }

    $scope.datepickerConf = {
        mode: 'year',
        opened: false,
        options:{
            minDate: new Date(1960, 1, 1),
            maxDate: new Date(2003, 1, 1),
            initDate: new Date(1993, 1, 1),
            showWeeks: false,
        },
        open: function(){
            this.opened = true;
        }
    }
    //opening modals
    $scope.openSelectLanguageWindow = function(){
        var instance = $uibModal.open({
            animation: true,
            backdrop: 'static',
            keyboard:true,
            templateUrl: '../templates/modals/selLanguageModal.html',
            controller: 'SelLanguageModalCntrl',
            resolve: {
              selectedLanguages: function(){
                return $scope.studInfo.languagesArr;
              }
            }

        });
    }

    $scope.openSelectEducationWindow = function() {
        var instance = $uibModal.open({
            animation: true,
            backdrop: 'static',
            keyboard: true,
            templateUrl: '../templates/modals/addEducationModal.html',
            controller: 'SelEducationModalCntrl'
        });
        instance.result.then(function (education){
            $scope.studInfo.educationsArr.push(education);
        })
    }
    $scope.openAddSkillWindow = function() {
        var instance = $uibModal.open({
            animation: true,
            backdrop: 'static',
            keyboard: true,
            templateUrl: '../templates/modals/addSkillModal.html',
            controller: 'AddSkillModalCntrl'

        });
        instance.result.then(function(skill){
            $scope.studInfo.skillsArr.push(skill);
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
