import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiginRouteComponent } from './sigin-route.component';

describe('SiginRouteComponent', () => {
  let component: SiginRouteComponent;
  let fixture: ComponentFixture<SiginRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiginRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiginRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
