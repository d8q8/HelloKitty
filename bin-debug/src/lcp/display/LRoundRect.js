var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by d8q8 on 2014/8/15.
 * @module lcp
 * @class LRoundRect
 * @constructor
 **/
var lcp;
(function (lcp) {
    /**
     * 绘制圆角矩形
     */
    var LRoundRect = (function (_super) {
        __extends(LRoundRect, _super);
        function LRoundRect(vars) {
            _super.call(this);
            this.CLASS_NAME = "LRoundRect";
            if (vars) {
                vars.ellipseHeight = vars.ellipseHeight ? vars.ellipseHeight : vars.ellipseWidth;
                _super.prototype.init.call(this, vars);
            }
        }
        LRoundRect.prototype.drawShape = function () {
            this.graphics.drawRoundRect(0, 0, this.vars.width, this.vars.height, this.vars.ellipseWidth, this.vars.ellipseHeight);
        };
        LRoundRect.prototype.clone = function (vars) {
            return new LRoundRect(vars ? vars : this.vars);
        };
        return LRoundRect;
    })(lcp.LGraphics);
    lcp.LRoundRect = LRoundRect;
    LRoundRect.prototype.__class__ = "lcp.LRoundRect";
})(lcp || (lcp = {}));
