app.controller('SelEducationModalCntrl', ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
    $scope.startYear = new Date();
    $scope.finishYear = new Date();

    $scope.education = {
        institution: '',
        startYear: '',
        finishYear: '',
        faculty: '',
        degree: ''
    }

    $scope.mode = 'year'; //mode of datepicker

    $scope.pack = function(){ //creates education object
        $scope.education.startYear = $scope.startYear.getFullYear();
        $scope.education.finishYear = $scope.finishYear.getFullYear();
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
        return mode === $scope.mode && date.getFullYear()<$scope.startYear.getFullYear();
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
