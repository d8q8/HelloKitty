/**
 * Created by d8q8 on 2014/8/15.
 * @module Lcp
 * @class LVars
 * @constructor
 **/
var lcp;
(function (lcp) {
    /**
     * 本想做个全局变参处理的,暂时还没考虑清楚,先放着,以后跟进(未完善)
     */
    var LVars = (function () {
        function LVars(vars) {
            this.CLASS_NAME = "LVars";
            this._vars = {};
            if (vars != null) {
                for (var p in vars) {
                    this._vars[p] = vars[p];
                }
            }
        }
        LVars.prototype._set = function (property, value) {
            if (value == null) {
                delete this._vars[property];
            }
            else {
                this._vars[property] = value;
            }
            return this;
        };
        Object.defineProperty(LVars.prototype, "vars", {
            get: function () {
                return this._vars;
            },
            enumerable: true,
            configurable: true
        });
        LVars.some = function ($target, $proper) {
            for (var properties in $proper) {
                if ($target.hasOwnProperty(properties)) {
                    $target[properties] = $proper[properties];
                    if ($proper[properties] != null) {
                        if ($proper[properties] instanceof Array) {
                            $target[properties].apply(null, $proper[properties]);
                        }
                    }
                }
            }
        };
        return LVars;
    })();
    lcp.LVars = LVars;
    LVars.prototype.__class__ = "lcp.LVars";
})(lcp || (lcp = {}));
