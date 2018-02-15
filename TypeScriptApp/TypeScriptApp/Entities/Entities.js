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
var CompanyNs;
(function (CompanyNs) {
    var User = /** @class */ (function () {
        function User(userName) {
            this.name = userName;
        }
        User.prototype.getInfo = function () {
            console.log("Name: " + this.name);
            return "Name: ${this.name}";
        };
        return User;
    }());
    CompanyNs.User = User;
    var Employee = /** @class */ (function (_super) {
        __extends(Employee, _super);
        function Employee(companyName, userName) {
            var _this = _super.call(this, userName) || this;
            _this.company = companyName;
            return _this;
        }
        Employee.prototype.work = function () {
            console.log(this.name + " work in company " + this.company);
        };
        Employee.prototype.getInfo = function () {
            return "Name " + this.name + "    company: " + this.company;
        };
        return Employee;
    }(User));
    CompanyNs.Employee = Employee;
})(CompanyNs || (CompanyNs = {}));
//# sourceMappingURL=Entities.js.map