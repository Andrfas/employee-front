app.service('AdvertSrvc', ['ReqHandlingSrvc', '$q', function(ReqHandlingSrvc, $q) {
    return {

        createAdvert : function(data) {
            var url = '/advert';
            var call = $q.defer();
            ReqHandlingSrvc.put(url, data)
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