import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
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
  private url = signal(this.router.url);

  constructor() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.url.set(this.router.url);
      }
    });
  }

  breadcrumbs = computed(() => {
    const parts = this.url().split('/').filter(Boolean);
    const result: Breadcrumb[] = [{ label: 'Home', url: '/' }];

    let path = '';

    for (const part of parts) {
      path += `/${part}`;
      result.push({
        label: this.formatLabel(part),
        url: path,
      });
    }
    return result;
  });

  private formatLabel(value: string): string {
    return value.replace('-', ' ').replace(/\b\w/g, (char) => char.toUpperCase());
  }
}
