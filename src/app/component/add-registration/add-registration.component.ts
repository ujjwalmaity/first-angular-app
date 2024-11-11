import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-registration',
  standalone: true,
  imports: [NavBarComponent, ReactiveFormsModule],
  templateUrl: './add-registration.component.html',
  styleUrl: './add-registration.component.css'
})

export class AddRegistrationComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      mobile: 0,
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }

}
