(function () {

    'use strict';


    app.controller('translateController', ['$scope', 'urlParams', '$window', 'APP_CONFIG', '$log', function ($scope, urlParams, $window, APP_CONFIG, $log) {
        
        this.awesomeThings = [
            'AngularJS',
            'HTML5',
            'CSS3',
            'ES6'
        ];
        
        $log.info('translateController: ', 'JS running....');
        
        
        $scope.language = urlParams.currentLanguage();
        
        $scope.translate = function (langCode) {            
            $window.location.href = APP_CONFIG.host + langCode + urlParams.rightPath();
        };
        
    }]);

})();