app.controller('SelectCategoriesModalCntrl', ['$scope', '$uibModalInstance', 'selectedCategories', 'StaticDataSrvc', function($scope, $uibModalInstance, selectedCategories, StaticDataSrvc) {

    $scope.tmpCategories = {};

    $scope.categories = StaticDataSrvc.categories;
    $scope.selectedCat = selectedCategories;
    for (var i = 0; i < $scope.selectedCat.length; i++) {
        $scope.tmpCategories[$scope.selectedCat[i]] = true;
    };

    $scope.categChanged = function(categ) {
        var index = $scope.selectedCat.indexOf(categ);
        if(index === -1) {
            $scope.selectedCat.push(categ);
        } else {
            $scope.selectedCat.splice(index, 1);
        }
    }

    $scope.save = function(){
        // console.log(1);
        $uibModalInstance.close($scope.selectedCat);
    }

    var dereg = $scope.$on('modal.closing', function(e) {
        // console.log(2);
        e.preventDefault();
        dereg();
        $scope.save();
    })

}])



