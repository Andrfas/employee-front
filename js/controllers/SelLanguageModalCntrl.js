app.controller('SelLanguageModalCntrl', ['$scope', '$rootScope', '$uibModalInstance', 'PopUpSrvc', function($scope, $rootScope, $uibModalInstance, PopUpSrvc) {
  $scope.errMessage='';     //message, if something isn't filled

    $scope.language = {     //last selected
      name: '',
      level: ''
    }
    $scope.searchStr='';

    $scope.selectedLanguages = [];
    $scope.selectedLanguage;  //chosen from directive
    $scope.levelOfKnowledge;

    //methods
    $scope.getLanguages = function(name) {
        name = name.toLowerCase();
        var res = [];
        $scope.languages.forEach(function(language) {
            if (language.toLowerCase().indexOf(name) !== -1) {
                res.push(language);
            }
        })
        return res;
    }

    $scope.add = function(){
        $scope.validate();
        if (!$scope.errMessage) {
            var language = {
                name: $scope.language.name,
                level: $scope.language.level
            }
            $scope.selectedLanguages.push(language);
            $scope.clearModal();
            $rootScope.removeLanguage($rootScope.languages.indexOf($scope.selectedLanguage)); //delete from baseArr

        } else {
            PopUpSrvc.error('Error', $scope.errMessage);
        }
    }
    $scope.selectLanguage = function() {
        $scope.language.name = $scope.selectedLanguage;

    }



    $scope.clearModal = function(){
        $scope.language.name = '';
        $scope.language.level = '';
        $scope.searchStr = '';
        //uncheck radiobuttons
        var radioButtons = document.getElementsByName("optradio"),
            i = 0;
        for (i=0; i<radioButtons.length; i++){
            radioButtons[i].checked = false;
        }
    }
    $scope.validate = function(){
        if ($scope.language.name && $scope.language.level){
            $scope.errMessage = '';

        } else {
            if (!$scope.language.name) {
                $scope.errMessage = 'Select language';
            } else {
                $scope.errMessage = 'Select your level of knowledge';
            }
        }
    }
    $scope.isLanguageEmpty = function(){
        if (!$scope.language.name && !$scope.language.level)
            return true
        else return false
    }
    $scope.save = function(){
        //if all fields are filled - close, else show message
        $scope.validate();
        if (!$scope.errMessage || $scope.isLanguageEmpty()) {
            if(!$scope.isLanguageEmpty()) {
                $scope.selectedLanguages.push($scope.language);
            }
            $rootScope.removeLanguage($rootScope.languages.indexOf($scope.selectedLanguage)); //delete from baseArr
            $uibModalInstance.close($scope.selectedLanguages);

        } else {
            PopUpSrvc.error('Error', $scope.errMessage);
        }
    }

    $scope.cancel = function () {
        for (var i = 0; i < $scope.selectedLanguages.length; i++) {
            $rootScope.languages.push($scope.selectedLanguages[i].name);
        }
        $uibModalInstance.dismiss('cancel');
    };


}])
