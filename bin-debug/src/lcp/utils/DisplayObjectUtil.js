/**
 * Created by d8q8 on 2014/12/7.
 * @module lcp
 * @class DisplayObjectUtil
 * @constructor
 **/
var lcp;
(function (lcp) {
    /**
     * 显示对象工具类
     */
    var DisplayObjectUtil = (function () {
        function DisplayObjectUtil() {
            this.CLASS_NAME = "DisplayObjectUtil";
        }
        var __egretProto__ = DisplayObjectUtil.prototype;
        /**
         * 移除所有子元件
         * @param parent 父元件
         * @param destroyChildren 是否销毁子元件
         * @param recursive 是否递归移除
         */
        DisplayObjectUtil.removeAllChildren = function (parent, destroyChildren, recursive) {
            if (destroyChildren === void 0) { destroyChildren = false; }
            if (recursive === void 0) { recursive = false; }
            var container = parent;
            while (container.numChildren)
                DisplayObjectUtil._checkChild(container.removeChildAt(0), destroyChildren, recursive);
        };
        /**
         * 获取所有元件
         * @param parent
         * @returns {Array<any>}
         */
        DisplayObjectUtil.getChildren = function (parent) {
            var children = [];
            var i = -1;
            while (++i < parent.numChildren)
                children.push(parent.getChildAt(i));
            return children;
        };
        /**
         * 返回x和y偏移到DisplayObject左上角。该偏移可以用来定位的DisplayObject的对齐点不在(0，0)和或者缩放。
         * @param displayObject
         * @returns {egret.Point}
         */
        DisplayObjectUtil.getOffsetPosition = function (displayObject) {
            var bounds = displayObject.getBounds();
            var offset = new egret.Point();
            offset.x = (displayObject.scaleX > 0) ? bounds.x * displayObject.scaleX * -1 : bounds.right * displayObject.scaleX * -1;
            offset.y = (displayObject.scaleY > 0) ? bounds.y * displayObject.scaleY * -1 : bounds.bottom * displayObject.scaleY * -1;
            return offset;
        };
        /**
         * 返回在指定的名称所提供的DisplayObjectContainer存在显示树的第一显示对象。
         * @param parent
         * @param name
         * @returns {*}
         */
        DisplayObjectUtil.getChildByNameRecursive = function (parent, name) {
            var child = parent.getChildByName(name);
            if (child != null)
                return child;
            var i = -1;
            while (++i < parent.numChildren) {
                child = parent.getChildAt(i);
                if (child instanceof egret.DisplayObjectContainer) {
                    child = DisplayObjectUtil.getChildByNameRecursive(child, name);
                    if (child != null)
                        return child;
                }
            }
            return null;
        };
        DisplayObjectUtil._checkChild = function (child, destroy, recursive) {
            if (destroy && child instanceof lcp.CSprite) {
                var dest = child;
                if (!dest.isDestroyed)
                    dest.destroy();
            }
            if (recursive)
                DisplayObjectUtil.removeAllChildren(child, destroy, recursive);
        };
        /**
         * 类名
         * @returns {string}
         */
        __egretProto__.toString = function () {
            //console.log("ClassName",this.CLASS_NAME);
            return this.CLASS_NAME;
        };
        return DisplayObjectUtil;
    })();
    lcp.DisplayObjectUtil = DisplayObjectUtil;
    DisplayObjectUtil.prototype.__class__ = "lcp.DisplayObjectUtil";
})(lcp || (lcp = {}));
