import { Component, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { FilmCardComponent } from '@features/films/components/film-card/film-card.component/film-card.component';
import { SearchBarComponent } from '@features/films/components/search-bar/search-bar.component/search-bar.component';
import { FilmService } from '@features/films/services/film.service';

@Component({
  selector: 'app-film-list',
  standalone: true,
  imports: [FilmCardComponent, SearchBarComponent],
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.scss',
})
export class FilmListComponent {
  searchQuery = signal('');
  private filmService = inject(FilmService);
  filteredFilms = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    return this.filmService.films().filter((film) => film.title.toLowerCase().includes(query));
  });
  private router = inject(Router);

  onSearchChange(query: string): void {
    this.searchQuery.set(query);
  }

  onFilmClick(id: number):void {
    void this.router.navigate(['/films', id])
  }

  onFavoriteToggle(id: number): void {
    this.filmService.toggleFavorite(id)
  }
}
