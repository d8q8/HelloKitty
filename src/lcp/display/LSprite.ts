/**
 * Created by d8q8 on 2014/8/20.
 * @module lcp
 * @class LSprite
 * @constructor
 **/
module lcp {
    /**
     * 精灵辅助类(主要完善精灵拖拽方法/增加简单拖拽方法)
     */
    export class LSprite extends egret.Sprite implements IRemovableEventDispatcher,IDisposable{
        public CLASS_NAME:string = 'LSprite';

        public isDisposed:boolean;
        public _listenerManager:ListenerManager;

        private clickOffset:egret.Point;//拖拽起始坐标
        private _mouseX:number;//舞台x坐标
        private _mouseY:number;//舞台y坐标
        private _target:any;//当前元件
        private _moveFunc:Function;//移动回调
        private _isDrag:boolean;//判断是否拖拽

        private static _instance:LSprite;

        /**
         * 更简化拖拽为一个属性判断
         * @returns {boolean}
         */
        public get isDrag():boolean{
            return this._isDrag;
        }
        public set isDrag(value:boolean){
            this._isDrag = value;
        }

        constructor() {
            super();
            this._isDrag=false;
            this.startDrag();
            this._listenerManager = ListenerManager.getManager(this);
        }

        /**
         * 统一入口
         * @returns {LSprite}
         */
        public static getInstance():LSprite{
            if(this._instance == null)
                this._instance = new LSprite();
            return this._instance;
        }

        /**
         * 简化开始拖拽
         */
        private startDrag():void {
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this._startDrag, this);
        }

        /**
         * 开始拖拽
         * @param lockCenter
         * @param bounds
         */
        private _startDrag(e:egret.TouchEvent):void {
            //console.log(this._isDrag);
            if(this._isDrag==true) {
                this._target = e.currentTarget;
                this.clickOffset = new egret.Point(e.localX, e.localY);
                this._mouseX = e.stageX;
                this._mouseY = e.stageY;
                this._moveFunc = (e)=> {
                    this._mouseX = e.stageX;
                    this._mouseY = e.stageY;
                    this.stopDrag();
                };
                this._target.addEventListener(egret.Event.ENTER_FRAME, this.enter_frame, this);
                this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this._moveFunc, this);
            }
            else{
                this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this._startDrag,this);
            }
        }

        /**
         * 简化停止拖拽
         */
        private stopDrag():void{
            this.addEventListener(egret.TouchEvent.TOUCH_END,this._stopDrag,this);
        }

        /**
         * 拖拽结束
         */
        private _stopDrag(e:egret.TouchEvent):void {
            this.clickOffset = null;
            this._target.removeEventListener(egret.Event.ENTER_FRAME, this.enter_frame, this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this._moveFunc, this);
        }

        /**
         * 实时获取坐标
         * @param e
         */
        private enter_frame(e:egret.Event):void {
            if (this.clickOffset != null) {
                this._target.x = this._mouseX - this.clickOffset.x;
                this._target.y = this._mouseY - this.clickOffset.y;
            }
        }

        /**
         * 两个矩形元件碰撞检测
         * @param o1
         * @param o2
         * @returns {boolean}
         */
        public static hitTestObject(o1:egret.DisplayObject,o2:egret.DisplayObject):boolean
        {
            var rect1:egret.Rectangle = o1.getBounds();
            var rect2:egret.Rectangle = o2.getBounds();
            rect1.x = o1.x;
            rect1.y = o1.y;
            rect2.x = o2.x;
            rect2.y = o2.y;
            return rect1.intersects(rect2);
        }

        /**
         * 两个元件碰撞检测(待修正)
         * @param o1
         * @param o2
         * @returns {boolean}
         */
        public static hitTest(o1:egret.DisplayObject,o2:egret.DisplayObject):boolean{
            var dx:number = o1.x - o2.x;
            var dy:number = o1.y - o2.y;
            var dist:number = Math.sqrt(dx*dx+dy*dy);
            if(dist < (o1.width/2 + o2.width/2) || dist < (o1.height/2 + o2.height/2)){
                return true;
          }
        }


        /**
         * 派发事件
         * @param event
         * @returns {boolean}
         */
        public dispatchEvent(event:egret.Event):boolean {
            if (this.willTrigger(event.type))
                return super.dispatchEvent(event);

            return true;
        }

        /**
         * 注册侦听
         * @param type
         * @param listener
         * @param thisObject
         * @param useCapture
         * @param priority
         */
        public addEventListener(type:string, listener:Function, thisObject:any, useCapture:boolean = false, priority:number = 0):void {
            super.addEventListener(type, listener, thisObject, useCapture, priority);
            this._listenerManager.addEventListener(type, listener, thisObject, useCapture, priority);
        }

        /**
         * 移除侦听
         * @param type
         * @param listener
         * @param thisObject
         * @param useCapture
         */
        public removeEventListener(type:string, listener:Function, thisObject:any, useCapture:boolean = false):void {
            super.removeEventListener(type, listener, thisObject, useCapture);
            this._listenerManager.removeEventListener(type, listener, thisObject, useCapture);
        }

        /**
         * 移除指定类型的所有事件
         * @param type
         */
        public removeEventsForType(type:string):void {
            this._listenerManager.removeEventsForType(type);
        }

        /**
         * 移除指定侦听器报告的所有事件
         * @param listener
         */
        public removeEventsForListener(listener:Function):void {
            this._listenerManager.removeEventsForListener(listener);
        }

        /**
         * 移除所有侦听
         */
        public removeEventListeners():void {
            this._listenerManager.removeEventListeners();
        }

        /**
         * 获取指定事件或所有事件的总侦听数
         * @param type
         * @returns {number}
         */
        public getTotalEventListeners(type:string = null):number {
            return this._listenerManager.getTotalEventListeners(type);
        }

        /**
         Returns the current children of the <code>CasaSprite</code> as an <code>Array</code>.

         @usageNote The <code>Array</code> is created dynamically when requested. It is best practice to store the result until no longer needed.
         */
        public get children():Array<any> {
            return DisplayObjectUtil.getChildren(this);
        }

        /**
         Removes and optionally destroys children of the <code>CasaSprite</code>.

         @param destroyChildren: If a child implements {@link IDestroyable} call its {@link IDestroyable#destroy destroy} method <code>true</code>, or don't destroy <code>false</code>; defaults to <code>false</code>.
         @param recursive: Call this method with the same arguments on all of the children's children (all the way down the display list) <code>true</code>, or leave the children's children <code>false</code>; defaults to <code>false</code>.
         */
        public removeAllChildren(destroyChildren:boolean = false, recursive:boolean = false):void {
            DisplayObjectUtil.removeAllChildren(this, destroyChildren, recursive);
        }

        /**
         Removes and optionally destroys children of the <code>CasaSprite</code> then destroys itself.

         @param destroyChildren: If a child implements {@link IDestroyable} call its {@link IDestroyable#destroy destroy} method <code>true</code>, or don't destroy <code>false</code>; defaults to <code>false</code>.
         @param recursive: Call this method with the same arguments on all of the children's children (all the way down the display list) <code>true</code>, or leave the children's children <code>false</code>; defaults to <code>false</code>.
         */
        public removeAllChildrenAndDestroy(destroyChildren:boolean = false, recursive:boolean = false):void {
            this.removeAllChildren(destroyChildren, recursive);
            this.dispose();
        }

        /**
         * 释放
         */
        public dispose():void {
            this._listenerManager.dispose();
            this.isDisposed = true;
            if (this.parent != null)
                this.parent.removeChild(this);
        }

        /**
         * 类名
         * @returns {string}
         */
        public toString():string {
            return this.CLASS_NAME;
        }

    }
}

//扩展碰撞检测
//egret.Sprite.hitTestObject = lcp.LSprite.hitTestObject;
//egret.Sprite.hitTest = lcp.LSprite.hitTest;