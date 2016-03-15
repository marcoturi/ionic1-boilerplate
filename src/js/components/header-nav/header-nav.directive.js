(() => {
    'use strict';

    /**
     * @ngdoc componenet
     * @name app.components.component:bzHeaderNav
     * @function
     * @restrict E
     * @scope
     * @bindings {string} title Title of the page
     * @bindings {string} backURL The url of the back button (used in Profile section)
     * @bindings {string} saleId The saleId needed for back button in catalog
     * @bindings {string} homeUrl The url of the home state (used in catalog)
     * @bindings {boolean} showMenu it shows the menu hamburger
     * @bindings {boolean} showMiniCart it shows the mini-cart
     * @bindings {boolean} showLogo it shows the logo
     *
     * @description
     * Componenet for header nav
     */
    const bzHeaderNav = {
        templateUrl: 'js/components/header-nav/header-nav.tpl.html',
        controllerAs: 'vm',
        replace: true,
        //titleSynced andrà rivisto in futuro
        bindings: {
            title: '@',
            titleSynced: '=',
            backUrl: '=',
            historyBack: '=',
            homeUrl: '=',
            showMenu: '=',
            showLogo: '='
        },
        priority: 1002,
        /* eslint
            func-names: 0
            object-shorthand: 0
        */
        controller: /* @ngInject */ function ($log, $ionicViewSwitcher, $ionicHistory, APP_CONST) {
            this.setDirection = (direction = 'back') => {
                $ionicViewSwitcher.nextDirection(direction);
            };

            this.doHistoryBack = () => {
                $ionicHistory.historyBack();
            };

            this.APP_CONST = APP_CONST;
        }
    };

    angular.module('app.components')
        .component('bzHeaderNav', bzHeaderNav);
})();
