"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.VideosModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var videos_routing_module_1 = require("./videos-routing.module");
var videos_component_1 = require("./videos.component");
var checkbox_1 = require("@angular/material/checkbox");
var table_1 = require("@angular/material/table");
var VideosModule = /** @class */ (function () {
    function VideosModule() {
    }
    VideosModule = __decorate([
        core_1.NgModule({
            declarations: [
                videos_component_1.VideosComponent
            ],
            imports: [
                common_1.CommonModule,
                videos_routing_module_1.VideosRoutingModule,
                checkbox_1.MatCheckboxModule,
                table_1.MatTableModule
            ]
        })
    ], VideosModule);
    return VideosModule;
}());
exports.VideosModule = VideosModule;
