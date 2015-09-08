import babel from 'babel-core/polyfill';
import Async, {EXPECTING_GENERATOR} from'../src/async.js';

/**
 * @method emptyFunction
 * @return {void}
 */
const emptyFunction = () => {};

describe('Async', () => {

    it('Should be able to import the module;', () => {
        expect(typeof Async).toBe('function');
        expect(Async.name).toEqual('Async');
    });

    it('Should be able to accept a generator function;', () => {
        const mockGenerator = function*() {};
        expect(new Async(mockGenerator) instanceof Promise).toBeTruthy();
    });

    it('Should be able to reject the promise when non-generator function is passed;', done => {

        new Async(emptyFunction).then(emptyFunction, exception => {
            expect(exception.message).toEqual(`Async: ${EXPECTING_GENERATOR}.`);
            done();
        });

    });

    it('Should be able to reject the promise when invalid param passed;', done => {

        new Async('Invalid!').then(emptyFunction, exception => {
            expect(exception.message).toEqual(`Async: ${EXPECTING_GENERATOR}.`);
            done();
        });

    });

    it('Should be able to throw an error in the generator;', done => {

        const getData = () => {
            throw new Error('Throw!');
        };

        new Async(function*() {

            try {
                yield getData();
            } catch (e) {
                expect(e.message).toEqual('Throw!');
                done();
            }

        });

    });

    it('Should be able to get users from the generator function;', done => {

        /**
         * @method getUsers
         * @param {Array} names
         * @return {Promise}
         */
        const getUsers = (...names) => {

            return new Promise(resolve => {
                resolve(names.map(name => {
                    return { name: name, location: 'UK' };
                }));
            });

        };

        const mockGenerator = function*() {

            const users = yield getUsers('Adam', 'Maria');

            expect(users.length).toEqual(2);
            expect(users[0].name).toEqual('Adam');
            expect(users[1].name).toEqual('Maria');
            expect(users[0].location).toEqual('UK');
            expect(users[1].location).toEqual('UK');

            return users;

        };

        new Async(mockGenerator).then(users => {

            expect(users.length).toEqual(2);
            expect(users[0].name).toEqual('Adam');
            expect(users[1].name).toEqual('Maria');
            expect(users[0].location).toEqual('UK');
            expect(users[1].location).toEqual('UK');

            done();

        });

    });

    it('Should be able to reject the entire promise when an error is thrown;', done => {

        new Async(function*() {

            return yield new Promise((resolve, reject) => {
                reject(new Error('Unable to continue'));
            });

        }).then(emptyFunction, (error) => {
            expect(error.message).toEqual('Unable to continue');
            done();
        });

    });

});
