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
     * @name app.controller: ApplicationCtrl
     * @module app
     * @description
     * The App controller.
     */
    class ApplicationCtrl {

        constructor($scope, $ionicSideMenuDelegate, APP_CONST, CONFIG, $log) {
            'ngInject';

            this.ROUTES = APP_CONST.ROUTES;
            $log.debug(`CONFIG: ${angular.toJson(CONFIG.APP, true)}`);

            $scope.$on('$ionicView.beforeEnter', () => {
                $ionicSideMenuDelegate.canDragContent(false);
            });

            /**
             * @ngdoc method
             * @name getAppVersion
             * @description
             * Return the app version if exists. window.appVersion
             * is valorized inside app.run.js on ionicPlatform.ready();
             * @return {string} version
             */
            this.getAppVersion = () => {
                if (window.appVersion) {
                    return window.appVersion;
                }
                return '0.0.0';
            };
        }
    }

    angular.module('app')
        .controller('ApplicationCtrl', ApplicationCtrl);
})();
