import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsExampleComponent } from './cards-example.component';
import {MaterialModule} from '../../material.module';



@NgModule({
  declarations: [CardsExampleComponent],
  exports: [
    CardsExampleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CardsExampleModule { }
