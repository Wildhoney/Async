/**
 * @module Async
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Async
 */
export default (function main($window) {

    "use strict";

    /**
     * @constructor
     * @param {Function} generatorFn
     * @return {Function}
     */
    return (generatorFn) => {

        return function Async() {

            return new $window.Promise((resolve, reject) => {

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

    };

})(window);