/**
 * Created by d8q8 on 2014/8/28.
 * @module lcp
 * @class LRose
 * @constructor
 **/
var lcp;
(function (lcp) {
    /**
     * 绘制玫瑰
     * 玫瑰曲线 r = a*cos(Kθ)
     */
    var LRose = (function (_super) {
        __extends(LRose, _super);
        function LRose(vars) {
            _super.call(this);
            this.CLASS_NAME = 'LRose';
            if (vars) {
                //vars.width = vars.radius * 2;
                //vars.height = vars.radius * 2;
                _super.prototype.init.call(this, vars);
            }
        }
        var __egretProto__ = LRose.prototype;
        __egretProto__.drawShape = function () {
            var angle; //储存极角
            var dist; //储存极径
            var sin;
            var cos;
            this.graphics.moveTo(0, this.vars.radius);
            for (var i = 1; i < 360; i++) {
                //计算极角和极径
                angle = Math.PI * i / 180;
                sin = Math.sin(angle);
                cos = Math.cos(angle);
                dist = this.vars.radius * Math.cos(angle * this.vars.petal);
                //将极坐标转化为直角坐标并画线
                this.graphics.lineTo(this.vars.radius - dist * cos, this.vars.radius - dist * sin);
            }
        };
        __egretProto__.clone = function (vars) {
            return new LRose(vars ? vars : this.vars);
        };
        return LRose;
    })(lcp.LGraphics);
    lcp.LRose = LRose;
    LRose.prototype.__class__ = "lcp.LRose";
})(lcp || (lcp = {}));
