app.service('RegCompanySrvc', ['ReqHandlingSrvc', '$q', function(ReqHandlingSrvc, $q) {
    return {
        createCompany : function(data) {
            var url = '/company';
            var call = $q.defer();
            ReqHandlingSrvc.put(url, data)
                .then(function(res) {
                    console.log(res);
                })
                .catch(function(err) {
                    console.error();
                })
            return call.promise;
        }
        
    }
}]);