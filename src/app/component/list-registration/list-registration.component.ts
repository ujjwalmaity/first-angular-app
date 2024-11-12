import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Registration } from '../../model/registration';
import { NgFor } from '@angular/common';
import { RegistrationService } from '../../service/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-registration',
  standalone: true,
  imports: [NavBarComponent, NgFor],
  templateUrl: './list-registration.component.html',
  styleUrl: './list-registration.component.css'
})
export class ListRegistrationComponent implements OnInit {
  registrations!: Registration[];

  constructor(private router: Router, private registrationService: RegistrationService) {
    console.log('ListRegistrationComponent - constructor');

    let newRegistration: Registration = this.router.getCurrentNavigation()?.extras.state?.['newRegistration'];
    console.log(newRegistration);
    if (newRegistration != undefined) {
      this.registrationService.registrations.push(newRegistration);
    }
  }

  ngOnInit(): void {
    console.log('ListRegistrationComponent - ngOnInit');

    this.registrations = this.registrationService.registrations;
  }

}
