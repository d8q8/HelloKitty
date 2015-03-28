/**
 * Created by d8q8 on 2014/11/28.
 * @module lcp
 * @class ConversionUtil
 * @constructor
 **/
var lcp;
(function (lcp) {
    var ConversionUtil = (function () {
        function ConversionUtil() {
            this.CLASS_NAME = "ConversionUtil";
        }
        var __egretProto__ = ConversionUtil.prototype;
        /**
         * 比特转字节
         * @param bits
         * @returns {number}
         */
        ConversionUtil.bitsToBytes = function (bits) {
            return bits / 8;
        };
        /**
         * 比特转千比特
         * @param bits
         * @returns {number}
         */
        ConversionUtil.bitsToKilobits = function (bits) {
            return bits / 1024;
        };
        /**
         * 比特转千字节
         * @param bits
         * @returns {number}
         */
        ConversionUtil.bitsToKilobytes = function (bits) {
            return bits / 8192;
        };
        /**
         * 字节转比特
         * @param bytes
         * @returns {number}
         */
        ConversionUtil.bytesToBits = function (bytes) {
            return bytes * 8;
        };
        /**
         * 字节转千比特
         * @param bytes
         * @returns {number}
         */
        ConversionUtil.bytesToKilobits = function (bytes) {
            return bytes / 128;
        };
        /**
         * 字节转千字节
         * @param bytes
         * @returns {number}
         */
        ConversionUtil.bytesToKilobytes = function (bytes) {
            return bytes / 1024;
        };
        /**
         * 千比特转比特
         * @param kilobits
         * @returns {number}
         */
        ConversionUtil.kilobitsToBits = function (kilobits) {
            return kilobits * 1024;
        };
        /**
         * 千比特转字节
         * @param kilobits
         * @returns {number}
         */
        ConversionUtil.kilobitsToBytes = function (kilobits) {
            return kilobits * 128;
        };
        /**
         * 千比特转千字节
         * @param kilobits
         * @returns {number}
         */
        ConversionUtil.kilobitsToKilobytes = function (kilobits) {
            return kilobits / 8;
        };
        /**
         * 千字节转比特
         * @param kilobytes
         * @returns {number}
         */
        ConversionUtil.kilobytesToBits = function (kilobytes) {
            return kilobytes * 8192;
        };
        /**
         * 千字节转字节
         * @param kilobytes
         * @returns {number}
         */
        ConversionUtil.kilobytesToBytes = function (kilobytes) {
            return kilobytes * 1024;
        };
        /**
         * 千字节转千比特
         * @param kilobytes
         * @returns {number}
         */
        ConversionUtil.kilobytesToKilobits = function (kilobytes) {
            return kilobytes * 8;
        };
        /**
         * 转毫秒到秒
         * @param milliseconds
         * @returns {number}
         */
        ConversionUtil.millisecondsToSeconds = function (milliseconds) {
            return milliseconds / 1000;
        };
        /**
         * 转毫秒到分
         * @param milliseconds
         * @returns {number}
         */
        ConversionUtil.millisecondsToMinutes = function (milliseconds) {
            return this.secondsToMinutes(this.millisecondsToSeconds(milliseconds));
        };
        /**
         * 转毫秒到小时
         * @param milliseconds
         * @returns {number}
         */
        ConversionUtil.millisecondsToHours = function (milliseconds) {
            return this.minutesToHours(this.millisecondsToMinutes(milliseconds));
        };
        /**
         * 转毫秒到天
         * @param milliseconds
         * @returns {number}
         */
        ConversionUtil.millisecondsToDays = function (milliseconds) {
            return this.hoursToDays(this.millisecondsToHours(milliseconds));
        };
        /**
         * 转秒到毫秒
         * @param seconds
         * @returns {number}
         */
        ConversionUtil.secondsToMilliseconds = function (seconds) {
            return seconds * 1000;
        };
        /**
         * 转秒到分
         * @param seconds
         * @returns {number}
         */
        ConversionUtil.secondsToMinutes = function (seconds) {
            return seconds / 60;
        };
        /**
         * 转秒到小时
         * @param seconds
         * @returns {number}
         */
        ConversionUtil.secondsToHours = function (seconds) {
            return this.minutesToHours(this.secondsToMinutes(seconds));
        };
        /**
         * 转秒到天
         * @param seconds
         * @returns {number}
         */
        ConversionUtil.secondsToDays = function (seconds) {
            return this.hoursToDays(this.secondsToHours(seconds));
        };
        /**
         * 转分到毫秒
         * @param minutes
         * @returns {number}
         */
        ConversionUtil.minutesToMilliseconds = function (minutes) {
            return this.secondsToMilliseconds(this.minutesToSeconds(minutes));
        };
        /**
         * 转分到秒
         * @param minutes
         * @returns {number}
         */
        ConversionUtil.minutesToSeconds = function (minutes) {
            return minutes * 60;
        };
        /**
         * 转分到小时
         * @param minutes
         * @returns {number}
         */
        ConversionUtil.minutesToHours = function (minutes) {
            return minutes / 60;
        };
        /**
         * 转分到天
         * @param minutes
         * @returns {number}
         */
        ConversionUtil.minutesToDays = function (minutes) {
            return this.hoursToDays(this.minutesToHours(minutes));
        };
        /**
         * 转小时到毫秒
         * @param hours
         * @returns {number}
         */
        ConversionUtil.hoursToMilliseconds = function (hours) {
            return this.secondsToMilliseconds(this.hoursToSeconds(hours));
        };
        /**
         * 转小时到秒
         * @param hours
         * @returns {number}
         */
        ConversionUtil.hoursToSeconds = function (hours) {
            return this.minutesToSeconds(this.hoursToMinutes(hours));
        };
        /**
         * 转小时到分
         * @param hours
         * @returns {number}
         */
        ConversionUtil.hoursToMinutes = function (hours) {
            return hours * 60;
        };
        /**
         * 转小时到天
         * @param hours
         * @returns {number}
         */
        ConversionUtil.hoursToDays = function (hours) {
            return hours / 24;
        };
        /**
         * 转天到毫秒
         * @param days
         * @returns {number}
         */
        ConversionUtil.daysToMilliseconds = function (days) {
            return this.secondsToMilliseconds(this.daysToSeconds(days));
        };
        /**
         * 转天到秒
         * @param days
         * @returns {number}
         */
        ConversionUtil.daysToSeconds = function (days) {
            return this.minutesToSeconds(this.daysToMinutes(days));
        };
        /**
         * 转天到分
         * @param days
         * @returns {number}
         */
        ConversionUtil.daysToMinutes = function (days) {
            return this.hoursToMinutes(this.daysToHours(days));
        };
        /**
         * 转天到小时
         * @param days
         * @returns {number}
         */
        ConversionUtil.daysToHours = function (days) {
            return days * 24;
        };
        /**
         * 转角度到弧度
         * @param degrees
         * @returns {number}
         */
        ConversionUtil.degreesToRadians = function (degrees) {
            return degrees * (Math.PI / 180);
        };
        /**
         * 转弧度到角度
         * @param radians
         * @returns {number}
         */
        ConversionUtil.radiansToDegrees = function (radians) {
            return radians * (180 / Math.PI);
        };
        /**
         * 类名
         * @returns {string}
         */
        __egretProto__.toString = function () {
            //console.log("ClassName",this.CLASS_NAME);
            return this.CLASS_NAME;
        };
        return ConversionUtil;
    })();
    lcp.ConversionUtil = ConversionUtil;
    ConversionUtil.prototype.__class__ = "lcp.ConversionUtil";
})(lcp || (lcp = {}));
