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

  getInkom()  {
    return this.http.get('http://localhost:8080/AanwezigheidsRegistratie/getByApparaat?regappid=4');
  }
  getKolomboor()  {
    return this.http.get('http://localhost:8080/AanwezigheidsRegistratie/getByApparaat?regappid=2');
  }
  getLasercutter(){
    return this.http.get('http://localhost:8080/AanwezigheidsRegistratie/getByApparaat?regappid=1');
  }

  getPrinter(){
    return this.http.get('http://localhost:8080/AanwezigheidsRegistratie/getByApparaat?regappid=3');
  }


  getGebruiker(gid: number) {
    return this.http.get('http://localhost:8080/AanwezigheidsRegistratie/getGebruiker?gebruikersid=' + gid);
  }

  getCertificates() {
    return this.http.get('http://localhost:8080/Certificaat/getAll');
  }



  postCertificates(certificates: any[]) {
    return this.http.post('http://localhost:8080/Certificaat/voegToe', certificates);
  }

  /*getName(){
    return this.http.get('http://localhost:8080/Gebruiker/getAll'+ 's=' + );

  }*/


}
