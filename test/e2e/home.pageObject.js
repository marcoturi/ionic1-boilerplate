'use strict';

class HomePage {
    constructor() {
        this.username = element(by.id('username'));
        this.welcome = element(by.id('wecomeUsername'));
        this.setUsername = (user) => {
            this.username.clear();
            this.username.sendKeys(user);
        };
    }
}

module.exports = HomePage;
