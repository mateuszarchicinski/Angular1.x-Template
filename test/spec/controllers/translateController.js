describe('controller: translateController', function () {

    'use strict';


    beforeEach(module('app'));
    var translateController,
        scope,
        window;


    beforeEach(inject(function ($controller, $rootScope, $window) {
        scope = $rootScope.$new();
        window = {
            translation: $window.translation
        };

        translateController = $controller('translateController', {$scope: scope, $window: window});

    }));


    it('should attach a list of awesomeThings to the scope', function () {

        expect(translateController.awesomeThings.length).toBe(4);

    });

});