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

        //console.log(document.body.clientWidth,document.body.clientHeight,document.documentElement.clientWidth,document.documentElement.clientHeight);

        //圆
        var sp = new lcp.LCircle({name:"sp",x:100,y:200,radius:100,fillcolor:0xff0000,thickness:5,linecolor:0x00ff00});
        //方
        //var sp= new lcp.LRect({name:"sp",x:100,y:200,width:200,height:100,fillcolor:0xff0000,thickness:5,linecolor:0x00ff00});
        //圆角矩形
        //var sp = new lcp.LRoundRect({name:"sp",x:100,y:200,width:200,height:100,ellipseWidth:30,ellipseHeight:20,fillcolor:0xff0000,thickness:5,linecolor:0x00ff00});
        //椭圆
        //var sp = new lcp.LEllipse({name:"sp",x:100,y:200,width:200,height:100,fillcolor:0xff0000,thickness:5,linecolor:0x00ff00});
        //多边形,如三角形
        //var sp = new lcp.LPolygon({name:"sp",x:100,y:200,width:200,height:200,corner:3,fillcolor:0xff0000,thickness:5,linecolor:0x00ff00});
        //心形
        //var sp = new lcp.LHeart({name:"sp",x:100,y:200,radius:100,fillcolor:0xff0000,thickness:5,linecolor:0x00ff00});
        //玫瑰形,花瓣偶数翻倍,奇数不变
        //var sp = new lcp.LRose({name:"sp",x:100,y:200,radius:100,petal:4,fillcolor:0xff0000,thickness:5,linecolor:0x00ff00});
        //多角星,如五角星
        //var sp = new lcp.LStar({name:"sp",x:100,y:200,width:200,height:200,corner:5,ratio:.4,fillcolor:0xff0000,thickness:5,linecolor:0x00ff00});
        this.addChild(sp);
        lcp.LTrace.trace("初始化元件",sp.name,sp.x,sp.y,sp.width,sp.height,sp.touchEnabled);
        var i:number=1;
        sp.addEventListener(egret.TouchEvent.TOUCH_TAP,(e)=>{
            lcp.LTrace.trace("我单击了元件"+(i++)+"次",sp.name,sp.x,sp.y,sp.width,sp.height,sp.touchEnabled);
        },this);

        //TweenLite.to(sp,.5,{x:100,y:300});

    }

}