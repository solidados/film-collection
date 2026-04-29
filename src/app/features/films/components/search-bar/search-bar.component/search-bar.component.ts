import { Component, output } from '@angular/core';
import { AutofocusDirective } from '@shared/directives/autofocus.directive';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [AutofocusDirective],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  searchChange = output<string>();

  onSearchInput(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.searchChange.emit(value);
  }
}
