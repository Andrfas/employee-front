app.controller('AddSkillModalCntrl', ['$scope', 'SkillsSrvc', '$uibModalInstance', function($scope, SkillsSrvc, $uibModalInstance) {
    $scope.skill = {
        name: '',
        description: '',
        isNew: ''
    }


    $scope.getSkills = function(searchStr) {
        console.log(SkillsSrvc);
        return SkillsSrvc.getSkills(searchStr)
            .then(function(res) {
                return res.data;
            })
    }
    $scope.selectSkill = function($item, isNew) {
        if($item === '' || typeof $item === 'undefined') return;
        if(typeof isNew === 'undefined') {
            isNew = false;
        }
        $scope.skill.name = $item;
        $scope.skill.isNew = isNew;
    }
    $scope.save = function(){
        if ($scope.skill.isNew === '')
            $scope.skill.isNew = true;
        $uibModalInstance.close($scope.skill);
    }

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}])

