import { TestBed } from '@angular/core/testing';

import { TimepickerService } from './timepicker.service';

describe('TimepickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimepickerService = TestBed.get(TimepickerService);
    expect(service).toBeTruthy();
  });
});
