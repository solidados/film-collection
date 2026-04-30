import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { FilmService } from '@features/films/services/film.service';
import type { Breadcrumb } from '@features/films/models/breadcrumb.model';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
})
export class BreadcrumbsComponent {
  private router = inject(Router);
  private filmService = inject(FilmService);

  breadcrumbs = signal<Breadcrumb[]>([]);

  constructor() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.updateBreadcrumbs();
      }
    });

    // * -- initial brreadcrumbs on componentDidMount
    this.updateBreadcrumbs();
  }

  private updateBreadcrumbs(): void {
    const url = this.router.url;
    const crumbs: Breadcrumb[] = [];

    crumbs.push({
      label: 'Home',
      url: '/films',
      active: url === '/films' || url === '/',
    });

    const slugMatch = url.match(/\/films\/([^/?]+)/);

    if (slugMatch) {
      const slug = slugMatch[1];
      const film = this.filmService.getFilmBySlug(slug);

      if (film) {
        crumbs.push({
          label: film.title,
          url: `/films/${slug}`,
          active: true,
        });
      }
    }

    this.breadcrumbs.set(crumbs);
  }

  private formatLabel(value: string): string {
    return value.replace('-', ' ').replace(/\b\w/g, (char) => char.toUpperCase());
  }
}
