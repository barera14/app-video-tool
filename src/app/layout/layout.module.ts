import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideBarComponent } from './side-bar/side-bar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    SkeletonComponent,
    SideBarComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatSidenavModule,
    MatProgressBarModule
  ],
  exports:[SkeletonComponent]
})
export class LayoutModule { }
