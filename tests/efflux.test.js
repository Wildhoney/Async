import efflux from'../src/efflux.js';

describe('Efflux', function() {

    it('Should be able to import the module;', function() {
        expect(typeof efflux).toBe('function');
        expect(efflux.name).toEqual('efflux');
    });

});