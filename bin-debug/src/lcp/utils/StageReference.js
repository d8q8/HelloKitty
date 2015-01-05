/**
 * Created by d8q8 on 2014/12/9.
 * @module lcp
 * @class StageReference
 * @constructor
 **/
var lcp;
(function (lcp) {
    /**
     * 舞台引用类
     */
    var StageReference = (function () {
        function StageReference() {
            this.CLASS_NAME = "StageReference";
        }
        /**
         * 返回一个舞台的引用
         * @param id
         * @returns {egret.Stage}
         */
        StageReference.getStage = function (id) {
            if (id === void 0) { id = StageReference.STAGE_DEFAULT; }
            if (!(id in StageReference._getMap()))
                lcp.LTrace.trace('在没有设置之前是不能获取到舞台的 ("' + id + '") 的.');
            return StageReference._getMap()[id];
        };
        /**
         * 存储一个舞台的引用
         * @param stage
         * @param id
         */
        StageReference.setStage = function (stage, id) {
            if (id === void 0) { id = StageReference.STAGE_DEFAULT; }
            StageReference._getMap()[id] = stage;
        };
        /**
         * 移除存储的舞台引用
         * @param id
         * @returns {boolean}
         */
        StageReference.removeStage = function (id) {
            if (id === void 0) { id = StageReference.STAGE_DEFAULT; }
            if (!(id in StageReference._getMap()))
                return false;
            StageReference.setStage(null, id);
            return true;
        };
        /**
         * 查找舞台所有的ID
         * @returns {Array<any>}
         */
        StageReference.getIds = function () {
            return lcp.ObjectUtil.getKeys(StageReference._getMap());
        };
        /**
         * 查找一个舞台ID的标识
         * @param stage
         * @returns {*}
         */
        StageReference.getStageId = function (stage) {
            var map = StageReference._getMap();
            for (var i in map)
                if (map[i] == stage)
                    return i;
            return null;
        };
        StageReference._getMap = function () {
            if (StageReference._stageMap == null)
                StageReference._stageMap = {};
            return StageReference._stageMap;
        };
        /**
         * 类名
         * @returns {string}
         */
        StageReference.prototype.toString = function () {
            //console.log("ClassName",this.CLASS_NAME);
            return this.CLASS_NAME;
        };
        StageReference.STAGE_DEFAULT = 'stageDefault';
        return StageReference;
    })();
    lcp.StageReference = StageReference;
    StageReference.prototype.__class__ = "lcp.StageReference";
})(lcp || (lcp = {}));
