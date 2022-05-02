import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsForAdminComponent } from './operations-for-admin.component';

describe('OperationsForAdminComponent', () => {
  let component: OperationsForAdminComponent;
  let fixture: ComponentFixture<OperationsForAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationsForAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
