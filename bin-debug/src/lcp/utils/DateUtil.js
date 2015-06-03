/**
 * Created by d8q8 on 2014/11/28.
 * @module lcp
 * @class DateUtil
 * @constructor
 **/
var lcp;
(function (lcp) {
    var DateUtil = (function () {
        function DateUtil() {
            this.CLASS_NAME = "DateUtil";
        }
        var __egretProto__ = DateUtil.prototype;
        /**
         * 格式化时间
         * @param dateToFormat
         * @param formatString
         * @returns {string}
         */
        DateUtil.formatDate = function (dateToFormat, formatString) {
            var returnString = '';
            var tempstr = '';
            var i = -1;
            var l = formatString.length;
            var t;
            while (++i < l) {
                tempstr = formatString.substr(i, 1);
                if (tempstr == '^')
                    returnString += formatString.substr(++i, 1);
                else {
                    switch (tempstr) {
                        case 'd':
                            returnString += lcp.NumberUtil.addLeadingZero(dateToFormat.getDate());
                            break;
                        case 'D':
                            returnString += this.getDayAbbrAsString(dateToFormat.getDay());
                            break;
                        case 'j':
                            returnString += dateToFormat.getDate().toString();
                            break;
                        case 'l':
                            returnString += this.getDayAsString(dateToFormat.getDay());
                            break;
                        case 'N':
                            t = dateToFormat.getDay();
                            if (t == 0)
                                t = 7;
                            returnString += t.toString();
                            break;
                        case 'S':
                            returnString += lcp.NumberUtil.getOrdinalSuffix(dateToFormat.getDate());
                            break;
                        case 'w':
                            returnString += dateToFormat.getDay().toString();
                            break;
                        case 'z':
                            returnString += lcp.NumberUtil.addLeadingZero(this.getDayOfTheYear(dateToFormat)).toString();
                            break;
                        case 'W':
                            returnString += lcp.NumberUtil.addLeadingZero(this.getWeekOfTheYear(dateToFormat)).toString();
                            break;
                        case 'F':
                            returnString += this.getMonthAsString(dateToFormat.getMonth());
                            break;
                        case 'm':
                            returnString += lcp.NumberUtil.addLeadingZero(dateToFormat.getMonth() + 1);
                            break;
                        case 'M':
                            returnString += this.getMonthAbbrAsString(dateToFormat.getMonth());
                            break;
                        case 'n':
                            returnString += (dateToFormat.getMonth() + 1).toString();
                            break;
                        case 't':
                            returnString += this.getDaysInMonth(dateToFormat.getMonth(), dateToFormat.getFullYear()).toString();
                            break;
                        case 'L':
                            returnString += (this.isLeapYear(dateToFormat.getFullYear())) ? '1' : '0';
                            break;
                        case 'o':
                        case 'Y':
                            returnString += dateToFormat.getFullYear().toString();
                            break;
                        case 'y':
                            returnString += dateToFormat.getFullYear().toString().substr(-2);
                            break;
                        case 'a':
                            returnString += this.getMeridiem(dateToFormat.getHours()).toLowerCase();
                            break;
                        case 'A':
                            returnString += this.getMeridiem(dateToFormat.getHours());
                            break;
                        case 'B':
                            returnString += lcp.NumberUtil.format(this.getInternetTime(dateToFormat), null, 3);
                            break;
                        case 'g':
                            t = dateToFormat.getHours();
                            if (t == 0)
                                t = 12;
                            else if (t > 12)
                                t -= 12;
                            returnString += t.toString();
                            break;
                        case 'G':
                            returnString += dateToFormat.getHours().toString();
                            break;
                        case 'h':
                            t = dateToFormat.getHours();
                            if (t == 0)
                                t = 12;
                            else if (t > 12)
                                t -= 12;
                            returnString += lcp.NumberUtil.addLeadingZero(t);
                            break;
                        case 'H':
                            returnString += lcp.NumberUtil.addLeadingZero(dateToFormat.getHours());
                            break;
                        case 'i':
                            returnString += lcp.NumberUtil.addLeadingZero(dateToFormat.getMinutes());
                            break;
                        case 's':
                            returnString += lcp.NumberUtil.addLeadingZero(dateToFormat.getSeconds());
                            break;
                        case 'I':
                            returnString += (this.isDaylightSavings(dateToFormat)) ? '1' : '0';
                            break;
                        case 'O':
                            returnString += this.getFormattedDifferenceFromUTC(dateToFormat);
                            break;
                        case 'P':
                            returnString += this.getFormattedDifferenceFromUTC(dateToFormat, ':');
                            break;
                        case 'e':
                        case 'T':
                            returnString += this.getTimezone(dateToFormat);
                            break;
                        case 'Z':
                            returnString += Math.round(this.getDifferenceFromUTCInSeconds(dateToFormat)).toString();
                            break;
                        case 'c':
                            returnString += dateToFormat.getFullYear() + "-" + lcp.NumberUtil.addLeadingZero(dateToFormat.getMonth() + 1) + "-" + lcp.NumberUtil.addLeadingZero(dateToFormat.getDate()) + "T" + lcp.NumberUtil.addLeadingZero(dateToFormat.getHours()) + ":" + lcp.NumberUtil.addLeadingZero(dateToFormat.getMinutes()) + ":" + lcp.NumberUtil.addLeadingZero(dateToFormat.getSeconds()) + this.getFormattedDifferenceFromUTC(dateToFormat, ':');
                            break;
                        case 'r':
                            returnString += this.getDayAbbrAsString(dateToFormat.getDay()) + ', ' + dateToFormat.getDate() + ' ' + this.getMonthAbbrAsString(dateToFormat.getMonth()) + ' ' + dateToFormat.getFullYear() + ' ' + lcp.NumberUtil.addLeadingZero(dateToFormat.getHours()) + ':' + lcp.NumberUtil.addLeadingZero(dateToFormat.getMinutes()) + ':' + lcp.NumberUtil.addLeadingZero(dateToFormat.getSeconds()) + ' ' + this.getFormattedDifferenceFromUTC(dateToFormat);
                            break;
                        case 'U':
                            t = Math.round(dateToFormat.getTime() / 1000);
                            returnString += t.toString();
                            break;
                        default:
                            returnString += formatString.substr(i, 1);
                    }
                }
            }
            return returnString;
        };
        /**
         * 转ISO8601为日期对象
         * @param iso8601
         * @returns {Date}
         *
         *  <code>
         *      console.log(DateUtil.iso8601ToDate("1994-11-05T08:15:30-05:00").toString());
         *  </code>
         *
         */
        DateUtil.iso8601ToDate = function (iso8601) {
            var parts = iso8601.toUpperCase().split('T');
            var date = parts[0].split('-');
            var time = (parts.length <= 1) ? [] : parts[1].split(':');
            var year = lcp.ObjectUtil.isEmpty(date[0]) ? 0 : parseInt(date[0]);
            var month = lcp.ObjectUtil.isEmpty(date[1]) ? 0 : parseInt(date[1]) - 1;
            var day = lcp.ObjectUtil.isEmpty(date[2]) ? 1 : parseInt(date[2]);
            var hour = lcp.ObjectUtil.isEmpty(time[0]) ? 0 : parseInt(time[0]);
            var minute = lcp.ObjectUtil.isEmpty(time[1]) ? 0 : parseInt(time[1]);
            var second = 0;
            var millisecond = 0;
            if (time[2] != undefined) {
                var index = time[2].length;
                var temp;
                if (time[2].indexOf('+') > -1)
                    index = time[2].indexOf('+');
                else if (time[2].indexOf('-') > -1)
                    index = time[2].indexOf('-');
                else if (time[2].indexOf('Z') > -1)
                    index = time[2].indexOf('Z');
                if (isNaN(index)) {
                    temp = (time[2].slice(0, index));
                    second = Math.floor(temp);
                    millisecond = 1000 * ((temp % 1) / 1);
                }
                if (index != time[2].length) {
                    var offset = time[2].slice(index);
                    var userOffset = this.getDifferenceFromUTCInHours(new Date(year, month, day));
                    switch (offset.charAt(0)) {
                        case '+':
                        case '-':
                            hour -= userOffset + (offset.slice(0));
                            break;
                        case 'Z':
                            hour -= userOffset;
                            break;
                    }
                }
            }
            return new Date(year, month, day, hour, minute, second, millisecond);
        };
        /**
         * 转换月为英文字符串
         * @param month
         * @returns {string}
         *
         *  <code>
         *      var myDate:Date = new Date(2000, 0, 1);
         *      console.log(DateUtil.getMonthAsString(myDate.getMonth())); // 输出 January
         *  </code>
         *
         */
        DateUtil.getMonthAsString = function (month) {
            var monthNamesFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            return monthNamesFull[month];
        };
        /**
         * 转换月份为英文缩写
         * @param month
         * @returns {string}
         *
         *  <code>
         *      var myDate:Date = new Date(2000, 0, 1);
         *      console.log(DateUtil.getMonthAbbrAsString(myDate.getMonth())); // 输出 Jan
         *  </code>
         */
        DateUtil.getMonthAbbrAsString = function (month) {
            return this.getMonthAsString(month).substr(0, 3);
        };
        /**
         * 转换天为英文字符
         * @param day
         * @returns {string}
         *
         *  <code>
         *      var myDate:Date = new Date(2000, 0, 1);
         *      console.log(DateUtil.getDayAsString(myDate.getDay())); // 输出 Saturday
         *  </code>
         */
        DateUtil.getDayAsString = function (day) {
            var dayNamesFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            return dayNamesFull[day];
        };
        /**
         * 转换天为英文缩写
         * @param day
         * @returns {string}
         *
         *  <code>
         *      var myDate:Date = new Date(2000, 0, 1);
         *      console.log(DateUtil.getDayAbbrAsString(myDate.getDay())); // 输出 Sat
         *  </code>
         */
        DateUtil.getDayAbbrAsString = function (day) {
            return this.getDayAsString(day).substr(0, 3);
        };
        /**
         * 获取给定月份的天数
         * @param year
         * @param month
         * @returns {number}
         *
         *  <code>
         *      var myDate:Date = new Date(2000, 0, 1);
         *      console.log(DateUtil.getDaysInMonth(myDate.getFullYear(), myDate.getMonth())); // 输出 31
         *  </code>
         */
        DateUtil.getDaysInMonth = function (year, month) {
            return (new Date(year, ++month, 0)).getDate();
        };
        /**
         * 获取当前小时为上午还是下午
         * @param hours
         * @returns {string}
         *
         *  <code>
         *      console.log(DateUtil.getMeridiem(17)); // 输出 PM
         *  </code>
         */
        DateUtil.getMeridiem = function (hours) {
            return (hours < 12) ? 'AM' : 'PM';
        };
        /**
         * 获取日期差
         * @param startDate
         * @param endDate
         * @returns {number}
         *
         *  <code>
         *      console.log(DateUtil.getTimeBetween(new Date(2007, 0, 1), new Date(2007, 0, 11))); // 输出 10
         *  </code>
         */
        DateUtil.getTimeBetween = function (startDate, endDate) {
            return endDate.getTime() - startDate.getTime();
        };
        /**
         * 获取到达某一日期的剩余时间
         * @param startDate
         * @param endDate
         * @returns {{days: number, hours: number, minutes: number, seconds: number, milliseconds: number}}
         *
         *  <code>
         *      var countdown:Object = DateUtil.getCountdownUntil(new Date(2006, 11, 31, 21, 36), new Date(2007, 0, 1));
         *      console.log("离新年还剩" + countdown.hours + "小时和" + countdown.minutes + "分钟!");
         *  </code>
         */
        DateUtil.getCountdownUntil = function (startDate, endDate) {
            var daysUntil = lcp.ConversionUtil.millisecondsToDays(this.getTimeBetween(startDate, endDate));
            var hoursUntil = lcp.ConversionUtil.daysToHours(daysUntil % 1);
            var minsUntil = lcp.ConversionUtil.hoursToMinutes(hoursUntil % 1);
            var secsUntil = lcp.ConversionUtil.minutesToSeconds(minsUntil % 1);
            var milliUntil = lcp.ConversionUtil.secondsToMilliseconds(secsUntil % 1);
            var result = {
                days: parseInt(daysUntil.toString()),
                hours: parseInt(hoursUntil.toString()),
                minutes: parseInt(minsUntil.toString()),
                seconds: parseInt(secsUntil.toString()),
                milliseconds: parseInt(milliUntil.toString())
            };
            return result;
        };
        /**
         * 获取通用UTC秒
         * @param d
         * @returns {number}
         */
        DateUtil.getDifferenceFromUTCInSeconds = function (d) {
            return lcp.ConversionUtil.minutesToSeconds(d.getTimezoneOffset());
        };
        /**
         * 获取通用UTC小时
         * @param d
         * @returns {number}
         */
        DateUtil.getDifferenceFromUTCInHours = function (d) {
            return lcp.ConversionUtil.minutesToHours(d.getTimezoneOffset());
        };
        /**
         * 从UTC格式化
         * @param d
         * @param separator
         * @returns {string}
         */
        DateUtil.getFormattedDifferenceFromUTC = function (d, separator) {
            if (separator === void 0) { separator = ""; }
            var pre = (-d.getTimezoneOffset() < 0) ? '-' : '+';
            return pre + lcp.NumberUtil.addLeadingZero(Math.floor(this.getDifferenceFromUTCInHours(d))) + separator + lcp.NumberUtil.addLeadingZero(d.getTimezoneOffset() % 60);
        };
        /**
         * 获取时间时区
         * @param d
         * @returns {string}
         *
         *  <code>
         *      console.log(DateUtil.getTimezone(new Date()));
         *  </code>
         */
        DateUtil.getTimezone = function (d) {
            var timeZones = ['IDLW', 'NT', 'HST', 'AKST', 'PST', 'MST', 'CST', 'EST', 'AST', 'ADT', 'AT', 'WAT', 'GMT', 'CET', 'EET', 'MSK', 'ZP4', 'ZP5', 'ZP6', 'WAST', 'WST', 'JST', 'AEST', 'AEDT', 'NZST'];
            var hour = Math.round(12 + -(d.getTimezoneOffset() / 60));
            if (this.isDaylightSavings(d))
                hour--;
            return timeZones[hour];
        };
        /**
         * 是否为闰年
         * @param year
         * @returns {boolean}
         *
         *  <code>
         *      var myDate:Date = new Date(2000, 0, 1);
         *      console.log(DateUtil.isLeapYear(myDate.getFullYear())); // 输出 true
         *  </code>
         */
        DateUtil.isLeapYear = function (year) {
            return this.getDaysInMonth(year, 1) == 29;
        };
        /**
         * 是否是夏令时
         * @param d
         * @returns {boolean}
         */
        DateUtil.isDaylightSavings = function (d) {
            var months = 12;
            var offset = d.getTimezoneOffset();
            var offsetCheck;
            while (months--) {
                offsetCheck = (new Date(d.getFullYear(), months, 1)).getTimezoneOffset();
                if (offsetCheck != offset)
                    return (offsetCheck > offset);
            }
            return false;
        };
        /**
         * 获取网络时间
         * @param d
         * @returns {number}
         */
        DateUtil.getInternetTime = function (d) {
            var beats = ((d.getUTCHours() + 1 + lcp.ConversionUtil.minutesToHours(d.getUTCMinutes()) + lcp.ConversionUtil.secondsToHours(d.getUTCSeconds())) / 0.024);
            return (beats > 1000) ? beats - 1000 : beats;
        };
        /**
         * 获取当前日期中一年的总天数(从0开始计算)
         * @param d
         * @returns {number}
         */
        DateUtil.getDayOfTheYear = function (d) {
            var firstDay = new Date(d.getFullYear(), 0, 1);
            return (d.getTime() - firstDay.getTime()) / 86400000;
        };
        /**
         * 获取当前日期中一年的总周数
         * @param d
         * @returns {number}
         */
        DateUtil.getWeekOfTheYear = function (d) {
            var firstDay = new Date(d.getFullYear(), 0, 1);
            var dayOffset = 9 - firstDay.getDay();
            var firstMonday = new Date(d.getFullYear(), 0, (dayOffset > 7) ? dayOffset - 7 : dayOffset);
            var currentDay = new Date(d.getFullYear(), d.getMonth(), d.getDate());
            var weekNumber = (lcp.ConversionUtil.millisecondsToDays(currentDay.getTime() - firstMonday.getTime()) / 7) + 1;
            return (weekNumber == 0) ? this.getWeekOfTheYear(new Date(d.getFullYear() - 1, 11, 31)) : weekNumber;
        };
        /**
         * 判断日期是否相等
         * @param first
         * @param second
         * @returns {boolean}
         */
        DateUtil.equals = function (first, second) {
            return first.valueOf() == second.valueOf();
        };
        /**
         * 类名
         * @returns {string}
         */
        __egretProto__.toString = function () {
            //console.log("ClassName",this.CLASS_NAME);
            return this.CLASS_NAME;
        };
        return DateUtil;
    })();
    lcp.DateUtil = DateUtil;
    DateUtil.prototype.__class__ = "lcp.DateUtil";
})(lcp || (lcp = {}));
