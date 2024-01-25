import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProhibitedAppsComponent } from './prohibited-apps.component';

describe('ProhibitedAppsComponent', () => {
  let component: ProhibitedAppsComponent;
  let fixture: ComponentFixture<ProhibitedAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProhibitedAppsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProhibitedAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
