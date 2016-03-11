(() => {
    'use strict';

    const onConfig = /* @ngInject */ ($ionicConfigProvider, $compileProvider) => {

        // http://forum.ionicframework.com/t/change-hide-ion-nav-back-button-text/5260/14
        // remove back button text, use unicode em space characters to increase touch target area size of back button
        $ionicConfigProvider.backButton.previousTitleText(false).text('&emsp;&emsp;');

        //By default, when navigating back in the history, the “forward” views are removed from the cache.
        //If you navigate forward to the same view again, it’ll create a new DOM element and controller
        //instance. Basically, any forward views are reset each time. This can be configured using the
        //$ionicConfigProvider:
        $ionicConfigProvider.views.forwardCache(true);

        //The $ionicConfigProvider can be used to set the maximum allowable views
        //which can be cached, but this can also be use to disable all caching by setting it to 0.
        $ionicConfigProvider.views.maxCache(20);

        // NOTE: we put the tabs at the top for both Android and iOS
        $ionicConfigProvider.tabs.position('top');

        // Enable native scrolls for Android platform only,
        // as you see, we're disabling jsScrolling to achieve this.
        $ionicConfigProvider.scrolling.jsScrolling(false);
        if (ionic.Platform.isAndroid()) {
            $ionicConfigProvider.navBar.alignTitle('center');
        }

        // switch off AngularJS debug info in production for better performance
        $compileProvider.debugInfoEnabled(true);

        //AngularJS Whitelisting. You have to whitelist image URLs so Angular allows file:// URLs
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    };

    angular.module('app')
        .config(onConfig);
})();
