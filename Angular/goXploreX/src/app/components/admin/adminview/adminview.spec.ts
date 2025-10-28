import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminview } from './adminview';

describe('Adminview', () => {
  let component: Adminview;
  let fixture: ComponentFixture<Adminview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Adminview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adminview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
