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
        },

        getCompany : function(id) {
            var url = '/company/'+id;
            var call = $q.defer();
            ReqHandlingSrvc.get(url)
                .then(function(res) {
                    call.resolve(res);
                })
                .catch(function(err) {
                    call.reject(err);
                })
            return call.promise;
        }
        
    }
}]);