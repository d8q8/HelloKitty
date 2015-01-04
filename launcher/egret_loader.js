/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

egret_h5.startGame = function () {
    var context = egret.MainContext.instance;
    context.touchContext = new egret.HTML5TouchContext();
    context.deviceContext = new egret.HTML5DeviceContext();//改帧频30
    context.netContext = new egret.HTML5NetContext();

    // -----------------------------------------------------------------------
    //获取屏幕信息
    function getInfo() {
        var s = "";
        s += " 网页可见区域宽：" + document.body.clientWidth + "\n";
        s += " 网页可见区域高：" + document.body.clientHeight + "\n";
        s += " 网页可见区域宽：" + document.body.offsetWidth + " (包括边线和滚动条的宽)" + "\n";
        s += " 网页可见区域高：" + document.body.offsetHeight || +" (包括边线的宽)" + "\n";
        s += " 网页正文全文宽：" + document.body.scrollWidth + "\n";
        s += " 网页正文全文高：" + document.body.scrollHeight + "\n";
        s += " 网页被卷去的高(ff)：" + document.body.scrollTop + "\n";
        s += " 网页被卷去的高(ie)：" + document.documentElement.scrollTop + "\n";
        s += " 网页被卷去的左：" + document.body.scrollLeft + "\n";
        s += " 网页正文部分上：" + window.screenTop + "\n";
        s += " 网页正文部分左：" + window.screenLeft + "\n";
        s += " 屏幕分辨率的高：" + window.screen.height + "\n";
        s += " 屏幕分辨率的宽：" + window.screen.width + "\n";
        s += " 屏幕可用工作区高度：" + window.screen.availHeight + "\n";
        s += " 屏幕可用工作区宽度：" + window.screen.availWidth + "\n";
        s += " 你的屏幕设置是 " + window.screen.colorDepth + " 位彩色" + "\n";
        s += " 你的屏幕设置 " + window.devicePixelRatio + " 像素/英寸" + "\n";
        console.log(s);
    }

    //getInfo();

    // ----------------------------------------------------------------------------------------------------------------
    // 手机浏览器解决方案,处理宽和高,如果是生成APP,请另一个原生JS文件,可以参照这种方式.
    var aspectRatio = {portrait: "竖屏", landscape: "横屏"};//横竖屏的处理
    var resolution = {width: 480, height: 800};//默认宽高
    var doResize = function (aspect) {
        var wid, hei, radio;//宽,高,像素比
        //获取窗口宽度
        if (window && window.innerWidth)
            wid = window.innerWidth;
        else if ((document.body) && (document.body.clientWidth))
            wid = document.body.clientWidth;
        //获取窗口高度
        if (window && window.innerHeight)
            hei = window.innerHeight;
        else if ((document.body) && (document.body.clientHeight))
            hei = document.body.clientHeight;
        //通过深入Document内部对body进行检测，获取窗口大小
        if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
            wid = document.documentElement.clientWidth;
            hei = document.documentElement.clientHeight;
        }
        //设备像素比,这里如果获取不到就自动默认为1,如果有特殊需求可以自行修改
        radio = window.devicePixelRatio || 1;
        //处理横竖屏
        if (aspect == null) {
            aspect = aspectRatio.portrait;//横竖屏自己给吧
        }
        resolution = (aspect == aspectRatio.portrait) ? {width: wid, height: hei} : {width: hei, height: wid};
        console.log(wid > hei ? aspectRatio.landscape : aspectRatio.portrait, "设备屏幕宽:", resolution.width, "|", "设备屏幕高:", resolution.height, "|", "设备像素比:", radio);
        //下面赋值给宽高适配手机浏览器
        egret.StageDelegate.getInstance().setDesignSize(resolution.width * radio, resolution.height * radio);
        //egret.StageDelegate.getInstance().setDesignSize(480, 800);
    };
    doResize();
    //----------------------------------------------------------------------------------------------------------------

    context.stage = new egret.Stage();
    var scaleMode = egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE ? egret.StageScaleMode.NO_BORDER : egret.StageScaleMode.NO_SCALE;
    context.stage.scaleMode = scaleMode;

    //WebGL是egret的Beta特性，默认关闭
    var rendererType = 0;
    if (rendererType == 1) {// egret.WebGLUtils.checkCanUseWebGL()) {
        context.rendererContext = new egret.WebGLRenderer();
    }
    else {
        context.rendererContext = new egret.HTML5CanvasRenderer();
    }

    egret.MainContext.instance.rendererContext.texture_scale_factor = 1;
    context.run();

    var rootClass;
    if (document_class) {
        rootClass = egret.getDefinitionByName(document_class);
    }
    if (rootClass) {
        var rootContainer = new rootClass();
        if (rootContainer instanceof egret.DisplayObjectContainer) {
            context.stage.addChild(rootContainer);
        }
        else {
            throw new Error("文档类必须是egret.DisplayObjectContainer的子类!");
        }
    }
    else {
        throw new Error("找不到文档类！");
    }
};