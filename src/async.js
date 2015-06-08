/**
 * @module Async
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Async
 */
export default (function main($window) {

    "use strict";

    /**
     * @constructor
     * @param {Function} fn
     * @return {Function}
     */
    return function Async(fn) {

        return new $window.Promise((resolve, reject) => {

            const generator = fn();

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