import { Routes } from '@angular/router';
import { FILM_ROTES } from '@features/films/film.routes';
import { ErrorPageComponent } from '@features/films/pages/error-page/error-page.component/error-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'films', pathMatch: 'full' },
  { path: 'films', children: FILM_ROTES },
  { path: '404', component: ErrorPageComponent, data: { breadcrumb: 'Page Not Found' } },
  { path: '**', redirectTo: '404' },
];
