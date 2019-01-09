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
    return this.http.get('http://localhost:8080/GebruikersType/getAll')
      .pipe(map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      )
    ).pipe(
      catchError(
        (error: Response) => {
          console.log(error);
          return Observable.throw('het macheert niet');
        }
      )
    );
  }


}
