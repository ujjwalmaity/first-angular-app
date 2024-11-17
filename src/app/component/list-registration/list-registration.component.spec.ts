import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRegistrationComponent } from './list-registration.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe('ListRegistrationComponent', () => {
  let fixture: ComponentFixture<ListRegistrationComponent>;
  let component: ListRegistrationComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRegistrationComponent],
      providers: [provideRouter([]), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(ListRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
