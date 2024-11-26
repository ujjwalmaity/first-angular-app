import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registration } from '../model/registration';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  registrations?: Registration[];

  constructor(private readonly http: HttpClient) {
    console.log('RegistrationService - constructor');
  }

  public getRegistrationList$(): Observable<Registration[]> {
    return this.http.get<Registration[]>('registration.json');
    // return this.http.get<Registration[]>('registration.json').pipe(delay(1000));
  }

}
