import { TestBed } from '@angular/core/testing';

import { Randomreceipe } from './randomreceipe';

describe('Randomreceipe', () => {
  let service: Randomreceipe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Randomreceipe);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
