/**
 * Created by d8q8 on 2014/11/28.
 * @module lcp
 * @class DateUtil
 * @constructor
 **/
module lcp {
    export class DateUtil {
        public CLASS_NAME:string = "DateUtil";

        /**
         * 格式化时间
         * @param dateToFormat
         * @param formatString
         * @returns {string}
         */
        public static formatDate(dateToFormat:Date, formatString:string):string {
            var returnString:string = '';
            var char:string;
            var i:number = -1;
            var l:number = formatString.length;
            var t:number;

            while (++i < l) {
                char = formatString.substr(i, 1);

                if (char == '^')
                    returnString += formatString.substr(++i, 1);
                else {
                    switch (char) {
                        // Day of the month, 2 digits with leading zeros
                        case 'd' :
                            returnString += NumberUtil.addLeadingZero(dateToFormat.getDate());
                            break;
                        // A textual representation of a day, three letters
                        case 'D' :
                            returnString += DateUtil.getDayAbbrAsString(dateToFormat.getDay());
                            break;
                        // Day of the month without leading zeros
                        case 'j' :
                            returnString += dateToFormat.getDate().toString();
                            break;
                        // A full textual representation of the day of the week
                        case 'l' :
                            returnString += DateUtil.getDayAsString(dateToFormat.getDay());
                            break;
                        // ISO-8601 numeric representation of the day of the week
                        case 'N' :
                            t = dateToFormat.getDay();

                            if (t == 0)
                                t = 7;

                            returnString += t.toString();
                            break;
                        // English ordinal suffix for the day of the month, 2 characters
                        case 'S' :
                            returnString += NumberUtil.getOrdinalSuffix(dateToFormat.getDate());
                            break;
                        // Numeric representation of the day of the week
                        case 'w' :
                            returnString += dateToFormat.getDay().toString();
                            break;
                        // The day of the year (starting from 0)
                        case 'z' :
                            returnString += NumberUtil.addLeadingZero(DateUtil.getDayOfTheYear(dateToFormat)).toString();
                            break;
                        // ISO-8601 week number of year, weeks starting on Monday
                        case 'W' :
                            returnString += NumberUtil.addLeadingZero(DateUtil.getWeekOfTheYear(dateToFormat)).toString();
                            break;
                        // A full textual representation of a month, such as January or March
                        case 'F' :
                            returnString += DateUtil.getMonthAsString(dateToFormat.getMonth());
                            break;
                        // Numeric representation of a month, with leading zeros
                        case 'm' :
                            returnString += NumberUtil.addLeadingZero(dateToFormat.getMonth() + 1);
                            break;
                        // A short textual representation of a month, three letters
                        case 'M' :
                            returnString += DateUtil.getMonthAbbrAsString(dateToFormat.getMonth());
                            break;
                        // Numeric representation of a month, without leading zeros
                        case 'n' :
                            returnString += (dateToFormat.getMonth() + 1).toString();
                            break;
                        // Number of days in the given month
                        case 't' :
                            returnString += DateUtil.getDaysInMonth(dateToFormat.getMonth(), dateToFormat.getFullYear()).toString();
                            break;
                        // Whether it is a leap year
                        case 'L' :
                            returnString += (DateUtil.isLeapYear(dateToFormat.getFullYear())) ? '1' : '0';
                            break;
                        // A full numeric representation of a year, 4 digits
                        case 'o' :
                        case 'Y' :
                            returnString += dateToFormat.getFullYear().toString();
                            break;
                        // A two digit representation of a year
                        case 'y' :
                            returnString += dateToFormat.getFullYear().toString().substr(-2);
                            break;
                        // Lowercase Ante meridiem and Post meridiem
                        case 'a' :
                            returnString += DateUtil.getMeridiem(dateToFormat.getHours()).toLowerCase();
                            break;
                        // Uppercase Ante meridiem and Post meridiem
                        case 'A' :
                            returnString += DateUtil.getMeridiem(dateToFormat.getHours());
                            break;
                        // Swatch Internet time
                        case 'B' :
                            returnString += NumberUtil.format(DateUtil.getInternetTime(dateToFormat), null, 3)
                            break;
                        // 12-hour format of an hour without leading zeros
                        case 'g' :
                            t = dateToFormat.getHours();

                            if (t == 0)
                                t = 12;
                            else if (t > 12)
                                t -= 12;

                            returnString += t.toString();
                            break;
                        // 24-hour format of an hour without leading zeros
                        case 'G' :
                            returnString += dateToFormat.getHours().toString();
                            break;
                        // 12-hour format of an hour with leading zeros
                        case 'h' :
                            t = dateToFormat.getHours();

                            if (t == 0)
                                t = 12;
                            else if (t > 12)
                                t -= 12;

                            returnString += NumberUtil.addLeadingZero(t);
                            break;
                        // 24-hour format of an hour with leading zeros
                        case 'H' :
                            returnString += NumberUtil.addLeadingZero(dateToFormat.getHours());
                            break;
                        // Minutes with leading zeros
                        case 'i' :
                            returnString += NumberUtil.addLeadingZero(dateToFormat.getMinutes());
                            break;
                        // Seconds, with leading zeros
                        case 's' :
                            returnString += NumberUtil.addLeadingZero(dateToFormat.getSeconds());
                            break;
                        // Whether or not the date is in daylights savings time
                        case 'I' :
                            returnString += (DateUtil.isDaylightSavings(dateToFormat)) ? '1' : '0';
                            break;
                        // Difference to Greenwich time (GMT/UTC) in hours
                        case 'O' :
                            returnString += DateUtil.getFormattedDifferenceFromUTC(dateToFormat);
                            break;
                        case 'P' :
                            returnString += DateUtil.getFormattedDifferenceFromUTC(dateToFormat, ':');
                            break;
                        // Timezone identifier
                        case 'e' :
                        case 'T' :
                            returnString += DateUtil.getTimezone(dateToFormat);
                            break;
                        // Timezone offset (GMT/UTC) in seconds.
                        case 'Z' :
                            returnString += Math.round(DateUtil.getDifferenceFromUTCInSeconds(dateToFormat)).toString();
                            break;
                        // ISO 8601 date
                        case 'c' :
                            returnString += dateToFormat.getFullYear() + "-" + NumberUtil.addLeadingZero(dateToFormat.getMonth() + 1) + "-" + NumberUtil.addLeadingZero(dateToFormat.getDate()) + "T" + NumberUtil.addLeadingZero(dateToFormat.getHours()) + ":" + NumberUtil.addLeadingZero(dateToFormat.getMinutes()) + ":" + NumberUtil.addLeadingZero(dateToFormat.getSeconds()) + DateUtil.getFormattedDifferenceFromUTC(dateToFormat, ':');
                            break;
                        // RFC 2822 formatted date
                        case 'r' :
                            returnString += DateUtil.getDayAbbrAsString(dateToFormat.getDay()) + ', ' + dateToFormat.getDate() + ' ' + DateUtil.getMonthAbbrAsString(dateToFormat.getMonth()) + ' ' + dateToFormat.getFullYear() + ' ' + NumberUtil.addLeadingZero(dateToFormat.getHours()) + ':' + NumberUtil.addLeadingZero(dateToFormat.getMinutes()) + ':' + NumberUtil.addLeadingZero(dateToFormat.getSeconds()) + ' ' + DateUtil.getFormattedDifferenceFromUTC(dateToFormat);
                            break;
                        // Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT)
                        case 'U' :
                            t = Math.round(dateToFormat.getTime() / 1000);
                            returnString += t.toString();
                            break;
                        default :
                            returnString += formatString.substr(i, 1);
                    }
                }
            }


            return returnString;
        }

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
        public static iso8601ToDate(iso8601:string):Date {
            var parts:Array<any>      = iso8601.toUpperCase().split('T');
            var date:Array<any>       = parts[0].split('-');
            var time:Array<any>       = (parts.length <= 1) ? new Array<any>() : parts[1].split(':');
            var year:number        = ObjectUtil.isEmpty(date[0]) ? 0 : <number><any> (date[0]);
            var month:number       = ObjectUtil.isEmpty(date[1]) ? 0 : <number><any> (date[1] - 1);
            var day:number         = ObjectUtil.isEmpty(date[2]) ? 1 : <number><any> (date[2]);
            var hour:number         = ObjectUtil.isEmpty(time[0]) ? 0 : <number><any> (time[0]);
            var minute:number      = ObjectUtil.isEmpty(time[1]) ? 0 : <number><any> (time[1]);
            var second:number      = 0;
            var millisecond:number = 0;

            if (time[2] != undefined) {
                var index:number = time[2].length;
                var temp:number;
                if (time[2].indexOf('+') > -1)
                    index = time[2].indexOf('+');
                else if (time[2].indexOf('-') > -1)
                    index = time[2].indexOf('-');
                else if (time[2].indexOf('Z') > -1)
                    index = time[2].indexOf('Z');

                if (isNaN(index)) {
                    temp        = <number><any> (time[2].slice(0, index));
                    second      = Math.floor(temp);
                    millisecond = 1000 * ((temp % 1) / 1);
                }

                if (index != time[2].length) {
                    var offset:string     = time[2].slice(index);
                    var userOffset:number = DateUtil.getDifferenceFromUTCInHours(new Date(year, month, day));

                    switch (offset.charAt(0)) {
                        case '+' :
                        case '-' :
                            hour -= userOffset + <number><any> (offset.slice(0));
                            break;
                        case 'Z' :
                            hour -= userOffset;
                            break;
                    }
                }
            }

            return new Date(year, month, day, hour, minute, second, millisecond);
        }

        /**
         * 转换月为英文字符串
         * @param month
         * @returns {any}
         *
         *  <code>
         *      var myDate:Date = new Date(2000, 0, 1);
         *      console.log(DateUtil.getMonthAsString(myDate.getMonth())); // 输出 January
         *  </code>
         *
         */
        public static getMonthAsString(month:number):string {
            var monthNamesFull:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            return monthNamesFull[month];
        }

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
        public static getMonthAbbrAsString(month:number):string {
            return DateUtil.getMonthAsString(month).substr(0, 3);
        }

        /**
         * 转换天为英文字符
         * @param day
         * @returns {any}
         *
         *  <code>
         *      var myDate:Date = new Date(2000, 0, 1);
         *      console.log(DateUtil.getDayAsString(myDate.getDay())); // 输出 Saturday
         *  </code>
         */
        public static getDayAsString(day:number):string {
            var dayNamesFull:Array<any> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            return dayNamesFull[day];
        }

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
        public static getDayAbbrAsString(day:number):string {
            return DateUtil.getDayAsString(day).substr(0, 3);
        }

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
        public static getDaysInMonth(year:number, month:number):number {
            return (new Date(year, ++month, 0)).getDate();
        }

        /**
         * 获取当前小时为上午还是下午
         * @param hours
         * @returns {string}
         *
         *  <code>
         *      console.log(DateUtil.getMeridiem(17)); // 输出 PM
         *  </code>
         */
        public static getMeridiem(hours:number):string {
            return (hours < 12) ? 'AM' : 'PM';
        }

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
        public static getTimeBetween(startDate:Date, endDate:Date):number {
            return endDate.getTime() - startDate.getTime();
        }

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
        public static getCountdownUntil(startDate:Date, endDate:Date):any {
            var daysUntil:number = ConversionUtil.millisecondsToDays(this.getTimeBetween(startDate, endDate));
            var hoursUntil:number  = ConversionUtil.daysToHours(daysUntil % 1);
            var minsUntil:number   = ConversionUtil.hoursToMinutes(hoursUntil % 1);
            var secsUntil:number   = ConversionUtil.minutesToSeconds(minsUntil % 1);
            var milliUntil:number  = ConversionUtil.secondsToMilliseconds(secsUntil % 1);

            var result:Object = {
                days: parseInt(daysUntil.toString()),
                hours: parseInt(hoursUntil.toString()),
                minutes: parseInt(minsUntil.toString()),
                seconds: parseInt(secsUntil.toString()),
                milliseconds: parseInt(milliUntil.toString())
            };
            return result;
        }

        /**
         * 获取通用UTC秒
         * @param d
         * @returns {number}
         */
        public static getDifferenceFromUTCInSeconds(d:Date):number {
            return ConversionUtil.minutesToSeconds(d.getTimezoneOffset());
        }

        /**
         * 获取通用UTC小时
         * @param d
         * @returns {number}
         */
        public static getDifferenceFromUTCInHours(d:Date):number {
            return ConversionUtil.minutesToHours(d.getTimezoneOffset());
        }

        /**
         * 从UTC格式化
         * @param d
         * @param separator
         * @returns {string}
         */
        public static getFormattedDifferenceFromUTC(d:Date, separator:string = ""):string {
            var pre:string = (-d.getTimezoneOffset() < 0) ? '-' : '+';

            return pre + NumberUtil.addLeadingZero(Math.floor(DateUtil.getDifferenceFromUTCInHours(d))) + separator + NumberUtil.addLeadingZero(d.getTimezoneOffset() % 60);
        }

        /**
         * 获取时间时区
         * @param d
         * @returns {any}
         *
         *  <code>
         *      console.log(DateUtil.getTimezone(new Date()));
         *  </code>
         */
        public static getTimezone(d:Date):string {
            var timeZones:Array<any> = new Array<any>('IDLW', 'NT', 'HST', 'AKST', 'PST', 'MST', 'CST', 'EST', 'AST', 'ADT', 'AT', 'WAT', 'GMT', 'CET', 'EET', 'MSK', 'ZP4', 'ZP5', 'ZP6', 'WAST', 'WST', 'JST', 'AEST', 'AEDT', 'NZST');
            var hour:number       = Math.round(12 + -(d.getTimezoneOffset() / 60));

            if (DateUtil.isDaylightSavings(d))
                hour--;

            return timeZones[hour];
        }

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
        public static isLeapYear(year:number):boolean {
            return DateUtil.getDaysInMonth(year, 1) == 29;
        }

        /**
         * 是否是夏令时
         * @param d
         * @returns {boolean}
         */
        public static isDaylightSavings(d:Date):boolean {
            var months:number = 12;
            var offset:number = d.getTimezoneOffset();
            var offsetCheck:number;

            while (months--) {
                offsetCheck = (new Date(d.getFullYear(), months, 1)).getTimezoneOffset();

                if (offsetCheck != offset)
                    return (offsetCheck > offset);
            }

            return false;
        }

        /**
         * 获取网络时间
         * @param d
         * @returns {number}
         */
        public static getInternetTime(d:Date):number {
            var beats:number = ((d.getUTCHours() + 1 + ConversionUtil.minutesToHours(d.getUTCMinutes()) + ConversionUtil.secondsToHours(d.getUTCSeconds())) / 0.024);
            return (beats > 1000) ? beats - 1000 : beats;
        }

        /**
         * 获取当前日期中一年的总天数(从0开始计算)
         * @param d
         * @returns {number}
         */
        public static getDayOfTheYear(d:Date):number {
            var firstDay:Date = new Date(d.getFullYear(), 0, 1);
            return (d.getTime() - firstDay.getTime()) / 86400000;
        }

        /**
         * 获取当前日期中一年的总周数
         * @param d
         * @returns {number}
         */
        public static getWeekOfTheYear(d:Date):number {
            var firstDay:Date    = new Date(d.getFullYear(), 0, 1);
            var dayOffset:number   = 9 - firstDay.getDay();
            var firstMonday:Date = new Date(d.getFullYear(), 0, (dayOffset > 7) ? dayOffset - 7 : dayOffset);
            var currentDay:Date  = new Date(d.getFullYear(), d.getMonth(), d.getDate());
            var weekNumber:number  = (ConversionUtil.millisecondsToDays(currentDay.getTime() - firstMonday.getTime()) / 7) + 1;

            return (weekNumber == 0) ? DateUtil.getWeekOfTheYear(new Date(d.getFullYear() - 1, 11, 31)) : weekNumber;
        }

        /**
         * 判断日期是否相等
         * @param first
         * @param second
         * @returns {boolean}
         */
        public static equals(first:Date, second:Date):boolean {
            return first.valueOf() == second.valueOf();
        }

        /**
         * 类名
         * @returns {string}
         */
        public toString():string {
            //console.log("ClassName",this.CLASS_NAME);
            return this.CLASS_NAME;
        }
    }
}