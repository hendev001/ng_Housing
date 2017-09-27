(function() {

    "use strict"
    angular
        .module("ngHome")
        .factory("homeFactory", function($http) {
            function getHome() {
                return $http.get('data/home.json')
            }
            return {
                getHome: getHome
            }
        });

})();