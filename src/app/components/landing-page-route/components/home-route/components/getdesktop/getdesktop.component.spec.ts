import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdesktopComponent } from './getdesktop.component';

describe('GetdesktopComponent', () => {
  let component: GetdesktopComponent;
  let fixture: ComponentFixture<GetdesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetdesktopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetdesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
