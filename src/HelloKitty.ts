/**
 * Created by d8q8 on 2014/8/14.
 * @module
 * @class HelloKitty
 * @constructor
 **/
class HelloKitty extends egret.DisplayObjectContainer {

    public CLASS_NAME:string = 'HelloKitty';

    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);

    }

    private onAddToStage(e:egret.Event):void {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        egret.Profiler.getInstance().run();
        this.init();

    }

    private init() {

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

        console.log("主体1宽:", document.body.clientWidth);
        console.log("主体1高:", document.body.clientHeight);
        console.log("主体2宽:", document.documentElement.clientWidth);
        console.log("主体2高:", document.documentElement.clientHeight);
        console.log("舞台宽:", this.stage.stageWidth);
        console.log("舞台高:", this.stage.stageHeight);

        //这玩意共用一个
        var circlevars = {
            name: "sp",
            x: 100,
            y: 400,
            radius: 50,
            fillcolor: 0xff0000,
            thickness: 5,
            linecolor: 0x00ff00
        };
        var arrMc:any[] = [];
        //圆
        for(var i=0;i<10;i++){
            var sp = new lcp.LCircle(circlevars);
            this.addChild(sp);
            sp.name = "sp"+i;
            sp.x = Math.random()*(this.stage.stageWidth-sp.width);
            sp.y = Math.random()*(this.stage.stageHeight-sp.height);
            arrMc.push(sp);

            sp.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(e)=>{
                e.currentTarget.startDrag(e);
                this.setChildIndex(e.currentTarget,this.numChildren-1);
                if(arrMc[0].hitTest(arrMc[1].x,arrMc[1].y,true)){
                    console.log("我碰上了哟西");
                }
            },this);
            sp.addEventListener(egret.TouchEvent.TOUCH_END,(e)=>{
                e.currentTarget.stopDrag(e);
            },this);
        }

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
        //this.addChild(sp);
        console.log("元件数:",this.numChildren);
        lcp.LHelper.addChildAndInit(this, sp, null, 20);
        lcp.LTrace.trace("初始化元件", sp.name, sp.x, sp.y, sp.width, sp.height, sp.touchEnabled);
        var i:number = 1;


        //sp.addEventListener(egret.TouchEvent.TOUCH_TAP,(e)=>{
        //    lcp.LTrace.trace(this,"我单击了元件"+(i++)+"次",sp.name,sp.x,sp.y,sp.width,sp.height,sp.touchEnabled);
        //},this);
        //
        //sp.addEventListener(egret.TouchEvent.TOUCH_TAP,function(e:egret.TouchEvent):void{
        //    lcp.LTrace.trace(this,"我单击了元件"+(i++)+"次",sp.name,sp.x,sp.y,sp.width,sp.height,sp.touchEnabled);
        //},this);
        this._i = i;
        this._sp = sp;
        //sp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sp_click, this);


        //TweenLite.to(sp,.5,{x:100,y:300});

        //数字数组排序
        var num_Arr = [1, 22, 14, 2, 54, 21, 6, 8, 3, 9];
        lcp.LOrder.sort(num_Arr);//默认升序
        //lcp.LOrder.sort(num_Arr,lcp.OrderByType.DESCENDING);//降序
        console.log(num_Arr);

        //字符数组排序
        var str_Arr:Array<string> = ["AAA", "son", "baby", "123456", "hellokitty"];
        lcp.LOrder.sort(str_Arr);//默认升序
        //lcp.LOrder.sort(str_Arr,lcp.OrderByType.DESCENDING);//降序
        console.log(str_Arr);

        //字典数组排序
        var key_Arr:Array<any> = [
            {name: "George", age: 32, retiredate: "March 12, 2014"},
            {name: "Edward", age: 17, retiredate: "June 2, 2023"},
            {name: "Christine", age: 58, retiredate: "December 20, 2036"},
            {name: "Sarah", age: 62, retiredate: "April 30, 2020"}
        ];
        lcp.LOrder.sortOn(key_Arr, "age");//默认升序
        //lcp.LOrder.sortOn(key_Arr,"age",lcp.OrderByType.DESCENDING);//降序
        console.log(key_Arr);

        //测试画弧
        //var shp = new egret.Shape();
        //this.addChild(shp);
        //shp.graphics.beginFill(0xff0000);
        //shp.graphics.lineStyle(5,0x00ff00);
        //shp.graphics.drawArc(50,50,50,0,Math.PI/3,true);
        //shp.graphics.endFill();
        //shp.width = 100;
        //shp.height = 100;
        //shp.x = shp.y = 100;
        //shp.touchEnabled=true;
        //
        //shp.addEventListener(egret.TouchEvent.TOUCH_TAP,(e)=>{
        //    console.log("点击",shp.x,shp.y,shp.width,shp.height);
        //},this);
        //console.log(shp.x,shp.y,shp.width,shp.height);

        var people:Array<any> = [
            {name: "Aaron", sex: "Male", hair: "Brown"},
            {name: "Linda", sex: "Female", hair: "Blonde"},
            {name: "Katie", sex: "Female", hair: "Brown"},
            {name: "Nikki", sex: "Female", hair: "Blonde"}
        ];
        var person = lcp.ArrayUtil.getItemsByAnyKey(people, {sex: "Female", hair: "Brown"});
        //console.log(person.name);
        //for(var p in person){
        //    console.log(person[p].name);
        //}

        console.log(lcp.ArrayUtil.addItemsAt(people,[{name:"白菜",sex:"保密",hair:"黑色"}],1));
        console.log(people);

        var numberArray:Array<any> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        console.log(numberArray);
        console.log(lcp.ArrayUtil.getHighestValue(numberArray));


        //var color:Array<any>     = ["Red", "Blue", "Green", "Indigo", "Violet"];
        //var colorsAlt:Array<any> = ["Red", "Blue", "Green", "Violet"];
        //console.log(lcp.ArrayUtil.getIndexOfDifference(color, colorsAlt));

        var strNum = 3.14159265;
        console.log(lcp.NumberUtil.isInteger(12),strNum.toFixed(),Math.round(strNum));
        console.log(lcp.NumberUtil.isInteger(3.1415),lcp.NumberUtil.int(12.5));

        var aaa = [1,2,3,4,5,6,7,8,9,10];
        console.log(aaa.sum(),aaa.avg());

    }

    private _sp:lcp.LCircle;
    public _i:number;

    public sp_click(e:egret.TouchEvent):void {
        lcp.LTrace.trace(this, "我单击了元件" + (this._i++) + "次", this._sp.name, this._sp.x, this._sp.y, this._sp.width, this._sp.height, this._sp.touchEnabled);
    }

}