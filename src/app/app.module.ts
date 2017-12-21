import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LibraryModule, HeaderModule } from 'vr-library';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibraryModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
