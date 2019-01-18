import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-studentedit',
  templateUrl: './studentedit.component.html',
  styleUrls: ['./studentedit.component.css'],
  providers: [DataService]
})
export class StudenteditComponent implements OnInit {
  kaartnr: string;
  voorNaam: string;
  achterNaam: string;
  email: string;
  wachtwoord: string;
  tel: string;
  id: number;
  constructor(private route: ActivatedRoute,
              private dS: DataService,
              private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.queryParams['gebruikersid'];
    this.dS.getGebruiker(this.id).subscribe((result: any) => {
      this.kaartnr = result[0].kaartnr;
      this.voorNaam = result[0].voornaam;
      this.achterNaam = result[0].achternaam;
      this.email = result[0].email;
      this.wachtwoord = result[0].wachtwoord;
      this.tel = result[0].telefoonnr;
    });
  }
  update() {
 this.dS.wijzigGebruiker(this.kaartnr, this.voorNaam, this.achterNaam, this.email, this.wachtwoord, this.tel, this.id)
 this.router.navigate(['detail'], {queryParams: {gebruikersid: this.id}});
  }
}
