import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CancionesModule } from './canciones/canciones.module';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CancionesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
