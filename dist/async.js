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
                        return void generator['throw'](throwException('Non-thenable value yielded by generator'));
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYXRpbWJlcmxha2UvV2Vicm9vdC9Bc3luYy9zcmMvYXN5bmMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztxQkNLZSxDQUFDLFNBQVMsSUFBSSxDQUFDLE9BQU8sRUFBRTs7QUFFbkMsZ0JBQVksQ0FBQzs7QUFFYixRQUFNLGdCQUFnQiwyQkFBRyxTQUFuQixnQkFBZ0I7Ozs7OzJCQUNaLEtBQUs7Ozs7OztXQURULGdCQUFnQjtLQUVyQixDQUFBLENBQUM7Ozs7Ozs7QUFPRixhQUFTLGNBQWMsQ0FBQyxPQUFPLEVBQUU7QUFDN0IsZUFBTyxJQUFJLEtBQUssYUFBVyxPQUFPLE9BQUksQ0FBQztLQUMxQzs7Ozs7OztBQU9ELGFBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRTtBQUN4QixlQUFPLE9BQU8sWUFBWSxLQUFLLEdBQUcsT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2xFOzs7Ozs7O0FBT0QsV0FBTyxTQUFTLEtBQUssR0FBd0I7WUFBdkIsRUFBRSxnQ0FBRyxnQkFBZ0I7O0FBRXZDLGVBQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSzs7QUFFNUMsZ0JBQUksT0FBTyxFQUFFLEtBQUssVUFBVSxFQUFFO0FBQzFCLHVCQUFPLEtBQUssTUFBTSxDQUFDLGNBQWMsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7YUFDMUU7O0FBRUQsZ0JBQU0sU0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDOztBQUV2QixnQkFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUEsQUFBQyxFQUFFO0FBQ3RDLHVCQUFPLEtBQUssTUFBTSxDQUFDLGNBQWMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7YUFDdkU7O0FBRUQsZ0JBQUk7O0FBRUEsaUJBQUMsU0FBUyxjQUFjLENBQUMsU0FBUyxFQUFFOztBQUVoQyx3QkFBSSxTQUFTLENBQUMsSUFBSSxFQUFFO0FBQ2hCLCtCQUFPLEtBQUssT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDeEM7O0FBRUQsNkJBQVMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRW5ELHdCQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssSUFBSSxPQUFPLFNBQVMsQ0FBQyxLQUFLLEtBQUssUUFBUSxJQUFJLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUEsQUFBQyxFQUFFO0FBQ3pGLCtCQUFPLEtBQUssU0FBUyxTQUFNLENBQUMsY0FBYyxDQUFDLHlDQUF5QyxDQUFDLENBQUMsQ0FBQztxQkFDMUY7O0FBRUQsNkJBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBSzsrQkFBSyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFBQSxFQUNoRCxVQUFDLEtBQUs7K0JBQUssTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFBQSxDQUFDLENBQUM7aUJBRTdELENBQUEsQ0FBRSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUV4QixDQUFDLE9BQU8sS0FBSyxFQUFFO0FBQUUsdUJBQU8sS0FBSyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFBRTtTQUU1RCxDQUFDLENBQUM7S0FFTixDQUFDO0NBRUwsQ0FBQSxDQUFFLE1BQU0sQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIEBtb2R1bGUgQXN5bmNcbiAqIEBhdXRob3IgQWRhbSBUaW1iZXJsYWtlXG4gKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vV2lsZGhvbmV5L0FzeW5jXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBtYWluKCR3aW5kb3cpIHtcblxuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgY29uc3QgZGVmYXVsdEdlbmVyYXRvciA9IGZ1bmN0aW9uKigpIHtcbiAgICAgICAgeWllbGQgZmFsc2U7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEBtZXRob2QgdGhyb3dFeGNlcHRpb25cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZVxuICAgICAqIEByZXR1cm4ge0Vycm9yfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRocm93RXhjZXB0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgQXN5bmM6ICR7bWVzc2FnZX0uYCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG1ldGhvZCB3cmFwRXJyb3JcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xFcnJvcn0gbWVzc2FnZVxuICAgICAqIEByZXR1cm4ge0Vycm9yfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHdyYXBFcnJvcihtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBtZXNzYWdlIGluc3RhbmNlb2YgRXJyb3IgPyBtZXNzYWdlIDogbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbj1mdW5jdGlvbiooKSB7fV1cbiAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAgICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gQXN5bmMoZm4gPSBkZWZhdWx0R2VuZXJhdG9yKSB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyAkd2luZG93LlByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgcmVqZWN0KHRocm93RXhjZXB0aW9uKCdOb24tZnVuY3Rpb24gcGFzc2VkIGFzIGdlbmVyYXRvcicpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZ2VuZXJhdG9yID0gZm4oKTtcblxuICAgICAgICAgICAgaWYgKCFnZW5lcmF0b3IgfHwgISgnbmV4dCcgaW4gZ2VuZXJhdG9yKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIHJlamVjdCh0aHJvd0V4Y2VwdGlvbignTm9uLWdlbmVyYXRvciBmdW5jdGlvbiBwYXNzZWQnKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24gY29uc3VtZVByb21pc2UoaXRlcmF0aW9uKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZXJhdGlvbi5kb25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCByZXNvbHZlKGl0ZXJhdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpdGVyYXRpb24udmFsdWUgPSBQcm9taXNlLnJlc29sdmUoaXRlcmF0aW9uLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWl0ZXJhdGlvbi52YWx1ZSB8fCB0eXBlb2YgaXRlcmF0aW9uLnZhbHVlICE9PSAnb2JqZWN0JyB8fCAhKCd0aGVuJyBpbiBpdGVyYXRpb24udmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCBnZW5lcmF0b3IudGhyb3codGhyb3dFeGNlcHRpb24oJ05vbi10aGVuYWJsZSB2YWx1ZSB5aWVsZGVkIGJ5IGdlbmVyYXRvcicpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGlvbi52YWx1ZS50aGVuKCh2YWx1ZSkgPT4gY29uc3VtZVByb21pc2UoZ2VuZXJhdG9yLm5leHQodmFsdWUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiByZWplY3Qod3JhcEVycm9yKGVycm9yKSkpO1xuXG4gICAgICAgICAgICAgICAgfSkoZ2VuZXJhdG9yLm5leHQoKSk7XG5cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7IHJldHVybiB2b2lkIHJlamVjdCh3cmFwRXJyb3IoZXJyb3IpKTsgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxufSkod2luZG93KTsiXX0=
