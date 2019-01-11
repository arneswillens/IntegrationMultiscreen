import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DataService} from '../../data.service';
export interface TestData {
  name: string;
  machine: string;
  time: string;
}
@Component({
  selector: 'app-lasercutter-logs',
  templateUrl: './lasercutter-logs.component.html',
  styleUrls: ['./lasercutter-logs.component.css'],
  providers: [DataService]
})
export class LasercutterLogsComponent implements OnInit {
  data: {
    registratiesid: number,
    gebruikersid: number,
    gebruikersnaam: string,
    tijd: string
  }[] = [];

  constructor(private dS: DataService) {

  }


  ngOnInit() {
    this.dS.getLasercutter().subscribe((result) => {
      for (const c in result) {
        const gid = result[c].gebruikersid;
        this.dS.getGebruiker(gid).subscribe((result2) => {
          this.data.push({
            registratiesid: result[c].registratieid,
            gebruikersid: gid,
            gebruikersnaam: result2[0].voornaam + ' ' + result2[0].achternaam,
            tijd: result[c].tijdstip
          });
        });

        console.log(result[c].gebruikersid);
        console.log(result[c].tijdstip);
      }
    });
    setTimeout(() => {
      this.data.sort(function(a, b) {
        const c = new Date(a.tijd);
        const d = new Date(b.tijd);
        return c > d ? -1 : c < d ? 1 : 0;
        console.log(this.data);
      });
    }, 1000);
    /*const a = result[0].gtypenaam; */
  }
}



