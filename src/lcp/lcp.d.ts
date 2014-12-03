/**
 * Created by d8q8 on 2014/8/15.
 * @module Lcp
 * @class LVars
 * @constructor
 **/
declare module lcp {
    /**
     * 本想做个全局变参处理的,暂时还没考虑清楚,先放着,以后跟进(未完善)
     */
    class LVars {
        CLASS_NAME: string;
        _vars: Object;
        constructor(vars?: Object);
        private _set(property, value);
        vars: Object;
        static some($target: Object, $proper: Object): void;
    }
}
/**
 * Created by d8q8 on 2014/8/15.
 * @module Lcp
 * @class LCircle
 * @constructor
 **/
declare module lcp {
    /**
     * 绘制圆形类
     */
    class LCircle extends LGraphics {
        CLASS_NAME: string;
        constructor(vars?: IGraphics);
        drawShape(): void;
        clone(): LCircle;
    }
}
/**
 * Created by d8q8 on 2014/8/15.
 * @module Lcp
 * @class LEllipse
 * @constructor
 **/
declare module lcp {
    /**
     * 绘制椭圆类
     */
    class LEllipse extends LGraphics {
        CLASS_NAME: string;
        constructor(vars?: IGraphics);
        drawShape(): void;
        clone(): LEllipse;
    }
}
/**
 * Created by d8q8 on 2014/8/15.
 * @module Lcp
 * @class LGraphics
 * @constructor
 **/
declare module lcp {
    /**
     * 绘图基类
     */
    class LGraphics extends egret.Sprite {
        vars: IGraphics;
        CLASS_NAME: string;
        constructor(vars?: IGraphics);
        initValue(): void;
        init(vars: IGraphics): void;
        draw(): void;
        drawShape(): void;
        /**
         * 类名
         * @returns {string}
         */
        toString(): string;
    }
}
/**
 * Created by d8q8 on 2014/8/28.
 *
 * @class LHeart
 * @constructor
 **/
declare module lcp {
    /**
     * 绘制心形
     * 笛卡尔心形 r = a(1 - sinθ)
     */
    class LHeart extends LGraphics {
        CLASS_NAME: string;
        constructor(vars?: IGraphics);
        drawShape(): void;
        clone(): LHeart;
    }
}
/**
 * Created by d8q8 on 2014/8/15.
 * @module Lcp
 * @class LPolygon
 * @constructor
 **/
declare module lcp {
    /**
     * 绘制多边形
     */
    class LPolygon extends LGraphics {
        CLASS_NAME: string;
        constructor(vars?: IGraphics);
        drawShape(): void;
        clone(): LPolygon;
    }
}
/**
 * Created by d8q8 on 2014/8/15.
 * @module Lcp
 * @class LRect
 * @constructor
 **/
declare module lcp {
    /**
     * 绘制矩形
     */
    class LRect extends LGraphics {
        CLASS_NAME: string;
        constructor(vars?: IGraphics);
        drawShape(): void;
        clone(): LRect;
    }
}
/**
 * Created by d8q8 on 2014/8/28.
 *
 * @class LRose
 * @constructor
 **/
declare module lcp {
    /**
     * 绘制玫瑰
     * 玫瑰曲线 r = a*cos(Kθ)
     */
    class LRose extends LGraphics {
        CLASS_NAME: string;
        constructor(vars?: IGraphics);
        drawShape(): void;
        clone(): LRose;
    }
}
/**
 * Created by d8q8 on 2014/8/15.
 * @module Lcp
 * @class LRoundRect
 * @constructor
 **/
declare module lcp {
    /**
     * 绘制圆角矩形
     */
    class LRoundRect extends LGraphics {
        CLASS_NAME: string;
        constructor(vars?: IGraphics);
        drawShape(): void;
        clone(): LRoundRect;
    }
}
/**
 * Created by d8q8 on 2014/8/15.
 * @module Lcp
 * @class LStar
 * @constructor
 **/
declare module lcp {
    /**
     * 绘制多角星
     */
    class LStar extends LGraphics {
        CLASS_NAME: string;
        constructor(vars?: IGraphics);
        drawShape(): void;
        clone(): LStar;
    }
}
/**
 * Created by d8q8 on 2014/8/12.
 * @module Lcp
 * @class LEvent
 * @constructor
 */
declare module lcp {
    /**
     * 自定义事件类
     */
    class LEvent extends egret.Event {
        CLASS_NAME: string;
        private _obj;
        constructor(type: string, obj?: Object, bubbles?: boolean, cancelable?: boolean);
        clone(): LEvent;
        toString(): void;
        /**
         * 传参获取
         * @returns {Object}
         */
        param: Object;
    }
}
/**
 * Created by d8q8 on 2014/8/12.
 * @module Lcp
 * @class LListener
 * @constructor
 */
declare module lcp {
    /**
     * 全局侦听类及消息处理
     */
    class LListener {
        CLASS_NAME: string;
        private static _instance;
        private _dispatcher;
        constructor();
        static getInstance(): LListener;
        addEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number): void;
        removeEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean): void;
        hasEventListener(type: string): boolean;
        willTrigger(type: string): boolean;
        dispatchEvent(event: LEvent): boolean;
        toString(): string;
    }
}
/**
 * Created by d8q8 on 2014/8/18.
 * @module Lcp
 * @class IGraphics
 * @constructor
 **/
declare module lcp {
    /**
     * 绘图基本属性接口
     */
    interface IGraphics {
        x?: number;
        y?: number;
        name?: string;
        width?: number;
        height?: number;
        anchorX?: number;
        anchorY?: number;
        touchEnabled?: boolean;
        thickness?: number;
        linecolor?: number;
        linealpha?: number;
        pixelHinting?: boolean;
        scaleMode?: string;
        caps?: string;
        joints?: string;
        miterLimit?: number;
        fillcolor?: number;
        fillalpha?: number;
        radius?: number;
        ellipseWidth?: number;
        ellipseHeight?: number;
        corner?: number;
        ratio?: number;
        petal?: number;
    }
}
/**
 * Created by d8q8 on 2014/8/22.
 * @module Lcp
 * @class LGlobal
 * @constructor
 **/
declare module lcp {
    class LGlobal {
        CLASS_NAME: string;
        static _app: Object;
        static app: Object;
        static _root: egret.DisplayObjectContainer;
        static root: egret.DisplayObjectContainer;
        static _stage: egret.Stage;
        static stage: egret.Stage;
        constructor();
    }
}
/**
 * Created by d8q8 on 2014/8/18.
 * @module Lcp
 * @class LString
 * @constructor
 **/
declare module lcp {
    /**
     * 字符处理类(暂未完善)
     */
    class LString {
        CLASS_NAME: string;
        constructor();
        /**
         * 类名
         * @returns {string}
         */
        toString(): string;
    }
}
/**
 * Created by d8q8 on 2014/8/12.
 * @module Lcp
 * @class LTrace
 * @constructor
 */
declare module lcp {
    /**
     * 跟踪捕获类(待完善)
     */
    class LTrace {
        CLASS_NAME: string;
        constructor();
        /**
         * 跟踪捕获
         * @param message
         * @param optionalParams
         */
        static trace(message?: any, ...optionalParams: any[]): void;
        /**
         * 类名
         * @returns {string}
         */
        toString(): string;
    }
}
