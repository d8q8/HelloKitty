/**
 * Created by d8q8 on 2014/8/12.
 * @module Lcp
 * @class LTrace
 * @constructor
 */
var lcp;
(function (lcp) {
    /**
     * 跟踪捕获类(待完善)
     */
    var LTrace = (function () {
        function LTrace() {
            this.CLASS_NAME = "LTrace";
        }
        /**
         * 跟踪捕获
         * @param message
         * @param optionalParams
         */
        LTrace.trace = function (message) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
            console.log(message, optionalParams);
        };
        /**
         * 类名
         * @returns {string}
         */
        LTrace.prototype.toString = function () {
            return this.CLASS_NAME;
        };
        return LTrace;
    })();
    lcp.LTrace = LTrace;
    LTrace.prototype.__class__ = "lcp.LTrace";
})(lcp || (lcp = {}));
