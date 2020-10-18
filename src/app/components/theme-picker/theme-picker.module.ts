import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemePickerComponent } from './theme-picker.component';
import {MaterialModule} from '../../material.module';



@NgModule({
  declarations: [ThemePickerComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ThemePickerComponent]
})
export class ThemePickerModule { }
