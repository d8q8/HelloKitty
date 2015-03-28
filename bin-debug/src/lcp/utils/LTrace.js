/**
 * Created by d8q8 on 2014/8/12.
 * @module lcp
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
            lcp.LTrace.warning(10001, "不可以实例化" + this.CLASS_NAME + "类，这是跟踪捕获类");
        }
        var __egretProto__ = LTrace.prototype;
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
         * 警告类
         * @param errorId
         * @param args
         */
        LTrace.warning = function (errorId) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            egret.egret_string_code[errorId] = "{0}";
            egret.Logger.warningWithErrorId(errorId, args);
        };
        /**
         * 类名
         * @returns {string}
         */
        __egretProto__.toString = function () {
            return this.CLASS_NAME;
        };
        return LTrace;
    })();
    lcp.LTrace = LTrace;
    LTrace.prototype.__class__ = "lcp.LTrace";
})(lcp || (lcp = {}));
