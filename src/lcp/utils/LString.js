/**
 * Created by d8q8 on 2014/8/18.
 * @module Lcp
 * @class LString
 * @constructor
 **/
var lcp;
(function (lcp) {
    /**
     * 字符处理类(暂未完善)
     */
    var LString = (function () {
        function LString() {
            this.CLASS_NAME = "LString";
        }
        /**
         * 类名
         * @returns {string}
         */
        LString.prototype.toString = function () {
            console.log("ClassName", this.CLASS_NAME);
            return this.CLASS_NAME;
        };
        return LString;
    })();
    lcp.LString = LString;
    LString.prototype.__class__ = "lcp.LString";
})(lcp || (lcp = {}));
