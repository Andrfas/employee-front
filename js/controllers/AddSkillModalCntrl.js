app.controller('AddSkillModalCntrl', ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
    $scope.save = function(){
        $uibModalInstance.close();
    }

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}])

