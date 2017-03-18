describe('controller: readmeController', function () {

    'use strict';


    beforeEach(module('app'));
    var readmeController;


    beforeEach(inject(function ($controller) {

        readmeController = $controller('readmeController', {});

    }));


    it('should attach a list of awesomeThings to the scope', function () {

        expect(readmeController.awesomeThings.length).toBe(4);

    });

});