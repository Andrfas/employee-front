var app = angular.module('EmployeeApp', ['ngRoute', 'ui.bootstrap', 'angularFileUpload']);

app.config(['$routeProvider', '$controllerProvider', '$locationProvider',
    function($routeProvider, $controllerProvider, $locationProvider) {
        app.controller = $controllerProvider.register;

        app.resolveScriptDeps = function(dependencies){
            return function($q,$rootScope){
                var deferred = $q.defer();
                $script(dependencies, function() {
                    // all dependencies have now been loaded by $script.js so resolve the promise
                    $rootScope.$apply(function()
                    {
                        deferred.resolve();
                    });
                });
                return deferred.promise;
            }
        };

        $routeProvider
            .when('/', {
                templateUrl: '/templates/index.html',
                controller:'IndexCntrl',
                resolve: {
                    deps: app.resolveScriptDeps([
                    '/js/controllers/IndexCntrl.js'
                ])}
            })
            .when('/registration', {
                templateUrl: '/templates/reg_main.html',
                controller:'RegisterMainCntrl',
                resolve: {
                    deps: app.resolveScriptDeps([
                    '/js/controllers/RegisterMainCntrl.js',
                    '/js/controllers/RegCompanyCntrl.js',
                    '/js/controllers/RegEmployeeCntrl.js',
                    '/js/controllers/SelCityModalCntrl.js',
                    '/js/controllers/SelLanguageModalCntrl.js',
                    '/js/controllers/SelEducationModalCntrl.js',
                    '/js/services/RegCompanySrvc.js'
                ])}
            })
            .when('/proposal', {
                templateUrl: '/templates/proposal_list.html',
                controller: 'ProposalCntrl',
                resolve: {
                    deps: app.resolveScriptDeps([
                        'js/controllers/ProposalCntrl.js'
                ])}
            })

        //$locationProvider.html5Mode({
        //    enabled: true,
        //    requireBase: false
        //});
    }]);