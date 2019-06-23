import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TimepickerModule } from 'timepicker';
import { MatFormFieldModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TimepickerModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
