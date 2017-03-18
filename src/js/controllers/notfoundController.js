(function () {

    'use strict';


    app.controller('notfoundController', ['$log', function ($log) {

        this.awesomeThings = [
            'AngularJS',
            'HTML5',
            'CSS3',
            'ES6'
        ];

        $log.info('notfoundController: ', 'JS running....');

    }]);

})();