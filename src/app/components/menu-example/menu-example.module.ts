import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuExampleComponent } from './menu-example.component';
import {MaterialModule} from '../../material.module';



@NgModule({
  declarations: [MenuExampleComponent],
  exports: [
    MenuExampleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class MenuExampleModule { }
