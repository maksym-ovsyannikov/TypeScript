var LocationNs;
(function (LocationNs) {
    var LocationService = /** @class */ (function () {
        function LocationService() {
        }
        LocationService.prototype.getlocation = function (targetLocation) {
            return new LocationNs.CustomLocation(23.5, -57.18, targetLocation);
        };
        return LocationService;
    }());
    LocationNs.LocationService = LocationService;
})(LocationNs || (LocationNs = {}));
//# sourceMappingURL=LocationService.js.map