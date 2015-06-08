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
     * @param {Function} [fn=function*() {}]
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

                    if (!iteration.value || typeof iteration.value !== 'object' || !('then' in iteration.value)) {
                        return void reject(throwException('Non-thenable value yielded by generator'));
                    }

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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYXRpbWJlcmxha2UvV2Vicm9vdC9Bc3luYy9zcmMvYXN5bmMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztxQkNLZSxDQUFDLFNBQVMsSUFBSSxDQUFDLE9BQU8sRUFBRTs7QUFFbkMsZ0JBQVksQ0FBQzs7QUFFYixRQUFNLGdCQUFnQiwyQkFBRyxTQUFuQixnQkFBZ0I7Ozs7OzJCQUNaLEtBQUs7Ozs7OztXQURULGdCQUFnQjtLQUVyQixDQUFBLENBQUM7Ozs7Ozs7QUFPRixhQUFTLGNBQWMsQ0FBQyxPQUFPLEVBQUU7QUFDN0IsZUFBTyxJQUFJLEtBQUssYUFBVyxPQUFPLE9BQUksQ0FBQztLQUMxQzs7Ozs7OztBQU9ELGFBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRTtBQUN4QixlQUFPLE9BQU8sWUFBWSxLQUFLLEdBQUcsT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2xFOzs7Ozs7O0FBT0QsV0FBTyxTQUFTLEtBQUssR0FBd0I7WUFBdkIsRUFBRSxnQ0FBRyxnQkFBZ0I7O0FBRXZDLGVBQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSzs7QUFFNUMsZ0JBQUksT0FBTyxFQUFFLEtBQUssVUFBVSxFQUFFO0FBQzFCLHVCQUFPLEtBQUssTUFBTSxDQUFDLGNBQWMsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7YUFDMUU7O0FBRUQsZ0JBQU0sU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDOztBQUV2QixnQkFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUEsQUFBQyxFQUFFO0FBQ3RDLHVCQUFPLEtBQUssTUFBTSxDQUFDLGNBQWMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7YUFDdkU7O0FBRUQsZ0JBQUk7O0FBRUEsaUJBQUMsU0FBUyxjQUFjLENBQUMsU0FBUyxFQUFFOztBQUVoQyx3QkFBSSxTQUFTLENBQUMsSUFBSSxFQUFFO0FBQ2hCLCtCQUFPLEtBQUssT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDeEM7O0FBRUQsNkJBQVMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRW5ELHdCQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssSUFBSSxPQUFPLFNBQVMsQ0FBQyxLQUFLLEtBQUssUUFBUSxJQUFJLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUEsQUFBQyxFQUFFO0FBQ3pGLCtCQUFPLEtBQUssTUFBTSxDQUFDLGNBQWMsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2pGOztBQUVELDZCQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQUs7K0JBQUssY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQUEsRUFDaEQsVUFBQyxLQUFLOytCQUFLLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQUEsQ0FBQyxDQUFDO2lCQUU3RCxDQUFBLENBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7YUFFeEIsQ0FBQyxPQUFPLEtBQUssRUFBRTtBQUFFLHVCQUFPLEtBQUssTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQUU7U0FFNUQsQ0FBQyxDQUFDO0tBRU4sQ0FBQztDQUVMLENBQUEsQ0FBRSxNQUFNLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBAbW9kdWxlIEFzeW5jXG4gKiBAYXV0aG9yIEFkYW0gVGltYmVybGFrZVxuICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL1dpbGRob25leS9Bc3luY1xuICovXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gbWFpbigkd2luZG93KSB7XG5cbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGNvbnN0IGRlZmF1bHRHZW5lcmF0b3IgPSBmdW5jdGlvbiooKSB7XG4gICAgICAgIHlpZWxkIGZhbHNlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIHRocm93RXhjZXB0aW9uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2VcbiAgICAgKiBAcmV0dXJuIHtFcnJvcn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0aHJvd0V4Y2VwdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoYEFzeW5jOiAke21lc3NhZ2V9LmApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBtZXRob2Qgd3JhcEVycm9yXG4gICAgICogQHBhcmFtIHtTdHJpbmd8RXJyb3J9IG1lc3NhZ2VcbiAgICAgKiBAcmV0dXJuIHtFcnJvcn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB3cmFwRXJyb3IobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gbWVzc2FnZSBpbnN0YW5jZW9mIEVycm9yID8gbWVzc2FnZSA6IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZm49ZnVuY3Rpb24qKCkge31dXG4gICAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAgICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uIEFzeW5jKGZuID0gZGVmYXVsdEdlbmVyYXRvcikge1xuXG4gICAgICAgIHJldHVybiBuZXcgJHdpbmRvdy5Qcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIHJlamVjdCh0aHJvd0V4Y2VwdGlvbignTm9uLWZ1bmN0aW9uIHBhc3NlZCBhcyBnZW5lcmF0b3InKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGdlbmVyYXRvciA9IGZuKCk7XG5cbiAgICAgICAgICAgIGlmICghZ2VuZXJhdG9yIHx8ICEoJ25leHQnIGluIGdlbmVyYXRvcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCByZWplY3QodGhyb3dFeGNlcHRpb24oJ05vbi1nZW5lcmF0b3IgZnVuY3Rpb24gcGFzc2VkJykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICAgICAgKGZ1bmN0aW9uIGNvbnN1bWVQcm9taXNlKGl0ZXJhdGlvbikge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVyYXRpb24uZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgcmVzb2x2ZShpdGVyYXRpb24udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0aW9uLnZhbHVlID0gUHJvbWlzZS5yZXNvbHZlKGl0ZXJhdGlvbi52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVyYXRpb24udmFsdWUgfHwgdHlwZW9mIGl0ZXJhdGlvbi52YWx1ZSAhPT0gJ29iamVjdCcgfHwgISgndGhlbicgaW4gaXRlcmF0aW9uLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgcmVqZWN0KHRocm93RXhjZXB0aW9uKCdOb24tdGhlbmFibGUgdmFsdWUgeWllbGRlZCBieSBnZW5lcmF0b3InKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpdGVyYXRpb24udmFsdWUudGhlbigodmFsdWUpID0+IGNvbnN1bWVQcm9taXNlKGdlbmVyYXRvci5uZXh0KHZhbHVlKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4gcmVqZWN0KHdyYXBFcnJvcihlcnJvcikpKTtcblxuICAgICAgICAgICAgICAgIH0pKGdlbmVyYXRvci5uZXh0KCkpO1xuXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikgeyByZXR1cm4gdm9pZCByZWplY3Qod3JhcEVycm9yKGVycm9yKSk7IH1cblxuICAgICAgICB9KTtcblxuICAgIH07XG5cbn0pKHdpbmRvdyk7Il19
