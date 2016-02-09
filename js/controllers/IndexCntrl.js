app.controller('IndexCntrl', ['$scope', 'FileUploader', function($scope,FileUploader) {
    $scope.selectedCity;

    $scope.getCities = function(str) {
        // console.log('searchStr', str);
        return ['Kyiv', 'Moscow'];
    }

    $scope.selectCity = function() {
        console.log('city', $scope.selectedCity)
    }

    var uploader = $scope.uploader = new FileUploader({
        url: 'http://localhost:1337/image',
        method: 'PUT',
        autoUpload: true
    });

    uploader.filters.push({
        name: 'imageFilter',
        fn: function(item /*{File|FileLikeObject}*/, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    });

    
}])