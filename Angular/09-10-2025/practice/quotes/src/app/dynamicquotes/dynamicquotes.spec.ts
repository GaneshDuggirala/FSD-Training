import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamicquotes } from './dynamicquotes';

describe('Dynamicquotes', () => {
  let component: Dynamicquotes;
  let fixture: ComponentFixture<Dynamicquotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dynamicquotes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dynamicquotes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
