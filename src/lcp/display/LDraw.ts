/**
 * Created by d8q8 on 2014/8/12.
 */

module Lcp{
    /**
     * 绘制类，目前画圆和画方
     */
    export class LDraw{

        /**
         * 画圆
         * @param vars
         * @returns {egret.Sprite}
         */
        static Circle(vars:circleVars):egret.Sprite {
            var sp:egret.Sprite = new egret.Sprite();
            if (vars.thickness) {
                if (vars.linecolor) {
                    if (vars.linealpha) {
                        sp.graphics.lineStyle(vars.thickness, vars.linecolor, vars.linealpha);
                    }
                    sp.graphics.lineStyle(vars.thickness, vars.linecolor);
                }
                sp.graphics.lineStyle(vars.thickness);
            }
            if (vars.fillcolor) {
                if (vars.fillalpha) {
                    sp.graphics.beginFill(vars.fillcolor, vars.fillalpha);
                }
                sp.graphics.beginFill(vars.fillcolor);
            }
            else{
                sp.graphics.beginFill(0xffffff);
            }
            sp.graphics.drawCircle(vars.radius, vars.radius, vars.radius);//必须这样处理，不然会有坑
            sp.graphics.endFill();
            if (vars.anchorX) {
                sp.anchorX = vars.anchorX;
            }
            if (vars.anchorY) {
                sp.anchorY = vars.anchorY;
            }
            sp.width = sp.height = vars.radius * 2;//这里必须是绘制半径的一倍
            sp.x = vars.x;
            sp.y = vars.y;//这里解决触点有效的，不给就对应不上
            return sp;
        }

        /**
         * 画方
         * @param vars
         * @returns {egret.Sprite}
         */
        static Rect(vars:rectVars):egret.Sprite {
            var sp:egret.Sprite = new egret.Sprite();
            if (vars.thickness) {
                if (vars.linecolor) {
                    if (vars.linealpha) {
                        sp.graphics.lineStyle(vars.thickness, vars.linecolor, vars.linealpha);
                    }
                    sp.graphics.lineStyle(vars.thickness, vars.linecolor);
                }
                sp.graphics.lineStyle(vars.thickness);
            }
            if (vars.fillcolor) {
                if (vars.fillalpha) {
                    sp.graphics.beginFill(vars.fillcolor, vars.fillalpha);
                }
                sp.graphics.beginFill(vars.fillcolor);
            }
            else{
                sp.graphics.beginFill(0xffffff);
            }
            sp.graphics.drawRect(0, 0, vars.width, vars.height);//必须这样处理，不然也有坑
            sp.graphics.endFill();
            if (vars.anchorX) {
                sp.anchorX = vars.anchorX;
            }
            if (vars.anchorY) {
                sp.anchorY = vars.anchorY;
            }
            sp.width = vars.width;
            sp.height = vars.height;//这里必须跟绘制矩形的宽高一样大小
            sp.x = vars.x + vars.width / 2;
            sp.y = vars.y + vars.height / 2;//这里解决触点有效的，不给就对应不上
            return sp;
        }

        static Star(vars:starVars):egret.Sprite{
            var sp:egret.Sprite = new egret.Sprite();

            return sp;
        }
    }

    export interface drawVars{
        x:number;
        y:number;
        thickness?:number;
        linecolor?:number;
        linealpha?:number;
        pixelHinting?:boolean;
        scaleMode?:string;
        caps?:string;
        joints?:string;
        miterLimit?:number;
        fillcolor?:number;
        fillalpha?:number;
        anchorX?:number;
        anchorY?:number;
    }
    /**
     * 画圆接口属性，可以自己扩展
     */
    export interface circleVars extends drawVars{
        radius:number;
    }

    /**
     * 画方接口属性，可以自己扩展
     */
    export interface rectVars extends drawVars{
        width:number;
        height:number;
    }

    export interface starVars extends drawVars,rectVars{
        corner:number;
        ratio:number;
    }
}