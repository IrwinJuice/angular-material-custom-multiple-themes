import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import {MaterialModule} from '../../material.module';
import {ThemePickerModule} from '../theme-picker/theme-picker.module';
import {MenuExampleModule} from '../menu-example/menu-example.module';




@NgModule({
  declarations: [NavbarComponent],
    imports: [
        CommonModule,
        MaterialModule,
        ThemePickerModule,
        MenuExampleModule,
    ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
