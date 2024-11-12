import { Routes } from '@angular/router';
import { AddRegistrationComponent } from './component/add-registration/add-registration.component';
import { ListRegistrationComponent } from './component/list-registration/list-registration.component';
import { TheMovieDatabaseComponent } from './component/the-movie-database/the-movie-database.component';

export const routes: Routes = [
    { path: '', component: AddRegistrationComponent },
    { path: 'registration', component: AddRegistrationComponent },
    { path: 'list-registration', component: ListRegistrationComponent },
    { path: 'tmdb', component: TheMovieDatabaseComponent }
];
