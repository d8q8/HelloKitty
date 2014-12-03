/**
 * Created by d8q8 on 2014/8/12.
 * @module Lcp
 * @class LListener
 * @constructor
 */
var lcp;
(function (lcp) {
    /**
     * 全局侦听类及消息处理
     */
    var LListener = (function () {
        function LListener() {
            this.CLASS_NAME = "LListener";
            egret.Logger.warning("不可以实例化" + this.CLASS_NAME + "类,请实例Lcp." + this.CLASS_NAME + ".getInstance()开始");
            if (this._dispatcher == null) {
                this._dispatcher = new egret.EventDispatcher();
            }
        }
        LListener.getInstance = function () {
            if (this._instance == null)
                this._instance = new LListener();
            return this._instance;
        };
        LListener.prototype.addEventListener = function (type, listener, thisObject, useCapture, priority) {
            if (useCapture === void 0) { useCapture = false; }
            if (priority === void 0) { priority = 0; }
            this._dispatcher.addEventListener(type, listener, thisObject, useCapture, priority);
        };
        LListener.prototype.removeEventListener = function (type, listener, thisObject, useCapture) {
            if (useCapture === void 0) { useCapture = false; }
            this._dispatcher.removeEventListener(type, listener, thisObject, useCapture);
        };
        LListener.prototype.hasEventListener = function (type) {
            return this._dispatcher.hasEventListener(type);
        };
        LListener.prototype.willTrigger = function (type) {
            return this._dispatcher.willTrigger(type);
        };
        LListener.prototype.dispatchEvent = function (event) {
            return this._dispatcher.dispatchEvent(event);
        };
        LListener.prototype.toString = function () {
            return this._dispatcher.toString();
        };
        return LListener;
    })();
    lcp.LListener = LListener;
    LListener.prototype.__class__ = "lcp.LListener";
})(lcp || (lcp = {}));
