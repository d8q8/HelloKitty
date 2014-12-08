/**
 * Created by d8q8 on 2014/11/6.
 * @module lcp
 * @class Disposable
 * @constructor
 **/
module lcp {
    /**
     * 销毁类
     */
    export class Disposable implements IDisposable {
        public CLASS_NAME:string = "Disposable";
        public isDisposed: boolean;

        public constructor() {

        }

        public dispose():void {
            this.isDisposed = true;
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