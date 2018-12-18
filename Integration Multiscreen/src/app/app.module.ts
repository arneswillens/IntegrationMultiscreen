import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppMaterialModule} from './app-material/app-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AlleLogsComponent } from './alle-logs/alle-logs.component';
import { LasercutterLogsComponent } from './lasercutter-logs/lasercutter-logs.component';
import { KolomboorLogsComponent } from './kolomboor-logs/kolomboor-logs.component';
import { PrinterLogsComponent } from './printer-logs/printer-logs.component';

@NgModule({
  declarations: [
    AppComponent,
    AlleLogsComponent,
    LasercutterLogsComponent,
    KolomboorLogsComponent,
    PrinterLogsComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
