import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PhotoComponent } from './components/photo/photo.component';

const routes: Routes = [
  {path: '', redirectTo:'/gallery', pathMatch: 'full'},
  {path: 'gallery', component: GalleryComponent},
  {path: 'photo/:id', component:PhotoComponent},
  {path: '**', redirectTo:'/gallery'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
