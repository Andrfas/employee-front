app.controller('AddPortfolioModalCntrl', ['$scope', '$uibModalInstance', 'FileUploader', 'ConfigSrvc', function($scope, $uibModalInstance, FileUploader, ConfigSrvc) {
    $scope.portfolio = {
    	title: '',
    	description: '',
        image: null
    }

    $scope.save = function(){
    	console.log($scope.uploader);
        $uibModalInstance.close($scope.portfolio);
    }

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    var uploader = $scope.uploader = new FileUploader({
        url: ConfigSrvc.API_URL+'/image',
        method: 'PUT',
        autoUpload: true,
        queueLimit: 1
    });

    uploader.onSuccessItem = function(item, response, status, headers) {
        $scope.portfolio.image = response.file[0].fd;
        console.log($scope.portfolio.image);
    }

    uploader.filters.push({
        name: 'imageFilter',
        fn: function(item /*{File|FileLikeObject}*/, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    });
}])


