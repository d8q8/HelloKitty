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
        var __egretProto__ = LGraphics.prototype;
        /**
         * 初始化图形子类处理方法
         * @param vars
         */
        __egretProto__.init = function (vars) {
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
        __egretProto__.initValue = function () {
            this.vars.x = 0;
            this.vars.y = 0;
            this.vars.name = this.CLASS_NAME;
            //this.vars.width = 0;
            //this.vars.height = 0;
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
            this.vars.ellipseHeight = this.vars.ellipseHeight ? this.vars.ellipseHeight : this.vars.ellipseWidth;
            this.vars.corner = 3;
            this.vars.ratio = .5;
            this.vars.petal = 4;
            this.vars.startAngle = 0;
            this.vars.endAngle = 0;
            this.vars.angle = 0;
        };
        /**
         * 绘制图形
         */
        __egretProto__.draw = function () {
            this.graphics.clear();
            this.graphics.lineStyle(this.vars.thickness, this.vars.linecolor, this.vars.linealpha, this.vars.pixelHinting, this.vars.scaleMode, this.vars.caps, this.vars.joints, this.vars.miterLimit);
            this.graphics.beginFill(this.vars.fillcolor, this.vars.fillalpha);
            this.drawShape();
            this.graphics.endFill();
        };
        /**
         * 重写图形方法
         */
        __egretProto__.drawShape = function () {
        };
        /**
         * 类名
         * @returns {string}
         */
        __egretProto__.toString = function () {
            return this.CLASS_NAME;
        };
        return LGraphics;
    })(lcp.LSprite);
    lcp.LGraphics = LGraphics;
    LGraphics.prototype.__class__ = "lcp.LGraphics";
    /**
     * 图形类型
     */
    (function (GraphicsType) {
        GraphicsType[GraphicsType["Circle"] = 0] = "Circle";
        GraphicsType[GraphicsType["Rect"] = 1] = "Rect";
        GraphicsType[GraphicsType["Ellipse"] = 2] = "Ellipse";
        GraphicsType[GraphicsType["Polygon"] = 3] = "Polygon";
        GraphicsType[GraphicsType["Rose"] = 4] = "Rose";
        GraphicsType[GraphicsType["RoundRect"] = 5] = "RoundRect";
        GraphicsType[GraphicsType["Star"] = 6] = "Star";
        GraphicsType[GraphicsType["Heart"] = 7] = "Heart";
    })(lcp.GraphicsType || (lcp.GraphicsType = {}));
    var GraphicsType = lcp.GraphicsType;
})(lcp || (lcp = {}));
