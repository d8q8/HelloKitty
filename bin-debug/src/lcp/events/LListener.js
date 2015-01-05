/**
 * Created by d8q8 on 2014/8/12.
 * @module lcp
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
            if (this._dispatcher == null)
                this._dispatcher = new egret.EventDispatcher();
        }
        /**
         * 单例全局侦听类
         * @returns {lcp.LListener}
         */
        LListener.getInstance = function () {
            if (this._instance == null)
                this._instance = new LListener();
            return this._instance;
        };
        /**
         * 注册全局侦听
         * @param type
         * @param listener
         * @param thisObject
         * @param useCapture
         * @param priority
         */
        LListener.prototype.addEventListener = function (type, listener, thisObject, useCapture, priority) {
            if (useCapture === void 0) { useCapture = false; }
            if (priority === void 0) { priority = 0; }
            this._dispatcher.addEventListener(type, listener, thisObject, useCapture, priority);
        };
        /**
         * 移除全局侦听
         * @param type
         * @param listener
         * @param thisObject
         * @param useCapture
         */
        LListener.prototype.removeEventListener = function (type, listener, thisObject, useCapture) {
            if (useCapture === void 0) { useCapture = false; }
            this._dispatcher.removeEventListener(type, listener, thisObject, useCapture);
        };
        /**
         * 判断是否有全局侦听
         * @param type
         * @returns {boolean}
         */
        LListener.prototype.hasEventListener = function (type) {
            return this._dispatcher.hasEventListener(type);
        };
        /**
         * 检查是否用此 EventDispatcher 对象或其任何始祖为指定事件类型注册了全局事件侦听器
         * @param type
         * @returns {boolean}
         */
        LListener.prototype.willTrigger = function (type) {
            return this._dispatcher.willTrigger(type);
        };
        /**
         * 派发全局事件
         * @param event
         * @returns {boolean}
         */
        LListener.prototype.dispatchEvent = function (event) {
            return this._dispatcher.dispatchEvent(event);
        };
        /**
         * 类名
         * @returns {string}
         */
        LListener.prototype.toString = function () {
            return this._dispatcher.toString();
        };
        return LListener;
    })();
    lcp.LListener = LListener;
    LListener.prototype.__class__ = "lcp.LListener";
})(lcp || (lcp = {}));
