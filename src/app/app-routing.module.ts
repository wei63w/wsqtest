import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AlbumComponent }        from './album/album.component';
import { CategoriesComponent }   from './categories/categories.component';
import { TimetableComponent }    from './timetable/timetable.component';

import { AppComponent }          from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'album', component: AlbumComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'timetable', component: TimetableComponent }

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
