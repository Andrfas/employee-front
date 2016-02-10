
app.service('ReqHandlingSrvc', ['ConfigSrvc', '$http', '$q', function (ConfigSrvc, $http, $q) {
    return {

        get: function (url, params) {
            var request = ConfigSrvc.API_URL + url;
            var call = $q.defer();
            $http({
                method: 'GET',
                url: request,
                headers: getHeaders(),
                params: params
            }).then(function (res) {
                call.resolve(res.data);
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
                headers: getHeaders(),
                data: data
            }).then(function (res) {
                call.resolve(res.data);
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
                headers: getHeaders(),
                data: data
            }).then(function (res) {
                call.resolve(res.data);
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
                headers: getHeaders(),
                data: data
            }).success(function (res) {
                call.resolve(res.data);
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
                headers: getHeaders(),
                data: data
            }).success(function (res) {
                call.resolve(res.data);
            }, function (err) {
                call.reject(err);
            });
            return call.promise;
        } 
    }
}]);

function getHeaders() {
    var res = {};
    if(localStorage.getItem('token')) {
        res['authorization'] = localStorage.getItem('token');
    }
    return res;
}
//JSON.parse(localStorage.getItem('userInfo')).AccessKey},