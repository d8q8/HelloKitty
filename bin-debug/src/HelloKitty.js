var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* Created by d8q8 on 2014/8/9.
* @class HelloKitty
* @constructor
**/
var HelloKitty = (function (_super) {
    __extends(HelloKitty, _super);
    function HelloKitty() {
        _super.call(this);
        this.CLASS_NAME = "HelloKitty";
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    HelloKitty.prototype.onAddToStage = function (e) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.init();
    };

    /**
    * 初始化
    **/
    HelloKitty.prototype.init = function () {
        //todo code
        //画圆
        /*var sp:egret.Sprite = Lcp.LDraw.Circle({x:300,y:200,radius:100});
        this.addChild(sp);
        sp.name="sp";
        this.trace("圆动画初始化之前：",sp.x,sp.y,sp.width,sp.height);
        sp.touchEnabled=true;
        sp.addEventListener(egret.TouchEvent.TOUCH_TAP,(e)=>{
        this.trace("我单击了圆",e.stageX,e.stageY);
        Lcp.LListener.getInstance().dispatchEvent(new Lcp.LEvent("mycircle",.1,false));
        sp.dispatchEvent(new Lcp.LEvent("mycircle1",.5));
        },this);
        sp.addEventListener("mycircle1",(e)=>{
        this.trace(e.param);
        sp.y=1000*parseFloat(e.param);
        },this);
        Lcp.LListener.getInstance().addEventListener("mycircle",(e)=>{
        this.trace(e.param);
        sp.alpha=parseFloat(e.param);
        },this);
        
        var tweenlite1:TweenLite = TweenLite.to(sp,1,{x:200,y:500,scaleX:.5,scaleY:.5,rotation:360,onComplete:(e)=>{
        this.trace("圆动画完成回调之后：",sp.x,sp.y,sp.width,sp.height);
        }});*/
        //画方
        /*var shp:egret.Sprite = Lcp.LDraw.Rect({x:100,y:100,width:200,height:100});
        this.addChild(shp);
        shp.touchEnabled=true;
        shp.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchTap,this);
        
        //        egret.Tween.get(shp).to({x:100,y:200},1000).call(()=>{
        //            this.trace("动画完成处理回调。");
        //        });
        
        var tweenlite2:TweenLite = TweenLite.to(shp,1,{x:500,y:500,scaleX:.5,scaleY:.5,rotation:360,onComplete:(e)=>{
        this.trace("方动画完成回调。",shp.x,shp.y,shp.width,shp.height);
        }});*/
        /*var timeline:TimelineMax = new TimelineMax({repeat:-1,yoyo:true});
        timeline.append(tweenlite1);
        timeline.append(tweenlite2);
        timeline.play();*/
        var ss = new egret.Sprite();
        this.addChild(ss);
        ss.graphics.lineStyle(5, 0x00ff00);
        ss.graphics.beginFill(0xff0000);
        ss.graphics.drawRect(0, 0, 400, 200, 20);

        //ss.graphics.drawEllipse(50,50,100,50);
        ss.graphics.endFill();
        ss.width = 400;
        ss.height = 200;
        ss.x = 200;
        ss.y = 500;
        ss.touchEnabled = true;
        ss.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            Lcp.LTrace.trace(e.currentTarget, e.stageX, e.stageY);
        }, this);
        Lcp.LTrace.trace(ss);
        //TweenLite.to(ss,1,{x:300,y:800,scaleX:.5,scaleY:.5,rotation:360});
    };

    HelloKitty.prototype.touchTap = function (e) {
        this.trace("单击", e.currentTarget);
    };

    /**
    * 类名
    * @returns {string}
    */
    HelloKitty.prototype.toString = function () {
        console.log("ClassName", this.CLASS_NAME);
        return this.CLASS_NAME;
    };

    /**
    * 跟踪捕获信息
    * @param rest
    */
    HelloKitty.prototype.trace = function () {
        var rest = [];
        for (var _i = 0; _i < (arguments.length - 0); _i++) {
            rest[_i] = arguments[_i + 0];
        }
        console.log(rest);
    };
    return HelloKitty;
})(egret.DisplayObjectContainer);
HelloKitty.prototype.__class__ = "HelloKitty";
