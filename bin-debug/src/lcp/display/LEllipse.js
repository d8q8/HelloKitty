var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by d8q8 on 2014/8/15.
 * @module lcp
 * @class LEllipse
 * @constructor
 **/
var lcp;
(function (lcp) {
    /**
     * 绘制椭圆类
     */
    var LEllipse = (function (_super) {
        __extends(LEllipse, _super);
        function LEllipse(vars) {
            _super.call(this);
            this.CLASS_NAME = "LEllipse";
            if (vars) {
                _super.prototype.init.call(this, vars);
            }
        }
        LEllipse.prototype.drawShape = function () {
            this.graphics.drawEllipse(this.vars.width / 2, this.vars.height / 2, this.vars.width / 2, this.vars.height / 2);
        };
        LEllipse.prototype.clone = function (vars) {
            return new LEllipse(vars ? vars : this.vars);
        };
        return LEllipse;
    })(lcp.LGraphics);
    lcp.LEllipse = LEllipse;
    LEllipse.prototype.__class__ = "lcp.LEllipse";
})(lcp || (lcp = {}));
