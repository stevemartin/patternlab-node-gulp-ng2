"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Circle = (function () {
    function Circle() {
        this.cx = 30;
        this.cy = 30;
        this.r = 29;
        this.opacity = 1.0;
        this.stroke = 'black';
        this.fill = 'darkred';
    }
    Circle = __decorate([
        core_1.Component({
            selector: '[circle]',
            template: "<svg:circle [attr.fill]=\"fill\" [attr.cx]=\"cx\" [attr.cy]=\"cy\" [attr.r]=\"r\" [attr.stroke]=\"stroke\" [attr.opacity]=\"opacity\" />"
        })
    ], Circle);
    return Circle;
}());
exports.Circle = Circle;
