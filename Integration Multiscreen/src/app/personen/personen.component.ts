import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DataService} from '../data.service';


@Component({
  selector: 'app-personen',
  templateUrl: './personen.component.html',
  styleUrls: ['./personen.component.css'],
  providers: [DataService]
})
export class PersonenComponent implements OnInit {
  data: {
    id: number,
    voornaam: string,
    achternaam: string,
    email: string,
    tel: string,
  }[] = [];

  constructor(private dS: DataService) {

  }


  ngOnInit() {
    this.dS.getAlleGebruikers().subscribe((result) => {
      for (const c in result) {
          this.data.push({
            id:  result[c].gebruikersid,
            voornaam: result[c].voornaam,
            achternaam: result[c].achternaam,
            email: result[c].email,
            tel: result[c].telefoonnr,

          });
        console.log(result[c].gebruikersid);
        console.log(result[c].tijdstip);
      }
    });
    /*const a = result[0].gtypenaam; */
  }
}
