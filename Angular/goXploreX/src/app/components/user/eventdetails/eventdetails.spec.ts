import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventdetails } from './eventdetails';

describe('Eventdetails', () => {
  let component: Eventdetails;
  let fixture: ComponentFixture<Eventdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Eventdetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eventdetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
