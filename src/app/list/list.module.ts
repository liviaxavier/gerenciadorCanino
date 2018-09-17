import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ControllersComponent } from './controllers/controllers.component';
import { ImageComponent } from './image/image.component';
import { NameComponent } from './name/name.component';
import { ExpandComponent } from './expand/expand.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent, ControllersComponent, ImageComponent, NameComponent, ExpandComponent]
})
export class ListModule { }
