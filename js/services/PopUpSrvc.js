app.service('PopUpSrvc', ['toaster', function(toaster) {

    this.success = function(title, text) {
        toaster.pop('success', title, text);
    }
    this.error = function(title, text) {
        toaster.pop('error', title, text);
    }
    
}]);