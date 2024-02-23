"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.VideosComponent = void 0;
var collections_1 = require("@angular/cdk/collections");
var core_1 = require("@angular/core");
var table_1 = require("@angular/material/table");
var ELEMENT_DATA = [
    { position: 1, name: 'Afiliado Master', videos: 8, size: '7.3 GB', date: '30/May/2023' },
    { position: 2, name: 'BeMaster', videos: 21, size: '1.3 GB', date: '30/May/2023' },
    { position: 3, name: 'Comizzión', videos: 10, size: '284 MB', date: '30/May/2023' },
    { position: 4, name: 'Creador de contenido', videos: 2, size: '4.3 GB', date: '30/May/2023' },
    { position: 5, name: 'Exportados Wil', videos: 15, size: '500 GB', date: '30/May/2023' },
    { position: 6, name: 'Afiliado Master', videos: 6, size: '7.3 GB', date: '30/May/2023' },
    { position: 7, name: 'BeMaster', videos: 30, size: '1.4 GB', date: '30/May/2023' }
];
var LIST_VIDEO_DATA = [
    { id: 1, position: 2, name: 'Entrenamiento.mp4', size: '7.3 GB', time: '04:11:37', date: '30/may/2023' },
    { id: 2, position: 2, name: 'Salida-al-mercado-versión nueva.mp4', size: '1.4 GB', time: '47:55', date: '22/jun/2022' },
    { id: 3, position: 2, name: 'Como-cerrar-una-ventana.mp4', size: '284 MB', time: '10:12', date: '11/sep/2021' },
    { id: 4, position: 2, name: 'Crea-un-ticket-valioso.mp4', size: '4.3 GB', time: '03:50:22', date: '21/jun/2023' },
    { id: 5, position: 2, name: 'Conquista-el-mercado-digital.mp4', size: '500 MB', time: '5:00', date: '5/abr/2023' },
    { id: 6, position: 2, name: 'Entrenamiento.mp4', size: '7.3 GB', time: '04:11:37', date: '30/may/2023' },
    { id: 7, position: 2, name: 'Salida-al-mercado-versión nueva.mp4', size: '1.4 GB', time: '47:55', date: '22/jun/2022' },
    { id: 8, position: 3, name: 'Como-cerrar-una-ventana.mp4', size: '284 MB', time: '10:12', date: '11/sep/2021' },
    { id: 9, position: 3, name: 'Crea-un-ticket-valioso.mp4', size: '4.3 GB', time: '03:50:22', date: '21/jun/2023' },
    { id: 10, position: 3, name: 'Conquista-el-mercado-digital.mp4', size: '500 MB', time: '5:00', date: '5/abr/2023' }
];
var VideosComponent = /** @class */ (function () {
    function VideosComponent() {
        this.filterTbl = true;
        this.itemSelect = "";
        this.displayedColumns = ['select', 'name', 'videos', 'size', 'date'];
        this.dataSource = new table_1.MatTableDataSource(ELEMENT_DATA);
        this.selection = new collections_1.SelectionModel(true, []);
        this.displayedColumnsFilter = ['select', 'name', 'size', 'time', 'date'];
        this.listVideosFilter = ([]);
        this.selectionFilter = new collections_1.SelectionModel(true, []);
    }
    VideosComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    VideosComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    VideosComponent.prototype.selectItem = function (row) {
        this.listVideosFilter = LIST_VIDEO_DATA.filter(function (x) { return x.position == (row === null || row === void 0 ? void 0 : row.position); });
        this.itemSelect = (row === null || row === void 0 ? void 0 : row.name) || 'name';
        this.filterTbl = !this.filterTbl;
    };
    VideosComponent.prototype.backList = function () {
        this.filterTbl = !this.filterTbl;
        this.selection.clear();
    };
    VideosComponent = __decorate([
        core_1.Component({
            selector: 'app-videos',
            templateUrl: './videos.component.html',
            styleUrls: ['./videos.component.css']
        })
    ], VideosComponent);
    return VideosComponent;
}());
exports.VideosComponent = VideosComponent;
