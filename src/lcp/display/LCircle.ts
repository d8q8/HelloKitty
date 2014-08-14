/**
 * Created by d8q8 on 2014/8/12.
 */
module Lcp{
    export class LCircle extends LBase{
        private _radius:number;
        public get radius():number{return this._radius;}
        public set radius(value:number){
            this._radius=value;
            this.draw();
        }

        constructor(x:number,y:number,radius:number,color?:number){
            super();
            this.x=x;
            this.y=y;
            this._radius=radius;
            this.width=this._radius*2;
            this.height=this._radius*2;
            if(color)
                this.color=color;
            this.draw();
        }

        public drawShape(offsetX:number,offsetY:number):void{
            this.graphics.drawCircle(this._radius,this._radius,this._radius);
        }
    }
}