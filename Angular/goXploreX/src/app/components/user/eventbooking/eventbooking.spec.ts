import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventbooking } from './eventbooking';

describe('Eventbooking', () => {
  let component: Eventbooking;
  let fixture: ComponentFixture<Eventbooking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Eventbooking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eventbooking);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
