﻿ 
import Photo = DeviceNs.Photo;
import LocationService = LocationNs.LocationService;
import Employee = CompanyNs.Employee;
import User = CompanyNs.User;
//import * as _ from "lodash";
//import { debounce } from "lodash";
//import * as _ from "lodash"; 
//import * as debounce from "lodash/debounce"
//import { debounce } from "lodash";
//import debounce from 'lodash-es/debounce'
import * as _ from "lodash";

//_.padStart("Hello TypeScript!", 20, " ");


let user = new User("Tom");

let company = "OrigonOil";

let emploee = new Employee(company, "Jeck Richards");

var el = document.getElementById('content');

el.innerHTML += `Emploee: ${emploee.getInfo()}`;
el.innerHTML += "<br />";

let locationService = new LocationService();

el.innerHTML += "<br />";
el.innerHTML += `Current location: ${locationService.getlocation("г.Харьков, ул. Карла Маркса 10").getInfo()}`;
el.innerHTML += "<br />";

let ph = new Photo();
var tt = 7;

 //console.log(_.VERSION);

let car = new Car();