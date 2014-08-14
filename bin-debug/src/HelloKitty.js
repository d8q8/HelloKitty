var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
* Created by d8q8 on 2014/8/14.
*
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
        //圆角矩形
        var rect = new egret.Sprite();
        this.addChild(rect);
        rect.graphics.lineStyle(5, 0x00ff00);
        rect.graphics.beginFill(0xff0000);
        rect.graphics.drawRect(0, 0, 200, 100, 20);
        rect.graphics.endFill();
        rect.width = 200;
        rect.height = 100;
        rect.x = 100 + rect.width / 2;
        rect.y = 200 + rect.height / 2;
        rect.touchEnabled = true;
        rect.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            console.log("单击了圆角矩形,哟西", e.currentTarget, e.stageX, e.stageY);
        }, this);

        //椭圆
        var ellipse = new egret.Sprite();
        this.addChild(ellipse);
        ellipse.graphics.lineStyle(5, 0x00ff00);
        ellipse.graphics.beginFill(0xff0000);
        ellipse.graphics.drawEllipse(100, 50, 100, 50);
        ellipse.graphics.endFill();
        ellipse.width = 200;
        ellipse.height = 100;
        ellipse.x = 200;
        ellipse.y = 700;
        ellipse.touchEnabled = true;
        ellipse.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            console.log("单击了椭圆,哟西", e.currentTarget, e.stageX, e.stageY);
        }, this);
    };
    return HelloKitty;
})(egret.DisplayObjectContainer);
HelloKitty.prototype.__class__ = "HelloKitty";
