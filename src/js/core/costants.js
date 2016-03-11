(() => {
    'use strict';

    const appConst = {
        ROUTES: {
            //HOME
            HOME: 'app.home'
        },
        VALIDATION_REGEX: {
            PHONE: /^([+]*39)?3\d{8,9}$/,
            VAT: /[\w\d]{11}/,
            FISCAL_CODE: /^[A-Za-z]{6}[0-9]{2}[A-Za-z]{1}[0-9]{2}[A-Za-z]{1}[0-9]{3}[A-Za-z]{1}$/,
            NECTAR_CARD_PATTERN: /^[0-9]+$/,
            EMAIL: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            CARD_SERCURITY_CODE: /(?=.*\d).{3,4}/,
            IBAN: /^IT\d{2}[A-Z]\d{10}[0-9A-Z]{12}/
        }
    };

    angular.module('app.core').constant('APP_CONST', appConst);

})();
