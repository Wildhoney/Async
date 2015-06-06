(function main($window) {

    "use strict";

    /**
     * @module Efflux
     * @author Adam Timberlake
     * @link https://github.com/Wildhoney/Efflux
     */
    export default class Efflux {

    }

    // Register the global variable if the `window` object is available.
    if ($window.Efflux) {
        $window.Efflux = Efflux;
    }

})(window);