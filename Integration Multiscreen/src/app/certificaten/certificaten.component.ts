import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificaten',
  templateUrl: './certificaten.component.html',
  styleUrls: ['./certificaten.component.css']
})
export class CertificatenComponent implements OnInit {

  typesOfCertificates: string[] = ['Lasercutter 1', 'Lasercutter 2', '3D printer 1', '3D printer 2', 'Kolomboor'];

  constructor() { }

  ngOnInit() {
  }

}
