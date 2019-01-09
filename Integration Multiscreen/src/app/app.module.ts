import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppMaterialModule} from './app-material/app-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AlleLogsComponent } from './logs/alle-logs/alle-logs.component';
import { LasercutterLogsComponent } from './logs/lasercutter-logs/lasercutter-logs.component';
import { KolomboorLogsComponent } from './logs/kolomboor-logs/kolomboor-logs.component';
import { PrinterLogsComponent } from './logs/printer-logs/printer-logs.component';
import { InkomLogsComponent } from './logs/inkom-logs/inkom-logs.component';
import { LogsComponent } from './logs/logs.component';
import { NavComponent } from './nav/nav.component';
import {RouterModule, Routes} from '@angular/router';
import { PersonenComponent } from './personen/personen.component';
import { CertificatenComponent } from './certificaten/certificaten.component';
import { StatistiekenComponent } from './statistieken/statistieken.component';
import { PersonenDetailComponent } from './personen-detail/personen-detail.component';
import {HttpClientModule} from '@angular/common/http';
const appRoutes: Routes = [
  {path: '', component: LogsComponent},
  {path: 'personen', component: PersonenComponent},
  {path: 'certificaten', component: CertificatenComponent},
  {path: 'personendetail', component: PersonenDetailComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AlleLogsComponent,
    LasercutterLogsComponent,
    KolomboorLogsComponent,
    PrinterLogsComponent,
    InkomLogsComponent,
    LogsComponent,
    NavComponent,
    PersonenComponent,
    CertificatenComponent,
    StatistiekenComponent,
    PersonenDetailComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
