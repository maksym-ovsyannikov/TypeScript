var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DeviceNs;
(function (DeviceNs) {
    var FreekClass = /** @class */ (function (_super) {
        __extends(FreekClass, _super);
        function FreekClass() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FreekClass.prototype.getFreek = function () {
            return this.getCountBytes().toString();
        };
        return FreekClass;
    }(DeviceNs.Photo));
    DeviceNs.FreekClass = FreekClass;
})(DeviceNs || (DeviceNs = {}));
//# sourceMappingURL=FreekClass.js.map