import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ControllersComponent } from './controllers/controllers.component';
import { ImageComponent } from './image/image.component';
import { NameComponent } from './name/name.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent, ControllersComponent, ImageComponent, NameComponent]
})
export class ListModule { }
