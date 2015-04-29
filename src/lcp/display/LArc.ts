/**
 * Created by d8q8 on 2015/4/18.
 * @module lcp
 * @class LArc
 * @constructor
 **/
module lcp {
    export class LArc extends LGraphics {
        public CLASS_NAME:string = "LArc";

        public constructor(vars?:IGraphics) {
            super();
            if (vars) {
                super.init(vars);
            }
        }

        public drawShape():void {

            for (var i = this.vars.startAngle; i <= this.vars.endAngle; i++) {
                var px = this.vars.radius * Math.cos(-i * Math.PI / 180);
                var py = this.vars.radius * Math.sin(-i * Math.PI / 180);
                if (i == this.vars.startAngle)
                    this.graphics.moveTo(px, py);
                this.graphics.lineTo(px, py);
            }

            //var a = this.vars.angle / 180 * Math.PI / 0.01;
            //this.graphics.lineTo(this.vars.radius, 0);
            //for (var i = 0; i <= a; i++) {
            //    this.graphics.curveTo(Math.cos((i - 0.5) * 0.01) * this.vars.radius, Math.sin((i - 0.5) * 0.01) * this.vars.radius, Math.cos(i * 0.01) * this.vars.radius, Math.sin(i * 0.01) * this.vars.radius);
            //}

            this.graphics.moveTo(this.vars.x, this.vars.y);
        }

        public clone(vars?:IGraphics):LArc {
            return new LArc(vars ? vars : this.vars);
        }
    }
}