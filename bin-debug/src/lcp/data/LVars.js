/**
 * Created by d8q8 on 2014/8/15.
 * @module lcp
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
            if (vars) {
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
        /**
         * 简单遍历并调用对象集属性
         * @param $target
         * @param $proper
         *
         * 使用方法如下:
         * --CODE: lcp.LVars.some(mc1, {alpha:0, scaleX:.5 ,touchEnabled:true});
         */
        LVars.some = function ($target, $proper) {
            if (!$proper)
                return;
            for (var properties in $proper) {
                if ($target.hasOwnProperty(properties)) {
                    try {
                        $target[properties] = $proper[properties];
                    }
                    catch (e) {
                        if ($proper[properties] != null) {
                            if ($proper[properties] instanceof Array) {
                                try {
                                    $target[properties].apply(null, $proper[properties]);
                                }
                                catch (e) {
                                }
                            }
                            else {
                                $target[properties]($proper[properties]);
                            }
                        }
                        else {
                            $target[properties]();
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
