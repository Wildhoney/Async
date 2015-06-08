import babel  from 'babel-core/polyfill';
import efflux from'../src/efflux.js';

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
        expect(typeof efflux).toBe('function');
        expect(efflux.name).toEqual('efflux');
    });

    it('Should be able to accept a generator function;', () => {
        const generatorFn = function*() {};
        expect(efflux(generatorFn) instanceof Promise).toBeTruthy();
    });

    it('Should be able to get users from the generator function;', function(done) {

        const e = efflux(function*() {
            return yield getUsers(['Adam', 'Maria']);
        });

        e.then((users) => {

            expect(users.length).toEqual(2);
            expect(users[0].name).toEqual('Adam');
            expect(users[1].name).toEqual('Maria');
            expect(users[0].location).toEqual('UK');
            expect(users[1].location).toEqual('UK');
            done();

        });

    });

});