import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableServerComponent } from './datatable-server.component';

describe('DatatableServerComponent', () => {
  let component: DatatableServerComponent;
  let fixture: ComponentFixture<DatatableServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatatableServerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatatableServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
