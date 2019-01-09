import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
export interface TestData {
  name: string;
  lastlog: string;
  certificate: string;
}

@Component({
  selector: 'app-personen',
  templateUrl: './personen.component.html',
  styleUrls: ['./personen.component.css']
})
export class PersonenComponent implements OnInit {
  displayedColumns: string[] = ['name', 'lastlog', 'certificate'];
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
    name: 'Beau Muylle',
    lastlog: 'Pornhub',
    certificate: 'pro fapper'
  };
}
