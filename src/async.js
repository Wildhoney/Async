/**
 * @constant EXPECTING_GENERATOR
 * @type {String}
 */
export const EXPECTING_GENERATOR = 'You must pass in a generator to the constructor';

/**
 * @module Async
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Async
 */
export default class Async {

    /**
     * @property DEFAULT_GENERATOR
     * @type {Function}
     */
    static DEFAULT_GENERATOR = function* defaultGenerator() {};

    /**
     * @constructor
     * @param {Function} [generator=Async.DEFAULT_GENERATOR]
     * @return {Promise}
     */
    constructor(generator = Async.DEFAULT_GENERATOR) {

        return new Promise((resolve, reject) => {

            const assert = this.assert(reject);

            // Assert that we have a function that is a generate before we start it.
            assert(this.isFunction(generator), EXPECTING_GENERATOR);
            const iterator = generator();
            assert(this.isGenerator(iterator), EXPECTING_GENERATOR);

            try {

                /**
                 * @method consumePromise
                 * @param {Object} iteration
                 * @return {void}
                 */
                const consumePromise = iteration => {

                    if (iteration.done) {
                        resolve(iteration.value);
                        return;
                    }

                    iteration.value = Promise.resolve(iteration.value);
                    iteration.value.then(result => consumePromise(iterator.next(result)),
                                         error  => reject(error));

                };

                // Begin consuming the promise.
                consumePromise(iterator.next());

            } catch (error) {

                // Throw an error within the generator.
                iterator.throw(error);

            }

        });

    }

    /**
     * @method assert
     * @param {Function} reject
     * @return {Function}
     */
    assert(reject) {

        return (expression, message) => {

            if (!expression) {
                reject(new Error(`Async: ${message}.`));
            }

        };

    }

    /**
     * @method isGenerator
     * @param {*} item
     * @return {Boolean}
     */
    isGenerator(item) {
        return item && 'next' in item;
    }

    /**
     * @method isFunction
     * @param {*} item
     * @return {Boolean}
     */
    isFunction(item) {
        return typeof item === 'function';
    }

}
