/**
 * Created by d8q8 on 2014/8/15.
 * @module Lcp
 * @class LCircle
 * @constructor
 **/
module lcp{
    /**
     * 绘制圆形类
     */
    export class LCircle extends LGraphics{
        public CLASS_NAME:string = "LCircle";

        constructor(vars?:IGraphics){
            super(vars);
            this.vars.width = this.vars.radius * 2;
            this.vars.height = this.vars.radius * 2;

            this.x = this.vars.x;
            this.y = this.vars.y;
            this.width = this.vars.width;
            this.height = this.vars.height;
            this.touchEnabled = this.vars.touchEnabled;
            this.name = this.vars.name;
            this.anchorX = this.vars.anchorX;
            this.anchorY = this.vars.anchorY;
        }

        public drawShape():void{
            this.graphics.drawCircle(this.vars.radius,this.vars.radius,this.vars.radius);
        }

        public clone():LCircle{
            return arguments.callee(this.vars);
        }
    }
}