import { Routes } from '@angular/router';
import { FavoritesComponent } from '@features/films/pages/favorites/favorites.component.ts/favorites.component';
import { FilmListComponent } from '@features/films/pages/film-list/film-list.component/film-list.component';
import { FilmDetailsComponent } from '@features/films/pages/film-details/film-details.component/film-details.component';

export const FILM_ROTES: Routes = [
  { path: '', component: FilmListComponent, data: { breadcrumb: 'Home' } },
  { path: 'favorites', component: FavoritesComponent, data: { breadcrumb: 'Favorites' } },
  { path: ':slug', component: FilmDetailsComponent },
];
