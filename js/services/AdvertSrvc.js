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
        },

        getAdverts: function(data) {
            var url = '/advert';
            var call = $q.defer();
            ReqHandlingSrvc.post(url, data)
                .then(function(res) {
                    call.resolve(res);
                })
                .catch(function(err) {
                    call.reject(err);
                })
            return call.promise;
        },

        getAdvert: function(data) {
            var url = '/advert/'+data.advertId;
            var call = $q.defer();
            ReqHandlingSrvc.get(url, data)
                .then(function(res) {
                    call.resolve(res);
                })
                .catch(function(err) {
                    call.reject(err);
                })
            return call.promise;
        },

        submitProposal: function(data){
            var url = '/apply';
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