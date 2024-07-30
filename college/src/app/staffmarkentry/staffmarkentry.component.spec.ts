import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffmarkentryComponent } from './staffmarkentry.component';

describe('StaffmarkentryComponent', () => {
  let component: StaffmarkentryComponent;
  let fixture: ComponentFixture<StaffmarkentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffmarkentryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffmarkentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
