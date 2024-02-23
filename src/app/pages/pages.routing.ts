import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [
        { path: 'home',loadChildren: () => import('./home/home.module').then(m => m.HomeModule)}, 
        { path: 'videos',loadChildren: () => import('./videos/videos.module').then(m => m.VideosModule)}, 
        { path: '', redirectTo: '/videos', pathMatch: 'full' }
    ]
}]; // sets up routes constant where you define your routes

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class PagesRoutingModule { }
