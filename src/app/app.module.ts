import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {NavbarModule} from './components/navbar/navbar.module';
import {MenuExampleModule} from './components/menu-example/menu-example.module';
import {CardsExampleModule} from './components/cards-example/cards-example.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NavbarModule,
    MenuExampleModule,
    CardsExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
