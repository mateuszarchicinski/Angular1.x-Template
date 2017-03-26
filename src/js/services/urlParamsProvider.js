(function () {

    'use strict';


    app.provider('urlParams', ['$windowProvider', function ($windowProvider) {
        
        this.awesomeThings = [
            'AngularJS',
            'HTML5',
            'CSS3',
            'ES6'
        ];
        
        
        this.languages = '';
        
        this.$get = function () {
            var self = this,
                location = $windowProvider.$get().location,
                langValue = location.pathname.split('/')[1];
            
            return {
                currentLanguage: function () {
                    return self.languages.indexOf(langValue) === -1 ? self.languages[0] : langValue;
                },
                rightPath: function () {
                    return location.pathname.substring(this.currentLanguage().length + 2) + location.search;
                }
            };
        };
        
    }]);

})();