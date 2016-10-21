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
var user_service_1 = require('./user.service');
var UserComponent = (function () {
    function UserComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.user = { name: '', password: '' };
        this.users = [];
        userService.list().subscribe(function (res) {
            _this.users = res;
        });
    }
    UserComponent.prototype.create = function () {
        var _this = this;
        if (this.user.name && this.user.password) {
            this.userService.create(this.user).subscribe(function (res) {
                _this.users.push(_this.user);
                _this.user = { name: '', password: '' };
            });
        }
    };
    UserComponent.prototype.delete = function (user) {
        var _this = this;
        this.userService.delete(user._id).subscribe(function (res) {
            if (res.status === 200) {
                var index = _this.users.indexOf(user);
                _this.users.splice(index, 1);
            }
        });
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'my-user',
            templateUrl: 'app/user/user.html',
            styleUrls: ['app/user/user.css'],
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map