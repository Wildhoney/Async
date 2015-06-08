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

    it('Should be able to reject the promise when non-generator function is passed;', function() {

        const async = new Async(() => {});

        async.then(() => {}, (exception) => {
            expect(exception.message).toEqual('Async: Non-generator function passed.');
            done();
        });

    });

    it('Should be able to reject the promise when invalid param passed;', function() {

        const async = new Async('Uh');

        async.then(() => {}, (exception) => {
            expect(exception.message).toEqual('Async: Non-function passed as generator.');
            done();
        });

    });

    it('Should be able to reject the promise when an exception is thrown;', function() {

        const async = new Async(function*() {
            throw new Error('What happened?!');
        });

        async.then(() => {}, (exception) => {
            expect(exception.message).toEqual('What happened?!');
            done();
        });

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

    it('Should be able to reject the entire promise when an error is thrown;', function(done) {

        const async = new Async(function*() {
            return yield new Promise((resolve, reject) => reject(new Error('Unable to continue')));
        });

        async.then(() => {}, (error) => {
            expect(error.message).toEqual('Unable to continue');
            done();
        });

    });

});