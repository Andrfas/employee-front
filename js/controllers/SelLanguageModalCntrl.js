app.controller('SelLanguageModalCntrl', ['$scope', '$rootScope', '$uibModalInstance', function($scope, $rootScope, $uibModalInstance) {
  $scope.errMessage=''; //message, if somehing isn't filled


    $scope.language = {
      name: '',
      level: ''
    }
    $scope.searchStr='';
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

    $scope.selectedLanguage;
    $scope.levelOfKnowledge;
    $scope.selectLanguage = function() {
        $rootScope.removeLanguage($rootScope.languages.indexOf($scope.selectedLanguage));
        $scope.searchStr = '';
    }

    $scope.save = function(){
      $scope.language.name = $scope.selectedLanguage;
      //if all fields are filled - close, else show message
      if ($scope.language.name && $scope.language.level) {
        $uibModalInstance.close($scope.language);

      } else {
        if(!$scope.language.name){
          $scope.errMessage = 'Select language';
        } else {
          $scope.errMessage = 'Select your level of knowledge';
        }
      }
    }

    $scope.cancel = function () {
        $rootScope.languages.push($scope.selectedLanguage);
        $uibModalInstance.dismiss('cancel');
    };


}])
