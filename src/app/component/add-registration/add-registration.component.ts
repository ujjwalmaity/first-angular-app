import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from '../../model/registration';

@Component({
  selector: 'app-add-registration',
  standalone: true,
  imports: [NavBarComponent, ReactiveFormsModule],
  templateUrl: './add-registration.component.html',
  styleUrl: './add-registration.component.css'
})
export class AddRegistrationComponent implements OnInit {
  myForm!: FormGroup;

  registration!: Registration;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    console.log('AddRegistrationComponent - ngOnInit');

    this.myForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      mobile: null,
    });
  }

  onSubmit() {
    // debugger;
    this.registration = this.myForm.value;
    console.log(this.registration);

    if (this.registration.firstName.length == 0 ||
      this.registration.lastName.length == 0 ||
      this.registration.email.length == 0 ||
      this.registration.mobile == null ||
      this.registration.mobile.toString.length == 0
    ) {
      console.warn('Invalid input');
      return;
    }

    // this.router.navigateByUrl('/list-registration');
    this.router.navigate(['/list-registration'], { state: { newRegistration: this.registration } });
  }

}
