app.controller('SubmitProposalCntrl', ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
	$scope.letter = '';

	$scope.save = function(){
        $uibModalInstance.close($scope.letter);
    }

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}])