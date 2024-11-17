import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRegistrationComponent } from './add-registration.component';
import { provideRouter } from '@angular/router';

describe('AddRegistrationComponent', () => {
  let fixture: ComponentFixture<AddRegistrationComponent>;
  let component: AddRegistrationComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRegistrationComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AddRegistrationComponent); // Creates the instance of the component & returns a component fixture.
    component = fixture.componentInstance; // Will be used to access component's properties or methods.
    fixture.detectChanges(); // To trigger the change detection cycle.
  });

  // Tests whether the component gets created successfully or not.
  // Confirms that all the dependencies to the component are provided or not.
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
