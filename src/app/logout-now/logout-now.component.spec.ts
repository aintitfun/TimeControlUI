import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutNowComponent } from './logout-now.component';

describe('LogoutNowComponent', () => {
  let component: LogoutNowComponent;
  let fixture: ComponentFixture<LogoutNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutNowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoutNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
