import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppMaterialModule} from './app-material/app-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AlleLogsComponent } from './alle-logs/alle-logs.component';
import { LasercutterLogsComponent } from './logs/lasercutter-logs/lasercutter-logs.component';
import { KolomboorLogsComponent } from './logs/kolomboor-logs/kolomboor-logs.component';
import { PrinterLogsComponent } from './logs/printer-logs/printer-logs.component';
import { InkomLogsComponent } from './logs/inkom-logs/inkom-logs.component';
import { LogsComponent } from './logs/logs.component';

@NgModule({
  declarations: [
    AppComponent,
    AlleLogsComponent,
    LasercutterLogsComponent,
    KolomboorLogsComponent,
    PrinterLogsComponent,
    InkomLogsComponent,
    LogsComponent
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
