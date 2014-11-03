/**
 * Created by d8q8 on 2014/8/14.
 *
 * @class HelloKitty
 * @constructor
 **/
class HelloKitty extends egret.DisplayObjectContainer{

    public CLASS_NAME:string = 'HelloKitty';

    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage(e:egret.Event):void{
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        egret.Profiler.getInstance().run();
        this.init();
    }

    private init(){

        //元件
        /*var rect:lcp.LRose = new lcp.LRose({x:100,y:150,radius:100,petal:4,thickness:5,linecolor:0xff0000,fillcolor:0x00ff00});
        this.addChild(rect);
        rect.touchEnabled=true;
        rect.addEventListener(egret.TouchEvent.TOUCH_TAP,(e)=>{
            console.log("单击了玫瑰,哟西",rect.x,rect.y,e.stageX,e.stageY);

        },this);

        TweenLite.to(rect,1,{x:300,y:200,rotation:360});*/

        /*rect.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(e)=>{
            lcp.LTrace.trace("按下",rect.x,rect.y);
            e.currentTarget.startDrag(true);
        },this);

        rect.addEventListener(egret.TouchEvent.TOUCH_END,(e)=>{
            lcp.LTrace.trace("抬起",rect.x,rect.y);
            e.currentTarget.stopDrag();
        },this);*/

        //椭圆
        /*var ellipse:lcp.LEllipse = new lcp.LEllipse({x:200,y:500,width:200,height:100,thickness:5,linecolor:0x00ff00,fillcolor:0xff0000});
        this.addChild(ellipse);
        ellipse.touchEnabled=true;
        ellipse.addEventListener(egret.TouchEvent.TOUCH_TAP,(e)=>{
            console.log("单击了椭圆,哟西",e.currentTarget,e.stageX,e.stageY);
        },this);*/

        //文本
        /*var txt:egret.TextField = new egret.TextField();
        this.addChild(txt);

        txt.x=100;
        txt.y=200;
        txt.width=200;
        txt.height=40;
        txt.text="请输入文本";*/

        //涂鸦板
        /*var sp:egret.Sprite = new egret.Sprite();
        this.addChild(sp);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(e)=>{
            sp.graphics.lineStyle(3,0xff0000);
            sp.graphics.moveTo(e.stageX,e.stageY);
            this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,arguments.callee,this);
        },this);

        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,(e)=>{
            //console.log(e.stageX,e.stageY);
            sp.graphics.lineTo(e.stageX,e.stageY);
            this.stage.addEventListener(egret.TouchEvent.TOUCH_END,arguments.callee,this);
        },this);
        
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END,(e)=>{
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,arguments.callee,this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_END,arguments.callee,this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,arguments.callee,this);
        },this);*/


        //var circle = new egret.Sprite();
        var circle = new lcp.LCircle({x:50,y:50,radius:100,fillcolor:0xff0000});
        this.addChild(circle);
        console.log("我初始化了圆",circle.x,circle.y,circle.width,circle.height,circle.touchEnabled,circle.name);
        //circle.touchEnabled=true;
        //circle.graphics.beginFill(0xff0000);
        //circle.graphics.drawCircle(50,50,50);
        //circle.graphics.endFill();
        //circle.x=circle.y=0;
        //circle.width=circle.height=100;
        circle.addEventListener(egret.TouchEvent.TOUCH_TAP,(e)=>{
            console.log("我单击了圆",circle.x,circle.y,circle.width,circle.height,circle.touchEnabled);
        },this);

    }

}