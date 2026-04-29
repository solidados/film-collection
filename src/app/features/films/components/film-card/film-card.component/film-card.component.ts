import { NgOptimizedImage } from '@angular/common';
import { Component, input, output } from '@angular/core';
import type { Film } from '@features/films/models/film.model';

@Component({
  selector: 'app-film-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss',
})
export class FilmCardComponent {
  film = input.required<Film>();
  filmClick = output<number>();
  favoriteToggle = output<number>();

  onCardClick(): void {
    this.filmClick.emit(this.film().id);
  }

  onFavoriteClick(e: Event): void {
    e.stopPropagation();
    this.favoriteToggle.emit(this.film().id);
  }
}
