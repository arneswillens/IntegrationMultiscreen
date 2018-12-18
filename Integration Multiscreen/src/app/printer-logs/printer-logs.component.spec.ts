import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterLogsComponent } from './printer-logs.component';

describe('PrinterLogsComponent', () => {
  let component: PrinterLogsComponent;
  let fixture: ComponentFixture<PrinterLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinterLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinterLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
