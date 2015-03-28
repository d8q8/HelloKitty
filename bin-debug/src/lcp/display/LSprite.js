/**
 * Created by d8q8 on 2014/8/20.
 * @module lcp
 * @class LSprite
 * @constructor
 **/
var lcp;
(function (lcp) {
    /**
     * 精灵辅助类(主要完善精灵拖拽方法/增加简单拖拽方法)
     */
    var LSprite = (function (_super) {
        __extends(LSprite, _super);
        function LSprite() {
            _super.call(this);
            this.CLASS_NAME = 'LSprite';
            this._isDrag = false;
            this.startDrag();
        }
        var __egretProto__ = LSprite.prototype;
        Object.defineProperty(__egretProto__, "isDrag", {
            /**
             * 更简化拖拽为一个属性判断
             * @returns {boolean}
             */
            get: function () {
                return this._isDrag;
            },
            set: function (value) {
                this._isDrag = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 统一入口
         * @returns {LSprite}
         */
        LSprite.getInstance = function () {
            if (this._instance == null)
                this._instance = new LSprite();
            return this._instance;
        };
        /**
         * 简化开始拖拽
         */
        __egretProto__.startDrag = function () {
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this._startDrag, this);
        };
        /**
         * 开始拖拽
         * @param e
         * @private
         */
        __egretProto__._startDrag = function (e) {
            var _this = this;
            //console.log(this._isDrag);
            if (this._isDrag == true) {
                this._target = e.currentTarget;
                this.clickOffset = new egret.Point(e.localX, e.localY);
                this._mouseX = e.stageX;
                this._mouseY = e.stageY;
                this._moveFunc = function (e) {
                    _this._mouseX = e.stageX;
                    _this._mouseY = e.stageY;
                    _this.stopDrag();
                };
                this._target.addEventListener(egret.Event.ENTER_FRAME, this.enter_frame, this);
                this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this._moveFunc, this);
            }
            else {
                this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this._startDrag, this);
            }
        };
        /**
         * 简化停止拖拽
         */
        __egretProto__.stopDrag = function () {
            this.addEventListener(egret.TouchEvent.TOUCH_END, this._stopDrag, this);
        };
        /**
         * 拖拽结束
         */
        __egretProto__._stopDrag = function (e) {
            this.clickOffset = null;
            this._target.removeEventListener(egret.Event.ENTER_FRAME, this.enter_frame, this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this._moveFunc, this);
        };
        /**
         * 实时获取坐标
         * @param e
         */
        __egretProto__.enter_frame = function (e) {
            if (this.clickOffset != null) {
                this._target.x = this._mouseX - this.clickOffset.x;
                this._target.y = this._mouseY - this.clickOffset.y;
            }
        };
        /**
         * 两个矩形元件碰撞检测
         * @param o1
         * @param o2
         * @returns {boolean}
         */
        LSprite.hitTestObject = function (o1, o2) {
            var rect1 = o1.getBounds();
            var rect2 = o2.getBounds();
            rect1.x = o1.x;
            rect1.y = o1.y;
            rect2.x = o2.x;
            rect2.y = o2.y;
            return rect1.intersects(rect2);
        };
        /**
         * 两个元件碰撞检测(待修正)
         * @param o1
         * @param o2
         * @returns {boolean}
         */
        LSprite.hitTestElement = function (o1, o2) {
            var dx = o1.x - o2.x;
            var dy = o1.y - o2.y;
            var dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < (o1.width / 2 + o2.width / 2) || dist < (o1.height / 2 + o2.height / 2)) {
                return true;
            }
        };
        /**
         * 类名
         * @returns {string}
         */
        __egretProto__.toString = function () {
            return this.CLASS_NAME;
        };
        return LSprite;
    })(lcp.CSprite);
    lcp.LSprite = LSprite;
    LSprite.prototype.__class__ = "lcp.LSprite";
})(lcp || (lcp = {}));
//扩展碰撞检测
//egret.Sprite.hitTestObject = lcp.LSprite.hitTestObject;
//egret.Sprite.hitTest = lcp.LSprite.hitTest;
