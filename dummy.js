/////////////////////////////////////////////////////////////////////////////////////////////
//
// cc.dummy
//
//    Dummy package for development purposes.
//
// License
//    Apache License Version 2.0
//
// Copyright Nick Verlinden (info@createconform.com)
//
/////////////////////////////////////////////////////////////////////////////////////////////

(function() {
    function Dummy(pkx, module, configuration) {
        var self = this;

        //
        // YOUR CODE HERE
        //
    }

    var singleton;
    (function (obj, factory) {
        var supported = false;
        if (typeof define === "function" && (define.amd || define.using)) {
            define(factory);
            supported = true;
        }
        if (typeof module === "object" && module.exports && typeof require != "undefined" && typeof require.main != "undefined" && require.main !== module) {
            module.exports = factory();
            supported = true;
        }
        if (!supported) {
            obj.returnExports = factory();
        }
    }(this, function() {
        if (singleton) {
            return singleton;
        }
        singleton = new (Function.prototype.bind.apply(Dummy, arguments));
        return singleton;
    }));
})();