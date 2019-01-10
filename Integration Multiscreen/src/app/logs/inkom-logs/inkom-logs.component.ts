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
    registratiesid: number,
    gebruikersnaam: String,
    tijd: String
  }[] = [];

  constructor(private dS: DataService) {

  }


  ngOnInit() {
    this.dS.getInkom().subscribe((result) => {
      for (const c in result) {
        const gid = result[c].gebruikersid;
        this.dS.getGebruiker(gid).subscribe((result2) => {
          this.data.push({
            registratiesid: result[c].registratieid,
            gebruikersnaam: result2[0].voornaam + ' ' + result2[0].achternaam,
            tijd: result[c].tijdstip
          });
        });

        console.log(result[c].gebruikersid);
        console.log(result[c].tijdstip);
      }
    });
    /*const a = result[0].gtypenaam; */
  }
}

