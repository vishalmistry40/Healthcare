import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentRecordTableComponent } from './treatment-record-table.component';

describe('TreatmentRecordTableComponent', () => {
  let component: TreatmentRecordTableComponent;
  let fixture: ComponentFixture<TreatmentRecordTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentRecordTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentRecordTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
