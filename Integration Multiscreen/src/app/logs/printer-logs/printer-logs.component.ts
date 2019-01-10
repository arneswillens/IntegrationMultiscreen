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
    gebruikersnaam: String,
    tijd: String
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
    /*const a = result[0].gtypenaam; */
  }
}



