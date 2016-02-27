app.controller('SelLanguageModalCntrl', ['$scope', 'StaticDataSrvc', '$uibModalInstance', 'selectedLanguages',
  function($scope, StaticDataSrvc, $uibModalInstance, selectedLanguages) {
      $scope.noResMsg = 'No languages found';
      $scope.noResFound = false;
      $scope.selLanguages = selectedLanguages; //name, level
      $scope.languages = StaticDataSrvc.languages; //all possible
      $scope.availableLanguages = $scope.languages.slice(0);

      $scope.submitted = false;
      $scope.submit = function(bool){
          $scope.submitted = bool;
          return true;
      }

      $scope.language = {
        name : '',
        level : ''
        }
      for (var i = 0; i<$scope.selLanguages.length; i++){
          $scope.availableLanguages.splice($scope.availableLanguages.indexOf($scope.selLanguages[i].name),1);

      }

      $scope.add = function(){
          //console.log($scope.language);
          $scope.availableLanguages.splice($scope.availableLanguages.indexOf($scope.language.name),1);
          var langTemp = angular.copy($scope.language);
          $scope.language = {};
          $scope.selLanguages.push(langTemp);
          $scope.submit(false);
      }

      $scope.cancel = function(){
          $uibModalInstance.dismiss('cancel');
      }
      $scope.save = function(){
          $scope.add();
          $uibModalInstance.close();
      }


}])
