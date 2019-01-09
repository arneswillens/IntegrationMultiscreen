import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DataService} from '../../data.service';
export interface TestData {
  name: string;
  machine: string;
  time: string;
}
@Component({
  selector: 'app-printer-logs',
  templateUrl: './printer-logs.component.html',
  styleUrls: ['./printer-logs.component.css'],
  providers: [DataService]
})
export class PrinterLogsComponent implements OnInit {
  data: {
    id: number,
    naam: String
  }[] = [];

  constructor(private dS: DataService) {

  }


  ngOnInit() {
    this.dS.getData().subscribe((result) => {
      for (const c in result) {
        this.data.push({
          id: result[c].gtypeid,
          naam: result[c].gtypenaam
        });
        console.log(result[c].gtypeid);
        console.log(result[c].gtypenaam);
      }
    });
    /*const a = result[0].gtypenaam; */
  }
}
