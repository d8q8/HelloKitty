/**
 * Created by d8q8 on 2014/8/15.
 * @module Lcp
 * @class LGraphics
 * @constructor
 **/
module lcp {
    /**
     * 绘图基类
     */
    export class LGraphics extends egret.Sprite {
        public CLASS_NAME:string = "LGraphics";
        public _vars:IGraphics;
        public get vars():IGraphics{ return this._vars;}
        public set vars(value:IGraphics){
            if(this._vars==value){
                return;
            }
            this._vars = value;

        }
        constructor(vars?:IGraphics) {
            super();
            this.init();
            if(vars){
                LVars.some(this._vars,vars);
            }

            this.draw();

        }

        public init():void{
            this._vars = {};
            this._vars.x = 0;
            this._vars.y = 0;
            this._vars.name = this.CLASS_NAME;
            this._vars.width = 0;
            this._vars.height = 0;
            this._vars.anchorX = .5;
            this._vars.anchorY = .5;
            this._vars.touchEnabled = true;

            this._vars.thickness = NaN;
            this._vars.linecolor = 0;
            this._vars.linealpha = 1.0;
            this._vars.pixelHinting = false;
            this._vars.scaleMode = "normal";
            this._vars.caps = null;
            this._vars.joints = null;
            this._vars.miterLimit = 3;

            this._vars.fillcolor = 0xffffff;
            this._vars.fillalpha = 1;

            this._vars.radius = 5;
            this._vars.ellipseWidth = 5;
            this._vars.ellipseHeight = this._vars.ellipseWidth;
            this._vars.corner = 3;
            this._vars.ratio = .5;
            this._vars.petal = 4;
        }

        public draw():void {
            this.graphics.clear();
            this.graphics.lineStyle(this._vars.thickness, this._vars.linecolor, this._vars.linealpha, this._vars.pixelHinting, this._vars.scaleMode, this._vars.caps, this._vars.joints, this._vars.miterLimit);
            this.graphics.beginFill(this._vars.fillcolor, this._vars.fillalpha);
            this.drawShape();
            this.graphics.endFill();
        }

        public drawShape():void {

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