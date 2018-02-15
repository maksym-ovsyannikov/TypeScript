/// <reference path="../node_modules/@types/jquery/index.d.ts" />
//import * as $ from "jquery";
var UserList = /** @class */ (function () {
    function UserList() {
        this.users = new Array();
    }
    UserList.prototype.load = function () {
        var _this = this;
        $.getJSON('/Home/GetUsers', function (data) {
            _this.users = data;
            alert('данные загружены');
        });
    };
    UserList.prototype.displayUsers = function () {
        var table = '<table class="table">';
        for (var i = 0; i < this.users.length; i++) {
            var tableRow = '<tr>' +
                '<td>' + this.users[i].Id + '</td>' +
                '<td>' + this.users[i].Name + '</td>' +
                '<td>' + this.users[i].Age + '</td>' +
                '</tr>';
            table += tableRow;
        }
        table += '</table>';
        $('#content').html(table);
    };
    return UserList;
}());
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
window.onload = function () {
    var userList = new UserList();
    $("#loadBtn").click(function () { userList.load(); });
    $("#displayBtn").click(function () { userList.displayUsers(); });
};
//# sourceMappingURL=app.js.map