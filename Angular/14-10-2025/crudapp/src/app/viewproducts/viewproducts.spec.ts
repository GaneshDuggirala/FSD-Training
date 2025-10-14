import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewproducts } from './viewproducts';

describe('Viewproducts', () => {
  let component: Viewproducts;
  let fixture: ComponentFixture<Viewproducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Viewproducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewproducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
