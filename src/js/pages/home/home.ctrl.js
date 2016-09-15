/**
 * @author    Marco Turi <marco.turi@hotmail.it>
 * @author    Damien Dell'Amico <damien.dellamico@saldiprivati.com>
 * @copyright Copyright (c) 2016
 * @license   GPL-3.0
 */
(() => {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.home.controller: HomeController
     * @requires lodash
     * @requires CONFIG
     * @module app.home.:HomeController
     * @description
     * Home Controller.
     */
    class HomeCtrl {

        constructor(lodash, CONFIG) {
            'ngInject';
            const myArr = [
                {
                    name: 'barney',
                    age: 36,
                    active: true
                },
                {
                    name: 'fred',
                    age: 40,
                    active: false
                }];

            this.user = lodash.filter(myArr, o => !o.active);
            this.user.active = this.user[0];
            this.CONFIG = CONFIG;
        }
    }

    angular.module('app.home').controller('HomeCtrl', HomeCtrl);
})();
