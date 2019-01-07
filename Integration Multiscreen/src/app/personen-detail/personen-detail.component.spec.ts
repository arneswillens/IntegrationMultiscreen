import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonenDetailComponent } from './personen-detail.component';

describe('PersonenDetailComponent', () => {
  let component: PersonenDetailComponent;
  let fixture: ComponentFixture<PersonenDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonenDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
