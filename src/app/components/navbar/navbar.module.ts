import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar.component';
import {MaterialModule} from '../../material.module';
import {MenuExampleModule} from '../menu-example/menu-example.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MenuExampleModule,
    FormsModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
