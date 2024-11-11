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
      mobile: 0,
    });
  }

  onSubmit() {
    this.registration = this.myForm.value;
    console.log(this.registration);
    this.router.navigateByUrl('/list-registration');
  }

}
