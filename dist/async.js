(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @constant EXPECTING_GENERATOR
 * @type {String}
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var EXPECTING_GENERATOR = 'You must pass in a generator to the constructor';

exports.EXPECTING_GENERATOR = EXPECTING_GENERATOR;
/**
 * @module Async
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Async
 */

var Async = (function () {

    /**
     * @constructor
     * @param {Function} [generator=Async.DEFAULT_GENERATOR]
     * @return {Promise}
     */

    function Async() {
        var _this = this;

        var generator = arguments[0] === undefined ? Async.DEFAULT_GENERATOR : arguments[0];

        _classCallCheck(this, Async);

        return new Promise(function (resolve, reject) {

            var assert = _this.assert(reject);

            // Assert that we have a function that is a generate before we start it.
            assert(_this.isFunction(generator), EXPECTING_GENERATOR);
            var iterator = generator();
            assert(_this.isGenerator(iterator), EXPECTING_GENERATOR);

            try {
                (function () {

                    /**
                     * @method consumePromise
                     * @param {Object} iteration
                     * @return {void}
                     */
                    var consumePromise = function consumePromise(iteration) {

                        if (iteration.done) {
                            resolve(iteration.value);
                            return;
                        }

                        iteration.value = Promise.resolve(iteration.value);
                        iteration.value.then(function (result) {
                            return consumePromise(iterator.next(result));
                        }, function (error) {
                            return reject(error);
                        });
                    };

                    // Begin consuming the promise.
                    consumePromise(iterator.next());
                })();
            } catch (error) {

                // Throw an error within the generator.
                iterator['throw'](error);
            }
        });
    }

    _createClass(Async, [{
        key: 'assert',

        /**
         * @method assert
         * @param {Function} reject
         * @return {Function}
         */
        value: function assert(reject) {

            return function (expression, message) {

                if (!expression) {
                    reject(new Error('Async: ' + message + '.'));
                }
            };
        }
    }, {
        key: 'isGenerator',

        /**
         * @method isGenerator
         * @param {*} item
         * @return {Boolean}
         */
        value: function isGenerator(item) {
            return item && 'next' in item;
        }
    }, {
        key: 'isFunction',

        /**
         * @method isFunction
         * @param {*} item
         * @return {Boolean}
         */
        value: function isFunction(item) {
            return typeof item === 'function';
        }
    }], [{
        key: 'DEFAULT_GENERATOR',

        /**
         * @property DEFAULT_GENERATOR
         * @type {Function}
         */
        value: regeneratorRuntime.mark(function defaultGenerator() {
            return regeneratorRuntime.wrap(function defaultGenerator$(context$2$0) {
                while (1) switch (context$2$0.prev = context$2$0.next) {
                    case 0:
                    case 'end':
                        return context$2$0.stop();
                }
            }, defaultGenerator, this);
        }),
        enumerable: true
    }]);

    return Async;
})();

exports['default'] = Async;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYXRpbWJlcmxha2UvV2Vicm9vdC9Bc3luYy9zcmMvYXN5bmMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0lPLElBQU0sbUJBQW1CLEdBQUcsaURBQWlELENBQUM7O1FBQXhFLG1CQUFtQixHQUFuQixtQkFBbUI7Ozs7Ozs7SUFPWCxLQUFLOzs7Ozs7OztBQWFYLGFBYk0sS0FBSyxHQWEyQjs7O1lBQXJDLFNBQVMsZ0NBQUcsS0FBSyxDQUFDLGlCQUFpQjs7OEJBYjlCLEtBQUs7O0FBZWxCLGVBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLOztBQUVwQyxnQkFBTSxNQUFNLEdBQUcsTUFBSyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7OztBQUduQyxrQkFBTSxDQUFDLE1BQUssVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLG1CQUFtQixDQUFDLENBQUM7QUFDeEQsZ0JBQU0sUUFBUSxHQUFHLFNBQVMsRUFBRSxDQUFDO0FBQzdCLGtCQUFNLENBQUMsTUFBSyxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUUsbUJBQW1CLENBQUMsQ0FBQzs7QUFFeEQsZ0JBQUk7Ozs7Ozs7O0FBT0Esd0JBQU0sY0FBYyxHQUFHLFNBQWpCLGNBQWMsQ0FBRyxTQUFTLEVBQUk7O0FBRWhDLDRCQUFJLFNBQVMsQ0FBQyxJQUFJLEVBQUU7QUFDaEIsbUNBQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekIsbUNBQU87eUJBQ1Y7O0FBRUQsaUNBQVMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkQsaUNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTttQ0FBSSxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzt5QkFBQSxFQUMvQyxVQUFBLEtBQUs7bUNBQUssTUFBTSxDQUFDLEtBQUssQ0FBQzt5QkFBQSxDQUFDLENBQUM7cUJBRWpELENBQUM7OztBQUdGLGtDQUFjLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7O2FBRW5DLENBQUMsT0FBTyxLQUFLLEVBQUU7OztBQUdaLHdCQUFRLFNBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUV6QjtTQUVKLENBQUMsQ0FBQztLQUVOOztpQkF4RGdCLEtBQUs7Ozs7Ozs7O2VBK0RoQixnQkFBQyxNQUFNLEVBQUU7O0FBRVgsbUJBQU8sVUFBQyxVQUFVLEVBQUUsT0FBTyxFQUFLOztBQUU1QixvQkFBSSxDQUFDLFVBQVUsRUFBRTtBQUNiLDBCQUFNLENBQUMsSUFBSSxLQUFLLGFBQVcsT0FBTyxPQUFJLENBQUMsQ0FBQztpQkFDM0M7YUFFSixDQUFDO1NBRUw7Ozs7Ozs7OztlQU9VLHFCQUFDLElBQUksRUFBRTtBQUNkLG1CQUFPLElBQUksSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDO1NBQ2pDOzs7Ozs7Ozs7ZUFPUyxvQkFBQyxJQUFJLEVBQUU7QUFDYixtQkFBTyxPQUFPLElBQUksS0FBSyxVQUFVLENBQUM7U0FDckM7Ozs7Ozs7O3VDQXJGMEIsU0FBVSxnQkFBZ0I7Ozs7Ozs7ZUFBaEIsZ0JBQWdCO1NBQUs7Ozs7V0FOekMsS0FBSzs7O3FCQUFMLEtBQUsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBAY29uc3RhbnQgRVhQRUNUSU5HX0dFTkVSQVRPUlxuICogQHR5cGUge1N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEVYUEVDVElOR19HRU5FUkFUT1IgPSAnWW91IG11c3QgcGFzcyBpbiBhIGdlbmVyYXRvciB0byB0aGUgY29uc3RydWN0b3InO1xuXG4vKipcbiAqIEBtb2R1bGUgQXN5bmNcbiAqIEBhdXRob3IgQWRhbSBUaW1iZXJsYWtlXG4gKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vV2lsZGhvbmV5L0FzeW5jXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzeW5jIHtcblxuICAgIC8qKlxuICAgICAqIEBwcm9wZXJ0eSBERUZBVUxUX0dFTkVSQVRPUlxuICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgREVGQVVMVF9HRU5FUkFUT1IgPSBmdW5jdGlvbiogZGVmYXVsdEdlbmVyYXRvcigpIHt9O1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2dlbmVyYXRvcj1Bc3luYy5ERUZBVUxUX0dFTkVSQVRPUl1cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGdlbmVyYXRvciA9IEFzeW5jLkRFRkFVTFRfR0VORVJBVE9SKSB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgYXNzZXJ0ID0gdGhpcy5hc3NlcnQocmVqZWN0KTtcblxuICAgICAgICAgICAgLy8gQXNzZXJ0IHRoYXQgd2UgaGF2ZSBhIGZ1bmN0aW9uIHRoYXQgaXMgYSBnZW5lcmF0ZSBiZWZvcmUgd2Ugc3RhcnQgaXQuXG4gICAgICAgICAgICBhc3NlcnQodGhpcy5pc0Z1bmN0aW9uKGdlbmVyYXRvciksIEVYUEVDVElOR19HRU5FUkFUT1IpO1xuICAgICAgICAgICAgY29uc3QgaXRlcmF0b3IgPSBnZW5lcmF0b3IoKTtcbiAgICAgICAgICAgIGFzc2VydCh0aGlzLmlzR2VuZXJhdG9yKGl0ZXJhdG9yKSwgRVhQRUNUSU5HX0dFTkVSQVRPUik7XG5cbiAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBAbWV0aG9kIGNvbnN1bWVQcm9taXNlXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZXJhdGlvblxuICAgICAgICAgICAgICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgY29uc3QgY29uc3VtZVByb21pc2UgPSBpdGVyYXRpb24gPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVyYXRpb24uZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpdGVyYXRpb24udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0aW9uLnZhbHVlID0gUHJvbWlzZS5yZXNvbHZlKGl0ZXJhdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGlvbi52YWx1ZS50aGVuKHJlc3VsdCA9PiBjb25zdW1lUHJvbWlzZShpdGVyYXRvci5uZXh0KHJlc3VsdCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciAgPT4gcmVqZWN0KGVycm9yKSk7XG5cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gQmVnaW4gY29uc3VtaW5nIHRoZSBwcm9taXNlLlxuICAgICAgICAgICAgICAgIGNvbnN1bWVQcm9taXNlKGl0ZXJhdG9yLm5leHQoKSk7XG5cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBUaHJvdyBhbiBlcnJvciB3aXRoaW4gdGhlIGdlbmVyYXRvci5cbiAgICAgICAgICAgICAgICBpdGVyYXRvci50aHJvdyhlcnJvcik7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBtZXRob2QgYXNzZXJ0XG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0XG4gICAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAgICovXG4gICAgYXNzZXJ0KHJlamVjdCkge1xuXG4gICAgICAgIHJldHVybiAoZXhwcmVzc2lvbiwgbWVzc2FnZSkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoIWV4cHJlc3Npb24pIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBBc3luYzogJHttZXNzYWdlfS5gKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBtZXRob2QgaXNHZW5lcmF0b3JcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW1cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqL1xuICAgIGlzR2VuZXJhdG9yKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gJiYgJ25leHQnIGluIGl0ZW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG1ldGhvZCBpc0Z1bmN0aW9uXG4gICAgICogQHBhcmFtIHsqfSBpdGVtXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0Z1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBpdGVtID09PSAnZnVuY3Rpb24nO1xuICAgIH1cblxufVxuIl19
