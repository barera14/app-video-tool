"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LayoutModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var layout_routing_module_1 = require("./layout-routing.module");
var skeleton_component_1 = require("./skeleton/skeleton.component");
var sidenav_1 = require("@angular/material/sidenav");
var side_bar_component_1 = require("./side-bar/side-bar.component");
var progress_bar_1 = require("@angular/material/progress-bar");
var nav_bar_component_1 = require("./nav-bar/nav-bar.component");
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        core_1.NgModule({
            declarations: [
                skeleton_component_1.SkeletonComponent,
                side_bar_component_1.SideBarComponent,
                nav_bar_component_1.NavBarComponent
            ],
            imports: [
                common_1.CommonModule,
                layout_routing_module_1.LayoutRoutingModule,
                sidenav_1.MatSidenavModule,
                progress_bar_1.MatProgressBarModule
            ],
            exports: [skeleton_component_1.SkeletonComponent]
        })
    ], LayoutModule);
    return LayoutModule;
}());
exports.LayoutModule = LayoutModule;
