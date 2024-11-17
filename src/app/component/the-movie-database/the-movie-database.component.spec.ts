import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMovieDatabaseComponent } from './the-movie-database.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

describe('TheMovieDatabaseComponent', () => {
  let fixture: ComponentFixture<TheMovieDatabaseComponent>;
  let component: TheMovieDatabaseComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheMovieDatabaseComponent],
      providers: [provideRouter([]), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(TheMovieDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
