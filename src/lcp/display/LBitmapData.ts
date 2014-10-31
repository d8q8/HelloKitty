/**
 * Created by d8q8 on 2014/10/29.
 * @module Lcp
 * @class LBitmapData
 * @constructor
 **/
module Lcp {
    export class LBitmapData extends egret.HTML5CanvasRenderer implements Object{
        public CLASS_NAME:string = "LBitmapData";

        private _width:number;
        public get width():void{
            return this._width;
        }

        private _height:number;
        public get height():void{
            return this._height;
        }

        private _transparent:boolean;
        public get transparent():void{
            //return this._transparent;
            return true;
        }

        private _rect:egret.Rectangle;
        public get rect():void{
            return this._rect.clone();
        }

        private _pixel:ImageData;
        private _modified:boolean;
        private _disposed:boolean;

        public constructor(width:number,height:number,transparent:boolean = true,fillColor:number = 0xFFFFFFFF) {
            super();
            width = width | 0;
            height = height | 0;
            if (!width || !height || width > 2880 || height > 2880)
            {
                egret.Logger.warning("Invalid BitmapData.");
            }

            this._width = width;
            this._height = height;
            //this._transparent = (transparent) ? true : false;


            this._rect = new egret.Rectangle(0, 0, width, height);
            this._pixel = this.canvasContext.createImageData(1, 1);
            this._modified = false;
            this._disposed = false;

            if (fillColor === null)
            {
                fillColor = 0xFFFFFFFF;
            }
            if (fillColor)
            {
                this.canvasContext.fillRect(this._rect, fillColor);
            }
        }



        /**
         * 类名
         * @returns {string}
         */
        public toString():string {
            this.CLASS_NAME.concat()
            return this.CLASS_NAME;
        }
    }
}