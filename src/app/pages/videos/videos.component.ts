import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Videos } from 'src/app/models/Videos';
import { videoData } from 'src/app/models/videoData';

const ELEMENT_DATA: Videos[] = [
  { position: 1, name: 'Afiliado Master', videos: 8, size: '7.3 GB', date: '30/May/2023' },
  { position: 2, name: 'BeMaster', videos: 21, size: '1.3 GB', date: '30/May/2023' },
  { position: 3, name: 'Comizzión', videos: 10, size: '284 MB', date: '30/May/2023' },
  { position: 4, name: 'Creador de contenido', videos: 2, size: '4.3 GB', date: '30/May/2023' },
  { position: 5, name: 'Exportados Wil', videos: 15, size: '500 GB', date: '30/May/2023' },
  { position: 6, name: 'Afiliado Master', videos: 6, size: '7.3 GB', date: '30/May/2023' },
  { position: 7, name: 'BeMaster', videos: 30, size: '1.4 GB', date: '30/May/2023' }
];

const LIST_VIDEO_DATA: videoData[] = [
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
]

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent {
  filterTbl:boolean=true;
  itemSelect:string="";

  displayedColumns: string[] = ['select', 'name', 'videos', 'size', 'date'];
  dataSource = new MatTableDataSource<Videos>(ELEMENT_DATA);
  selection = new SelectionModel<Videos>(true, []);
  
  displayedColumnsFilter: string[] = ['select', 'name', 'size', 'time', 'date'];
  listVideosFilter =<videoData[]>([]);
  selectionFilter = new SelectionModel<videoData>(true, []);
  

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  selectItem(row?: Videos) {
    this.listVideosFilter = LIST_VIDEO_DATA.filter(x => x.position == row?.position);
    this.itemSelect = row?.name || 'name';
    this.filterTbl = !this.filterTbl;    
  }

  backList(){
    this.filterTbl = !this.filterTbl;      
    this.selection.clear();
  }
}
