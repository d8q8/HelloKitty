/**
 * Created by d8q8 on 2014/11/22.
 */
interface Array<T>{
    sum():any;
    average():any;
    prototype: Array<T>;
}

Array.prototype.sum = function () {
    var len = this.length;
    if(len==0) return 0;
    for(var sum=0,i=0;i<len;i++){
        sum += this[i];
    }
    return sum;
}

Array.prototype.average = function () {
    var len = this.length;
    if(len==0) return 0;
    return this.sum()/len;
}

Array.sum = lcp.ArrayUtil.sum;
Array.average = lcp.ArrayUtil.average;
Array.random = lcp.ArrayUtil.random;
Array.randomize = lcp.ArrayUtil.randomize;