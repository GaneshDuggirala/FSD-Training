import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usersactivites } from './usersactivites';

describe('Usersactivites', () => {
  let component: Usersactivites;
  let fixture: ComponentFixture<Usersactivites>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Usersactivites]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usersactivites);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
