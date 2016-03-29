/*eslint no-undef: 0*/
describe('Module: home', () => {
    beforeEach(module('app.vendors'));
    beforeEach(module('app.core'));
    beforeEach(module('app.home'));

    describe('Route', () => {
        let $state;
        let currentState;
        const url = '#/';
        const templateUrl = 'js/pages/home/home.tpl.html';
        const state = 'app.home';

        beforeEach(module('ui.router', ($stateProvider) => {
            $stateProvider.state('app', {
                abstract: true
            });
        }, 'app.home'));

        beforeEach(inject((_$state_) => {
            $state = _$state_;
            currentState = $state.get(state);
        }));

        it('should have a valid templateUrl', () => {
            const stateTemplateUrl = currentState.views['menuContent@app'].templateUrl;
            expect(stateTemplateUrl).toEqual(templateUrl);
        });

        it(`should respond to '${url}' URL`, () => {
            expect($state.href(state, {})).toEqual(url);
        });
    });

    describe('Controller', () => {

        let controller, $scope;

        beforeEach(inject((_$rootScope_, _$controller_) => {
            $scope = _$rootScope_.$new();
            controller = _$controller_('HomeCtrl as vm', {
                $scope
            });
        }));

        it('should exist', () => {
            expect(!!controller).toBe(true);
        });

    });
});