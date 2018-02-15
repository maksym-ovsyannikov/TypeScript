var DeviceNs;
(function (DeviceNs) {
    var Smartphone = /** @class */ (function () {
        function Smartphone() {
        }
        Smartphone.prototype.displayInfo = function () {
            console.log("SmartPhone. Model: " + this.model + " Company: " + this.company);
        };
        return Smartphone;
    }());
    DeviceNs.Smartphone = Smartphone;
    var Tablet = /** @class */ (function () {
        function Tablet() {
        }
        Tablet.prototype.displayInfo = function () {
            console.log("Tablet. Model: " + this.model + " Company: " + this.company);
        };
        return Tablet;
    }());
    DeviceNs.Tablet = Tablet;
})(DeviceNs || (DeviceNs = {}));
//export { IDevice, Tablet, Smartphone as DevicesAlias }; 
//# sourceMappingURL=Mobiles.js.map