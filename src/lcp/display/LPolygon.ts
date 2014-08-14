/**
 * Created by d8q8 on 2014/8/12.
 */
module Lcp{
    export class LPolygon extends LBase{
        private _corner:number = 3;
		public get corner():number{return this._corner;}
		public set corner(value:number)
		{
			this._corner = value;
			this.draw();
		}

        constructor(x:number,y:number,width:number,height:number,corner:number=3,color?:number){
            super();
            this.x=x;
            this.y=y;
            this.width=width;
            this.height=height;
            this.corner=corner;
            if(color)
                this.color=color;
            this.draw();
        }

		public drawShape(offsetX:number, offsetY:number):void
		{
			this.graphics.moveTo(offsetX + this.width / 2, offsetY);
			for(var i:number = 1; i < this.corner; i++)
			{
				var rad:number = 2 * Math.PI / this.corner * i;
				this.graphics.lineTo(offsetX + this.width  / 2 * (1 + Math.sin(rad)),
				                offsetY + this.height / 2 * (1 - Math.cos(rad)));
			}
		}
    }
}