import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';

export interface TestData {
  date: string;
  lastlog: string;
  time: string;
}

@Component({
  selector: 'app-personen-detail',
  templateUrl: './personen-detail.component.html',
  styleUrls: ['./personen-detail.component.css']
})
export class PersonenDetailComponent implements OnInit {
  id: number;
  naam: string;
  email: string;
  tel: string;

  displayedColumns: string[] = ['date', 'time', 'lastlog'];
  dataSource: MatTableDataSource<TestData>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute,
              private dS: DataService) {
    const users = Array.from({length: 100}, (_, k) => createNewUser());
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.id = this.route.snapshot.queryParams['gebruikersid'];
    this.dS.getGebruikerDetail(this.id).subscribe((result) => {
      // @ts-ignore
      this.naam = result.voornaam;
      // @ts-ignore
      this.email = result.email;
      // @ts-ignore
      this.tel = result.telefoonnr;
    });
  }

}

function createNewUser(): TestData {

  return {
    date: '31 november',
    lastlog: 'Pornhub',
    time: '12:03'
  };
}
