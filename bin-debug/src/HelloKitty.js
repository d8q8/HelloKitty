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
        _super.call(this); //这个只能放在第一行,放第二行,放N行都不行,强制第一行,你的明白?
        this.CLASS_NAME = "HelloKitty";
        this.arr = new Array();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    HelloKitty.prototype.onAddToStage = function (e) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        if (this._sp == null) {
            this._sp = new egret.Sprite();
            this.addChild(this._sp);
        }
        //egret.Profiler.getInstance().run();
        Lcp.LGlobal.root = this;
        this.init();
    };
    /**
     * 初始化
     **/
    HelloKitty.prototype.init = function () {
        var _this = this;
        //心形状
        var line = new Lcp.LHeart({ x: 200, y: 300, radius: 100, fillcolor: 0xff0000, thickness: 10, linecolor: 0x00ff00 });
        this.addChild(line);
        // 画圆角
        var sp = new Lcp.LRoundRect({ name: "sp", x: 100, y: 600, width: 200, height: 100, ellipseWidth: 100, ellipseHeight: 50, fillcolor: 0xff0000, thickness: 10, linecolor: 0x00ff00 });
        this.addChild(sp);
        Lcp.LTrace.trace("圆角动画初始化之前：", sp.name, sp.x, sp.y, sp.width, sp.height);
        sp.touchEnabled = true; //开启触点事件
        sp.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            Lcp.LTrace.trace("按下", sp, e.target, e.currentTarget, e.touchPointID, e.touchDown, sp instanceof egret.Sprite);
            //sp.startDrag();
            /*sp.addEventListener(egret.TouchEvent.TOUCH_MOVE,(e)=>{
             sp.x=e.stageX;
             sp.y=e.stageY;
             Lcp.LTrace.trace("侦听移动开始",sp.x,sp.y);
             },this);*/
        }, this);
        sp.addEventListener(egret.TouchEvent.TOUCH_END, function (e) {
            Lcp.LTrace.trace("抬起", sp, e.target, e.currentTarget);
            //sp.stopDrag();
            sp.removeEventListener(egret.TouchEvent.TOUCH_MOVE, function (e) {
                Lcp.LTrace.trace("侦听移动结束", sp.x, sp.y);
            }, _this);
        }, this);
        //单击
        sp.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            Lcp.LTrace.trace("我单击了元件", e.stageX, e.stageY);
            //全局侦听发送消息和自定义事件,这里的自定义事件,也可以自己封装成强类型即可,比如LEvent.MYCIRCLE
            Lcp.LListener.getInstance().dispatchEvent(new Lcp.LEvent("mycircle", { a: 0 }, false));
            //元件自身发送消息和自定义事件,同上
            sp.dispatchEvent(new Lcp.LEvent("mycircle1", .5));
        }, this);
        //当前元件侦听自定义事件获取数据
        sp.addEventListener("mycircle1", function (e) {
            Lcp.LTrace.trace(e.param); //自定义事件参数param,可以传入任意对象,然后自行解析即可.
            sp.y = 1000 * parseFloat(e.param);
        }, this);
        //全局侦听自定义事件获取数据
        Lcp.LListener.getInstance().addEventListener("mycircle", function (e) {
            Lcp.LTrace.trace(parseInt(e.param.a)); //同上
            sp.alpha = parseFloat(e.param);
        }, this);
        //框架自带的缓动类
        //egret.Tween.get(sp).to({x:200,scaleX:.5,scaleY:.5,rotation:360},1000).call(function(){
        //    Lcp.LTrace.trace("我回调了[缓动类],哟西!");
        //});
        var tweenlite1 = TweenLite.to(sp, 1, { x: 200, y: 500, scaleX: .5, scaleY: .5, rotation: 360, onComplete: function (e) {
            Lcp.LTrace.trace("动画完成回调之后：", sp.x, sp.y, sp.width, sp.height);
        } });
        //画方
        /*var shp:egret.Sprite = new Lcp.LRoundRect({x:250,y:200,width:200,height:100,radius:20,fillcolor:0x00ff00,thickness:10,linecolor:0xff0000});
         this.addChild(shp);
         shp.touchEnabled=true;
         shp.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchTap,this);

         //        egret.Tween.get(shp).to({x:100,y:200},1000).call(()=>{
         //            Lcp.LTrace.trace("动画完成处理回调。");
         //        });

         var tweenlite2:TweenLite = TweenLite.to(shp,1,{x:500,y:500,scaleX:.5,scaleY:.5,rotation:360,onComplete:(e)=>{
         Lcp.LTrace.trace("方动画完成回调。",shp.x,shp.y,shp.width,shp.height);
         }});*/
        /*var timeline:TimelineMax = new TimelineMax({repeat:-1,yoyo:true});
         //timeline.append(tweenlite1);
         timeline.append(tweenlite2);
         timeline.play();*/
        /*var loader:egret.URLLoader = new egret.URLLoader();
         var req:egret.URLRequest = new egret.URLRequest("http://moji.meiriq.com/api/setscore");
         req.method=egret.URLRequestMethod.POST;
         req.data = new egret.URLVariables("gid=1");
         loader.load(req);
         loader.addEventListener(egret.Event.COMPLETE,(e)=>{
         console.log(e.target.data);

         },this);*/
        //var arr:String = window["GetLang"]("playgame");
        //console.log(arr);
        //this.arr = new Array<any>();
        this.arr.push(1);
        console.log(this.arr[0]);
        /*var _sp:egret.Sprite = new egret.Sprite();
        _sp.graphics.beginFill(0xff0000);
        _sp.graphics.drawRect(0,0,200,60);
        _sp.graphics.endFill();
        this.addChild(_sp);
        _sp.x = 300;
        _sp.y = 500;
        var txt:egret.TextField = new egret.TextField();
        _sp.addChild(txt);
        txt.text = "hello world";*/
        var _circle = new egret.Shape();
        this.addChild(_circle);
        _circle.x = 100;
        _circle.y = 600;
        _circle.graphics.beginFill(0x0000ff);
        _circle.graphics.drawCircle(50, 50, 50);
        //_circle.graphics.drawRect(0,0,100,100);
        _circle.graphics.endFill();
        _circle.width = _circle.height = 100;
        _circle.touchEnabled = true;
        _circle.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            console.log("我单击了圆.");
        }, this);
    };
    HelloKitty.prototype.touchTap = function (e) {
        Lcp.LTrace.trace("单击", e.currentTarget);
    };
    HelloKitty.prototype.tt = function () {
        return "测试类中的方法";
    };
    return HelloKitty;
})(egret.DisplayObjectContainer);
