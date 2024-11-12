import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMovieDatabaseComponent } from './the-movie-database.component';

describe('TheMovieDatabaseComponent', () => {
  let component: TheMovieDatabaseComponent;
  let fixture: ComponentFixture<TheMovieDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheMovieDatabaseComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TheMovieDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
