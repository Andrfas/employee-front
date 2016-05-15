app.controller('AdvertCntrl', ['$scope', '$routeParams', 'AdvertSrvc', 'PopUpSrvc', '$uibModal', '$location', function($scope, $routeParams, AdvertSrvc, PopUpSrvc, $uibModal, $location) {
    $scope.advertId = $routeParams.advertId;
    $scope.advert;

    if (localStorage.getItem('clientType') === 'company') $scope.companyType = true; else $scope.companyType = false;
    console.log($scope.companyType);
    $scope.getAdvertData = function(advertId) {
        var reqObj = {
            advertId: advertId
        }
        AdvertSrvc.getAdvert(reqObj)
            .then(function(res) {
                console.log('advert', res);
                $scope.advert = res.data;
            })
            .catch(function(err){
                return console.error(err);
            })
    }
    $scope.getAdvertData($scope.advertId);

    $scope.submitProposalModal = function(id){
        var submittedProposal = null;
        var instance = $uibModal.open({
            animation: true,
            keyboard:true,
            templateUrl: '../templates/modals/addSubmitProposalModal.html',
            controller: 'SubmitProposalCntrl',
            resolve: {
                prop: function () {
                    return submittedProposal;
                }
            }
        });

        instance.result.then(function (prop) {
            var toSend = {}
            toSend.employeeId = localStorage.getItem('clientId');
            toSend.letter = prop;
            toSend.advertId = id;
            toSend.advertTitle = $scope.advert.title
            toSend.companyName = $scope.advert.companyName
            AdvertSrvc.submitProposal(toSend)
                .then(function(res){
                    if (res.status === 200) PopUpSrvc.success('Proposal Submitted!', 'You successfully apply for this purpose');
                })
        });
    }

    $scope.showAllApplyers = function(){
        $location.path('/applicants');
        AdvertSrvc.advertId = $scope.advertId;
    }
}])

