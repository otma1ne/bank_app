import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageRouteComponent } from './landing-page-route.component';

describe('LandingPageRouteComponent', () => {
  let component: LandingPageRouteComponent;
  let fixture: ComponentFixture<LandingPageRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
