import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlleLogsComponent } from './alle-logs.component';

describe('AlleLogsComponent', () => {
  let component: AlleLogsComponent;
  let fixture: ComponentFixture<AlleLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlleLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlleLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
