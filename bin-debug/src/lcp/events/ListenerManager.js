/**
 * Created by d8q8 on 2014/12/7.
 * @module lcp
 * @class ListenerManager
 * @constructor
 **/
var lcp;
(function (lcp) {
    /**
     * 侦听管理器类
     */
    var ListenerManager = (function (_super) {
        __extends(ListenerManager, _super);
        function ListenerManager(singletonEnforcer, dispatcher) {
            _super.call(this);
            this.CLASS_NAME = "ListenerManager";
            this._eventDispatcher = dispatcher;
            this._events = [];
        }
        var __egretProto__ = ListenerManager.prototype;
        /**
         * 注册一个IEventDispatcher到侦听管理器
         * @param dispatcher
         * @returns {ListenerManager}
         */
        ListenerManager.getManager = function (dispatcher) {
            if (!ListenerManager._proxyMap)
                ListenerManager._proxyMap = {};
            if (!(dispatcher in ListenerManager._proxyMap))
                ListenerManager._proxyMap[dispatcher] = new ListenerManager(new EventInfo(null, null, dispatcher, false), dispatcher);
            return ListenerManager._proxyMap[dispatcher];
        };
        /**
         * 通知管理器实例被追加一个IEventDispatcher侦听
         * @param type
         * @param listener
         * @param thisObject
         * @param useCapture
         * @param priority
         */
        __egretProto__.addEventListener = function (type, listener, thisObject, useCapture, priority) {
            if (useCapture === void 0) { useCapture = false; }
            if (priority === void 0) { priority = 0; }
            var info = new EventInfo(type, listener, thisObject ? thisObject : this._eventDispatcher, useCapture);
            var l = this._events.length;
            while (l--)
                if (this._events[l].equals(info))
                    return;
            this._events.push(info);
        };
        /**
         * 派发事件
         * @param event
         * @returns {boolean}
         */
        __egretProto__.dispatchEvent = function (event) {
            return this._eventDispatcher.dispatchEvent(event);
        };
        /**
         * 检测是否存在监听器
         * @param type
         * @returns {boolean}
         */
        __egretProto__.hasEventListener = function (type) {
            return this._eventDispatcher.hasEventListener(type);
        };
        /**
         * 检查是否用此 EventDispatcher 对象或其任何始祖为指定事件类型注册了事件侦听器。
         * @param type
         * @returns {boolean}
         */
        __egretProto__.willTrigger = function (type) {
            return this._eventDispatcher.willTrigger(type);
        };
        /**
         * 移除事件侦听器
         * @param type
         * @param listener
         * @param thisObject
         * @param useCapture
         */
        __egretProto__.removeEventListener = function (type, listener, thisObject, useCapture) {
            if (useCapture === void 0) { useCapture = false; }
            if (this._blockRequest)
                return;
            var info = new EventInfo(type, listener, thisObject ? thisObject : this._eventDispatcher, useCapture);
            var l = this._events.length;
            while (l--)
                if (this._events[l].equals(info))
                    this._events.splice(l, 1);
        };
        /**
         * 移除指定类型的事件
         * @param type
         */
        __egretProto__.removeEventsForType = function (type) {
            this._blockRequest = true;
            var l = this._events.length;
            var eventInfo;
            while (l--) {
                eventInfo = this._events[l];
                if (eventInfo.type == type) {
                    this._events.splice(l, 1);
                    this._eventDispatcher.removeEventListener(eventInfo.type, eventInfo.listener, eventInfo.thisObject, eventInfo.useCapture);
                }
            }
            this._blockRequest = false;
        };
        /**
         * 移除指定侦听器报告的事件
         * @param listener
         */
        __egretProto__.removeEventsForListener = function (listener) {
            this._blockRequest = true;
            var l = this._events.length;
            var eventInfo;
            while (l--) {
                eventInfo = this._events[l];
                if (eventInfo.listener == listener) {
                    this._events.splice(l, 1);
                    this._eventDispatcher.removeEventListener(eventInfo.type, eventInfo.listener, eventInfo.thisObject, eventInfo.useCapture);
                }
            }
            this._blockRequest = false;
        };
        /**
         * 移除所有侦听
         */
        __egretProto__.removeEventListeners = function () {
            this._blockRequest = true;
            var l = this._events.length;
            var eventInfo;
            while (l--) {
                eventInfo = this._events.splice(l, 1)[0];
                this._eventDispatcher.removeEventListener(eventInfo.type, eventInfo.listener, eventInfo.thisObject, eventInfo.useCapture);
            }
            this._blockRequest = false;
        };
        /**
         * 获取指定事件或所有事件的总侦听数
         * @param type
         * @returns {number}
         */
        __egretProto__.getTotalEventListeners = function (type) {
            return (type == null) ? this._events.length : lcp.ArrayUtil.getItemsByKey(this._events, 'type', type).length;
        };
        /**
         * 释放
         */
        __egretProto__.destroy = function () {
            this.removeEventListeners();
            delete ListenerManager._proxyMap[this._eventDispatcher];
            this._eventDispatcher = null;
            _super.prototype.destroy.call(this);
        };
        /**
         * 类名
         * @returns {string}
         */
        __egretProto__.toString = function () {
            //console.log("ClassName",this.CLASS_NAME);
            return this.CLASS_NAME;
        };
        return ListenerManager;
    })(lcp.Destroyable);
    lcp.ListenerManager = ListenerManager;
    ListenerManager.prototype.__class__ = "lcp.ListenerManager";
    /**
     * 事件信息类
     */
    var EventInfo = (function () {
        function EventInfo(type, listener, thisObject, useCapture) {
            this.type = type;
            this.listener = listener;
            this.thisObject = thisObject;
            this.useCapture = useCapture;
        }
        var __egretProto__ = EventInfo.prototype;
        __egretProto__.equals = function (eventInfo) {
            return this.type == eventInfo.type && this.listener == eventInfo.listener && this.thisObject == eventInfo.thisObject && this.useCapture == eventInfo.useCapture;
        };
        return EventInfo;
    })();
    lcp.EventInfo = EventInfo;
    EventInfo.prototype.__class__ = "lcp.EventInfo";
})(lcp || (lcp = {}));
