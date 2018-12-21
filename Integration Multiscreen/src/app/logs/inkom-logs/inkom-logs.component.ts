import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
export interface TestData {
  name: string;
  machine: string;
  time: string;
}
@Component({
  selector: 'app-inkom-logs',
  templateUrl: './inkom-logs.component.html',
  styleUrls: ['./inkom-logs.component.css']
})
export class InkomLogsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'machine', 'time'];
  dataSource: MatTableDataSource<TestData>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() {
    const users = Array.from({length: 90}, (_, k) => createNewUser());
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
function createNewUser(): TestData {

  return {
    name: 'slik',
    machine: 'blub',
    time: 'vandaag'
  };
}
