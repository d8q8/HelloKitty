/**
 * Created by d8q8 on 2014/11/18.
 * @module lcp
 * @class LOrder
 * @constructor
 **/
var lcp;
(function (lcp) {
    (function (OrderByType) {
        OrderByType[OrderByType["CASEINSENSITIVE"] = 1] = "CASEINSENSITIVE";
        OrderByType[OrderByType["DESCENDING"] = 2] = "DESCENDING";
        OrderByType[OrderByType["UNIQUESORT"] = 4] = "UNIQUESORT";
        OrderByType[OrderByType["RETURNINDEXEDARRAY"] = 8] = "RETURNINDEXEDARRAY";
        OrderByType[OrderByType["NUMERIC"] = 16] = "NUMERIC"; //指定 Array 类排序方法为数值（而不是字符串）排序。
    })(lcp.OrderByType || (lcp.OrderByType = {}));
    var OrderByType = lcp.OrderByType;
    var LOrder = (function () {
        function LOrder() {
            this.CLASS_NAME = "LOrder";
        }
        /**
         * 降序
         * @param a
         * @param b
         * @returns {number}
         */
        LOrder.desc = function (a, b) {
            if (a === b) {
                return 0;
            }
            if (typeof a === typeof b) {
                return a > b ? -1 : 1;
            }
            return typeof a > typeof b ? -1 : 1;
        };
        /**
         * 升序
         * @param a
         * @param b
         * @returns {number}
         */
        LOrder.asc = function (a, b) {
            if (a === b) {
                return 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        };
        /**
         * 获取数组中选定值索引值
         * @param arr
         * @param val
         * @returns {number}
         */
        LOrder.indexOf = function (arr, val) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == val)
                    return i;
            }
            return -1;
        };
        /**
         * 获取数组的索引值数组
         * @param arr
         * @returns {Array<any>}
         */
        LOrder.index = function (arr) {
            var temp_arr = [];
            for (var i = 0; i < arr.length; i++) {
                temp_arr[i] = i;
            }
            return temp_arr;
        };
        /**
         * 对数组中的元素进行排序
         * @param arr 待排序数组
         * @param orderBy 升序或降序,升序默认
         * @returns {Array<any>}
         */
        LOrder.sort = function (arr, orderBy) {
            if (!arr)
                return;
            var temp_arr = arr;
            if (orderBy) {
                if (typeof orderBy === 'function') {
                    temp_arr.sort(orderBy);
                }
                else {
                    if (orderBy == 2 /* DESCENDING */) {
                        temp_arr.sort(LOrder.desc);
                    }
                    else if (orderBy == 8 /* RETURNINDEXEDARRAY */) {
                        LOrder.index(temp_arr);
                    }
                    else {
                        temp_arr.sort(LOrder.asc);
                    }
                }
            }
            else {
                temp_arr.sort(LOrder.asc);
            }
            return temp_arr;
        };
        /**
         * 根据数组中的一个或多个字段对数组中的元素进行排序。
         * @param arr 待排序数组
         * @param fieldName 按字典中的key排序
         * @param orderBy 升序/降序,升序默认
         */
        LOrder.sortOn = function (arr, fieldName, orderBy) {
            if (!arr)
                return;
            var temp_arr = arr;
            var order_by = function (o, p) {
                var a, b;
                if (typeof o === "object" && typeof p === "object" && o && p) {
                    a = o[fieldName];
                    b = p[fieldName];
                    if (orderBy) {
                        if (typeof orderBy === 'function') {
                            return orderBy;
                        }
                        else {
                            if (orderBy == 2 /* DESCENDING */) {
                                return LOrder.desc(a, b);
                            }
                            else if (orderBy == 8 /* RETURNINDEXEDARRAY */) {
                                LOrder.index(temp_arr);
                            }
                            else {
                                return LOrder.asc(a, b);
                            }
                        }
                    }
                    else {
                        return LOrder.asc(a, b);
                    }
                }
                else {
                    lcp.LTrace.trace("sort error");
                }
            };
            temp_arr.sort(order_by);
            return temp_arr;
        };
        /**
         * 类名
         * @returns {string}
         */
        LOrder.prototype.toString = function () {
            //console.log("ClassName",this.CLASS_NAME);
            return this.CLASS_NAME;
        };
        return LOrder;
    })();
    lcp.LOrder = LOrder;
    LOrder.prototype.__class__ = "lcp.LOrder";
})(lcp || (lcp = {}));
