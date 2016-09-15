'use strict';

const HomeObj = require('./home.pageObject.js');

describe('Product add/remove:', () => {
    const homePage = new HomeObj();
    browser.get('/');

    it('should change the welcome message', () => {
        homePage.setUsername('ptor');
        homePage.welcome.getText().then((res) => {
            expect(res).toBe('ptor');
        });
    });
});
