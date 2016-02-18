app.controller('SelLanguageModalCntrl', ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
  $scope.errMessage=''; //message, if somehing isn't filled

  var languages = ['Украинский', 'Русский', 'Английський', 'Немецкий', 'Французский'];
    $scope.language = {
      name: '',
      level: ''
    }
    $scope.searchStr='';
    $scope.getLanguages = function(name) {
        name = name.toLowerCase();
        var res = [];
        languages.forEach(function(language) {
            if (language.toLowerCase().indexOf(name) !== -1) {
                res.push(language);
            }
        })
        return res;
    }

    $scope.selectedLanguage;
    $scope.levelOfKnowledge;
    $scope.selectLanguage = function() {
        $scope.searchStr = '';
    }

    $scope.save = function(){
      //alert($scope.selectedLanguage + $scope.levelOfKnowledge);

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
        $uibModalInstance.dismiss('cancel');
    };


}])
