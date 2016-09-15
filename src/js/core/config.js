/**
 * @author    Marco Turi <marco.turi@hotmail.it>
 * @author    Damien Dell'Amico <damien.dellamico@saldiprivati.com>
 * @copyright Copyright (c) 2016
 * @license   GPL-3.0
 */
(() => {
    'use strict';

    /* inject:env */
    const mock = false;
	const environment = 'dev';
	const api = 'prod';
    /* endinject */

    const APIurl = api === 'prod' ? 'myprodUrl' : 'mystageUrl';
    const devMode = environment === 'dev';
    const webMode = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/);

    const appConfig = {
        baseServiceUrl: APIurl,
        appName: 'Ionic Boiler Plate',
        FBAppId: 123456789,
        devMode,
        webMode,
        mock
    };

    angular.module('app.core').constant('CONFIG', appConfig);
})();
