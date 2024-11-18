import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRegistrationComponent } from './add-registration.component';
import { provideRouter, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { routes } from '../../app.routes';
import { Registration } from '../../model/registration';

fdescribe('AddRegistrationComponent', () => {
  let fixture: ComponentFixture<AddRegistrationComponent>;
  let component: AddRegistrationComponent;

  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRegistrationComponent],
      providers: [
        FormBuilder,
        provideRouter(routes),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddRegistrationComponent); // Creates the instance of the component & returns a component fixture.
    component = fixture.componentInstance; // Will be used to access component's properties or methods.
    fixture.detectChanges(); // To trigger the change detection cycle.

    router = TestBed.inject(Router);
  });

  // Tests whether the component gets created successfully or not.
  // Confirms that all the dependencies to the component are provided or not.
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form in ngOnInit', () => {
    expect(component.myForm).toBeDefined();
    expect(component.myForm.controls['firstName']).toBeTruthy();
    expect(component.myForm.controls['lastName']).toBeTruthy();
    expect(component.myForm.controls['email']).toBeTruthy();
    expect(component.myForm.controls['mobile']).toBeTruthy();
  });

  it('should warn & not navigate on invalid input during onSubmit', () => {
    spyOn(console, 'warn');
    spyOn(router, 'navigate');

    component.myForm.setValue({
      firstName: '',
      lastName: '',
      email: '',
      mobile: null,
    });

    component.onSubmit();

    expect(console.warn).toHaveBeenCalledWith('Invalid input');
    expect(router.navigate).not.toHaveBeenCalledWith(['/list-registration'], {
      state: { newRegistration: { firstName: '', lastName: '', email: '', mobile: null } },
    });
  });

  it('should not warn & navigate to list-registration with valid input during onSubmit', () => {
    spyOn(console, 'warn');
    spyOn(router, 'navigate');

    const registration: Registration = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      mobile: 1234567890,
    };

    component.myForm.setValue(registration);

    component.onSubmit();

    expect(console.warn).not.toHaveBeenCalledWith('Invalid input');
    expect(router.navigate).toHaveBeenCalledWith(['/list-registration'], {
      state: { newRegistration: registration },
    });
  });

});
