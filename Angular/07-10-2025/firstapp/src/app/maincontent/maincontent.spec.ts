import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maincontent } from './maincontent';

describe('Maincontent', () => {
  let component: Maincontent;
  let fixture: ComponentFixture<Maincontent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Maincontent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Maincontent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
