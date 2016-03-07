(() => {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.home.controller: HomeController
     * @module app.home.:HomeController
     * @description
     * Home Controller.
     */
    class HomeCtrl {

        constructor() {
            'ngInject';
        }
    }

    angular.module('app.home').controller('HomeCtrl', HomeCtrl);
})();
