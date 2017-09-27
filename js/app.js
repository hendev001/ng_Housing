angular
    .module("ngHome", ["ngMaterial"])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('orange');
    }).directive("helloWorld", function() { // this allow us to create our own directive.
        return {
            template: "<h1>Hello World</h1>"
        }
    });