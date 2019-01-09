import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://localhost:8080/GebruikersType/getAll');
  }

  getInkom(){
    return this.http.get('http://localhost:8080/AanwezigheidsRegistratieController/getByApparaat?regappid=1');
  }

  getGebruiker(){
    return this.http.get('http://localhost:8080/AanwezigheidsRegistratieController/getGebruiker?gebruikersid=1');
  }

  /*getName(){
    return this.http.get('http://localhost:8080/Gebruiker/getAll'+ 's=' + );

  }*/


}
