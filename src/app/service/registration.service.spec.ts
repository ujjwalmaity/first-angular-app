import { TestBed } from '@angular/core/testing';

import { RegistrationService } from './registration.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Registration } from '../model/registration';
import { provideHttpClient } from '@angular/common/http';

describe('RegistrationService', () => {
  let service: RegistrationService;

  let mockHttp: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(RegistrationService);

    mockHttp = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch registration list', (done: DoneFn) => {
    const mockRegistrations: Registration[] = [
      { firstName: 'John', lastName: 'Doe', email: 'john@example.com', mobile: 1234567890 },
      { firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', mobile: 9876543210 },
    ];

    service.getRegistrationList$().subscribe((registrations) => {
      expect(registrations).toEqual(mockRegistrations);
      done();
    });

    const req = mockHttp.expectOne('registration.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockRegistrations); // Provide the mock response
  });
});
