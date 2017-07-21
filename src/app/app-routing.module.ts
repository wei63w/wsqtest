import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AlbumComponent }        from './album/album.component';
import { CategoriesComponent }   from './categories/categories.component';
import { TimetableComponent }    from './timetable/timetable.component';
import { HomeComponent }         from './home/home.component';
import { UserLoginComponent }    from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ArticleDataComponent}   from './article-data/article-data.component';
import { ThumbnailComponent }    from './album/thumbnail/thumbnail.component';
import { DetailComponent }       from './album/detail/detail.component';

import { AppComponent }          from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'album', component: AlbumComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'timetable', component: TimetableComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-register', component: UserRegisterComponent },
  { path: 'article-data', component: ArticleDataComponent }

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
