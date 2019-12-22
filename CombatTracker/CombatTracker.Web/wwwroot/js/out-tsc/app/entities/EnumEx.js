var EnumEx = /** @class */ (function () {
    function EnumEx() {
    }
    EnumEx.getNamesAndValues = function (e) {
        var nms = EnumEx.getNames(e);
        var mpped = nms.map(function (n) { return ({ name: n, value: e[n] }); });
        var a = 1;
        return mpped;
    };
    EnumEx.getNames = function (e) {
        return EnumEx.getObjValues(e).filter(function (v) { return typeof v === "string"; });
    };
    EnumEx.getValues = function (e) {
        return EnumEx.getObjValues(e).filter(function (v) { return typeof v === "number"; });
    };
    EnumEx.getObjValues = function (e) {
        return Object.keys(e).map(function (k) { return e[k]; });
    };
    return EnumEx;
}());
export { EnumEx };
//# sourceMappingURL=EnumEx.js.map