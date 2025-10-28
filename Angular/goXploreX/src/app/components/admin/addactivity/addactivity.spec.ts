import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addactivity } from './addactivity';

describe('Addactivity', () => {
  let component: Addactivity;
  let fixture: ComponentFixture<Addactivity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Addactivity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addactivity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
