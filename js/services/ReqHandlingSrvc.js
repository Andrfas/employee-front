
app.service('ReqHandlingSrvc', ['ConfigSrvc', '$http', '$q', function (ConfigSrvc, $http, $q) {
    return {

        get: function (url, params) {
            var request = ConfigSrvc.API_URL + url;
            var call = $q.defer();
            $http({
                method: 'GET',
                url: request,
                headers: {'X-api-key': JSON.parse(localStorage.getItem('userInfo')).AccessKey},
                params: params
            }).then(function (res) {
                call.resolve(res);
            }, function (err) {
                call.reject(err);
            });
            return call.promise;
        },

        post: function (url, data) {
            var request = ConfigSrvc.API_URL + url;
            var call = $q.defer();
            $http({
                method: 'POST',
                url: request,
                headers: {'X-api-key': JSON.parse(localStorage.getItem('userInfo')).AccessKey},
                data: data
            }).then(function (res) {
                call.resolve(res);
            }, function (err) {
                call.reject(err);
            });
            return call.promise;
        },

        put: function (url, data) {
            var request = ConfigSrvc.API_URL + url;
            var call = $q.defer();
            $http({
                method: 'PUT',
                url: request,
                headers: {'X-api-key': JSON.parse(localStorage.getItem('userInfo')).AccessKey},
                data: data
            }).then(function (res) {
                call.resolve(res);
            }, function (err) {
                call.reject(err);
            });
            return call.promise;
        },

        patch: function (url, data) {
            var request = ConfigSrvc.API_URL + url;
            var call = $q.defer();
            $http({
                method: 'PATCH',
                url: request,
                headers: {'X-api-key': JSON.parse(localStorage.getItem('userInfo')).AccessKey},
                data: data
            }).success(function (res) {
                call.resolve(res);
            }, function (err) {
                call.reject(err);
            });
            return call.promise;
        } ,

        delete: function (url, data) {
            var request = ConfigSrvc.API_URL + url;
            var call = $q.defer();
            $http({
                method: 'DELETE',
                url: request,
                headers: {'X-api-key': JSON.parse(localStorage.getItem('userInfo')).AccessKey},
                data: data
            }).success(function (res) {
                call.resolve(res);
            }, function (err) {
                call.reject(err);
            });
            return call.promise;
        } 
    }
}]);