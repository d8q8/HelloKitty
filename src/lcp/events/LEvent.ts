/**
 * Created by d8q8 on 2014/8/12.
 */
module Lcp{
    export class LEvent extends egret.Event{
        private _obj:Object;
        public constructor(type:string,obj:Object=null,bubbles:boolean=false,cancelable:boolean=false){
            super(type,bubbles,cancelable);
            if(obj!=null){
                this._obj = obj;
            }
        }

        public clone():Lcp.LEvent{
            return new Lcp.LEvent(this.type,this._obj,this.bubbles,this.cancelable);
        }

        public toString():void{
			console.log("LEvent", "type", "bubbles", "cancelable");
		}

        public get param():Object{
            return this._obj;
        }

        public static dispatchLEvent(target:egret.IEventDispatcher,type:string):void{
            var eventClass:any = Lcp.LEvent;
            egret.Event._dispatchByTarget(eventClass,target,type);
        }
    }
}