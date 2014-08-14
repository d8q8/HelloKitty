/**
* Created by d8q8 on 2014/8/12.
*/
var Lcp;
(function (Lcp) {
    var LListener = (function () {
        function LListener() {
            egret.Logger.warning("不可以实例化LListener类,请实例Lcp.LListener.getInstance()开始");
            if (this._dispatcher == null) {
                this._dispatcher = new egret.EventDispatcher();
            }
        }
        LListener.getInstance = function () {
            if (this._instance == null)
                this._instance = new Lcp.LListener();
            return this._instance;
        };

        LListener.prototype.addEventListener = function (type, listener, thisObject, useCapture, priority) {
            if (typeof useCapture === "undefined") { useCapture = false; }
            if (typeof priority === "undefined") { priority = 0; }
            this._dispatcher.addEventListener(type, listener, thisObject, useCapture, priority);
        };

        LListener.prototype.removeEventListener = function (type, listener, thisObject, useCapture) {
            if (typeof useCapture === "undefined") { useCapture = false; }
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
    Lcp.LListener = LListener;
    LListener.prototype.__class__ = "Lcp.LListener";
})(Lcp || (Lcp = {}));
