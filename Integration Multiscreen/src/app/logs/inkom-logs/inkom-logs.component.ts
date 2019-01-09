import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DataService} from '../../data.service';
export interface TestData {
  name: string;
  machine: string;
  time: string;
}
@Component({
  selector: 'app-inkom-logs',
  templateUrl: './inkom-logs.component.html',
  styleUrls: ['./inkom-logs.component.css'],
  providers: [DataService]
})
export class InkomLogsComponent implements OnInit {
  data: {
    id: number,
    naam: String
  }[] = [];

  constructor(private dS: DataService) {

  }


  ngOnInit() {
    this.dS.getInkom().subscribe((result) => {
      for (const c in result) {
        this.data.push({
          id: result[c].atypeid,
          naam: result[c].atypenaam
        });
        console.log(result[c].atypeid);
        console.log(result[c].atypenaam);
      }
    });
    /*const a = result[0].gtypenaam; */
  }
}

