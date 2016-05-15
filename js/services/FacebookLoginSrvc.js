app.service('FacebookLoginSrvc', ['ReqHandlingSrvc', '$q', function(ReqHandlingSrvc, $q) {
    if(!FB) {
        $timeout(function(){
            FB.init({
                appId: '1578674425763502',
                cookie: true, // enable cookies to allow the server to access 
                // the session
                xfbml: true, // parse social plugins on this page
                version: 'v2.5' // use graph api version 2.5
            });
        }, 500);
    }
    
    return {

        signIn: function() {
            var call = $q.defer();
            FB.login(function(response) {
                call.resolve(response);
            }, {scope: 'public_profile,email,user_birthday,user_location,user_hometown'});
            return call.promise;
        },


    }
}]);
