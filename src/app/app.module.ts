import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { ListComponent } from './list/list/list.component';
import { NavComponent } from './nav/nav/nav.component';
import { ControllersComponent } from './list/controllers/controllers.component';
import { ImageComponent } from './list/image/image.component';
import { NameComponent } from './list/name/name.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ControllersComponent,
    ImageComponent,
    NameComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
