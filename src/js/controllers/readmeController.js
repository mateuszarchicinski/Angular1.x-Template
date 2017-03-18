(function () {

    'use strict';


    app.controller('readmeController', ['$log', function ($log) {

        this.awesomeThings = [
            'AngularJS',
            'HTML5',
            'CSS3',
            'ES6'
        ];

        $log.info('readmeController: ', 'JS running....');

    }]);

})();