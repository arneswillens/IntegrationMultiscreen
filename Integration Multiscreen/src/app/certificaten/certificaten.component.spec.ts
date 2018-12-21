import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatenComponent } from './certificaten.component';

describe('CertificatenComponent', () => {
  let component: CertificatenComponent;
  let fixture: ComponentFixture<CertificatenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificatenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
