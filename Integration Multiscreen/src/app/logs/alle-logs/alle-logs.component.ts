import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../data.service';


@Component({
  selector: 'app-alle-logs',
  templateUrl: './alle-logs.component.html',
  styleUrls: ['./alle-logs.component.css'],
  providers: [DataService]
})
export class AlleLogsComponent implements OnInit {
  data: {
    registratiesid: number,
    gebruikersid: number,
    regappid: number,
    apparaatnaam: string,
    gebruikersnaam: string,
    tijd: string,
  }[] = [];

  constructor(private dS: DataService) {

  }


  ngOnInit() {
    this.dS.getAlleLogs().subscribe((result: any) => {
      for (const gegevens of result) {
        const gid = gegevens.gebruikersid;
        const raid = gegevens.regappid;
        this.dS.getGebruiker(gid).subscribe((result2: any) => {
          this.dS.getApparaatVanRegistratie(raid).subscribe((result3: any) => {
            this.data.push({
              registratiesid: gegevens.registratieid,
              regappid: raid,
              apparaatnaam: result3[0].regappnaam,
              gebruikersid: gid,
              gebruikersnaam: result2[0].voornaam + ' ' + result2[0].achternaam,
              tijd: gegevens.tijdstip
            });
            this.sortAll();
          });
        });
      }
    });
  }

  sortAll() {
    this.data.sort(function (a, b) {
      const c = new Date(a.tijd);
      const d = new Date(b.tijd);
      return c > d ? -1 : c < d ? 1 : 0;
    });
  }
}
