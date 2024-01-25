import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallingWindowComponent } from './time-window.component';

describe('CallingWindowComponent', () => {
  let component: CallingWindowComponent;
  let fixture: ComponentFixture<CallingWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallingWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallingWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
