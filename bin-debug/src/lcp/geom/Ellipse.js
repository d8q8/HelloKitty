/**
 * Created by d8q8 on 2014/12/10.
 * @module lcp
 * @class Ellipse
 * @constructor
 **/
var lcp;
(function (lcp) {
    /**
     * 椭圆类
     */
    var Ellipse = (function () {
        /**
         * 创建一个椭圆类
         * @param x
         * @param y
         * @param width
         * @param height
         */
        function Ellipse(x, y, width, height) {
            this.CLASS_NAME = "Ellipse";
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }
        var __egretProto__ = Ellipse.prototype;
        Object.defineProperty(__egretProto__, "x", {
            /**
             * x坐标
             * @returns {number}
             */
            get: function () {
                return this._x;
            },
            set: function (xPos) {
                this._x = xPos;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "y", {
            /**
             * y坐标
             * @returns {number}
             */
            get: function () {
                return this._y;
            },
            set: function (yPos) {
                this._y = yPos;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "width", {
            /**
             * 宽度
             * @returns {number}
             */
            get: function () {
                return this._width;
            },
            set: function (width) {
                this._width = width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "height", {
            /**
             * 高度
             * @returns {number}
             */
            get: function () {
                return this._height;
            },
            set: function (height) {
                this._height = height;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "center", {
            /**
             * 中心点
             * @returns {egret.Point}
             */
            get: function () {
                return new egret.Point(this.x + this.width * 0.5, this.y + this.height * 0.5);
            },
            set: function (c) {
                this.x = c.x - this.width * 0.5;
                this.y = c.y - this.height * 0.5;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "size", {
            /**
             * 大小
             * @returns {egret.Point}
             */
            get: function () {
                return new egret.Point(this.width, this.height);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "perimeter", {
            /**
             * 周长
             * @returns {number}
             */
            get: function () {
                return (Math.sqrt(0.5 * (Math.pow(this.width, 2) + Math.pow(this.height, 2))) * Math.PI * 2) * 0.5;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "area", {
            /**
             * 面积
             * @returns {number}
             */
            get: function () {
                return Math.PI * (this.width * 0.5) * (this.height * 0.5);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 查找x,y位置沿周长的椭圆度
         * @param degree
         * @returns {egret.Point}
         */
        __egretProto__.getPointOfDegree = function (degree) {
            var radian = (degree - 90) * (Math.PI / 180);
            var xRadius = this.width * 0.5;
            var yRadius = this.height * 0.5;
            return new egret.Point(this.x + xRadius + Math.cos(radian) * xRadius, this.y + yRadius + Math.sin(radian) * yRadius);
        };
        /**
         * 查找一个点是否包含在椭圆周长内
         * @param point
         * @returns {boolean}
         */
        __egretProto__.containsPoint = function (point) {
            var xRadius = this.width * 0.5;
            var yRadius = this.height * 0.5;
            var xTar = point.x - this.x - xRadius;
            var yTar = point.y - this.y - yRadius;
            return Math.pow(xTar / xRadius, 2) + Math.pow(yTar / yRadius, 2) <= 1;
        };
        /**
         * 是否相等
         * @param ellipse
         * @returns {boolean}
         */
        __egretProto__.equals = function (ellipse) {
            return this.x == ellipse.x && this.y == ellipse.y && this.width == ellipse.width && this.height == ellipse.height;
        };
        /**
         * 克隆副本
         * @returns {lcp.Ellipse}
         */
        __egretProto__.clone = function () {
            return new Ellipse(this.x, this.y, this.width, this.height);
        };
        /**
         * 类名
         * @returns {string}
         */
        __egretProto__.toString = function () {
            //console.log("ClassName",this.CLASS_NAME);
            return this.CLASS_NAME;
        };
        return Ellipse;
    })();
    lcp.Ellipse = Ellipse;
    Ellipse.prototype.__class__ = "lcp.Ellipse";
})(lcp || (lcp = {}));
