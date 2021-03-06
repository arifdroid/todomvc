"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var moment = require("moment");
var Utils = (function () {
    function Utils() {
    }
    Utils.uuid = function () {
        var i, random;
        var uuid = '';
        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }
            uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
                .toString(16);
        }
        return uuid;
    };
    Utils.pluralize = function (count, word) {
        return count === 1 ? word : word + 's';
    };
    Utils.addTotal = function (list_1, list_2) {
        return list_1 + list_2;
    };
    Utils.sameTitleCheck = function (newTitle, listTodo) {
        var found = false;
        for (var j = 0; j < listTodo.length; j++) {
            if (listTodo[j].title == newTitle) {
                found = true;
            }
        }
        return found;
    };
    Utils.sortAscend = function (listTodo) {
        var sortedArray = _.orderBy(listTodo, function (o) {
            if (o.dateCreated) {
                return moment(o.dateCreated).format("DD/MM/YYYY");
            }
            else
                return null;
        }, ['asc']);
        return sortedArray;
    };
    Utils.sortDesc = function (listTodo) {
        var sortedArray = _.orderBy(listTodo, function (o) {
            if (o.dateCreated) {
                return moment(o.dateCreated).format("DD/MM/YYYY");
            }
            else
                return null;
        }, ['desc']);
        return sortedArray;
    };
    Utils.store = function (namespace, data) {
        if (data) {
            return localStorage.setItem(namespace, JSON.stringify(data));
        }
        var store = localStorage.getItem(namespace);
        return (store && JSON.parse(store)) || [];
    };
    Utils.extend = function () {
        var objs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objs[_i] = arguments[_i];
        }
        var newObj = {};
        for (var i = 0; i < objs.length; i++) {
            var obj = objs[i];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    newObj[key] = obj[key];
                }
            }
        }
        return newObj;
    };
    return Utils;
}());
exports.Utils = Utils;
