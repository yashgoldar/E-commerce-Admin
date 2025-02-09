import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableClientComponent } from './datatable-client.component';

describe('DatatableClientComponent', () => {
  let component: DatatableClientComponent;
  let fixture: ComponentFixture<DatatableClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatatableClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatatableClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
