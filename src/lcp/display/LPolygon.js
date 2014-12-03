var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by d8q8 on 2014/8/15.
 * @module Lcp
 * @class LPolygon
 * @constructor
 **/
var lcp;
(function (lcp) {
    /**
     * 绘制多边形
     */
    var LPolygon = (function (_super) {
        __extends(LPolygon, _super);
        function LPolygon(vars) {
            _super.call(this, vars);
            this.CLASS_NAME = "LPolygon";
            this.x = this.vars.x;
            this.y = this.vars.y;
            this.width = this.vars.width;
            this.height = this.vars.height;
            this.touchEnabled = this.vars.touchEnabled;
            this.name = this.vars.name;
        }
        LPolygon.prototype.drawShape = function () {
            this.graphics.moveTo(this.vars.width / 2, 0);
            for (var i = 1; i < this.vars.corner; i++) {
                var rad = 2 * Math.PI / this.vars.corner * i;
                this.graphics.lineTo(this.vars.width / 2 * (1 + Math.sin(rad)), this.vars.height / 2 * (1 - Math.cos(rad)));
            }
        };
        LPolygon.prototype.clone = function () {
            return arguments.callee(this.vars);
        };
        return LPolygon;
    })(lcp.LGraphics);
    lcp.LPolygon = LPolygon;
    LPolygon.prototype.__class__ = "lcp.LPolygon";
})(lcp || (lcp = {}));
