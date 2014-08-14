/**
 * Created by d8q8 on 2014/8/12.
 */
module Lcp{
    export class LTrace{
        constructor(){

        }

        static trace(...rest:any[]):void{
            console.log(rest);
        }
    }
}