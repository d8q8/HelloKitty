/**
 * Created by d8q8 on 2014/8/12.
 */
module Lcp{
    export class LListener{
        private static _instance:LListener;
        private _dispatcher:egret.EventDispatcher;
        constructor(){
            egret.Logger.warning("不可以实例化LListener类,请实例Lcp.LListener.getInstance()开始");
            if(this._dispatcher==null){
                this._dispatcher = new egret.EventDispatcher();
            }
        }

        public static getInstance():LListener{
            if(this._instance==null)
                this._instance = new Lcp.LListener();
            return this._instance;
        }

        public addEventListener(type:string,listener:Function,thisObject:any,useCapture:boolean=false,priority:number=0):void{
            this._dispatcher.addEventListener(type,listener,thisObject,useCapture,priority);
        }

        public removeEventListener(type:string,listener:Function,thisObject:any,useCapture:boolean=false):void{
            this._dispatcher.removeEventListener(type,listener,thisObject,useCapture);
        }

        public hasEventListener(type:string):boolean
		{
			return this._dispatcher.hasEventListener(type);
		}

        public willTrigger(type:string):boolean
		{
			return this._dispatcher.willTrigger(type);
		}

        public dispatchEvent(event:Lcp.LEvent):boolean {
			return this._dispatcher.dispatchEvent(event);
		}

        public toString():string
		{
			return this._dispatcher.toString();
		}
    }
}