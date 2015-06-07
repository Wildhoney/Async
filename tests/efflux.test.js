import babel  from 'babel-core/polyfill';
import efflux from'../src/efflux.js';

describe('Efflux', () => {

    it('Should be able to import the module;', () => {
        expect(typeof efflux).toBe('function');
        expect(efflux.name).toEqual('efflux');
    });

    it('Should be able to accept a generator function;', () => {
        const generatorFn = function*() {};
        expect(efflux(generatorFn) instanceof Promise).toBeTruthy();
    });

});