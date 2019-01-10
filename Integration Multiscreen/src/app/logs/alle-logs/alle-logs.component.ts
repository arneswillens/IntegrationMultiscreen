import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../data.service';

export interface TestData {
  name: string;
  machine: string;
  time: string;
}

@Component({
  selector: 'app-alle-logs',
  templateUrl: './alle-logs.component.html',
  styleUrls: ['./alle-logs.component.css'],
  providers: [DataService]
})
export class AlleLogsComponent implements OnInit {
  data: {
    registratiesid: number,
    gebruikersnaam: String,
    tijd: String,
    apparaatnaam: String
  }[] = [];

  constructor(private dS: DataService) {

  }


  ngOnInit() {
    this.dS.getAlleLogs().subscribe((result) => {
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
