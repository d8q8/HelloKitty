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

        //圆角矩形
        var rect:egret.Sprite = new egret.Sprite();
        this.addChild(rect);
        rect.graphics.lineStyle(5,0x00ff00);
        rect.graphics.beginFill(0xff0000);
        rect.graphics.drawRect(0,0,200,100,20);
        rect.graphics.endFill();
        rect.width=200;
        rect.height=100;
        rect.x=100+rect.width/2;
        rect.y=200+rect.height/2;
        rect.touchEnabled=true;
        rect.addEventListener(egret.TouchEvent.TOUCH_TAP,(e)=>{
            console.log("单击了圆角矩形,哟西",e.currentTarget,e.stageX,e.stageY);
        },this);

        //椭圆
        var ellipse:egret.Sprite = new egret.Sprite();
        this.addChild(ellipse);
        ellipse.graphics.lineStyle(5,0x00ff00);
        ellipse.graphics.beginFill(0xff0000);
        ellipse.graphics.drawEllipse(100,50,100,50);
        ellipse.graphics.endFill();
        ellipse.width=200;ellipse.height=100;
        ellipse.x=200;ellipse.y=700;
        ellipse.touchEnabled=true;
        ellipse.addEventListener(egret.TouchEvent.TOUCH_TAP,(e)=>{
            console.log("单击了椭圆,哟西",e.currentTarget,e.stageX,e.stageY);
        },this);

    }

}