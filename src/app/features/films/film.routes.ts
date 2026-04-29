import { Routes } from '@angular/router';
import { FilmListComponent } from '@features/films/pages/film-list/film-list.component/film-list.component';
import { FilmDetailsComponent } from '@features/films/pages/film-details/film-details.component/film-details.component';

export const FILM_ROTES: Routes = [
  { path: '', component: FilmListComponent },
  { path: ':id', component: FilmDetailsComponent },
];
