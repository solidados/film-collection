import { Component, inject, signal, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '@features/films/services/film.service';
import { DurationPipe } from '@shared/pipes/duration.pipe';
import type { Film } from '@features/films/models/film.model';

@Component({
  selector: 'app-film-details',
  standalone: true,
  imports: [DurationPipe, NgOptimizedImage],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.scss',
})
export class FilmDetailsComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private filmService = inject(FilmService);

  film = signal<Film | null>(null);

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    // const foundFilm = this.filmService.getFilmById(id);

    if (!slug) {
      void this.router.navigate(['/films']);
      return;
    }

    const foundFilm = this.filmService.getFilmBySlug(slug);

    if (!foundFilm) {
      void this.router.navigate(['/films']);
      return;
    }

    this.film.set(foundFilm);
  }

  goBack(): void {
    void this.router.navigate(['/films']);
  }
}
