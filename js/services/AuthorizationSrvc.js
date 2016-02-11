app.service('AuthorizationSrvc', ['ReqHandlingSrvc', '$q', function(ReqHandlingSrvc, $q) {
    var self = this;
    self.isAuthorized = isTokenSet();
    self.signIn = function(email, password) {
        var url = '/signIn';
        var data = {
            email:email,
            password: password
        }
        var call = $q.defer();
        ReqHandlingSrvc.post(url, data)
            .then(function(res) {
                if(res.success) {
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('clientId', res.data.client_id);
                    localStorage.setItem('clientType', res.data.client_type);
                    self.isAuthorized = true;
                    call.resolve(res);
                } else {
                    call.resolve(res);
                }
            })
            .catch(function(err) {
                call.reject(err);
            });
        return call.promise;
    }

    this.signOut = function() {
        var url = '/signOut';
        var data = {};
        var call = $q.defer();
        ReqHandlingSrvc.post(url, data)
            .then(function(res) {
                if(res.success) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('clientId');
                    localStorage.removeItem('clientType');
                    self.isAuthorized = false;
                    call.resolve(res);
                } else {
                    call.resolve(res);
                }
            })
            .catch(function(err) {
                call.reject(err);
            });
        return call.promise;
    }

    this.getToken = function() {
        return localStorage.getItem('token');
    }

    function isTokenSet() {
        if(localStorage.getItem('token')) {
            return true;
        } else {
            return false;
        }
    }
    
}]);