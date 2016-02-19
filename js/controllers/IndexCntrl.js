app.controller('IndexCntrl', ['$scope', 'FileUploader', 'PopUpSrvc', function($scope,FileUploader, PopUpSrvc) {
    $scope.selectedCity;
    $scope.cities = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    $scope.cities = [
        {city:'Alabama', name:"1"}, 
        {city:'Alaska', name:2}, 
        {city:'Arizona', name:3}
    ]



    $scope.selectCity = function($item, $model, $label, $event) {
        console.log('city', $item)
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

    $scope.showPop = function() {
        console.log('pop');
        PopUpSrvc.error("My title", "Some interesting text");
    }

    
}])