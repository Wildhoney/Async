const efflux = (function main($window) {

    "use strict";

    /**
     * @module Efflux
     * @param {Function} generatorFn
     * @author Adam Timberlake
     * @link https://github.com/Wildhoney/Efflux
     */
    return function efflux(generatorFn) {

        return new Promise((resolve, reject) => {

            const generator = generatorFn();

            (function consumePromise(iteration) {

                if (iteration.done) {
                    return void resolve(iteration.value);
                }

                iteration.value.then((value) => {
                    consumePromise(generator.next(value));
                });

            })(generator.next());

        });

    };

})(window);

export default efflux;