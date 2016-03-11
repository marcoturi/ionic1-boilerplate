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
            this.title = 'Mami 3';
        }
    }

    angular.module('app.home').controller('HomeCtrl', HomeCtrl);
})();
