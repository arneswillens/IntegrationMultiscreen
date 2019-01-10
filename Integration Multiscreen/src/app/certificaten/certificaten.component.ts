import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-certificaten',
  templateUrl: './certificaten.component.html',
  styleUrls: ['./certificaten.component.css'],
  providers: [DataService]
})
export class CertificatenComponent implements OnInit {
  data: {
    id: number,
    certificaatnaam: String,
    beschrijvingcertificaat: String
  }[] = [];

  constructor(private dS: DataService) {

  }


  ngOnInit() {
    this.dS.getCertificates().subscribe((result) => {
      for (const c in result) {
        this.data.push({
          id: result[c].certificaatid,
          certificaatnaam: result[c].naam,
          beschrijvingcertificaat: result[c].beschrijving
        });
        console.log(result[c].certificaatid);
        console.log(result[c].naam);
        console.log(result[c].beschrijving);
      }
    });
    /*const a = result[0].gtypenaam; */
  }
}
