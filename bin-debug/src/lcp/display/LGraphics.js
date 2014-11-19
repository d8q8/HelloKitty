var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by d8q8 on 2014/8/15.
 * @module lcp
 * @class LGraphics
 * @constructor
 **/
var lcp;
(function (lcp) {
    /**
     * 绘图基类
     */
    var LGraphics = (function (_super) {
        __extends(LGraphics, _super);
        function LGraphics(vars) {
            _super.call(this);
            this.vars = vars;
            this.CLASS_NAME = "LGraphics";
            this.vars = {};
            this.initValue(); //初始化属性值
        }
        /**
         * 初始化图形子类处理方法
         * @param vars
         */
        LGraphics.prototype.init = function (vars) {
            if (vars) {
                lcp.LVars.some(this.vars, vars);
                this.x = this.vars.x;
                this.y = this.vars.y;
                this.name = this.vars.name;
                this.width = this.vars.width;
                this.height = this.vars.height;
                this.touchEnabled = this.vars.touchEnabled;
            }
            this.draw();
        };
        /**
         * 初始化默认值
         */
        LGraphics.prototype.initValue = function () {
            this.vars.x = 0;
            this.vars.y = 0;
            this.vars.name = this.CLASS_NAME;
            this.vars.width = 0;
            this.vars.height = 0;
            this.vars.anchorX = .5;
            this.vars.anchorY = .5;
            this.vars.touchEnabled = true;
            this.vars.thickness = NaN;
            this.vars.linecolor = 0;
            this.vars.linealpha = 1.0;
            this.vars.pixelHinting = false;
            this.vars.scaleMode = "normal";
            this.vars.caps = null;
            this.vars.joints = null;
            this.vars.miterLimit = 3;
            this.vars.fillcolor = 0xffffff;
            this.vars.fillalpha = 1;
            this.vars.radius = 5;
            this.vars.ellipseWidth = 20;
            this.vars.ellipseHeight = this.vars.ellipseWidth;
            this.vars.corner = 3;
            this.vars.ratio = .5;
            this.vars.petal = 4;
        };
        /**
         * 绘制图形
         */
        LGraphics.prototype.draw = function () {
            this.graphics.clear();
            this.graphics.lineStyle(this.vars.thickness, this.vars.linecolor, this.vars.linealpha, this.vars.pixelHinting, this.vars.scaleMode, this.vars.caps, this.vars.joints, this.vars.miterLimit);
            this.graphics.beginFill(this.vars.fillcolor, this.vars.fillalpha);
            this.drawShape();
            this.graphics.endFill();
        };
        /**
         * 重写图形方法
         */
        LGraphics.prototype.drawShape = function () {
        };
        /**
         * 类名
         * @returns {string}
         */
        LGraphics.prototype.toString = function () {
            return this.CLASS_NAME;
        };
        return LGraphics;
    })(egret.Sprite);
    lcp.LGraphics = LGraphics;
    LGraphics.prototype.__class__ = "lcp.LGraphics";
})(lcp || (lcp = {}));
