var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by d8q8 on 2014/8/28.
 *
 * @class LHeart
 * @constructor
 **/
var lcp;
(function (lcp) {
    /**
     * 绘制心形
     * 笛卡尔心形 r = a(1 - sinθ)
     */
    var LHeart = (function (_super) {
        __extends(LHeart, _super);
        function LHeart(vars) {
            _super.call(this, vars);
            this.CLASS_NAME = 'LHeart';
            this.x = this.vars.x;
            this.y = this.vars.y;
            this.width = this.vars.radius * 2;
            this.height = this.vars.radius * 2;
            this.touchEnabled = this.vars.touchEnabled;
            this.name = this.vars.name;
        }
        LHeart.prototype.drawShape = function () {
            var angle; //储存极角
            var dist; //储存极径
            var sin;
            var cos;
            this.graphics.moveTo(0, 0);
            for (var i = 1; i < 360; i++) {
                //计算极角和极径
                angle = Math.PI * i / 180;
                sin = Math.sin(angle);
                cos = Math.cos(angle);
                dist = this.vars.radius * (1 - sin);
                //将极坐标转化为直角坐标并画线
                this.graphics.lineTo(this.vars.radius - dist * cos, -dist * sin);
            }
        };
        LHeart.prototype.clone = function () {
            return arguments.callee(this.vars);
        };
        return LHeart;
    })(lcp.LGraphics);
    lcp.LHeart = LHeart;
    LHeart.prototype.__class__ = "lcp.LHeart";
})(lcp || (lcp = {}));
