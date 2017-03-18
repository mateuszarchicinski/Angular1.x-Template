describe('controller: notfoundController', function () {

    'use strict';


    beforeEach(module('app'));
    var notfoundController;


    beforeEach(inject(function ($controller) {

        notfoundController = $controller('notfoundController', {});

    }));


    it('should attach a list of awesomeThings to the scope', function () {

        expect(notfoundController.awesomeThings.length).toBe(4);

    });

});