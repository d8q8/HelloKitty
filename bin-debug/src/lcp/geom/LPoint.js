/**
 * Created by d8q8 on 2014/11/24.
 * @module lcp
 * @class LPoint
 * @constructor
 **/
var lcp;
(function (lcp) {
    /**
     * 点扩展类
     */
    var LPoint = (function (_super) {
        __extends(LPoint, _super);
        function LPoint() {
            _super.apply(this, arguments);
        }
        var __egretProto__ = LPoint.prototype;
        /**
         * 计算两点间距离
         * @param x1
         * @param y1
         * @param x2
         * @param y2
         * @returns {number}
         */
        LPoint.twodis = function (x1, y1, x2, y2) {
            return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        };
        /**
         * 返回 pt1 和 pt2 之间的距离。
         * @method egret.Point#distance
         * @param p1 {egret.Point} 第一个点
         * @param p2 {egret.Point} 第二个点
         * @returns {number} 第一个点和第二个点之间的距离。
         */
        LPoint.distance = function (p1, p2) {
            return egret.Point.distance(p1, p2); //官方方法
        };
        return LPoint;
    })(egret.HashObject);
    lcp.LPoint = LPoint;
    LPoint.prototype.__class__ = "lcp.LPoint";
})(lcp || (lcp = {}));
//扩展点类方法
//egret.Point.twodis = lcp.LPoint.twodis; 
