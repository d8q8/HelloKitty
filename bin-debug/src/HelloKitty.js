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
    var __egretProto__ = HelloKitty.prototype;
    __egretProto__.onAddToStage = function (e) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        egret.Profiler.getInstance().run();
        this.init();
    };
    __egretProto__.init = function () {
        var _this = this;
        /*console.log("前:", lcp.LGlobal.root, this);
         lcp.LGlobal.root = this;
         console.log("后:", lcp.LGlobal.root, this);*/
        lcp.StageReference.setStage(this.stage);
        console.log(lcp.StageReference.getStage().stageWidth);
        var sp = new lcp.LSprite();
        this.addChild(sp);
        //元件
        var rect = new lcp.LRose({
            x: 200,
            y: 150,
            radius: 100,
            petal: 4,
            thickness: 5,
            linecolor: 0xff0000,
            fillcolor: 0x00ff00
        });
        sp.isDrag = true;
        sp.addChild(rect);
        console.log(sp.width, sp.height, sp.getChildAt(0));
        this._listener = lcp.ListenerManager.getManager(rect);
        console.log("注册侦听", this._listener);
        var touchBegin = function (e) {
            console.log("开始:单击了玫瑰,哟西", rect.x, rect.y, e.stageX, e.stageY);
            var comEvent = new lcp.LEvent("aaa", { a: 3, b: 4 });
            lcp.LListener.getInstance().dispatchEvent(comEvent);
        };
        var touchEnd = function (e) {
            console.log("结束:单击了玫瑰,哟西", rect.x, rect.y, e.stageX, e.stageY);
        };
        this._listener.addEventListener(egret.TouchEvent.TOUCH_BEGIN, touchBegin, this);
        this._listener.addEventListener(egret.TouchEvent.TOUCH_END, touchEnd, this);
        rect.addEventListener(egret.TouchEvent.TOUCH_BEGIN, touchBegin, this);
        rect.addEventListener(egret.TouchEvent.TOUCH_END, touchEnd, this);
        var has = rect.hasEventListener;
        console.log("测试call没加侦听事件:", has.call(rect, egret.Event.COMPLETE, egret.TouchEvent.TOUCH_END));
        console.log("测试apply没加侦听事件:", has.apply(rect, [egret.Event.COMPLETE, egret.TouchEvent.TOUCH_END]));
        console.log("元件call按下事件:", has.call(rect, egret.TouchEvent.TOUCH_BEGIN));
        console.log("元件apply按下事件:", has.apply(rect, [egret.TouchEvent.TOUCH_BEGIN]));
        lcp.LListener.getInstance().addEventListener("aaa", function (e) {
            console.log(e.param, _this._listener.getTotalEventListeners());
            _this._listener.removeEventListeners();
            console.log(sp.children());
            //sp.removeAllChildren();
        }, this);
        /*var sp1 = new lcp.LSprite();
         this.addChild(sp1);
         var rect1 = lcp.ObjectUtil.objectPrototypeClone(rect);
         sp1.addChild(rect1);
         sp1.isDrag = true;
         console.log("克隆属性", rect1);

         TweenLite.to(rect, 1, {
         x: 100, y: 200, rotation: 360, onComplete: (arr)=> {
         //console.log("这里取this",this);
         //console.log("动画完成:",arr[0],arr[1],arr[2],arr[3]);
         }, onCompleteParams: [[rect, 1, 2, 3]]
         });*/
        /*var shp = new egret.Shape();
         shp.graphics.beginFill(0xff0000);
         shp.graphics.drawRect(0, 0, 100, 100);
         shp.graphics.endFill();
         this.addChild(shp);

         egret.Tween.get(shp, {loop: true}).to({x: 200, y: 500, scaleX: .5, scaleY: .5}, 500).wait(500).to({
         x: 400,
         y: 200,
         scaleX: 1,
         scaleY: 1
         }, 500);*/
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
        var txt_shadow = new egret.TextField();
        //this.addChild(txt_shadow);
        var txt = new egret.TextField();
        //this.addChild(txt);
        txt.type = egret.TextFieldType.INPUT;
        txt.multiline = true;
        txt.x = 100;
        txt.y = 200;
        txt.width = 200;
        txt.height = 40;
        txt.text = "请输入文本";
        txt.textColor = 0xff0000;
        txt.addEventListener(egret.Event.CHANGE, function (e) {
            txt_shadow.text = txt.text;
        }, this);
        txt_shadow.multiline = true;
        txt_shadow.text = txt.text;
        txt_shadow.width = txt.width;
        txt_shadow.height = txt.height;
        txt_shadow.x = txt.x + 1;
        txt_shadow.y = txt.y + 1;
        txt_shadow.textColor = 0xffffff;
        txt_shadow.alpha = .5;
        console.log("主体1宽:", document.body.clientWidth, window.screen.width);
        console.log("主体1高:", document.body.clientHeight, window.screen.height);
        console.log("主体2宽:", document.documentElement.clientWidth);
        console.log("主体2高:", document.documentElement.clientHeight);
        console.log("舞台宽:", this.stage.stageWidth);
        console.log("舞台高:", this.stage.stageHeight);
        //侦听画布
        //this.myResize();
        //涂鸦板
        //this.testBoard();
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
        var asc = function (a, b) {
            return a > b ? 1 : -1;
        };
        console.log("原生排序->升序:", arr_sort.sort(asc));
        //console.log("原生排序->升序:", arr_sort.sort((a, b):number=> {
        //    return a > b ? 1 : -1;
        //}));
        console.log("原生排序->降序:", arr_sort.sort(function (a, b) {
            return a < b ? 1 : -1;
        }));
        console.log("我的内裤排序->升序:", lcp.LOrder.sort(arr_sort));
        console.log("我的内裤排序->降序:", lcp.LOrder.sort(arr_sort, 2 /* DESCENDING */));
        //测试Timer
        var mark = 0;
        var timer = new egret.Timer(1000, 5);
        timer.start();
        timer.addEventListener(egret.TimerEvent.TIMER, function (e) {
            mark++;
            console.log("计时测试:", mark, "次", e.target.delay, e.target.repeatCount, "当前计数:", e.target.currentCount);
        }, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function (e) {
            console.log("计时完成:", mark, "次", e.target.delay, e.target.repeatCount, "当前计数:", e.target.currentCount);
            timer.reset();
            console.log("计时重置:", mark, "次,", e.target.delay, e.target.repeatCount, "当前计数:", e.target.currentCount);
        }, this);
        var arr_Num = [1, 2, 3, 3, 3, 3, 5, 4, 4, 1, 1, 4, 4, 5, 5, 5, 7, 9, 3, 2, 5, 7, 8, 0, 11, 14, 56, 34, 75, 90];
        console.log("先用白菜内裤去重:", lcp.ArrayUtil.removeDuplicates(arr_Num));
        console.log("白菜内裤另一种去重:", lcp.ArrayUtil.reDupliction(arr_Num));
        console.log("再用白菜内裤去随机:", lcp.ArrayUtil.randomize(lcp.ArrayUtil.removeDuplicates(arr_Num)));
        console.log("用白菜内裤随机N个数:", lcp.ArrayUtil.randomNum(arr_Num, 10));
        var arr = [100, 100, 100, 100, 90, 100, 100, 90];
        console.log("比较什么就随意：", arr[0] == arr[1]);
        for (var i = 0; i < arr.length; i++) {
            if (i > 0) {
                console.log("第", i, "次比较结果：", arr[i] == arr[(i - 1)]);
            }
        }
        /*var urlloader = new egret.URLLoader();
        urlloader.load(new egret.URLRequest("你的地址,最好是本地域的,不要跨域,跨域要自己解决."));
        urlloader.addEventListener(egret.Event.COMPLETE, (e)=> {
            console.log("获取接口数据:", e.target.data);
        }, this);*/
        //var arr:any[] = ["a","国",1,5,"中","b","z",9,3,"c"];
        //console.log(arr.sort());
        console.log(lcp.NumberUtil.roundDecimalToPlace(3.14159265, 2));
        //验证类
        console.log("整数", lcp.ValidationUtil.isValid(lcp.regexEnum.intege, 111));
        console.log("正整数", lcp.ValidationUtil.isValid(lcp.regexEnum.intege1, 111));
        console.log("负整数", lcp.ValidationUtil.isValid(lcp.regexEnum.intege2, -111));
        console.log("数字", lcp.ValidationUtil.isValid(lcp.regexEnum.num, -111.546));
        console.log("正数", lcp.ValidationUtil.isValid(lcp.regexEnum.num1, 111));
        console.log("负数", lcp.ValidationUtil.isValid(lcp.regexEnum.num2, -111.546));
        console.log("浮点数", lcp.ValidationUtil.isValid(lcp.regexEnum.decmal, -111.546));
        console.log("正浮点数", lcp.ValidationUtil.isValid(lcp.regexEnum.decmal1, 111.546));
        console.log("负浮点数", lcp.ValidationUtil.isValid(lcp.regexEnum.decmal2, -111.546));
        console.log("正负浮点数", lcp.ValidationUtil.isValid(lcp.regexEnum.decmal3, -111.546));
        console.log("非负浮点数", lcp.ValidationUtil.isValid(lcp.regexEnum.decmal4, 111.546));
        console.log("非正浮点数", lcp.ValidationUtil.isValid(lcp.regexEnum.decmal5, -111.546));
        console.log("邮箱", lcp.ValidationUtil.isEmail("d8q8@163.com"));
        console.log("颜色", lcp.ValidationUtil.isValid(lcp.regexEnum.color, "ff0000"));
        console.log("url地址", lcp.ValidationUtil.isValid(lcp.regexEnum.url, "http://www.qq.com"));
        console.log("仅中文", lcp.ValidationUtil.isValid(lcp.regexEnum.chinese, "白鹭引擎"));
        console.log("仅ACSII字符", lcp.ValidationUtil.isValid(lcp.regexEnum.ascii, "0D"));
        console.log("邮编", lcp.ValidationUtil.isValid(lcp.regexEnum.zipcode, "430000"));
        console.log("手机", lcp.ValidationUtil.isValid(lcp.regexEnum.mobile, "13000000000"));
        console.log("ip地址", lcp.ValidationUtil.isValid(lcp.regexEnum.ip4, "192.168.1.1"));
        console.log("非空", lcp.ValidationUtil.isValid(lcp.regexEnum.notempty, "0D"));
        console.log("图片", lcp.ValidationUtil.isValid(lcp.regexEnum.picture, "d8q8.jpg"));
        console.log("压缩文件", lcp.ValidationUtil.isValid(lcp.regexEnum.rar, "d8q8.rar"));
        console.log("日期", lcp.ValidationUtil.isValid(lcp.regexEnum.date, "2015-02-05"));
        console.log("短时间", lcp.ValidationUtil.isTime("15:27:50"));
        console.log("短日期", lcp.ValidationUtil.isDate("2015-02-05"));
        console.log("长日期", lcp.ValidationUtil.isDateTime("2015-02-05 15:27:50"));
        console.log("QQ号码", lcp.ValidationUtil.isValid(lcp.regexEnum.ascii, "10000"));
        console.log("电话号码", lcp.ValidationUtil.isValid(lcp.regexEnum.tel, "82751213"));
        console.log("用户注册", lcp.ValidationUtil.isValid(lcp.regexEnum.username, "d8q8"));
        console.log("字母", lcp.ValidationUtil.isValid(lcp.regexEnum.letter, "abcd"));
        console.log("大写字母", lcp.ValidationUtil.isValid(lcp.regexEnum.letter_u, "ABCD"));
        console.log("小写字母", lcp.ValidationUtil.isValid(lcp.regexEnum.letter_l, "abcd"));
        console.log("身份证", lcp.ValidationUtil.isCardID("431381198109106573"));
        var circle1 = new lcp.LCircle({
            name: "circle1",
            x: 200,
            y: 400,
            radius: 100,
            fillalpha: 0,
            thickness: 5,
            linecolor: 0x00ff00
        });
        var circle2 = new lcp.LArc({
            x: 300,
            y: 500,
            radius: 100,
            startAngle: 30,
            endAngle: 180,
            //angle: 200,
            thickness: 5,
            linecolor: 0xff0000,
            linealpha: 0,
            fillcolor: 0x00ff00,
            fillalpha: 1
        });
        this.addChild(circle1);
        this.addChild(circle2);
        //egret.localStorage.setItem("a","123");
        //egret.localStorage.getItem("a");
        //egret.localStorage.removeItem("a");
        //egret.localStorage.clear();
        console.log("测试颜色值:", lcp.ColorUtil.getColor(255, 255, 255, 0));
        console.log("测试颜色值:", lcp.ColorUtil.getHexStringFromARGB(0, 255, 255, 255));
        console.log("测试颜色值:", lcp.ColorUtil.getARGB(0xffffff));
        //var _color:Array<number> = [0xffffff,0xffff00,0xff0000,0x00ff00,0x0000ff];
        var _color = [16777215, 16776960, 16711680, 65280, 255];
        for (var i = 0; i < _color.length; i++) {
            this.addChild(this.createText("测试文本" + i, 50, 250 + 50 * i, _color[i]));
        }
    };
    __egretProto__.getZip = function () {
        var zip = new JSZip();
        zip.file("Hello.txt", "Hello World\n");
        var img = zip.folder("images");
        var imgData = "R0lGODdhBQAFAIACAAAAAP/eACwAAAAABQAFAAACCIwPkWerClIBADs=";
        img.file("smile.gif", imgData, { base64: true });
        var content = zip.generate({ type: "blob" });
        saveAs(content, "examlpe.zip");
    };
    __egretProto__.createText = function (str, x, y, color) {
        var txt = new egret.TextField();
        txt.x = x;
        txt.y = y;
        txt.text = str;
        txt.textColor = color;
        return txt;
    };
    __egretProto__.sp_click = function (e) {
        lcp.LTrace.trace(this, "我单击了元件" + (this._i++) + "次", this._sp.name, this._sp.x, this._sp.y, this._sp.width, this._sp.height, this._sp.touchEnabled);
    };
    /**
     * 涂鸦板
     */
    __egretProto__.testBoard = function () {
        var _this = this;
        var sp = new egret.Sprite();
        this.addChild(sp);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            sp.graphics.lineStyle(5, 0xff0000, 1, true);
            sp.graphics.moveTo(e.stageX, e.stageY);
            _this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, arguments.callee, _this);
        }, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (e) {
            //console.log(e.stageX,e.stageY);
            sp.graphics.lineTo(e.stageX, e.stageY);
        }, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, function (e) {
            _this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, arguments.callee, _this);
            _this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, arguments.callee, _this);
            _this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, arguments.callee, _this);
        }, this);
    };
    /**
     * 测试碰撞
     */
    __egretProto__.testHittest = function () {
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
    };
    /**
     * 创建100个精灵
     */
    __egretProto__.createSprite = function (wid, hei) {
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
    __egretProto__.arrTest = function () {
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
    __egretProto__.myResize = function () {
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
    /**
     * 获取手机传感器事件,可以写摇一摇功能,哟西
     */
    __egretProto__.testDeviceOrientation = function () {
        //---------------------------------------------------------------------------------------------------
        //获取手机传感器事件,可以写摇一摇功能,哟西
        if (window && window["DeviceMotionEvent"]) {
            var second = 3000; //秒
            var starttime = egret.getTimer(); //开始时间
            var startX, startY, startZ, endX, endY, endZ; //开始坐标和结束坐标
            startX = startY = startZ = endX = endY = endZ = 0;
            window.addEventListener('devicemotion', function (e) {
                var acceleration = e.accelerationIncludingGravity;
                var endtime = egret.getTimer(); //结束时间
                if ((endtime - starttime) > 100) {
                    var diffTime = endtime - starttime; //时间差
                    startX = acceleration.x;
                    startY = acceleration.y;
                    startZ = acceleration.z;
                    var speed = Math.abs(startX + startY + startZ - endX - endY - endZ) / diffTime * 10000;
                    if (speed > second) {
                        alert("摇一摇,自己在这里写处理吧");
                    }
                    starttime = endtime;
                    endX = startX;
                    endY = startY;
                    endZ = startZ;
                }
            }, false);
            alert("支持传感器事件");
        }
        else {
            alert('不支持传感器事件');
        }
        //----------------------------------------------------------------------------------------------------
    };
    return HelloKitty;
})(egret.DisplayObjectContainer);
HelloKitty.prototype.__class__ = "HelloKitty";
