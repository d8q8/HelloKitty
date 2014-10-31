/**
 * Created by d8q8 on 2014/10/29.
 * @module Lcp
 * @class LLoader
 * @constructor
 **/
module Lcp {
    export class LLoaderInfo extends egret.EventDispatcher{
        public CLASS_NAME:string = "LLoaderInfo";

        private _content:any;
        public get content():any{return this._content;}
        public set content(value:any){this._content = value;}

        private _width:number;
        public get width():number{return this._width;}
        public set width(value:number){this._width = value;}

        private _height:number;
        public get height():number{return this._height;}
        public set height(value:number){this._height = value;}

        public constructor() {
            super();
            this._content = null;
            this._width = 0;
            this._height = 0;
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