/**
* Created by d8q8 on 2014/8/12.
*/
var Lcp;
(function (Lcp) {
    /**
    * 绘制类，目前画圆和画方
    */
    var LDraw = (function () {
        function LDraw() {
        }
        /**
        * 画圆
        * @param vars
        * @returns {egret.Sprite}
        */
        LDraw.Circle = function (vars) {
            var sp = new egret.Sprite();
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
            } else {
                sp.graphics.beginFill(0xffffff);
            }
            sp.graphics.drawCircle(vars.radius, vars.radius, vars.radius); //必须这样处理，不然会有坑
            sp.graphics.endFill();
            if (vars.anchorX) {
                sp.anchorX = vars.anchorX;
            }
            if (vars.anchorY) {
                sp.anchorY = vars.anchorY;
            }
            sp.width = sp.height = vars.radius * 2; //这里必须是绘制半径的一倍
            sp.x = vars.x;
            sp.y = vars.y; //这里解决触点有效的，不给就对应不上
            return sp;
        };

        /**
        * 画方
        * @param vars
        * @returns {egret.Sprite}
        */
        LDraw.Rect = function (vars) {
            var sp = new egret.Sprite();
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
            } else {
                sp.graphics.beginFill(0xffffff);
            }
            sp.graphics.drawRect(0, 0, vars.width, vars.height); //必须这样处理，不然也有坑
            sp.graphics.endFill();
            if (vars.anchorX) {
                sp.anchorX = vars.anchorX;
            }
            if (vars.anchorY) {
                sp.anchorY = vars.anchorY;
            }
            sp.width = vars.width;
            sp.height = vars.height; //这里必须跟绘制矩形的宽高一样大小
            sp.x = vars.x + vars.width / 2;
            sp.y = vars.y + vars.height / 2; //这里解决触点有效的，不给就对应不上
            return sp;
        };

        LDraw.Star = function (vars) {
            var sp = new egret.Sprite();

            return sp;
        };
        return LDraw;
    })();
    Lcp.LDraw = LDraw;
    LDraw.prototype.__class__ = "Lcp.LDraw";

    

    
})(Lcp || (Lcp = {}));
