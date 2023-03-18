import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetappComponent } from './getapp.component';

describe('GetappComponent', () => {
  let component: GetappComponent;
  let fixture: ComponentFixture<GetappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
