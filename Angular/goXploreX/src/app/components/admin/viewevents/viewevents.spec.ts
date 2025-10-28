import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewevents } from './viewevents';

describe('Viewevents', () => {
  let component: Viewevents;
  let fixture: ComponentFixture<Viewevents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Viewevents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewevents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
