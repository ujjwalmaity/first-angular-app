import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Registration } from '../../model/registration';
import { NgFor } from '@angular/common';
import { RegistrationService } from '../../service/registration.service';

@Component({
  selector: 'app-list-registration',
  standalone: true,
  imports: [NavBarComponent, NgFor],
  templateUrl: './list-registration.component.html',
  styleUrl: './list-registration.component.css'
})

export class ListRegistrationComponent implements OnInit {
  registrations!: Registration[];

  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
    console.log('ListRegistrationComponent - ngOnInit');

    this.registrations = this.registrationService.getRegistrationList();
  }

}
