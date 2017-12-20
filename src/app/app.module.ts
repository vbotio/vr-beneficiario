import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LibraryModule } from 'vr-library';

import { AppComponent } from './app.component';
import { NovoComponent } from './novo/novo.component';


@NgModule({
  declarations: [
    AppComponent,
    NovoComponent
  ],
  imports: [
    BrowserModule,
    LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
