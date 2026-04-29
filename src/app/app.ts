import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbsComponent } from '@shared/ui/breadcrumbs/breadcrumbs.component/breadcrumbs.component';
import { FooterComponent } from '@shared/ui/footer/footer.component/footer.component';
import { HeaderComponent } from '@shared/ui/header/header.component/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BreadcrumbsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('film-collection');
}
