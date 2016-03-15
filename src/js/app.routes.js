(() => {
    'use strict';

    angular.module('app')
        .config(($stateProvider, $urlRouterProvider) => {
            const $log = angular.injector(['ng']).get('$log');

            // top level routes (all other routes are defined within their own module)
            $stateProvider.state('app', {
                abstract: true, // jshint ignore:line
                templateUrl: 'js/app-side-menu.tpl.html',
                controller: 'ApplicationCtrl',
                controllerAs: 'main'
            })
            .state('app.auth', {
                url: '',
                abstract: true,
                template: '<ion-view/>'
            });

            $urlRouterProvider.otherwise(($injector, $location) => {
                // ATTENZIONE ! usando ionic run su device, viene inviata un'url
                // per il riavvio della webview nel dispositivo ( es http://192.168.24.112:8100/?restart=661317 )
                // Questo comporta problemi nel login automatico all'avvio dell'app,
                // portando sempre alla pagina di login
                const unmanagedUrl = $location.absUrl();
                $log.debug(`Unmanaged Url. Fallback in $urlRouterProvider.otherwise : ${unmanagedUrl}`);
                // if (unmanagedUrl.indexOf('?restart=') !== -1) {
                //    $location.path('/MySaldiPrivati/Sales/ListSales.aspx');
                // }
                $location.path('/');
            });
        });
})();
