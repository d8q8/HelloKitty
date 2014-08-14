/**
 * Created by d8q8 on 2014/8/12.
 */
module Lcp{
    export class LBase extends egret.Sprite{
        private _centered:boolean;
        public get centered():boolean{return this._centered;}
        public set centered(value:boolean)
        {
            this._centered=value;
            this.draw();
        }

        private defaultCentered:boolean = false;

		private _color:number;
		public get color():number{return this._color;}
		public set color(value:number)
		{
			this._color = value;
			this.draw();
		}

		private _width:number;
		public get width():number{return this._width;}
		public set width(value:number)
		{
			this._width = value;
			this.draw();
		}

		private _height:number;
		public get height():number{return this._height;}
		public set height(value:number)
		{
			this._height = value;
			this.draw();
		}
        constructor(){
            super();
            this._color = 0xffffff;
			this._width = this._height = 10;
			this._centered = this.defaultCentered;
            this.x=this.y=0;
			this.draw();
        }

        public draw():void{
            this.graphics.clear();
            this.graphics.beginFill(this.color);
            this.graphics.lineStyle(5,0xffffff);
            this.drawShape(this._centered?-this._width/2:0,this._centered?-this._height/2:0);
            this.graphics.endFill();
        }

        public drawShape(offsetX:number,offsetY:number):void{

        }
    }
}