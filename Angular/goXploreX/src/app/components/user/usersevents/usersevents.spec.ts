import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usersevents } from './usersevents';

describe('Usersevents', () => {
  let component: Usersevents;
  let fixture: ComponentFixture<Usersevents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Usersevents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usersevents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
