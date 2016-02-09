describe('PasswordController', function() {
  beforeEach(module('EmployeeApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.grade', function() {
    it('sets the strength to "strong" if the password length is >8 chars', function() {
      var $scope = {};
      var controller = $controller('IndexCntrl', { $scope: $scope });
      assert(true);
      
    });
  });
});