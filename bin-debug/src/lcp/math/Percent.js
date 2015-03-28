/**
 * Created by d8q8 on 2014/11/18.
 * @module lcp
 * @class Percent
 * @constructor
 **/
var lcp;
(function (lcp) {
    /**
     * 百分比类
     */
    var Percent = (function () {
        /**
         * 实例一个百分比类
         * @param percentage 百分比格式化或浮点数
         * @param isDecimalPercentage 是否为浮点数，默认为true
         */
        function Percent(percentage, isDecimalPercentage) {
            if (percentage === void 0) { percentage = 0; }
            if (isDecimalPercentage === void 0) { isDecimalPercentage = true; }
            if (isDecimalPercentage) {
                this.decimalPercentage = percentage;
            }
            else {
                this.percentage = percentage;
            }
        }
        var __egretProto__ = Percent.prototype;
        Object.defineProperty(__egretProto__, "percentage", {
            /**
             * 百分比表示为一个百分比。37.5%的人会被表达 37.5
             * @returns {number}
             */
            get: function () {
                return 100 * this._percent;
            },
            set: function (percent) {
                this._percent = percent * .01;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "decimalPercentage", {
            /**
             * 表示为一个浮点数。37.5%将表示为0.375
             * @returns {number}
             */
            get: function () {
                return this._percent;
            },
            set: function (percent) {
                this._percent = percent;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 确定是否百分比参数中指定的百分比等于这个百分比对象。
         * @param percent 百分比对象
         * @returns {boolean} 如果相同就为true,否则false
         */
        __egretProto__.equals = function (percent) {
            return this.decimalPercentage == percent.decimalPercentage;
        };
        /**
         * 返回一个副本
         * @returns {lcp.Percent}
         */
        __egretProto__.clone = function () {
            return new Percent(this.decimalPercentage);
        };
        __egretProto__.valueOf = function () {
            return this.decimalPercentage;
        };
        __egretProto__.toString = function () {
            return this.decimalPercentage.toString();
        };
        return Percent;
    })();
    lcp.Percent = Percent;
    Percent.prototype.__class__ = "lcp.Percent";
})(lcp || (lcp = {}));
