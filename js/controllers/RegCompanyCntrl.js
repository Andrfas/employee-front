app.controller('RegCompanyCntrl', ['$scope', '$uibModal', 'FileUploader', 'RegCompanySrvc', 'ConfigSrvc', '$location', 'PopUpSrvc', function($scope, $uibModal, FileUploader, RegCompanySrvc, ConfigSrvc, $location, PopUpSrvc) {
    $scope.cities = [];


    $scope.openSelectCityWindow = function() {
        var instance = $uibModal.open({
            animation: true,
            backdrop: 'static',
            keyboard:true,
            templateUrl: '../templates/modals/selCityModal.html',
            controller: 'SelCityModalCntrl',
            resolve: {
                cities: function () {
                    return $scope.cities;
                }
            }
        });

        instance.result.then(function (cities) {
            $scope.cities = cities.slice();
        }, function () {//dismiss
        });
    }

    $scope.removeCity = function(index) {
        $scope.cities.splice(index, 1);
    }
    // $scope.openSelectCityWindow();

    // for uploading images
    var uploader = $scope.uploader = new FileUploader({
        url: ConfigSrvc.API_URL+'/image',
        method: 'PUT',
        autoUpload: true,
        queueLimit: 1
    });

    uploader.filters.push({
        name: 'imageFilter',
        fn: function(item /*{File|FileLikeObject}*/, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    });

    $scope.page = 1;
    $scope.changePage = function(page) {
        $scope.page = page;
    }

   $scope.company = {
        name: '',
        website: '',
        email: '',
        password: '',
        passAgain: '',
        cities: [],
        description: '',
    };

    $scope.checkPassword = function(){
        return $scope.company.password === $scope.company.passAgain; 	
    }
    $scope.submit = function(){
        console.log('here')
        console.log($scope.company)
        RegCompanySrvc.createCompany($scope.company)
            .then(function(res) {
                console.log('createCompany', res);
                if(res.status == 200) {
                    PopUpSrvc.success('Registration', 'Activation link has been sent to your email');
                    $location.path('/');
                } else {
                    PopUpSrvc.error('Registration', res.msg);
                }

            })
            .catch(function(err) {
                console.error('createEmployee', err);
                PopUpSrvc.error('Registration', err);
            })
    }
}])
