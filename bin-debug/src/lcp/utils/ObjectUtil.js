/**
 * Created by d8q8 on 2014/11/28.
 * @module lcp
 * @class ObjectUtil
 * @constructor
 **/
var lcp;
(function (lcp) {
    var ObjectUtil = (function () {
        function ObjectUtil() {
            this.CLASS_NAME = "ObjectUtil";
        }
        /**
         * 搜索对象中是否包含一个属性
         * @param obj
         * @param member
         * @returns {boolean}
         */
        ObjectUtil.contains = function (obj, member) {
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop) && obj[prop] == member) {
                    return true;
                }
            }
            return false;
        };
        /**
         * 克隆一个深副本(官方暂时不支持对象写入和读取,先放着吧)
         * @param obj
         * @returns {any}
         */
        /*public static clone(obj:any):any {
         var byteArray = new egret.ByteArray();
         byteArray.writeObject(obj);
         byteArray.position = 0;
         return byteArray.readObject();
         }*/
        /**
         * 换一种方式对象克隆
         * @param obj
         * @param deep
         * @returns {any}
         */
        ObjectUtil.clone = function (obj, deep) {
            if (deep === void 0) { deep = false; }
            if (obj instanceof Array) {
                return ObjectUtil.arrayClone(obj, deep);
            }
            else if (typeof obj == "function") {
                return ObjectUtil.functionClone(obj, deep);
            }
            else if (obj instanceof Date) {
                return ObjectUtil.dateClone(obj, deep);
            }
            else if (obj instanceof Object) {
                return ObjectUtil.objectClone(obj, deep);
            }
            else {
                return obj;
            }
        };
        /**
         * 属性克隆
         * @param obj
         * @returns {*}
         */
        ObjectUtil.propClone = function (obj) {
            if (obj instanceof Array) {
                return ObjectUtil.arrayPrototypeClone(obj);
            }
            else if (typeof obj == "function") {
                return ObjectUtil.functionPrototypeClone(obj);
            }
            else if (obj instanceof Date) {
                return ObjectUtil.datePrototypeClone(obj);
            }
            else if (obj instanceof Object) {
                return ObjectUtil.objectPrototypeClone(obj);
            }
            else {
                return obj;
            }
        };
        /**
         * 对象克隆
         * @param obj
         * @param deep
         * @returns {any}
         */
        ObjectUtil.objectClone = function (obj, deep) {
            if (deep === void 0) { deep = false; }
            var buf = {};
            for (var p in obj) {
                buf[p] = deep ? arguments.callee(obj[p]) : obj[p];
            }
            return buf;
        };
        /**
         * 对象属性克隆
         * @param obj
         * @returns {any}
         */
        ObjectUtil.objectPrototypeClone = function (obj) {
            var tmp = function () {
            };
            tmp.prototype = obj;
            var buf = new tmp();
            return buf;
        };
        /**
         * 数组克隆
         * @param obj
         * @param deep
         * @returns {Array<any>}
         */
        ObjectUtil.arrayClone = function (obj, deep) {
            if (deep === void 0) { deep = false; }
            var buf = [];
            var i = obj.length;
            while (i--) {
                buf[i] = deep ? arguments.callee(obj[i]) : obj[i];
            }
            return buf;
        };
        /**
         * 数组属性克隆
         * @param obj
         * @returns {Array<any>}
         */
        ObjectUtil.arrayPrototypeClone = function (obj) {
            var tmp = Array.prototype;
            Array.prototype = obj;
            var buf = [];
            Array.prototype = obj;
            return buf;
        };
        /**
         * 函数克隆
         * @param obj
         * @param deep
         * @returns {Function}
         */
        ObjectUtil.functionClone = function (obj, deep) {
            if (deep === void 0) { deep = false; }
            var buf = Function(("return ") + obj)();
            for (var p in obj)
                buf[p] = deep ? arguments.callee(obj[p]) : obj[p];
            return buf;
        };
        /**
         * 函数属性克隆
         * @param obj
         * @returns {Function}
         */
        ObjectUtil.functionPrototypeClone = function (obj) {
            var tmp = Function.prototype;
            Function.prototype = obj;
            var buf = (new Function(("return ") + this))();
            Function.prototype = obj;
            return buf;
        };
        /**
         * 时间克隆
         * @param obj
         * @param deep
         * @returns {Date}
         */
        ObjectUtil.dateClone = function (obj, deep) {
            if (deep === void 0) { deep = false; }
            var buf = new Date();
            buf.setTime(obj.getTime());
            for (var p in obj)
                buf[p] = deep ? arguments.callee(obj[p]) : obj[p];
            return buf;
        };
        /**
         * 时间属性克隆
         * @param obj
         * @returns {Date}
         */
        ObjectUtil.datePrototypeClone = function (obj) {
            var tmp = Date.prototype;
            Date.prototype = obj;
            var buf = new Date();
            buf.setTime(obj.getTime());
            Date.prototype = tmp;
            return buf;
        };
        /**
         * 获取对象所有键存成数组
         * @param obj
         * @returns {Array<any>}
         */
        ObjectUtil.getKeys = function (obj) {
            var keys = [];
            for (var i in obj)
                if (obj.hasOwnProperty(i))
                    keys.push(i);
            return keys;
        };
        /**
         * 判断一个对象是否包含一个特定的方法
         * @param obj
         * @param methodName
         * @returns {boolean}
         */
        ObjectUtil.isMethod = function (obj, methodName) {
            if (obj.hasOwnProperty(methodName))
                return obj[methodName] instanceof Function;
            return false;
        };
        /**
         * 对象是否未定义
         * @param obj
         * @returns {boolean}
         */
        ObjectUtil.isUndefined = function (obj) {
            return this.isNull(obj) || obj === undefined || typeof obj === 'undefined';
        };
        /**
         * 对象是否为null
         * @param obj
         * @returns {boolean}
         */
        ObjectUtil.isNull = function (obj) {
            return obj === null || typeof obj === 'null' || obj == 0;
        };
        /**
         * 判断对象是否为空
         * @param obj
         * @returns {boolean}
         *
         *  <code>
         *      var testNumber:number = 0;
         *      var testArray:Array<any>   = [];
         *      var testString:string = "";
         *      var testObject:Object = {};
         *      console.log(lcp.ObjectUtil.isEmpty(testNumber)); // 输出 "true"
         *      console.log(lcp.ObjectUtil.isEmpty(testArray));  // 输出 "true"
         *      console.log(lcp.ObjectUtil.isEmpty(testString)); // 输出 "true"
         *      console.log(lcp.ObjectUtil.isEmpty(testObject)); // 输出 "true"
         *  </code>
         *
         */
        ObjectUtil.isEmpty = function (obj) {
            if (obj == undefined)
                return true;
            if (typeof (obj) == "number")
                return isNaN(obj) || obj == 0;
            if (obj instanceof Array || typeof (obj) == "string")
                return obj.length == 0;
            if (obj instanceof Object) {
                for (var prop in obj)
                    if (obj.hasOwnProperty(prop))
                        return false;
                return true;
            }
            return false;
        };
        /**
         * 类名
         * @returns {string}
         */
        ObjectUtil.prototype.toString = function () {
            //console.log("ClassName",this.CLASS_NAME);
            return this.CLASS_NAME;
        };
        return ObjectUtil;
    })();
    lcp.ObjectUtil = ObjectUtil;
    ObjectUtil.prototype.__class__ = "lcp.ObjectUtil";
})(lcp || (lcp = {}));
