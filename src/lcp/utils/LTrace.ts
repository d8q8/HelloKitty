/**
 * Created by d8q8 on 2014/8/12.
 * @module Lcp
 * @class LTrace
 * @constructor
 */
module lcp{
    /**
     * 跟踪捕获类(待完善)
     */
    export class LTrace{
        public CLASS_NAME:string = "LTrace";
        public constructor(){

        }

        /**
         * 跟踪捕获
         * @param message
         * @param optionalParams
         */
        public static trace(message?: any, ...optionalParams: any[]):void{
            console.log(message, optionalParams);
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