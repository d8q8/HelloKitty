/**
 * Created by d8q8 on 2014/11/6.
 * @module lcp
 * @class LHelper
 * @constructor
 **/
var lcp;
(function (lcp) {
    var LayerType;
    (function (LayerType) {
        LayerType[LayerType["TOP_LAYER"] = Number.MAX_VALUE] = "TOP_LAYER";
        LayerType[LayerType["BOTTOM_LAYER"] = Number.MIN_VALUE] = "BOTTOM_LAYER";
        LayerType[LayerType["UP_LAYER"] = Number.POSITIVE_INFINITY] = "UP_LAYER";
        LayerType[LayerType["DOWN_LAYER"] = Number.NEGATIVE_INFINITY] = "DOWN_LAYER";
    })(LayerType || (LayerType = {}));
    /**
     * 辅助帮助类
     */
    var LHelper = (function () {
        function LHelper() {
            this.CLASS_NAME = "LHelper";
            egret.Logger.warning("不可以实例化" + this.CLASS_NAME + "类,这是静态帮助类");
        }
        /**
         * 子元件初始化
         * @param $container 父容器
         * @param $target 子元件
         * @param $object 子属性
         * @param $depth 深度
         * @returns {DisplayObject} 返回子元件
         *
         * 使用方法示例如下:
         * lcp.LHelper.addChildAndInit(this, new LogoMC,{x:100,y:100},20);
         *
         */
        LHelper.addChildAndInit = function ($container, $target, $proper, $depth) {
            if ($depth === void 0) { $depth = -1; }
            $container.addChild($target);
            lcp.LVars.some($target, $proper);
            if ($depth != -1)
                LHelper.toLayer($target, $depth);
            return $target;
        };
        /**
         * 清除DisplayObjectContainer的所有孩子
         * @param $target * 要处理的对象/可以传入数组[mc1,mc2,...]
         * @returns {boolean} 成功返回true,否则false
         */
        LHelper.clear = function ($target) {
            if (!$target) {
                return false;
            }
            var target_array = [];
            var bool = false;
            if ($target instanceof Array)
                target_array = $target.concat();
            else
                target_array = [$target];
            for (var i = 0; i < target_array.length; i++) {
                var target_object = target_array[i];
                if (!(target_object instanceof egret.DisplayObjectContainer))
                    continue;
                if (target_object.numChildren == 0)
                    continue;
                for (var j = target_object.numChildren - 1; j >= 0; j--) {
                    target_object.removeChildAt(j);
                }
                bool = true;
            }
            if (bool)
                return true;
            else
                return false;
        };
        /**
         * 将diaplayObject移至所在容器的最顶层
         *
         * @param $target Object * 要处理的对象
         * @return Boolean 成功返回true,否则false
         */
        LHelper.toTop = function ($target) {
            if (!$target) {
                return false;
            }
            ;
            if (!$target.parent) {
                return false;
            }
            ;
            var target_container = ($target.parent);
            target_container.setChildIndex($target, target_container.numChildren - 1);
            return true;
        };
        /**
         * 将diaplayObject移至所在容器的最底层
         *
         * @param $target Object * 要处理的对象
         * @return Boolean 成功返回true,否则false
         */
        LHelper.toBottom = function ($target) {
            if (!$target) {
                return false;
            }
            ;
            if ($target.parent == null) {
                return false;
            }
            ;
            var target_container = ($target.parent);
            target_container.setChildIndex($target, 0);
            return true;
        };
        /**
         * 将diaplayObject移至所在容器的指定层级
         * 注：当层级超过容器时，为顶层；负数是为底层。
         *
         * @param $target Object * 要处理的对象
         * @param $layer Number	* 指定要移动到的层级
         * @return Boolean 成功返回true,否则false
         */
        LHelper.toLayer = function ($target, $layer) {
            if ($layer === void 0) { $layer = Number.MAX_VALUE; }
            if (!$target) {
                return false;
            }
            ;
            if (!$target.parent) {
                return false;
            }
            ;
            var target_container = ($target.parent);
            var index;
            switch ($layer) {
                case Number.MAX_VALUE:
                    index = target_container.numChildren - 1;
                    break;
                case LayerType.TOP_LAYER:
                    index = target_container.numChildren - 1;
                    break;
                case LayerType.BOTTOM_LAYER:
                    index = 0;
                    break;
                case LayerType.UP_LAYER:
                    index = target_container.getChildIndex($target) + 1;
                    break;
                case LayerType.DOWN_LAYER:
                    index = target_container.getChildIndex($target) - 1;
                    break;
                default:
                    index = $layer;
                    break;
            }
            index = index > (target_container.numChildren - 1) ? (target_container.numChildren - 1) : index;
            index = index < 0 ? 0 : index;
            target_container.setChildIndex($target, index);
            return true;
        };
        /**
         * 显示对象所有孩子对齐到整数点
         * @param $target * 要处理的对象
         */
        LHelper.autoAlgin = function ($target) {
            var depth = $target.numChildren;
            if ($target == null)
                return;
            var algin = function ($target) {
                $target.x = Math.floor($target.x);
                $target.y = Math.floor($target.y);
            };
            algin($target);
            if (depth == 0)
                return;
            for (var i = 0; i < depth; i++) {
                var sub = $target.getChildAt(i);
                algin(sub);
                if (sub instanceof egret.DisplayObjectContainer)
                    LHelper.autoAlgin(sub);
            }
        };
        /**
         * 应用混入类
         * @param derivedCtor 初始类
         * @param baseCtors 混入类数组
         */
        LHelper.applyMixins = function (derivedCtor, baseCtors) {
            baseCtors.forEach(function (baseCtor) {
                Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
                    derivedCtor.prototype[name] = baseCtor.prototype[name];
                });
            });
        };
        /**
         * 类名
         * @returns {string}
         */
        LHelper.prototype.toString = function () {
            return this.CLASS_NAME;
        };
        return LHelper;
    })();
    lcp.LHelper = LHelper;
    LHelper.prototype.__class__ = "lcp.LHelper";
})(lcp || (lcp = {}));
