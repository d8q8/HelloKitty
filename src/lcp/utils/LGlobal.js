/**
 * Created by d8q8 on 2014/8/22.
 * @module Lcp
 * @class LGlobal
 * @constructor
 **/
var lcp;
(function (lcp) {
    var LGlobal = (function () {
        function LGlobal() {
            this.CLASS_NAME = "LGlobal";
        }
        Object.defineProperty(LGlobal, "app", {
            get: function () {
                return this._app;
            },
            set: function (value) {
                this._app = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LGlobal, "root", {
            get: function () {
                return this._root;
            },
            set: function (value) {
                this._root = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LGlobal, "stage", {
            get: function () {
                return this._stage;
            },
            set: function (value) {
                this._stage = value;
            },
            enumerable: true,
            configurable: true
        });
        return LGlobal;
    })();
    lcp.LGlobal = LGlobal;
    LGlobal.prototype.__class__ = "lcp.LGlobal";
})(lcp || (lcp = {}));
