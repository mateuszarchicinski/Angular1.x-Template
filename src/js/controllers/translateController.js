(function () {

    'use strict';


    app.controller('translateController', ['urlParams', '$window', '$log', function (urlParams, $window, $log) {
        
        this.awesomeThings = [
            'AngularJS',
            'HTML5',
            'CSS3',
            'ES6'
        ];
        
        $log.info('translateController: ', 'JS running....');
        
        
        this.language = urlParams.currentLanguage();
        
        this.translate = function (langCode) {
            $window.location.href = '/' + langCode + '/' + urlParams.rightPath();
        };
        
    }]);

})();