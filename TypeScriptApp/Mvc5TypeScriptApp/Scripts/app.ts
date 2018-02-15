﻿/// <reference path="../node_modules/@types/jquery/index.d.ts" />
 //import * as $ from "jquery";

class UserList {

    private users: Array<User> = new Array<User>();

    load(): void {

        $.getJSON('/Home/GetUsers',
            (data) => {
                this.users = data;
                alert('данные загружены');

            });
    }

    displayUsers(): void {

        var table = '<table class="table">'
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
    }
}

class User {

    Id: number;
    Name: string;
    Age: number;
}

window.onload = () => {
    var userList: UserList = new UserList();
    $("#loadBtn").click(() => { userList.load(); });
    $("#displayBtn").click(() => { userList.displayUsers(); });
};