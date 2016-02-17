app.service('RegEmployeeSrvc', ['ReqHandlingSrvc', '$q', function(ReqHandlingSrvc, $q) {
    return {
        createEmployee : function(data) {
            var url = '/employee';
            var call = $q.defer();
            ReqHandlingSrvc.put(url, data)
                .then(function(res) {
                    console.log(res);
                })
                .catch(function(err) {
                    console.error(err);
                })
            return call.promise;
        }
        
    }
}]);