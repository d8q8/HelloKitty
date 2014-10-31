/**
 * Created by d8q8 on 2014/8/20.
 * @module Lcp
 * @class LSprite
 * @constructor
 *
 *                          _ooOoo_
 *                         o8888888o
 *                         88" . "88
 *                         (| -_- |)
 *                         O\  =  /O
 *                      ____/`---'\____
 *                    .'  \\|     |//  `.
 *                   /  \\|||  :  |||//  \
 *                  /  _||||| -:- |||||-  \
 *                  |   | \\\  -  /// |   |
 *                  | \_|  ''\---/''  |   |
 *                  \  .-\__  `-` ___/-. /
 *                  ___`. .' /--.--\  `. . __
 *              ."" '<  `.___\_<|>_/___.'  >'"".
 *            | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *            \  \ `-.   \_ __\ /__ _/   .-` /  /
 *       ======`-.____`-.___\_____/___.-`____.-'======
 *                          `=---='
 *       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *               佛祖保佑      白菜      永无BUG
 *               快加工资    cabbage    不改需求
 *   ======================================================
 */
module Lcp {
    export class LSprite extends egret.Sprite {
        public CLASS_NAME:string = "LSprite";

        private _dragOffsetX:number;
        private _dragOffsetY:number;
        private _dragTarget:any;
        private _dragBounds:egret.Rectangle;

        private _startDragFunc:Function;
        private _stopDragFunc:Function;

        private _mouseX:number;
        private _mouseY:number;

        private _mouseOverStage:boolean;
        private _objectUnderMouse:any;
        private _mouseDownObject:any;
        private _mouseClickObject:any;

        public constructor() {
            super();
            this._dragOffsetX = 0;
            this._dragOffsetY = 0;
            this._dragTarget = null;
            this._dragBounds = null;

            this._startDragFunc = null;
            this._stopDragFunc = null;

            this._mouseX = 0;
            this._mouseY = 0;

            //wether the mouse is over the stage rect
            this._mouseOverStage = false;
            //the current object under the mouse point.
            this._objectUnderMouse = null;
            //the object that the mouse was pressed.
            //if this is NULL the mouse is not pressed.
            this._mouseDownObject = null;
            //the last object that received a CLICK event.
            //if this object gets clicked again in 500ms DOUBLE_CLICK will be called.
            this._mouseClickObject = null;

            //this._updateObjectUnderMouse();

        }

        /**
         * 允许用户拖动指定的 Sprite。
         * @param lockCenter  指定是将可拖动的 Sprite 锁定到鼠标位置中央 (true)，还是锁定到用户首次单击该 Sprite 时所在的点上 (false)。
         * @param bounds 相对于 Sprite 父级的坐标的值，用于指定 Sprite 约束矩形。
         */
        public startDrag(lockCenter:boolean = false, bounds:egret.Rectangle = null):void {
            this._startDrag(this, lockCenter, bounds);
        }

        /**
         * 结束 startDrag() 方法。
         */
        public stopDrag():void {
            this._stopDrag(this);
        }

        /**
         * 开始拖拽方法
         * @param target
         * @param lockCenter
         * @param bounds
         */
        private _startDrag(target:any, lockCenter:boolean = false, bounds:egret.Rectangle = null):void {
            if (lockCenter) {
                /*var localPoint = target.globalToLocal(this._mouseX, this._mouseY);
                 target.x += localPoint.x;
                 target.y += localPoint.y;*/
                target.x = this._mouseX;
                target.y = this._mouseY;
            }
            this._dragOffsetX = this._mouseX - target.x;
            this._dragOffsetY = this._mouseY - target.y;
            this._dragTarget = target;
            this._dragBounds = bounds;

            target.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this._mouseMoveHandler, this);
            target.stage.addEventListener(egret.TouchEvent.TOUCH_OUT, this.__mouseOutHandler, this);
        }

        /**
         * 停止拖拽方法
         */
        private _stopDrag(target:any):void {
            this._dragOffsetX = 0;
            this._dragOffsetY = 0;
            this._dragTarget = null;
            this._dragBounds = null;
            target.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this._mouseMoveHandler, this);
            target.stage.removeEventListener(egret.TouchEvent.TOUCH_OUT, this.__mouseOutHandler, this);
        }

        public _mouseMoveHandler(e:egret.TouchEvent):void {
            var x = e.stageX;
            var y = e.stageY;

            console.log(x, y);

            // mouse move events
            this._mouseOverStage = false;
            if (this.getBounds(new egret.Rectangle(this.x, this.y, this.width, this.height)).containsPoint(new egret.Point(e.target.x, e.target.y))) {
                this._mouseX = x;
                this._mouseY = y;
                this._mouseOverStage = true;
                this._updateObjectUnderMouse();

                if (this._objectUnderMouse) {
                    this._objectUnderMouse.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_MOVE, true, false));
                }
                else {
                    //if there is no abject under the mouse point,
                    //stage's mousemove event gets called
                    this.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_MOVE, true, false));
                }
            }
            else if (this._mouseDownObject) {
                //if the mouse is out of the stage but the mouse is down
                //stage's mousemove event gets called
                this._mouseX = x;
                this._mouseY = y;
                this._objectUnderMouse = null;
                this.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_MOVE, true, false));
            }
            else {
                //mouse is out of the stage and mouse is not down
                this._objectUnderMouse = null;
                return;
            }


            //handle startDrag
            var target = this._dragTarget;
            if (target) {
                var newX = x - this._dragOffsetX;
                var newY = y - this._dragOffsetY;
                var bounds = this._dragBounds;

                if (bounds) {
                    if (newX < bounds.x) {
                        newX = bounds.x;
                    }
                    if (newY < bounds.y) {
                        newY = bounds.y;
                    }
                    if (newX > bounds.x + bounds.width) {
                        newX = bounds.x + bounds.width;
                    }
                    if (newY > bounds.y + bounds.height) {
                        newY = bounds.y + bounds.height;
                    }
                }

                target.x = newX;
                target.y = newY;
            }
        }

        private __mouseOutHandler(e:egret.TouchEvent):void {
            this._stopDrag(e.target);
        }

        /*public _mouseDownHandler(e:egret.TouchEvent):void {
            //FIXED in opera and chrome we can't capture mousemove events while the contextmenu is open.
            //so without the code bellow if you right click then left click, the mouse position will not be updated.
            this._mouseMoveHandler(e);

            var target = this._objectUnderMouse;
            if (!target) {
                return;
            }

            if (e.touchDown) {
                //left click
                //function(type, bubbles, cancelable, localX, localY, relatedObject, ctrlKey, altKey, shiftKey, buttonDown, delta)
                target.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_BEGIN, true, false, e.touchPointID, null, null, e.ctrlKey, e.altKey, e.shiftKey, false));
                this._mouseDownObject = target;
            }
            else {
                //right click
                return;
            }
        }

        public _mouseUpHandler(e:egret.TouchEvent):void {
            this._mouseMoveHandler(e);

            var target = this._objectUnderMouse;
            if (!target) {
                if (this._mouseDownObject) {
                    target = this;
                }
                else {
                    return;
                }
            }

            if (e.touchDown) {
                //function(type, bubbles, cancelable, localX, localY, relatedObject, ctrlKey, altKey, shiftKey, buttonDown, delta)
                target.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_END, true, false, e.touchPointID, null, null, e.ctrlKey, e.altKey, e.shiftKey, false));
                if (this._mouseDownObject === target) {
                    target.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_TAP, true, false, e.touchPointID, null, null, e.ctrlKey, e.altKey, e.shiftKey, false));
                }
                this._mouseDownObject = null;
            }
            else {
                //right click
                return;
            }
        }*/

        public _updateObjectUnderMouse():void {
            //NOTE: do not call these events against the stage.
            //TODO: Add mouse event arguments
            if (this._mouseOverStage === false) {
                return;
            }

            var stage = this;
            Lcp.LTrace.trace(this);
            var last = (this._objectUnderMouse !== stage) ? this._objectUnderMouse : null;

            this._objectUnderMouse = this.getBounds(new egret.Rectangle(this.x, this.y, this.width, this.height)).containsPoint(new egret.Point(this._mouseX, this._mouseY));
            var current = (this._objectUnderMouse !== stage) ? this._objectUnderMouse : null;

            if (current !== last) {
                if (last) {
                    //mouse out
                    last.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_OUT, true, false));

                    //roll out
                    var rollOutEvent = new egret.TouchEvent(egret.TouchEvent.TOUCH_ROLL_OUT, false, false);
                    if (current) {
                        //parents of "current" don't fire event
                        this.__applyUp(last, function (current, event) {
                            if (this === current) {
                                return;
                            }
                            if (!(this instanceof egret.DisplayObjectContainer) || !this.contains(current)) {
                                this.dispatchEvent(event);
                            }
                        }, [current, rollOutEvent]);
                    }
                    else {
                        last.dispatchEvent(rollOutEvent);
                    }
                }
                if (current) {
                    //mouse over
                    current.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_OVER, true, false));

                    //roll over
                    var rollOverEvent = new egret.TouchEvent(egret.TouchEvent.TOUCH_ROLL_OUT, false, false);
                    if (last) {
                        //parents of "last" don't fire event
                        this.__applyUp(current, function (last, event) {
                            if (this === last) {
                                return;
                            }
                            if (!(this instanceof egret.DisplayObjectContainer) || !this.contains(last)) {
                                this.dispatchEvent(event);
                            }
                        }, [last, rollOverEvent]);
                    }
                    else {
                        current.dispatchEvent(rollOverEvent);
                    }
                }
            }

            //button mode
            //TODO buttonMode should effect children to
            var target = this._objectUnderMouse;
            if (target && target.touchEnabled) {
                target.touchEnabled = true;
            }
            else {
                target.touchEnabled = false;
            }
        }

        /**
         * apply a function up towards the display list root(including your self)
         */
        public __applyUp(self, func, args) {
            func.apply(self, args);
            if (self.parent) {
                this.__applyUp(self.parent, func, args);
            }
        }

        /**
         * apply a function down the display list(including your self)
         */
        public __applyDown(self, func, args) {
            func.apply(self, args);
            if (self.children) {
                var c = self.children;
                for (var i = 0, l = c.length; i < l; ++i) {
                    this.__applyDown(c[i], func, args);
                }
            }
        }

    }
}