/**
 * Created by d8q8 on 2014/10/29.
 * @module Lcp
 * @class LLoader
 * @constructor
 **/
module Lcp {
    export class LLoader extends egret.DisplayObjectContainer{
        public CLASS_NAME:string = "LLoader";

        private _content:any;
        public get content():any{return this._content;}
        public set content(value:any){
            this._content = value;
        }

        private _contentLoaderInfo:LLoaderInfo;
        public get contentLoaderInfo():LLoaderInfo{return this._contentLoaderInfo;}
        public set contentLoaderInfo(value:LLoaderInfo){
            this._contentLoaderInfo = value;
        }

        private _img:Image;
        public get img():Image{return this._img;}
        public set img(value:Image){
            this._img = value;
        }

        public constructor() {
            super();
            this._content = null;
            this._contentLoaderInfo = new LLoaderInfo();
            this._img = null;
        }

        public load(request:any):void{
            if (typeof request == 'string')
            {
                request = new egret.URLRequest(request);
            }

            if (this._content)
            {
                this.unload();
            }

            var img = new Image();

            img.onload = function(e)
            {
                //convert HTMLImageElement to BitmapData(HTMLCanvasElement)
                var bitmapData = new BitmapData(this.width, this.height, false, 0x00000000);
                bitmapData.__context.drawImage(this, 0, 0);
                self.__content = new Bitmap(bitmapData);

                //add content as a child
                self.__addChildAt(self.__content, 0);

                var contentLoaderInfo = self.__contentLoaderInfo;
                contentLoaderInfo.__content = self.__content;
                contentLoaderInfo.__width = bitmapData.__width;
                contentLoaderInfo.__height = bitmapData.__height;
                contentLoaderInfo.dispatchEvent(new Event(Event.INIT, false, false));
                contentLoaderInfo.dispatchEvent(new Event(Event.COMPLETE, false, false));
                self.close();
            };
            img.onerror = function(e)
            {
                self.__contentLoaderInfo.dispatchEvent(new IOErrorEvent(IOErrorEvent.IO_ERROR, false, false));
                self.close();
            };
            img.onabort = function(e)
            {
                self.close();
            };
            img.src = request.__url;
            this.__img = img;
        }

        public unload():void{

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