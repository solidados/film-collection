import { Component, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from '@features/films/services/film.service';

import { SearchBarComponent } from '@features/films/components/search-bar/search-bar.component/search-bar.component';
import { FilmCardComponent } from '@features/films/components/film-card/film-card.component/film-card.component';

@Component({
  selector: 'app-film-list',
  standalone: true,
  imports: [FilmCardComponent, SearchBarComponent],
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.scss',
})
export class FilmListComponent {
  private router = inject(Router);
  private filmService = inject(FilmService);

  searchQuery = signal('');

  filteredFilms = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    return this.filmService.films().filter((film) => film.title.toLowerCase().includes(query));
  });

  onSearchChange(query: string): void {
    this.searchQuery.set(query);
  }

  onFilmClick(id: number): void {
    const film = this.filmService.getFilmById(id);
    console.log('Film clicked', film);

    if (film?.slug) {
      void this.router.navigate(['/films', film.slug]);
    } else {
      void this.router.navigate(['/404', id]);
    }
  }

  onFavoriteToggle(id: number): void {
    this.filmService.toggleFavorite(id);
  }
}
