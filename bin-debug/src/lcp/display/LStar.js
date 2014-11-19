var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by d8q8 on 2014/8/15.
 * @module lcp
 * @class LStar
 * @constructor
 **/
var lcp;
(function (lcp) {
    /**
     * 绘制多角星
     */
    var LStar = (function (_super) {
        __extends(LStar, _super);
        function LStar(vars) {
            _super.call(this);
            this.CLASS_NAME = "LStar";
            if (vars) {
                _super.prototype.init.call(this, vars);
            }
        }
        LStar.prototype.drawShape = function () {
            this.graphics.moveTo(this.vars.width / 2, 0);
            for (var i = 0; i < this.vars.corner; i++) {
                var rad = Math.PI / this.vars.corner * (2 * i + 1);
                this.graphics.lineTo(this.vars.width / 2 * (1 + Math.sin(rad) * this.vars.ratio), this.vars.height / 2 * (1 - Math.cos(rad) * this.vars.ratio));
                rad = Math.PI / this.vars.corner * (2 * i + 2);
                this.graphics.lineTo(this.vars.width / 2 * (1 + Math.sin(rad)), this.vars.height / 2 * (1 - Math.cos(rad)));
            }
        };
        LStar.prototype.clone = function (vars) {
            return new LStar(vars ? vars : this.vars);
        };
        return LStar;
    })(lcp.LGraphics);
    lcp.LStar = LStar;
    LStar.prototype.__class__ = "lcp.LStar";
})(lcp || (lcp = {}));
