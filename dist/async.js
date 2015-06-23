(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @module Async
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Async
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = (function main($window) {

    'use strict';

    var defaultGenerator = regeneratorRuntime.mark(function defaultGenerator() {
        return regeneratorRuntime.wrap(function defaultGenerator$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    context$2$0.next = 2;
                    return false;

                case 2:
                case 'end':
                    return context$2$0.stop();
            }
        }, defaultGenerator, this);
    });

    /**
     * @method throwException
     * @param {String} message
     * @return {Error}
     */
    function throwException(message) {
        return new Error('Async: ' + message + '.');
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
     * @param {Function} [fn=defaultGenerator]
     * @return {Function}
     */
    return function Async() {
        var fn = arguments[0] === undefined ? defaultGenerator : arguments[0];

        return new $window.Promise(function (resolve, reject) {

            if (typeof fn !== 'function') {
                return void reject(throwException('Non-function passed as generator'));
            }

            var generator = fn();

            if (!generator || !('next' in generator)) {
                return void reject(throwException('Non-generator function passed'));
            }

            try {

                (function consumePromise(iteration) {

                    if (iteration.done) {
                        return void resolve(iteration.value);
                    }

                    iteration.value = Promise.resolve(iteration.value);
                    iteration.value.then(function (value) {
                        return consumePromise(generator.next(value));
                    }, function (error) {
                        return reject(wrapError(error));
                    });
                })(generator.next());
            } catch (error) {
                return void reject(wrapError(error));
            }
        });
    };
})(window);

module.exports = exports['default'];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYXRpbWJlcmxha2UvV2Vicm9vdC9Bc3luYy9zcmMvYXN5bmMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztxQkNLZSxDQUFDLFNBQVMsSUFBSSxDQUFDLE9BQU8sRUFBRTs7QUFFbkMsZ0JBQVksQ0FBQzs7QUFFYixRQUFNLGdCQUFnQiwyQkFBRyxTQUFuQixnQkFBZ0I7Ozs7OzJCQUNaLEtBQUs7Ozs7OztXQURULGdCQUFnQjtLQUVyQixDQUFBLENBQUM7Ozs7Ozs7QUFPRixhQUFTLGNBQWMsQ0FBQyxPQUFPLEVBQUU7QUFDN0IsZUFBTyxJQUFJLEtBQUssYUFBVyxPQUFPLE9BQUksQ0FBQztLQUMxQzs7Ozs7OztBQU9ELGFBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRTtBQUN4QixlQUFPLE9BQU8sWUFBWSxLQUFLLEdBQUcsT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2xFOzs7Ozs7O0FBT0QsV0FBTyxTQUFTLEtBQUssR0FBd0I7WUFBdkIsRUFBRSxnQ0FBRyxnQkFBZ0I7O0FBRXZDLGVBQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSzs7QUFFNUMsZ0JBQUksT0FBTyxFQUFFLEtBQUssVUFBVSxFQUFFO0FBQzFCLHVCQUFPLEtBQUssTUFBTSxDQUFDLGNBQWMsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7YUFDMUU7O0FBRUQsZ0JBQU0sU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDOztBQUV2QixnQkFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUEsQUFBQyxFQUFFO0FBQ3RDLHVCQUFPLEtBQUssTUFBTSxDQUFDLGNBQWMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7YUFDdkU7O0FBRUQsZ0JBQUk7O0FBRUEsaUJBQUMsU0FBUyxjQUFjLENBQUMsU0FBUyxFQUFFOztBQUVoQyx3QkFBSSxTQUFTLENBQUMsSUFBSSxFQUFFO0FBQ2hCLCtCQUFPLEtBQUssT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDeEM7O0FBRUQsNkJBQVMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkQsNkJBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBSzsrQkFBSyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFBQSxFQUNoRCxVQUFDLEtBQUs7K0JBQUssTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFBQSxDQUFDLENBQUM7aUJBRTdELENBQUEsQ0FBRSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUV4QixDQUFDLE9BQU8sS0FBSyxFQUFFO0FBQUUsdUJBQU8sS0FBSyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFBRTtTQUU1RCxDQUFDLENBQUM7S0FFTixDQUFDO0NBRUwsQ0FBQSxDQUFFLE1BQU0sQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIEBtb2R1bGUgQXN5bmNcbiAqIEBhdXRob3IgQWRhbSBUaW1iZXJsYWtlXG4gKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vV2lsZGhvbmV5L0FzeW5jXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBtYWluKCR3aW5kb3cpIHtcblxuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgY29uc3QgZGVmYXVsdEdlbmVyYXRvciA9IGZ1bmN0aW9uKigpIHtcbiAgICAgICAgeWllbGQgZmFsc2U7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBtZXRob2QgdGhyb3dFeGNlcHRpb25cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgICAqIEByZXR1cm4ge0Vycm9yfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRocm93RXhjZXB0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgQXN5bmM6ICR7bWVzc2FnZX0uYCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG1ldGhvZCB3cmFwRXJyb3JcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xFcnJvcn0gbWVzc2FnZVxuICAgICAqIEByZXR1cm4ge0Vycm9yfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHdyYXBFcnJvcihtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBtZXNzYWdlIGluc3RhbmNlb2YgRXJyb3IgPyBtZXNzYWdlIDogbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbj1kZWZhdWx0R2VuZXJhdG9yXVxuICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiBBc3luYyhmbiA9IGRlZmF1bHRHZW5lcmF0b3IpIHtcblxuICAgICAgICByZXR1cm4gbmV3ICR3aW5kb3cuUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCByZWplY3QodGhyb3dFeGNlcHRpb24oJ05vbi1mdW5jdGlvbiBwYXNzZWQgYXMgZ2VuZXJhdG9yJykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBnZW5lcmF0b3IgPSBmbigpO1xuXG4gICAgICAgICAgICBpZiAoIWdlbmVyYXRvciB8fCAhKCduZXh0JyBpbiBnZW5lcmF0b3IpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgcmVqZWN0KHRocm93RXhjZXB0aW9uKCdOb24tZ2VuZXJhdG9yIGZ1bmN0aW9uIHBhc3NlZCcpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgIChmdW5jdGlvbiBjb25zdW1lUHJvbWlzZShpdGVyYXRpb24pIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlcmF0aW9uLmRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIHJlc29sdmUoaXRlcmF0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGlvbi52YWx1ZSA9IFByb21pc2UucmVzb2x2ZShpdGVyYXRpb24udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpdGVyYXRpb24udmFsdWUudGhlbigodmFsdWUpID0+IGNvbnN1bWVQcm9taXNlKGdlbmVyYXRvci5uZXh0KHZhbHVlKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4gcmVqZWN0KHdyYXBFcnJvcihlcnJvcikpKTtcblxuICAgICAgICAgICAgICAgIH0pKGdlbmVyYXRvci5uZXh0KCkpO1xuXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4gdm9pZCByZWplY3Qod3JhcEVycm9yKGVycm9yKSk7IH1cblxuICAgICAgICB9KTtcblxuICAgIH07XG5cbn0pKHdpbmRvdyk7Il19
