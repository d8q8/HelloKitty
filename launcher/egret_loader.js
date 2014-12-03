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
    var  context = egret.MainContext.instance;
    context.touchContext = new egret.HTML5TouchContext();
    context.deviceContext = new egret.HTML5DeviceContext();
    context.netContext = new egret.HTML5NetContext();

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
        console.log(aspect, "屏幕宽:", resolution.width, "|", "屏幕高:", resolution.height, "|", "设备像素比:", radio);
        //下面赋值给宽高适配手机浏览器
        egret.StageDelegate.getInstance().setDesignSize(resolution.width * radio, resolution.height * radio);
    };
    doResize();

    //egret.StageDelegate.getInstance().setDesignSize(480, 800);
    context.stage = new egret.Stage();
    var scaleMode =  egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE ? egret.StageScaleMode.NO_BORDER : egret.StageScaleMode.NO_SCALE;
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
    if(document_class){
        rootClass = egret.getDefinitionByName(document_class);
    }
    if(rootClass) {
        var rootContainer = new rootClass();
        if(rootContainer instanceof egret.DisplayObjectContainer){
            //rootContainer.rotation = 90;
            //rootContainer.x = 480;

            context.stage.addChild(rootContainer);
        }
        else{
            throw new Error("文档类必须是egret.DisplayObjectContainer的子类!");
        }
    }
    else{
        throw new Error("找不到文档类！");
    }
};