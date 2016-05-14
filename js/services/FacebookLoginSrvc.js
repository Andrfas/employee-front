app.service('FacebookLoginSrvc', ['ReqHandlingSrvc', '$q', function(ReqHandlingSrvc, $q) {
    FB.init({
        appId: '1578676272429984',
        cookie: true, // enable cookies to allow the server to access 
        // the session
        xfbml: true, // parse social plugins on this page
        version: 'v2.5' // use graph api version 2.5
    });
    return {

        signIn: function() {
            var call = $q.defer();
            FB.login(function(response) {
                call.resolve(response);
            }, {scope: 'public_profile'});
            return call.promise;
        },


    }
}]);
