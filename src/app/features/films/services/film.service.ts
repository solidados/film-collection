import { Injectable, signal, computed } from '@angular/core';
import type { Film } from '@features/films/models/film.model';
import filmsData from '@features/films/data/films.json';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private filmsSignal = signal<Film[]>(filmsData as Film[]);

  films = this.filmsSignal.asReadonly();
  favorites = computed(() => this.filmsSignal().filter((film) => film.isFavorite));

  getFilmById(id: number): Film | undefined {
    return this.filmsSignal().find((film) => film.id === id);
  }

  toggleFavorite(id: number): void {
    this.filmsSignal.update((films) =>
      films.map((film) => (film.id === id ? { ...film, isFavorite: !film.isFavorite } : film)),
    );
  }
}
