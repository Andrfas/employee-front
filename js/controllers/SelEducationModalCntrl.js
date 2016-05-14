app.controller('SelEducationModalCntrl', ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
    $scope.yearsFrom = new Date();
    $scope.yearsTo = new Date();

    $scope.education = {
        uni: '',
        yearsFrom: '',
        yearsTo: '',
        faculty: '',
        degree: ''
    }

    $scope.mode = 'year'; //mode of datepicker

    $scope.pack = function(){ //creates education object
        $scope.education.yearsFrom = $scope.yearsFrom.getFullYear();
        $scope.education.yearsTo = $scope.yearsTo.getFullYear();
    }
    $scope.save = function(){
        $scope.pack();
        //console.log($scope.education);
        $uibModalInstance.close($scope.education);
    }

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.openStart = function(){
        $scope.startPopup.opened = true;
    }
    $scope.openFinish = function(){
        $scope.finishPopup.opened = true;
    }

    $scope.finishDisabled = function(date, mode){
        return mode === $scope.mode && date.getFullYear()<$scope.yearsFrom.getFullYear();
    }
    $scope.startDisabled = function(date, mode){
        return mode === $scope.mode && date.getFullYear()>new Date().getFullYear();
    }

    $scope.startPopup = {
        opened: false
    }
    $scope.finishPopup = {
        opened: false
    }

}])
