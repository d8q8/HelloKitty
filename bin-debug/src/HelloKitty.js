var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by d8q8 on 2014/8/14.
 * @module
 * @class HelloKitty
 * @constructor
 **/
var HelloKitty = (function (_super) {
    __extends(HelloKitty, _super);
    function HelloKitty() {
        _super.call(this);
        this.CLASS_NAME = 'HelloKitty';
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    HelloKitty.prototype.onAddToStage = function (e) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        egret.Profiler.getInstance().run();
        this.init();
    };
    HelloKitty.prototype.init = function () {
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
        var txt = new egret.TextField();
        this.addChild(txt);
        txt.x = 100;
        txt.y = 200;
        txt.width = 200;
        txt.height = 40;
        txt.text = "请输入文本";
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
        //侦听画布
        //this.myResize();
        //圆
        var sp = new lcp.LCircle({
            name: "sp",
            x: 100,
            y: 300,
            radius: 50,
            fillcolor: 0xff0000,
            thickness: 5,
            linecolor: 0x00ff00
        });
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
        //lcp.LHelper.addChildAndInit(this, sp, {x: 200, y: 400}, 20);
        lcp.LTrace.trace("初始化元件", sp.name, sp.x, sp.y, sp.width, sp.height, sp.touchEnabled);
        var i = 1;
        //sp.addEventListener(egret.TouchEvent.TOUCH_TAP,(e)=>{
        //    lcp.LTrace.trace(this,"我单击了元件"+(i++)+"次",sp.name,sp.x,sp.y,sp.width,sp.height,sp.touchEnabled);
        //},this);
        //
        //sp.addEventListener(egret.TouchEvent.TOUCH_TAP,function(e:egret.TouchEvent):void{
        //    lcp.LTrace.trace(this,"我单击了元件"+(i++)+"次",sp.name,sp.x,sp.y,sp.width,sp.height,sp.touchEnabled);
        //},this);
        this._i = i;
        this._sp = sp;
        sp.isDrag = true;
        //sp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sp_click, this);
        var sp2 = new lcp.LSprite();
        //this.addChild(sp2);
        sp2.graphics.beginFill(0x00ff00);
        sp2.graphics.drawRect(0, 0, 100, 50);
        sp2.graphics.endFill();
        sp2.name = "sp2";
        sp2.x = 300;
        sp2.y = 300;
        sp2.width = 100;
        sp2.height = 50;
        sp2.touchEnabled = true;
        sp2.isDrag = true;
        sp2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            console.log("我点击试试");
        }, this);
        //this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(e)=>{
        //    console.log(e.target.name);
        //    this.setChildIndex(e.target,this.numChildren-1);
        //    this.addEventListener(egret.TouchEvent.TOUCH_MOVE,(e)=>{
        //        if(lcp.LSprite.hitTestObject(sp,sp2)){
        //            console.log("碰撞了哟西");
        //        }
        //    },this);
        //},this);
        //TweenLite.to(sp,.5,{x:100,y:300});
        //创建100个精灵
        //this.createSprite(this.stage.stageWidth, this.stage.stageHeight);
        //测试数组
        //this.arrTest();
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
        var list = new lcp.List([1, 2, 3, 4, 5]);
        list.addItemAt(6, 2);
        console.log(list.toArray());
        console.log("列表数据:", list.size, list.contains(1));
    };
    HelloKitty.prototype.sp_click = function (e) {
        lcp.LTrace.trace(this, "我单击了元件" + (this._i++) + "次", this._sp.name, this._sp.x, this._sp.y, this._sp.width, this._sp.height, this._sp.touchEnabled);
    };
    /**
     * 创建100个精灵
     */
    HelloKitty.prototype.createSprite = function (wid, hei) {
        var _this = this;
        for (var i = 0; i < 100; i++) {
            var sp = new lcp.LCircle({
                name: "sp" + (i + 1),
                x: (wid - 100) * Math.random(),
                y: (hei - 100) * Math.random(),
                radius: 50,
                fillcolor: 0xffffff * Math.random()
            });
            this.addChild(sp);
            sp.isDrag = true;
            sp.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
                _this.setChildIndex(e.target, _this.numChildren - 1);
                e.target.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (e) {
                    for (var i = 0; i < _this.numChildren - 1; i++) {
                        if (lcp.LSprite.hitTestObject(e.target, _this.getChildAt(i))) {
                            console.log(e.target.name, "碰撞了", _this.getChildAt(i).name);
                        }
                    }
                }, _this);
            }, this);
            var txt = new egret.TextField();
            sp.addChild(txt);
            txt.text = (i + 1).toString();
            txt.x = (sp.width - txt.width) / 2;
            txt.y = (sp.height - txt.height) / 2;
        }
    };
    /**
     * 数组和数字的测试
     */
    HelloKitty.prototype.arrTest = function () {
        //数字数组排序
        var num_Arr = [1, 22, 14, 2, 54, 21, 6, 8, 3, 9];
        lcp.LOrder.sort(num_Arr); //默认升序
        //lcp.LOrder.sort(num_Arr,lcp.OrderByType.DESCENDING);//降序
        console.log(num_Arr);
        //字符数组排序
        var str_Arr = ["AAA", "son", "baby", "123456", "hellokitty"];
        lcp.LOrder.sort(str_Arr); //默认升序
        //lcp.LOrder.sort(str_Arr,lcp.OrderByType.DESCENDING);//降序
        console.log(str_Arr);
        //字典数组排序
        var key_Arr = [
            { name: "George", age: 32, retiredate: "March 12, 2014" },
            { name: "Edward", age: 17, retiredate: "June 2, 2023" },
            { name: "Christine", age: 58, retiredate: "December 20, 2036" },
            { name: "Sarah", age: 62, retiredate: "April 30, 2020" }
        ];
        lcp.LOrder.sortOn(key_Arr, "age"); //默认升序
        //lcp.LOrder.sortOn(key_Arr,"age",lcp.OrderByType.DESCENDING);//降序
        console.log(key_Arr);
        //数组扩展处理工具类使用
        var people = [
            { name: "Aaron", sex: "Male", hair: "Brown" },
            { name: "Linda", sex: "Female", hair: "Blonde" },
            { name: "Katie", sex: "Female", hair: "Brown" },
            { name: "Nikki", sex: "Female", hair: "Blonde" }
        ];
        var person = lcp.ArrayUtil.getItemsByAnyKey(people, { sex: "Female", hair: "Brown" });
        //console.log(person.name);
        //for(var p in person){
        //    console.log(person[p].name);
        //}
        //指定位置插入
        console.log(lcp.ArrayUtil.addItemsAt(people, [{ name: "白菜", sex: "保密", hair: "黑色" }], 1));
        console.log(people);
        //数组的处理方法
        var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        console.log(numberArray, "数组求和:");
        console.log(numberArray.sum(), "数组求平均值:", numberArray.average());
        console.log(lcp.ArrayUtil.getHighestValue(numberArray));
        console.log("数组求和:", lcp.ArrayUtil.sum(numberArray), "数组求平均值:", lcp.ArrayUtil.average(numberArray));
        console.log("数组随机:", lcp.ArrayUtil.randomize(numberArray));
        var color = ["Red", "Blue", "Green", "Indigo", "Violet"];
        var colorsAlt = ["Red", "Blue", "Green", "Violet"];
        console.log(lcp.ArrayUtil.getIndexOfDifference(color, colorsAlt));
        //扩展点方法与原官方点方法
        console.log("官方提供任意两点间距离:", egret.Point.distance(new egret.Point(100, 100), new egret.Point(50, 50)));
        console.log("自己封装任意两点间距离:", lcp.LPoint.twodis(100, 100, 50, 50)); //与上面是一样的
        ////1)判断奇数
        //console.log(lcp.NumberUtil.isOdd(7)); // 输出 false
        //console.log(lcp.NumberUtil.isOdd(12)); // 输出 true
        ////2)判断偶数
        //console.log(lcp.NumberUtil.isEven(7)); // 输出 false
        //console.log(lcp.NumberUtil.isEven(12)); // 输出 true
        ////3)判断数字
        //console.log(lcp.NumberUtil.isNumber(7));// 输出 true
        //console.log(lcp.NumberUtil.isNumber("a"));// 输出 false
        console.log(lcp.NumberUtil.int(7.5)); // 输出 7
        //var o:Object = {b:2};
        //o["a"]=1;
        //if(o.hasOwnProperty("a")){
        //    console.log(o.a,o.b);
        //}
        console.log(lcp.NumberUtil.convertNum("3.4556645445E7"));
        console.log(lcp.NumberUtil.spell(0)); // 输出 Zero
        console.log(lcp.NumberUtil.spell(23)); // 输出 Twenty-Three
        console.log(lcp.NumberUtil.spell(2005678)); // 输出 Two Million, Five Thousand, Six Hundred Seventy-Eight
        var colors = ["红", "绿", "蓝"];
        console.log(colors[lcp.NumberUtil.loopIndex(2, colors.length)]); // 输出 蓝
        console.log(colors[lcp.NumberUtil.loopIndex(4, colors.length)]); // 输出 绿
        console.log(colors[lcp.NumberUtil.loopIndex(-6, colors.length)]); // 输出 红
    };
    /**
     * 处理侦听改变画布宽高
     */
    HelloKitty.prototype.myResize = function () {
        // -----------------------------------------------------------
        // 处理宽和高,侦听resize,给出一种解决方案
        var resizeTimer = null;
        var wid, hei;
        var doc = new egret.ContentStrategy();
        var egretCanvas = egret.Browser.getInstance().$("#egretCanvas");
        var doResize = function () {
            wid = doc._getClientWidth(); //显示区域分辨率宽
            hei = doc._getClientHeight(); //显示区域分辨率高
            //console.log("宽:",wid,"|高:",hei);
            egret.StageDelegate.getInstance().setDesignSize(wid, hei); //这里只改变一次,奇怪???.
            doc.setEgretSize(wid, hei, wid, hei); //这里只能自己处理了,分情况不同
            egretCanvas.style.width = wid + "px";
            egretCanvas.style.height = hei + "px";
            egretCanvas.width = wid;
            egretCanvas.height = hei;
            resizeTimer = null;
        };
        window.onresize = function () {
            //console.log("重置侦听");
            if (resizeTimer == null) {
                resizeTimer = setTimeout(doResize, 300);
            }
        };
        doResize();
        //-------------------------------------------------------------
    };
    return HelloKitty;
})(egret.DisplayObjectContainer);
