import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { UserInfoComponent } from './user/user-info/user-info.component';
import { CategoriesComponent } from './categories/categories.component';
import { AlbumComponent } from './album/album.component';
import { TimetableComponent } from './timetable/timetable.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    AlbumComponent,
    TimetableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
