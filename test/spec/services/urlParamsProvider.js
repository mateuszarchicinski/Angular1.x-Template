describe('service: urlParamsProvider', function () {

    'use strict';


    var LANGUAGES = ['pl', 'en'];


    beforeEach(module('app'));
    var urlParams,
        scope,
        window;

    beforeEach(function () {

        module(function (urlParamsProvider) {
            urlParamsProvider.languages = LANGUAGES;
        });

        inject(function (_urlParams_) {
            urlParams = _urlParams_;
        });

    });


    it('should return one/default language from list of supported languages', function () {

        expect(urlParams.currentLanguage()).toBe(LANGUAGES[0]);

    });

});