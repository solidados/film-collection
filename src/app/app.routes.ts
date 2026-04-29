import { Routes } from '@angular/router';
import { FILM_ROTES } from '@features/films/film.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'films', pathMatch: 'full' },
  { path: 'films', children: FILM_ROTES },
  { path: '**', redirectTo: 'films' },
];
