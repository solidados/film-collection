import { Injectable, signal, computed } from '@angular/core';
import type { Film } from '@features/films/models/film.model';
import filmsData from '@features/films/data/films.json';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private filmsSignal = signal<Film[]>(this.initializeFilms());

  films = this.filmsSignal.asReadonly();
  favorites = computed(() => this.filmsSignal().filter((film) => film.isFavorite));

  private initializeFilms(): Film[] {
    return (filmsData as Film[]).map((film) => ({
      ...film,
      slug: this.generateSlug(film.title),
    }));
  }

  private generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  getFilmById(id: number): Film | undefined {
    return this.filmsSignal().find((film) => film.id === id);
  }

  getFilmBySlug(slug: string): Film | undefined {
    return this.filmsSignal().find((film) => film.slug === slug);
  }

  toggleFavorite(id: number): void {
    this.filmsSignal.update((films) =>
      films.map((film) => (film.id === id ? { ...film, isFavorite: !film.isFavorite } : film)),
    );
  }
}
