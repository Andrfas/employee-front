app.service('RegEmployeeSrvc', ['ReqHandlingSrvc', '$q', function(ReqHandlingSrvc, $q) {
    return {
        createEmployee : function(data) {
            var url = '/employee';
            var call = $q.defer();
            ReqHandlingSrvc.put(url, data)
                .then(function(res) {
                    call.resolve(res);
                })
                .catch(function(err) {
                    call.reject(err);
                })
            return call.promise;
        },

        getEmployee : function(id) {
            var url = '/employee/'+id;
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