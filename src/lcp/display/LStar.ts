/**
 * Created by d8q8 on 2014/8/12.
 */
module Lcp{
    export class LStar extends LBase{
        private _corner:number = 5;
		public get corner():number{return this._corner;}
		public set corner(value:number)
		{
			this._corner = value;
			this.draw();
		}

		private _ratio:number = 0.5;
		public get ratio():number{return this._ratio;}
		public set ratio(value:number)
		{
			this._ratio = value;
			this.draw();
		}

        constructor(x:number,y:number,width:number,height:number,corner:number=5,ratio:number=.5,color?:number){
            super();
            this.x=x;
            this.y=y;
            this.width=width;
            this.height=height;
            this.corner=corner;
            this.ratio = ratio;
            if(color)
                this.color=color;
            this.draw();
        }

		public drawShape(offsetX:number, offsetY:number):void
		{
			this.graphics.moveTo(offsetX + this.width / 2, offsetY);
			for(var i:number = 0; i < this.corner; i++)
			{
				var rad:number = Math.PI / this.corner * (2 * i + 1);
				this.graphics.lineTo(offsetX + this.width  / 2 * (1 + Math.sin(rad) * this.ratio),
				                offsetY + this.height / 2 * (1 - Math.cos(rad) * this.ratio));
				rad = Math.PI / this.corner * (2 * i + 2);
				this.graphics.lineTo(offsetX + this.width  / 2 * (1 + Math.sin(rad)),
				                offsetY + this.height / 2 * (1 - Math.cos(rad)));
			}
		}
    }
}