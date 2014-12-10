/**
 * Created by d8q8 on 2014/12/10.
 * @module lcp
 * @class ColorUtil
 * @constructor
 **/
module lcp {
    /**
     * 颜色工具类
     */
    export class ColorUtil {
        public CLASS_NAME:string = "ColorUtil";

        public constructor() {

        }

        /**
         * 把一系列单独的RGB(A)转化成32位ARGB颜色值
         * @param r 一个从0到255表示红色的颜色值。
         * @param g 一个从0到255表示绿色的颜色值。
         * @param b 一个从0到255表示蓝色的颜色值。
         * @param a 一个从0到255表示透明度的值。默认为255
         * @returns {number}
         *
         * 使用方法如下
         * <code>
         *     var hexColor : string = ColorUtil.getHexStringFromARGB(128, 255, 0, 255);
         *     console.log(hexColor); // 输出 80FF00FF
         * </code>
         *
         */
        public static getColor(r : number, g : number, b : number, a : number = 255) : number {
            return (a << 24) | (r << 16) | (g << 8) | b;
        }

        /**
         * 转换一个32位ARGB值变成一个ARGB对象
         * @param color 32位ARGB颜色值
         * @returns {Object} 返回属性为a,r,g,b定义的对象
         *
         * 使用方法如下
         * <code>
         *     var myRGB:Object = ColorUtil.getARGB(0xCCFF00FF);
         *     console.log("透明度 = " + myRGB.a);
         *     console.log("红色 = " + myRGB.r);
         *     console.log("绿色 = " + myRGB.g);
         *     console.log("蓝色 = " + myRGB.b);
         * </code>
         */
        public static getARGB(color : number) : Object {
            var c : Object = {};
            c.a = color >> 24 & 0xFF;
            c.r = color >> 16 & 0xFF;
            c.g = color >> 8 & 0xFF;
            c.b = color & 0xFF;
            return c;
        }

        /**
         * 转化一个24位RGB颜色值变成一个RGB对象
         * @param color 24位RGB颜色值
         * @returns {Object} 返回一个属性为r,g,b定义的对象
         *
         * 使用方法如下
         * <code>
         var myRGB:Object = ColorUtil.getRGB(0xFF00FF);
         trace("Red = " + myRGB.r);
         trace("Green = " + myRGB.g);
         trace("Blue = " + myRGB.b);
         </code>
         */
        public static getRGB(color : number) : Object {
            var c : Object = {};
            c.r = color >> 16 & 0xFF;
            c.g = color >> 8 & 0xFF;
            c.b = color & 0xFF;
            return c;
        }

        /**
         Converts a 32-bit ARGB color value into a hexidecimal String representation.

         @param a: A uint from 0 to 255 representing the alpha value.
         @param r: A uint from 0 to 255 representing the red color value.
         @param g: A uint from 0 to 255 representing the green color value.
         @param b: A uint from 0 to 255 representing the blue color value.
         @return Returns a hexidecimal color as a String.
         @example
         <code>
         var hexColor : String = ColorUtil.getHexStringFromARGB(128, 255, 0, 255);
         trace(hexColor); // Traces 80FF00FF
         </code>
         */
        public static getHexStringFromARGB(a : number, r : number, g : number, b : number) : string {
            var aa : string = a.toString(16);
            var rr : string = r.toString(16);
            var gg : string = g.toString(16);
            var bb : string = b.toString(16);
            aa = (aa.length == 1) ? '0' + aa : aa;
            rr = (rr.length == 1) ? '0' + rr : rr;
            gg = (gg.length == 1) ? '0' + gg : gg;
            bb = (bb.length == 1) ? '0' + bb : bb;
            return (aa + rr + gg + bb).toUpperCase();
        }

        /**
         Converts an RGB color value into a hexidecimal String representation.

         @param r: A uint from 0 to 255 representing the red color value.
         @param g: A uint from 0 to 255 representing the green color value.
         @param b: A uint from 0 to 255 representing the blue color value.
         @return Returns a hexidecimal color as a String.
         @example
         <code>
         var hexColor : String = ColorUtil.getHexStringFromRGB(255, 0, 255);
         trace(hexColor); // Traces FF00FF
         </code>
         */
        public static getHexStringFromRGB(r : number, g : number, b : number) : string {
            var rr : string = r.toString(16);
            var gg : string = g.toString(16);
            var bb : string = b.toString(16);
            rr = (rr.length == 1) ? '0' + rr : rr;
            gg = (gg.length == 1) ? '0' + gg : gg;
            bb = (bb.length == 1) ? '0' + bb : bb;
            return (rr + gg + bb).toUpperCase();
        }
        /**
         * 类名
         * @returns {string}
         */
        public toString():string {
            //console.log("ClassName",this.CLASS_NAME);
            return this.CLASS_NAME;
        }
    }
}