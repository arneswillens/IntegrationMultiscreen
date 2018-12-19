import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InkomLogsComponent } from './inkom-logs.component';

describe('InkomLogsComponent', () => {
  let component: InkomLogsComponent;
  let fixture: ComponentFixture<InkomLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InkomLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InkomLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
