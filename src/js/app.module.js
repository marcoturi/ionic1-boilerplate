/**
 * @author    Marco Turi <marco.turi@hotmail.it>
 * @author    Damien Dell'Amico <damien.dellamico@saldiprivati.com>
 * @copyright Copyright (c) 2016
 * @license   GPL-3.0
 */
(() => {
    'use strict';

    /**
     * @ngdoc overview
     * @name app
     * @description
     * The main app module
     */
    angular.module('app', [
        'app.vendors',
        'app.core',
        'app.templates',
        'app.components',
        'app.home']);
})();
