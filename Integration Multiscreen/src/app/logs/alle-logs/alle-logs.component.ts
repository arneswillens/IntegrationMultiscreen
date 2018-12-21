import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
export interface TestData {
  name: string;
  machine: string;
  time: string;
}
@Component({
  selector: 'app-alle-logs',
  templateUrl: './alle-logs.component.html',
  styleUrls: ['./alle-logs.component.css']
})
export class AlleLogsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'machine', 'time'];
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
    name: 'slik',
    machine: 'blub',
    time: 'vandaag'
  };
}
