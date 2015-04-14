/**
 * Created by d8q8 on 2014/11/6.
 * @module lcp
 * @class Disposable
 * @constructor
 **/
var lcp;
(function (lcp) {
    /**
     * 销毁类
     */
    var Destroyable = (function () {
        function Destroyable() {
            this.CLASS_NAME = "Destroyable";
        }
        var __egretProto__ = Destroyable.prototype;
        __egretProto__.destroy = function () {
            this.isDestroyed = true;
        };
        /**
         * 类名
         * @returns {string}
         */
        __egretProto__.toString = function () {
            return this.CLASS_NAME;
        };
        return Destroyable;
    })();
    lcp.Destroyable = Destroyable;
    Destroyable.prototype.__class__ = "lcp.Destroyable";
})(lcp || (lcp = {}));
