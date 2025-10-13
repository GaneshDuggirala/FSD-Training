import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loadproducts } from './loadproducts';

describe('Loadproducts', () => {
  let component: Loadproducts;
  let fixture: ComponentFixture<Loadproducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Loadproducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loadproducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
