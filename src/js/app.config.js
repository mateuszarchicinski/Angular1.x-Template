(function () {

    'use strict';


    app.config(['urlParamsProvider', 'APP_CONFIG', '$stateProvider', '$urlRouterProvider', '$locationProvider', function (urlParamsProvider, APP_CONFIG, $stateProvider, $urlRouterProvider, $locationProvider) {

        urlParamsProvider.languages = APP_CONFIG.languages;
        
        var langValue = urlParamsProvider.$get().currentLanguage(),
            baseUrl = '/' + langValue + '/';
        
        var getTemplateUrl = function (nameFile) {
            return 'views/' + langValue + '/' + nameFile + '.html';
        };
        
        
        $stateProvider.state('main', {
            url: '/',
            redirectTo: 'readme'
        }).state('language', {
            url: '/' + langValue,
            redirectTo: 'readme'
        }).state('readme', {
            url: baseUrl + 'readme',
            templateUrl: getTemplateUrl('readme'),
            controller: 'readmeController'
        }).state('notfound', {
            url: baseUrl + 'notfound',
            templateUrl: getTemplateUrl('notfound'),
            controller: 'notfoundController'
        });
        
        $urlRouterProvider.otherwise(baseUrl + 'notfound');
        
        $locationProvider.html5Mode(true);

    }])
    .constant('APP_CONFIG', {
        host: 'http://localhost:3000/', // Remember to change variable in different environment
        languages: ['pl', 'en'] // First element is default variable of language
    })
    .run(['$rootScope', '$state', function ($rootScope, $state) {
        
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
            if (toState.redirectTo) {
                event.preventDefault();
                
                $state.go(toState.redirectTo, toParams);
            }
        });
        
    }]);

})();