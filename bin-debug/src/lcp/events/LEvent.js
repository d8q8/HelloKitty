/**
 * Created by d8q8 on 2014/8/12.
 * @module lcp
 * @class LEvent
 * @constructor
 */
var lcp;
(function (lcp) {
    /**
     * 自定义事件类
     */
    var LEvent = (function (_super) {
        __extends(LEvent, _super);
        function LEvent(type, obj, bubbles, cancelable) {
            if (bubbles === void 0) { bubbles = false; }
            if (cancelable === void 0) { cancelable = false; }
            _super.call(this, type, bubbles, cancelable);
            this.obj = obj;
            this.CLASS_NAME = "LEvent";
        }
        var __egretProto__ = LEvent.prototype;
        /**
         * 克隆副本
         * @param obj
         * @returns {lcp.LEvent}
         */
        __egretProto__.clone = function (obj) {
            return new LEvent(this.type, obj ? obj : this.obj, this.bubbles, this.cancelable);
        };
        /**
         * 类输出
         */
        __egretProto__.toString = function () {
            console.log(this.CLASS_NAME, "type", "bubbles", "cancelable");
        };
        Object.defineProperty(__egretProto__, "param", {
            /**
             * 获取传参,
             * @returns {Object}
             */
            get: function () {
                return this.obj;
            },
            enumerable: true,
            configurable: true
        });
        return LEvent;
    })(egret.Event);
    lcp.LEvent = LEvent;
    LEvent.prototype.__class__ = "lcp.LEvent";
})(lcp || (lcp = {}));
