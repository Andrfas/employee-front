app.controller('SelectCategoryModalCntrl', ['$scope', '$uibModalInstance', 'category', 'StaticDataSrvc', function($scope, $uibModalInstance, category, StaticDataSrvc) {

    $scope.categories = StaticDataSrvc.categories;
    $scope.selectedCat = category;

    $scope.save = function(){
        $uibModalInstance.close($scope.selectedCat);
    }

    var dereg = $scope.$on('modal.closing', function(e) {
        e.preventDefault();
        dereg();
        $scope.save();
    })

}])



