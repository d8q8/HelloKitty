/**
 * Created by d8q8 on 2014/8/12.
 */
module Lcp{
    export class LRect extends LBase{
        constructor(x:number,y:number,width:number,height:number,color?:number){
            super();
            this.x=x+width/2;
            this.y=y+height/2;
            this.width=width;
            this.height=height;
            if(color)
                this.color=color;
            this.draw();
        }
        public drawShape(offsetX:number,offsetY:number):void{
            this.graphics.drawRect(0,0,this.width,this.height);
        }
    }
}