"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Photo = DeviceNs.Photo;
var LocationService = LocationNs.LocationService;
var Employee = CompanyNs.Employee;
var User = CompanyNs.User;
//_.padStart("Hello TypeScript!", 20, " ");
var user = new User("Tom");
var company = "OrigonOil";
var emploee = new Employee(company, "Jeck Richards");
var el = document.getElementById('content');
el.innerHTML += "Emploee: " + emploee.getInfo();
el.innerHTML += "<br />";
var locationService = new LocationService();
el.innerHTML += "<br />";
el.innerHTML += "Current location: " + locationService.getlocation("г.Харьков, ул. Карла Маркса 10").getInfo();
el.innerHTML += "<br />";
var ph = new Photo();
var tt = 7;
//console.log(_.VERSION);
var car = new Car();
//# sourceMappingURL=BusinessLogic.js.map