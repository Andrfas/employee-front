app.controller('AddExperienceModalCntrl', ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
    $scope.experience = {
    	title: '',
    	yearsFrom: '',
    	yearsTo: '',
    	degree: ''
    }

    $scope.save = function(){
        $uibModalInstance.close($scope.experience);
    }

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.datepickerConf = {
        mode: 'year',
        opened: false,
        options:{
            minDate: new Date(1960, 1, 1),
            maxDate: new Date(2003, 1, 1),
            initDate: new Date(1993, 1, 1),
            showWeeks: false,
        },
        open: function(){
            this.opened = true;
        }
    }
    $scope.datepickerConf2 = {
        mode: 'year',
        opened: false,
        options:{
            minDate: new Date(1960, 1, 1),
            maxDate: new Date(2003, 1, 1),
            initDate: new Date(1993, 1, 1),
            showWeeks: false
        },
        open: function(){
            this.opened = true;
        }
    }
}])

