import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addevents } from './addevents';

describe('Addevents', () => {
  let component: Addevents;
  let fixture: ComponentFixture<Addevents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Addevents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addevents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
