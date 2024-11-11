import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registration } from '../model/registration';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  // constructor(private http: HttpClient) { }

  public getRegistrationList(): Registration[] {
    return [
      {
        "firstName": "John",
        "lastName": "Doe",
        "email": "johndoe@example.com",
        "mobile": 1234567890
      },
      {
        "firstName": "Jane",
        "lastName": "Smith",
        "email": "janesmith@example.com",
        "mobile": 9876543210
      },
      {
        "firstName": "Alice",
        "lastName": "Johnson",
        "email": "alicejohnson@example.com",
        "mobile": 1122334455
      }
    ];
  }

  // public getRegistrationList$(): Observable<Registration[]> {
  //   return this.http.get<Registration[]>('/assets/mocks/registration.json').pipe(delay(1000));
  // }

}
