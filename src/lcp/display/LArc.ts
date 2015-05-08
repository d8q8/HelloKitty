/**
 * Created by d8q8 on 2015/4/17.
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
            for(var i=this.vars.startAngle;i<=this.vars.endAngle;i++)
            {
                var px=this.vars.radius*Math.cos(-i*Math.PI/180);
                var py=this.vars.radius*Math.sin(-i*Math.PI/180);
                if(i==this.vars.startAngle)
                    this.graphics.moveTo(px,py);
                this.graphics.lineTo(px,py);
            }
        }

        public clone(vars?:IGraphics):LArc {
            return new LArc(vars ? vars : this.vars);
        }
    }
}