import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trypipes } from './trypipes';

describe('Trypipes', () => {
  let component: Trypipes;
  let fixture: ComponentFixture<Trypipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Trypipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trypipes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
