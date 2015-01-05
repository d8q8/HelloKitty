var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by d8q8 on 2014/8/15.
 * @module lcp
 * @class LRect
 * @constructor
 **/
var lcp;
(function (lcp) {
    /**
     * 绘制矩形
     */
    var LRect = (function (_super) {
        __extends(LRect, _super);
        function LRect(vars) {
            _super.call(this);
            this.CLASS_NAME = "LRect";
            if (vars) {
                _super.prototype.init.call(this, vars);
            }
        }
        LRect.prototype.drawShape = function () {
            this.graphics.drawRect(0, 0, this.vars.width, this.vars.height);
        };
        LRect.prototype.clone = function (vars) {
            return new LRect(vars ? vars : this.vars);
        };
        return LRect;
    })(lcp.LGraphics);
    lcp.LRect = LRect;
    LRect.prototype.__class__ = "lcp.LRect";
})(lcp || (lcp = {}));
