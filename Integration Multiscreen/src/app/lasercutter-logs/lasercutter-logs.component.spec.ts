import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LasercutterLogsComponent } from './lasercutter-logs.component';

describe('LasercutterLogsComponent', () => {
  let component: LasercutterLogsComponent;
  let fixture: ComponentFixture<LasercutterLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LasercutterLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LasercutterLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
