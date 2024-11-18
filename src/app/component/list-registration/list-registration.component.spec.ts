import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRegistrationComponent } from './list-registration.component';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';
import { of } from 'rxjs';
import { RegistrationService } from '../../service/registration.service';

describe('ListRegistrationComponent', () => {
  let fixture: ComponentFixture<ListRegistrationComponent>;
  let component: ListRegistrationComponent;

  let mockRegistrationService: any;

  beforeEach(async () => {
    mockRegistrationService = {
      registrations: [],
      getRegistrationList$: jasmine.createSpy('getRegistrationList$').and.returnValue(
        of([
          { firstName: 'John', lastName: 'Doe', email: 'john@example.com', mobile: 1234567890 },
          { firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', mobile: 9876543210 },
        ])
      ),
    };

    await TestBed.configureTestingModule({
      imports: [ListRegistrationComponent],
      providers: [
        provideRouter(routes),
        { provide: RegistrationService, useValue: mockRegistrationService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ListRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch registrations from service if not already loaded', () => {
    mockRegistrationService.registrations = null;
    component.ngOnInit();

    expect(mockRegistrationService.getRegistrationList$).toHaveBeenCalled();
    expect(mockRegistrationService.registrations).toEqual([
      { firstName: 'John', lastName: 'Doe', email: 'john@example.com', mobile: 1234567890 },
      { firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', mobile: 9876543210 },
    ]);
    expect(component.registrations).toEqual(mockRegistrationService.registrations);
  });

  it('should use existing registrations if already loaded', () => {
    mockRegistrationService.registrations = [
      { firstName: 'Existing', lastName: 'User', email: 'existing@example.com', mobile: 4567891230 },
    ];
    component.ngOnInit();

    expect(mockRegistrationService.getRegistrationList$).not.toHaveBeenCalled();
    expect(component.registrations).toEqual(mockRegistrationService.registrations);
  });

});
