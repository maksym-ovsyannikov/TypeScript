var LocationNs;
(function (LocationNs) {
    var CustomLocation = /** @class */ (function () {
        function CustomLocation(longitude, latitude, locationName) {
            this.longitude = longitude;
            this.latitude = latitude;
            this.name = locationName;
        }
        CustomLocation.prototype.getInfo = function () { return "longitude: " + this.longitude + " latitude:" + this.latitude + " locationName:" + this.name; };
        return CustomLocation;
    }());
    LocationNs.CustomLocation = CustomLocation;
})(LocationNs || (LocationNs = {}));
//# sourceMappingURL=Location.js.map