'use strict';

var HomePage = function(url) {
    var username = element(by.id('username'));

    this.setUsername = function(user) {
        username.sendKeys(user);
    };
    
    browser.get(url);
};

module.exports = HomePage;
