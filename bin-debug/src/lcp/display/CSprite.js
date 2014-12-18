var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by d8q8 on 2014/12/8.
 * @module lcp
 * @class CSprite
 * @constructor
 **/
var lcp;
(function (lcp) {
    var CSprite = (function (_super) {
        __extends(CSprite, _super);
        function CSprite() {
            _super.call(this);
            this.CLASS_NAME = "CSprite";
            this._listenerManager = lcp.ListenerManager.getManager(this);
        }
        /**
         * 派发事件
         * @param event
         * @returns {boolean}
         */
        CSprite.prototype.dispatchEvent = function (event) {
            if (this.willTrigger(event.type))
                return _super.prototype.dispatchEvent.call(this, event);
            return true;
        };
        /**
         * 注册侦听
         * @param type
         * @param listener
         * @param thisObject
         * @param useCapture
         * @param priority
         */
        CSprite.prototype.addEventListener = function (type, listener, thisObject, useCapture, priority) {
            if (useCapture === void 0) { useCapture = false; }
            if (priority === void 0) { priority = 0; }
            _super.prototype.addEventListener.call(this, type, listener, thisObject, useCapture, priority);
            this._listenerManager.addEventListener(type, listener, thisObject, useCapture, priority);
        };
        /**
         * 移除侦听
         * @param type
         * @param listener
         * @param thisObject
         * @param useCapture
         */
        CSprite.prototype.removeEventListener = function (type, listener, thisObject, useCapture) {
            if (useCapture === void 0) { useCapture = false; }
            _super.prototype.removeEventListener.call(this, type, listener, thisObject, useCapture);
            this._listenerManager.removeEventListener(type, listener, thisObject, useCapture);
        };
        /**
         * 移除指定类型的所有事件
         * @param type
         */
        CSprite.prototype.removeEventsForType = function (type) {
            this._listenerManager.removeEventsForType(type);
        };
        /**
         * 移除指定侦听器报告的所有事件
         * @param listener
         */
        CSprite.prototype.removeEventsForListener = function (listener) {
            this._listenerManager.removeEventsForListener(listener);
        };
        /**
         * 移除所有侦听
         */
        CSprite.prototype.removeEventListeners = function () {
            this._listenerManager.removeEventListeners();
        };
        /**
         * 获取指定事件或所有事件的总侦听数
         * @param type
         * @returns {number}
         */
        CSprite.prototype.getTotalEventListeners = function (type) {
            if (type === void 0) { type = null; }
            return this._listenerManager.getTotalEventListeners(type);
        };
        /**
         * 获取当前子元件
         * @returns {Array<any>}
         */
        CSprite.prototype.children = function () {
            return lcp.DisplayObjectUtil.getChildren(this);
        };
        /**
         * 移除所有子元件
         * @param destroyChildren
         * @param recursive
         */
        CSprite.prototype.removeAllChildren = function (destroyChildren, recursive) {
            if (destroyChildren === void 0) { destroyChildren = false; }
            if (recursive === void 0) { recursive = false; }
            lcp.DisplayObjectUtil.removeAllChildren(this, destroyChildren, recursive);
        };
        /**
         * 移除所有子元件并销毁
         * @param destroyChildren
         * @param recursive
         */
        CSprite.prototype.removeAllChildrenAndDestroy = function (destroyChildren, recursive) {
            if (destroyChildren === void 0) { destroyChildren = false; }
            if (recursive === void 0) { recursive = false; }
            this.removeAllChildren(destroyChildren, recursive);
            this.destroy();
        };
        /**
         * 释放
         */
        CSprite.prototype.destroy = function () {
            this._listenerManager.destroy();
            this.isDestroyed = true;
            if (this.parent != null)
                this.parent.removeChild(this);
        };
        /**
         * 类名
         * @returns {string}
         */
        CSprite.prototype.toString = function () {
            //console.log("ClassName",this.CLASS_NAME);
            return this.CLASS_NAME;
        };
        return CSprite;
    })(egret.Sprite);
    lcp.CSprite = CSprite;
    CSprite.prototype.__class__ = "lcp.CSprite";
})(lcp || (lcp = {}));
