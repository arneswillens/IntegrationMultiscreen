import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
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
  displayedColumns: string[] = ['date', 'time', 'lastlog'];
  dataSource: MatTableDataSource<TestData>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() {
    const users = Array.from({length: 100}, (_, k) => createNewUser());
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
function createNewUser(): TestData {

  return {
    date: '31 november',
    lastlog: 'Pornhub',
    time: '12:03'
  };
}
