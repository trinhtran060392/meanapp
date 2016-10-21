"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.entryPoint = 'http://localhost:3000'; // URL to web API
    }
    UserService.prototype.list = function () {
        return this.http.get(this.entryPoint + '/user/list')
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.create = function (user) {
        return this.http.post(this.entryPoint + '/user', user).catch(this.handleError);
    };
    UserService.prototype.delete = function (_id) {
        return this.http.delete(this.entryPoint + '/user/' + _id);
    };
    UserService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    UserService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map