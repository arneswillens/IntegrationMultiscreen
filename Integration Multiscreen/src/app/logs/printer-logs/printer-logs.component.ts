import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DataService} from '../../data.service';


@Component({
  selector: 'app-printer-logs',
  templateUrl: './printer-logs.component.html',
  styleUrls: ['./printer-logs.component.css'],
  providers: [DataService]
})
export class PrinterLogsComponent implements OnInit {
  data: {
    registratiesid: number,
    gebruikersid: number,
    gebruikersnaam: string,
    tijd: string
  }[] = [];

  constructor(private dS: DataService) {

  }


  ngOnInit() {
    this.dS.getPrinter().subscribe((result) => {
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



