import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAlleLogs() {
    return this.http.get('http://localhost:8080/AanwezigheidsRegistratie/getAll');
  }
  getAlleGebruikers() {
    return this.http.get('http://localhost:8080/Gebruiker/getAll');
  }

  getInkom()  {
    return this.http.get('http://localhost:8080/AanwezigheidsRegistratie/getByApparaat?regappid=4');
  }
  getKolomboor()  {
    return this.http.get('http://localhost:8080/AanwezigheidsRegistratie/getByApparaat?regappid=2');
  }
  getLasercutter() {
    return this.http.get('http://localhost:8080/AanwezigheidsRegistratie/getByApparaat?regappid=1');
  }

  getPrinter() {
    return this.http.get('http://localhost:8080/AanwezigheidsRegistratie/getByApparaat?regappid=3');
  }


  getGebruiker(gid: number) {
    return this.http.get('http://localhost:8080/AanwezigheidsRegistratie/getGebruiker?gebruikersid=' + gid);
  }

  getGebruikerDetail(gebruikersid: number) {
    return this.http.get('http://localhost:8080/Gebruiker/getById?gebruikersid=' + gebruikersid);
  }

  getCertificates() {
    return this.http.get('http://localhost:8080/Certificaat/getAll');
  }

  getApparaatVanRegistratie(raid: number){
    //apparaat vanuit registratieID
    return this.http.get('http://localhost:8080/AanwezigheidsRegistratie/getApparaat?regappid=' + raid);
  }

  getCertificatenVanGebruiker(gebruikersid:number){
    return this.http.get('http://localhost:8080/AanwezigheidsRegistratie/getCertificaten?gebruikersid=' + gebruikersid);
  }



  wijzigGebruiker(kaartnr: string, voornaam: string, achternaam: string, email: string, wachtwoord: string,
                  telefoonnr: string, gebruikersid: number) {
    return this.http.post('http://localhost:8080/Gebruiker/wijzig', {'kaartnr': kaartnr, 'voornaam': voornaam, 'achternaam': achternaam,
      'email': email, 'wachtwoord': wachtwoord, 'telefoonnr': telefoonnr, 'gebruikersid': gebruikersid}
      , {headers: {'Content-Type': 'application/json'}});

  }

  postCertificates() {
    return this.http.post('http://localhost:8080/Certificaat/voegToe', {}, {headers: {'Content-Type': 'application/json'}});
  }



  /*getName(){
    return this.http.get('http://localhost:8080/Gebruiker/getAll'+ 's=' + );

  }*/


}
