/**
 * Created by d8q8 on 2014/8/22.
 * @module Lcp
 * @class LGlobal
 * @constructor
 **/
module Lcp {
    export class LGlobal {
        public CLASS_NAME:string = "LGlobal";

        private static _app:Object;
        public static get app():Object{
            return this._app;
        }
        public static set app(value:Object){
            this._app = value;
        }

        private static _root:egret.DisplayObjectContainer;
        public static get root():egret.DisplayObjectContainer{
            return this._root;
        }
        public static set root(value:egret.DisplayObjectContainer){
            this._root = value;
        }

        private static _stage:egret.Stage;
        public static get stage():egret.Stage{
            return this._stage;
        }
        public static set stage(value:egret.Stage){
            this._stage = value;
        }
        public constructor() {

        }
    }
}