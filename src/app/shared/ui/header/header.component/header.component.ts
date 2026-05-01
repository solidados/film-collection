import { DOCUMENT, NgOptimizedImage } from '@angular/common';
import { Component, effect, ElementRef, HostListener, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen = signal<boolean>(false);
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly document = inject(DOCUMENT);

  constructor() {
    effect((onCleanup) => {
      const isOpen = this.isMenuOpen();
      const isMobile = window.innerWidth <= 768;

      if (isOpen && isMobile) {
        this.document.body.classList.add('no-scroll');

        onCleanup(() => {
          this.document.body.classList.remove('no-scroll');
        });
      }
    });
  }

  toggleMenu(): void {
    this.isMenuOpen.update((curr) => !curr);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(e: MouseEvent): void {
    const target = e.target as Node;

    if (this.isMenuOpen() && !this.el.nativeElement.contains(target)) {
      this.closeMenu();
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 768 && this.isMenuOpen()) {
      this.closeMenu();
    }
  }
}
