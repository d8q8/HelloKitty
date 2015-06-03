/**
 * Created by d8q8 on 2014/8/15.
 * @module lcp
 * @class LCircle
 * @constructor
 **/
var lcp;
(function (lcp) {
    /**
     * 绘制圆形类
     */
    var LCircle = (function (_super) {
        __extends(LCircle, _super);
        function LCircle(vars) {
            _super.call(this);
            this.CLASS_NAME = "LCircle";
            if (vars) {
                vars.width = vars.radius * 2;
                vars.height = vars.radius * 2;
                _super.prototype.init.call(this, vars);
            }
        }
        var __egretProto__ = LCircle.prototype;
        __egretProto__.drawShape = function () {
            this.graphics.drawCircle(this.vars.radius, this.vars.radius, this.vars.radius);
        };
        __egretProto__.clone = function (vars) {
            return new LCircle(vars ? vars : this.vars);
        };
        return LCircle;
    })(lcp.LGraphics);
    lcp.LCircle = LCircle;
    LCircle.prototype.__class__ = "lcp.LCircle";
})(lcp || (lcp = {}));
