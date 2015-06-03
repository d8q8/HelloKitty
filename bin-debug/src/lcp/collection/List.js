/**
 * Created by d8q8 on 2014/11/18.
 * @module lcp
 * @class List
 * @constructor
 **/
var lcp;
(function (lcp) {
    /**
     * 列表类
     */
    var List = (function () {
        /**
         * 创建一个新的List表
         * @param collection
         */
        function List(collection) {
            this._collection = (collection == null) ? [] : collection.concat();
        }
        var __egretProto__ = List.prototype;
        /**
         * 新增单项到列表中
         * @param item
         * @returns {boolean}
         */
        __egretProto__.addItem = function (item) {
            this._collection.push(item);
            return true;
        };
        /**
         * 新增单项到指定列表索引处
         * @param item
         * @param index
         * @returns {boolean}
         */
        __egretProto__.addItemAt = function (item, index) {
            if (index === void 0) { index = 0; }
            this._collection.splice(index, 0, item);
            return true;
        };
        /**
         * 新增多项到list中
         * @param items
         * @returns {boolean}
         */
        __egretProto__.addItems = function (items) {
            this._collection = this._collection.concat(items.toArray());
            return true;
        };
        /**
         * 新增多顶到指定列表索引处
         * @param items
         * @param index
         * @returns {boolean}
         */
        __egretProto__.addItemsAt = function (items, index) {
            if (index === void 0) { index = 0x7fffffff; }
            return lcp.ArrayUtil.addItemsAt(this._collection, items.toArray(), index);
        };
        /**
         * 清空列表
         */
        __egretProto__.clear = function () {
            this._collection.splice(0);
        };
        /**
         * 判断单项是否在列表中
         * @param item
         * @returns {boolean}
         */
        __egretProto__.contains = function (item) {
            return (this.indexOf(item) != -1);
        };
        /**
         * 是否包含多项是否在列表中
         * @param items
         * @returns {boolean}
         */
        __egretProto__.containsAll = function (items) {
            return lcp.ArrayUtil.containsAll(this._collection, items.toArray());
        };
        /**
         * 判断指定列表是否相等
         * @param list
         * @returns {boolean}
         */
        __egretProto__.equals = function (list) {
            return lcp.ArrayUtil.equals(this._collection, list.toArray());
        };
        /**
         * 获取索引位置的列表元素
         * @param index
         * @returns {any}
         */
        __egretProto__.getItemAt = function (index) {
            if (index === void 0) { index = 0; }
            return this._collection[index];
        };
        /**
         * 返回列表的一部分
         * @param startIndex
         * @param endIndex
         * @returns {lcp.List}
         */
        __egretProto__.subList = function (startIndex, endIndex) {
            if (startIndex === void 0) { startIndex = 0; }
            if (endIndex === void 0) { endIndex = 16777215; }
            return new List(this._collection.slice(startIndex, endIndex));
        };
        /**
         * 搜索指定项第一次出现在列表中的位置
         * @param item
         * @param fromIndex
         * @returns {number}
         */
        __egretProto__.indexOf = function (item, fromIndex) {
            if (fromIndex === void 0) { fromIndex = 0; }
            return this._collection.indexOf(item, fromIndex);
        };
        /**
         * 判断列表是否有元素
         * @returns {boolean}
         */
        __egretProto__.isEmpty = function () {
            return this.size == 0;
        };
        /**
         * 搜索指定值在列表最后出现位置
         * @param item
         * @param fromIndex
         * @returns {number}
         */
        __egretProto__.lastIndexOf = function (item, fromIndex) {
            if (fromIndex === void 0) { fromIndex = 0x7fffffff; }
            return this._collection.lastIndexOf(item, fromIndex);
        };
        Object.defineProperty(__egretProto__, "size", {
            /**
             * 列表元素个数
             * @returns {number}
             */
            get: function () {
                return this._collection.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 删除所有指定的项
         * @param item
         * @returns {boolean}
         */
        __egretProto__.removeAllInstancesOfItem = function (item) {
            return lcp.ArrayUtil.removeItem(this._collection, item) != 0;
        };
        /**
         * 删除指定项
         * @param item
         * @returns {boolean}
         */
        __egretProto__.removeItem = function (item) {
            var i = this._collection.indexOf(item);
            if (i == -1)
                return false;
            this._collection.splice(i, 1);
            return true;
        };
        /**
         * 从索引处删除指定项
         * @param index
         * @returns {any}
         */
        __egretProto__.removeItemAt = function (index) {
            if (index === void 0) { index = 0; }
            return this._collection.splice(index, 1)[0];
        };
        /**
         * 删除多个指定项
         * @param items
         * @returns {boolean}
         */
        __egretProto__.removeItems = function (items) {
            return lcp.ArrayUtil.removeItems(this._collection, items.toArray());
        };
        /**
         * 保留多个指定项
         * @param items
         * @returns {boolean}
         */
        __egretProto__.retainItems = function (items) {
            return lcp.ArrayUtil.retainItems(this._collection, items.toArray());
        };
        /**
         * 替换指定项
         * @param item
         * @param index
         * @returns {any}
         */
        __egretProto__.setItem = function (item, index) {
            if (index === void 0) { index = 0; }
            return this._collection.splice(index, 1, item)[0];
        };
        /**
         * 列表转数组
         * @returns {Array<any>}
         */
        __egretProto__.toArray = function () {
            return this._collection.concat();
        };
        /**
         * 创建一个副本
         * @returns {lcp.List}
         */
        __egretProto__.clone = function () {
            return new List(this.toArray());
        };
        /**
         * 返回字符
         * @returns {string}
         */
        __egretProto__.toString = function () {
            return this._collection.toString();
        };
        return List;
    })();
    lcp.List = List;
    List.prototype.__class__ = "lcp.List";
})(lcp || (lcp = {}));
