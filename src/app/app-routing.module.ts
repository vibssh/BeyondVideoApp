import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoComponent } from './components/video/video.component';

const routes: Routes = [
    {path: 'video-list', component:VideoListComponent},
    {path:'video', component: VideoComponent},
    {path: '', component:VideoListComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
