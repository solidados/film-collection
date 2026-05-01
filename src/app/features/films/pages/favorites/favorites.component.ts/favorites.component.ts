import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FilmService } from '@features/films/services/film.service';
import { FilmCardComponent } from '@features/films/components/film-card/film-card.component/film-card.component';

@Component({
  selector: 'app-favorites',
  imports: [FilmCardComponent, RouterLink],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent {
  private router = inject(Router);
  private filmService = inject(FilmService);

  favoriteFilms = this.filmService.favorites;

  onFilmClick(id: number): void {
    const film = this.filmService.getFilmById(id);
    if (film?.slug) {
      void this.router.navigate(['/films', film.slug]);
    }
  }

  onFavoriteToggle(id: number): void {
    this.filmService.toggleFavorite(id);
  }
}
