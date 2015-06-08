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
     * @method wrapError
     * @param {String|Error} message
     * @return {Error}
     */
    function wrapError(message) {
        return message instanceof Error ? message : new Error(message);
    }

    /**
     * @constructor
     * @param {Function} [fn=function*() {}]
     * @return {Function}
     */
    return function Async(fn = function*() {}) {

        return new $window.Promise((resolve, reject) => {

            if (typeof fn !== 'function') {
                return void reject(throwException('Non-function passed as generator'));
            }

            const generator = fn();

            if (!generator || !('next' in generator)) {
                return void reject(throwException('Non-generator function passed'));
            }

            try {

                (function consumePromise(iteration) {

                    if (iteration.done) {
                        return void resolve(iteration.value);
                    }

                    iteration.value.then((value) => {
                        consumePromise(generator.next(value));
                    }, (error) => reject(wrapError(error)));

                })(generator.next());

            } catch (error) { return void reject(wrapError(error)); }

        });

    };

})(window);