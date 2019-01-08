import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificaten',
  templateUrl: './certificaten.component.html',
  styleUrls: ['./certificaten.component.css']
})
export class CertificatenComponent implements OnInit {

  typesOfCertificates: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor() { }

  ngOnInit() {
  }

}
