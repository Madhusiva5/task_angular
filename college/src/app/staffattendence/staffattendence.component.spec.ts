import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffattendenceComponent } from './staffattendence.component';

describe('StaffattendenceComponent', () => {
  let component: StaffattendenceComponent;
  let fixture: ComponentFixture<StaffattendenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffattendenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffattendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
