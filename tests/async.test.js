import babel from 'babel-core/polyfill';
import Async from'../src/async.js';

const getUsers = function getUsers(names) {

    const timeoutMilliseconds = Math.random() * 1000;

    return new Promise((resolve) => {

        resolve(names.map((name) => {
            return { name: name, location: 'UK' };
        }));

    });

};

describe('Efflux', () => {

    it('Should be able to import the module;', () => {
        expect(typeof Async).toBe('function');
        expect(Async.name).toEqual('Async');
    });

    it('Should be able to accept a generator function;', () => {
        const generatorFn = function*() {};
        expect(new Async(generatorFn) instanceof Promise).toBeTruthy();
    });

    it('Should be able to get users from the generator function;', function(done) {

        const async = new Async(function*() {
            return yield getUsers(['Adam', 'Maria']);
        });

        async.then((users) => {

            expect(users.length).toEqual(2);
            expect(users[0].name).toEqual('Adam');
            expect(users[1].name).toEqual('Maria');
            expect(users[0].location).toEqual('UK');
            expect(users[1].location).toEqual('UK');
            done();

        });

    });

});