app.controller('ProposalCntrl', ['$scope', '$uibModal', function($scope, $uibModal){

	$scope.selectedCategories = [];
    $scope.selectedCities = [];
    $scope.selectedEmplType = [];
    $scope.selectedPaid = [];
    $scope.selectedNeedPay = [];
    $scope.selectedHoursPerWeek = [];


    $scope.openSelectCategoryModal = function() {
        var instance = $uibModal.open({
            animation: true,
            keyboard:true,
            templateUrl: '../templates/modals/SelectCategoriesModal.html',
            controller: 'SelectCategoriesModalCntrl',
            resolve: {
                selectedCategories: function () {
                    return $scope.selectedCategories;
                }
            }
        });

        instance.result.then(function (categories) {
            if(!categories) return;
            $scope.selectedCategories = categories;
        });
    }

}])