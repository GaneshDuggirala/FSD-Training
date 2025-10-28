import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Activitydetails } from './activitydetails';

describe('Activitydetails', () => {
  let component: Activitydetails;
  let fixture: ComponentFixture<Activitydetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Activitydetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Activitydetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
