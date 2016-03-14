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

        constructor($scope, $ionicSideMenuDelegate, APP_CONST) {
            'ngInject';

            this.ROUTES = APP_CONST.ROUTES;

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
