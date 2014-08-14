/**
* Created by d8q8 on 2014/8/12.
*/
var Lcp;
(function (Lcp) {
    var LTrace = (function () {
        function LTrace() {
        }
        LTrace.trace = function () {
            var rest = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                rest[_i] = arguments[_i + 0];
            }
            console.log(rest);
        };
        return LTrace;
    })();
    Lcp.LTrace = LTrace;
    LTrace.prototype.__class__ = "Lcp.LTrace";
})(Lcp || (Lcp = {}));
