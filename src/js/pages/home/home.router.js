/**
 * @author    Marco Turi <marco.turi@hotmail.it>
 * @author    Damien Dell'Amico <damien.dellamico@saldiprivati.com>
 * @copyright Copyright (c) 2016
 * @license   GPL-3.0
 */
(() => {
    'use strict';

    /**
     * @ngdoc object
     * @name app.home.routes: homeRoute
     * @module app.home
     * @requires $stateProvider
     * @requires APP_CONST
     * @description
     * Router for home page
     *
     */
    const route = /* @ngInject */ ($stateProvider, APP_CONST) => {
        $stateProvider.state(APP_CONST.ROUTES.HOME, {
            url: '/',
            cache: true,
            views: {
                'menuContent@app': {
                    templateUrl: 'js/pages/home/home.tpl.html',
                    controller: 'HomeCtrl as vm'
                }
            }
        });
    };

    angular.module('app.home').config(route);
})();
