import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KolomboorLogsComponent } from './kolomboor-logs.component';

describe('KolomboorLogsComponent', () => {
  let component: KolomboorLogsComponent;
  let fixture: ComponentFixture<KolomboorLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KolomboorLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KolomboorLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
