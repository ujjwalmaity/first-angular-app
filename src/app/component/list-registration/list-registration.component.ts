import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Registration } from '../../model/registration';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-registration',
  standalone: true,
  imports: [NavBarComponent, NgFor],
  templateUrl: './list-registration.component.html',
  styleUrl: './list-registration.component.css'
})

export class ListRegistrationComponent implements OnInit {
  registrations!: Registration[];

  ngOnInit(): void {
    console.log('ListRegistrationComponent - ngOnInit');
    this.registrations = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        mobile: 1234567890
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        email: "janesmith@example.com",
        mobile: 9876543210
      },
      {
        firstName: "Alice",
        lastName: "Johnson",
        email: "alicejohnson@example.com",
        mobile: 1122334455
      }
    ];
  }

}
