var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* Created by d8q8 on 2014/8/12.
*/
var Lcp;
(function (Lcp) {
    var LEvent = (function (_super) {
        __extends(LEvent, _super);
        function LEvent(type, obj, bubbles, cancelable) {
            if (typeof obj === "undefined") { obj = null; }
            if (typeof bubbles === "undefined") { bubbles = false; }
            if (typeof cancelable === "undefined") { cancelable = false; }
            _super.call(this, type, bubbles, cancelable);
            if (obj != null) {
                this._obj = obj;
            }
        }
        LEvent.prototype.clone = function () {
            return new Lcp.LEvent(this.type, this._obj, this.bubbles, this.cancelable);
        };

        LEvent.prototype.toString = function () {
            console.log("LEvent", "type", "bubbles", "cancelable");
        };

        Object.defineProperty(LEvent.prototype, "param", {
            get: function () {
                return this._obj;
            },
            enumerable: true,
            configurable: true
        });

        LEvent.dispatchLEvent = function (target, type) {
            var eventClass = Lcp.LEvent;
            egret.Event._dispatchByTarget(eventClass, target, type);
        };
        return LEvent;
    })(egret.Event);
    Lcp.LEvent = LEvent;
    LEvent.prototype.__class__ = "Lcp.LEvent";
})(Lcp || (Lcp = {}));
