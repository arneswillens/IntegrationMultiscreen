import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-statistieken',
  templateUrl: './statistieken.component.html',
  styleUrls: ['./statistieken.component.css']
})
export class StatistiekenComponent implements OnInit {

  alleLogs: [];
  inkomLogs: [];
  kolomboorLogs: [];
  lasercutterLogs: [];
  printerLogs: [];
  constructor(private dS: DataService) { }

  ngOnInit() {
    this.dS.getAlleLogs().subscribe((result: any) => {
      this.alleLogs = result;
    });
    this.dS.getInkom().subscribe((result: any) => {
      this.inkomLogs = result;
    });
    this.dS.getKolomboor().subscribe((result: any) => {
      this.kolomboorLogs = result;
    });
    this.dS.getLasercutter().subscribe((result: any) => {
      this.lasercutterLogs = result;
    });
    this.dS.getPrinter().subscribe((result: any) => {
      this.printerLogs = result;
    });
  }
  }


