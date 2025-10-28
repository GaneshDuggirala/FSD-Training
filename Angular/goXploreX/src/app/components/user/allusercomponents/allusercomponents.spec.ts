import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Allusercomponents } from './allusercomponents';

describe('Allusercomponents', () => {
  let component: Allusercomponents;
  let fixture: ComponentFixture<Allusercomponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Allusercomponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Allusercomponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
