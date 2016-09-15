'use strict';

const HomePage = require('./home.pageObject.js');

describe('Product add/remove:', () => {
    let homePage = new HomePage('/');

    it('should change the welcome message', () => {
        homePage.setUsername('ptor');
        element.all(by.className('sp-qtaCng')).first().click();
        element(by.id('welcomeUsername')).getText().then((res) => {
            expect(res).toBe('ptor');
        });
    });

});
