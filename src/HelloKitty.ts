/**
 * Created by d8q8 on 2014/8/14.
 * @module
 * @class HelloKitty
 * @constructor
 **/
class HelloKitty extends egret.DisplayObjectContainer {

    public CLASS_NAME:string = 'HelloKitty';
    private _listener:lcp.ListenerManager;
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

        /*console.log("前:", lcp.LGlobal.root, this);
        lcp.LGlobal.root = this;
        console.log("后:", lcp.LGlobal.root, this);*/
        lcp.StageReference.setStage(this.stage);

        console.log(lcp.StageReference.getStage().stageWidth);

        var sp = new lcp.LSprite();
        this.addChild(sp);
        //元件
        var rect = new lcp.LRose({
            x: 100,
            y: 150,
            radius: 100,
            petal: 4,
            thickness: 5,
            linecolor: 0xff0000,
            fillcolor: 0x00ff00
        });
        //sp.isDrag=true;
        sp.addChild(rect);
        console.log(sp.width,sp.height,sp.getChildAt(0));
        this._listener = lcp.ListenerManager.getManager(rect);
        console.log("注册侦听",this._listener);

        var touchBegin = (e) => {
            console.log("开始:单击了玫瑰,哟西", rect.x, rect.y, e.stageX, e.stageY);
            var comEvent = new lcp.LEvent("aaa",{a:3,b:4});
            lcp.LListener.getInstance().dispatchEvent(comEvent);
        };
        var touchEnd = (e) => {
            console.log("结束:单击了玫瑰,哟西", rect.x, rect.y, e.stageX, e.stageY);
        };
        this._listener.addEventListener(egret.TouchEvent.TOUCH_BEGIN, touchBegin,this);
        this._listener.addEventListener(egret.TouchEvent.TOUCH_END, touchEnd,this);
        rect.addEventListener(egret.TouchEvent.TOUCH_BEGIN, touchBegin, this);
        rect.addEventListener(egret.TouchEvent.TOUCH_END,touchEnd,this);

        lcp.LListener.getInstance().addEventListener("aaa",(e)=>{
            console.log(e.param,this._listener.getTotalEventListeners());
            this._listener.removeEventListeners();
            console.log(sp.children());
            //sp.removeAllChildren();
        },this);

        var sp1 = new lcp.LSprite();
        this.addChild(sp1);
        var rect1 = lcp.ObjectUtil.objectPrototypeClone(rect);
        sp1.addChild(rect1);
        sp1.isDrag=true;
        console.log("克隆属性",rect1);

        TweenLite.to(rect, 1, {x: 100, y: 200, rotation: 360,onComplete:(arr)=>{
              console.log("动画完成:",arr[0],arr[1],arr[2],arr[3]);
        },onCompleteParams:[[rect,1,2,3]]});

        //egret.Tween.get(rect).to({x:100,y:200,rotation:360},1000).call((arr)=>{
        //    console.log("动画完成:",arr[0],arr[1],arr[2]);
        //},this,[[1,2,3]]);

        //椭圆
        /*var ellipse:lcp.LEllipse = new lcp.LEllipse({x:200,y:500,width:200,height:100,thickness:5,linecolor:0x00ff00,fillcolor:0xff0000});
         this.addChild(ellipse);
         ellipse.touchEnabled=true;
         ellipse.addEventListener(egret.TouchEvent.TOUCH_TAP,(e)=>{
         console.log("单击了椭圆,哟西",e.currentTarget,e.stageX,e.stageY);
         },this);*/

        //文本
        /*var txt_shadow = new egret.TextField();
         this.addChild(txt_shadow);
         var txt = new egret.TextField();
         this.addChild(txt);
         txt.type = egret.TextFieldType.INPUT;
         txt.multiline = true;
         txt.x = 100;
         txt.y = 200;
         txt.width = 200;
         txt.height = 40;
         txt.text = "请输入文本";
         txt.textColor = 0xff0000;
         txt.addEventListener(egret.Event.CHANGE, (e)=> {
         txt_shadow.text = txt.text;
         }, this);
         txt_shadow.multiline = true;
         txt_shadow.text = txt.text;
         txt_shadow.width = txt.width;
         txt_shadow.height = txt.height;
         txt_shadow.x = txt.x + 1;
         txt_shadow.y = txt.y + 1;
         txt_shadow.textColor = 0xffffff;
         txt_shadow.alpha = .5;*/


        console.log("主体1宽:", document.body.clientWidth);
        console.log("主体1高:", document.body.clientHeight);
        console.log("主体2宽:", document.documentElement.clientWidth);
        console.log("主体2高:", document.documentElement.clientHeight);
        console.log("舞台宽:", this.stage.stageWidth);
        console.log("舞台高:", this.stage.stageHeight);

        //侦听画布
        //this.myResize();


        //创建100个精灵
        //this.createSprite(this.stage.stageWidth, this.stage.stageHeight);

        //测试数组
        //this.arrTest();

        //测试传感器
        //this.testDeviceOrientation();

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

        //测试对象工具类
        var a = '{ "name": "cxh", "sex": "man" }';
        console.log(lcp.ObjectUtil.isEmpty(a), JSON.parse(a), eval('(' + a + ')'));

        //测试日期工具类
        var date = new Date();
        console.log(date);
        console.log(lcp.DateUtil.formatDate(date, 'S'));

        /*var o = {"a": 1, "b": 2, "c": 3};
         for (var p in o) {
         console.log(p, o[p]);
         }*/

        var arr_sort = [1, 4, 23, 124, 3, 8, 2, 44];
        //var asc = function (a, b) {
        //    return a > b ? 1 : -1;
        //};
        var asc = (a, b):number => {
            return a > b ? 1 : -1;
        };
        console.log("原生排序->升序:", arr_sort.sort(asc));
        //console.log("原生排序->升序:", arr_sort.sort((a, b):number=> {
        //    return a > b ? 1 : -1;
        //}));
        console.log("原生排序->降序:", arr_sort.sort((a, b):number=> {
            return a < b ? 1 : -1;
        }));
        console.log("我的内裤排序->升序:", lcp.LOrder.sort(arr_sort));
        console.log("我的内裤排序->降序:", lcp.LOrder.sort(arr_sort, lcp.OrderByType.DESCENDING));


        //测试Timer
        /*var mark:number=0;
        var timer = new egret.Timer(1000,5);
        timer.start();
        timer.addEventListener(egret.TimerEvent.TIMER,(e)=>{
            mark++;
            console.log("计时测试",mark,"次",e.target.delay,e.target.repeatCount);
        },this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,(e)=>{
            console.log("计时完成",mark,"次",e.target.delay,e.target.repeatCount);
        },this);*/


    }

    private _sp:lcp.LCircle;
    public _i:number;

    public sp_click(e:egret.TouchEvent):void {
        lcp.LTrace.trace(this, "我单击了元件" + (this._i++) + "次", this._sp.name, this._sp.x, this._sp.y, this._sp.width, this._sp.height, this._sp.touchEnabled);
    }

    /**
     * 涂鸦板
     */
    private testBoard() {
        var sp:egret.Sprite = new egret.Sprite();
        this.addChild(sp);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (e)=> {
            sp.graphics.lineStyle(3, 0xff0000);
            sp.graphics.moveTo(e.stageX, e.stageY);
            this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, arguments.callee, this);
        }, this);

        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, (e)=> {
            //console.log(e.stageX,e.stageY);
            sp.graphics.lineTo(e.stageX, e.stageY);
        }, this);

        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, (e)=> {
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, arguments.callee, this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, arguments.callee, this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, arguments.callee, this);
        }, this);
    }

    /**
     * 测试碰撞
     */
    private testHittest() {
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
        sp2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (e)=> {
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
    }

    /**
     * 创建100个精灵
     */
    private createSprite(wid:number, hei:number) {
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
            sp.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (e)=> {
                this.setChildIndex(e.target, this.numChildren - 1);
                e.target.addEventListener(egret.TouchEvent.TOUCH_MOVE, (e)=> {
                    for (var i = 0; i < this.numChildren - 1; i++) {
                        if (lcp.LSprite.hitTestObject(e.target, this.getChildAt(i))) {
                            console.log(e.target.name, "碰撞了", this.getChildAt(i).name);
                        }
                    }
                }, this);
            }, this);

            var txt = new egret.TextField();
            sp.addChild(txt);
            txt.text = (i + 1).toString();
            txt.x = (sp.width - txt.width) / 2;
            txt.y = (sp.height - txt.height) / 2;

        }
    }

    /**
     * 数组和数字的测试
     */
    private arrTest() {
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

        //数组扩展处理工具类使用
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
        //指定位置插入
        console.log(lcp.ArrayUtil.addItemsAt(people, [{name: "白菜", sex: "保密", hair: "黑色"}], 1));
        console.log(people);

        //数组的处理方法
        var numberArray:Array<any> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        console.log(numberArray, "数组求和:");
        console.log(numberArray.sum(), "数组求平均值:", numberArray.average());
        console.log(lcp.ArrayUtil.getHighestValue(numberArray));
        console.log("数组求和:", lcp.ArrayUtil.sum(numberArray), "数组求平均值:", lcp.ArrayUtil.average(numberArray));
        console.log("数组随机:", lcp.ArrayUtil.randomize(numberArray));

        var color:Array<any> = ["Red", "Blue", "Green", "Indigo", "Violet"];
        var colorsAlt:Array<any> = ["Red", "Blue", "Green", "Violet"];
        console.log(lcp.ArrayUtil.getIndexOfDifference(color, colorsAlt));

        //扩展点方法与原官方点方法
        console.log("官方提供任意两点间距离:", egret.Point.distance(new egret.Point(100, 100), new egret.Point(50, 50)));
        console.log("自己封装任意两点间距离:", lcp.LPoint.twodis(100, 100, 50, 50));//与上面是一样的

        ////1)判断奇数
        //console.log(lcp.NumberUtil.isOdd(7)); // 输出 false
        //console.log(lcp.NumberUtil.isOdd(12)); // 输出 true
        ////2)判断偶数
        //console.log(lcp.NumberUtil.isEven(7)); // 输出 false
        //console.log(lcp.NumberUtil.isEven(12)); // 输出 true
        ////3)判断数字
        //console.log(lcp.NumberUtil.isNumber(7));// 输出 true
        //console.log(lcp.NumberUtil.isNumber("a"));// 输出 false

        console.log(lcp.NumberUtil.int(7.5));// 输出 7

        //var o:Object = {b:2};
        //o["a"]=1;
        //if(o.hasOwnProperty("a")){
        //    console.log(o.a,o.b);
        //}

        console.log(lcp.NumberUtil.convertNum("3.4556645445E7"));
        console.log(lcp.NumberUtil.spell(0)); // 输出 Zero
        console.log(lcp.NumberUtil.spell(23)); // 输出 Twenty-Three
        console.log(lcp.NumberUtil.spell(2005678)); // 输出 Two Million, Five Thousand, Six Hundred Seventy-Eight

        var colors:Array<any> = ["红", "绿", "蓝"];
        console.log(colors[lcp.NumberUtil.loopIndex(2, colors.length)]); // 输出 蓝
        console.log(colors[lcp.NumberUtil.loopIndex(4, colors.length)]); // 输出 绿
        console.log(colors[lcp.NumberUtil.loopIndex(-6, colors.length)]); // 输出 红
    }

    /**
     * 处理侦听改变画布宽高
     */
    private myResize() {
        // -----------------------------------------------------------
        // 处理宽和高,侦听resize,给出一种解决方案
        var resizeTimer = null;
        var wid, hei;
        var doc = new egret.ContentStrategy();
        var egretCanvas = egret.Browser.getInstance().$("#egretCanvas");
        var doResize = function () {
            wid = doc._getClientWidth();//显示区域分辨率宽
            hei = doc._getClientHeight();//显示区域分辨率高
            //console.log("宽:",wid,"|高:",hei);
            egret.StageDelegate.getInstance().setDesignSize(wid, hei);//这里只改变一次,奇怪???.
            doc.setEgretSize(wid, hei, wid, hei);//这里只能自己处理了,分情况不同
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
    }

    /**
     * 获取手机传感器事件,可以写摇一摇功能,哟西
     */
    private testDeviceOrientation() {
        //---------------------------------------------------------------------------------------------------
        //获取手机传感器事件,可以写摇一摇功能,哟西
        if (window && window["DeviceMotionEvent"]) {
            var second = 3000;//秒
            var starttime = egret.getTimer();//开始时间
            var startX, startY, startZ, endX, endY, endZ;//开始坐标和结束坐标
            startX = startY = startZ = endX = endY = endZ = 0;
            window.addEventListener('devicemotion', (e)=> {
                var acceleration = e.accelerationIncludingGravity;//
                var endtime = egret.getTimer();//结束时间
                if ((endtime - starttime) > 100) {
                    var diffTime = endtime - starttime;//时间差
                    startX = acceleration.x;
                    startY = acceleration.y;
                    startZ = acceleration.z;
                    var speed = Math.abs(startX + startY + startZ - endX - endY - endZ) / diffTime * 10000;
                    if (speed > second) {
                        alert("摇一摇,自己在这里写处理吧");
                        //这里就可以写你的操作了,如摇一摇抽奖,换个背景图等,不解释了
                    }
                    starttime = endtime;
                    endX = startX;
                    endY = startY;
                    endZ = startZ;
                }
            }, false);
            alert("支持传感器事件");
        } else {
            alert('不支持传感器事件');
        }
        //----------------------------------------------------------------------------------------------------
    }


}