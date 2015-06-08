/**
 * @module Async
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Async
 */
export default (function main($window) {

    "use strict";

    /**
     * @method throwException
     * @return {Error}
     */
    function throwException(message) {
        return new Error(`Async: ${message}.`);
    }

    /**
     * @constructor
     * @param {Function} [fn=function*() {}]
     * @return {Function}
     */
    return function Async(fn = function*() {}) {

        return new $window.Promise((resolve, reject) => {

            const generator = fn();

            if (!generator || !('next' in generator)) {
                return void reject(throwException('Non-generator function passed'));
            }

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