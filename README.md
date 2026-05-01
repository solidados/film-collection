# 🎬 Film Collection

A modern, responsive movie catalog application built with Angular 21, showcasing best practices in standalone components, signals-based reactivity, and feature-based architecture.

**Live Demo:** [https://solidados.github.io/film-collection/films](https://solidados.github.io/film-collection/films)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technical Requirements](#technical-requirements)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)
- [Architecture Decisions](#architecture-decisions)
- [Technologies Used](#technologies-used)

---

## 🎯 About

Film Collection is an Angular-based web application designed to browse, search, and manage a curated collection of films. The project demonstrates modern Angular development practices, including:

- **Standalone Components** architecture (no NgModules)
- **Signals-based** state management (no RxJS)
- **Feature-based** folder structure for scalability
- **Responsive design** with adaptive breakpoints
- **SEO-friendly** slug-based routing

This project was built as part of the [RS School Angular Course](https://github.com/rolling-scopes-school/tasks/blob/master/angular/tasks/angular-intro-task/README.md) to showcase Angular 20+ capabilities.

---

## ✨ Features

### Core Functionality
- 📚 **Film Catalog** - Browse a collection of 12+ curated films
- 🔍 **Search** - Real-time search with signal-based filtering
- ⭐ **Favorites** - Toggle favorite films with persistent state
- 📄 **Film Details** - Dedicated page for each film with full information
- 🧭 **Breadcrumbs** - Dynamic navigation breadcrumbs showing current location
- 🚫 **404 Error Page** - Custom error page for invalid routes

### Technical Features
- 🎨 **Responsive Grid** - Adaptive layout (4/3/2/1 columns) at breakpoints: 1024px, 768px, 425px
- 🔗 **SEO-Friendly URLs** - Films accessed via slugs (e.g., `/films/inception`)
- ⚡ **Performance** - Optimized images with NgOptimizedImage
- 🎭 **Custom Directive** - Autofocus directive for search input
- 🔧 **Custom Pipe** - Duration pipe for time formatting (e.g., "2h 29min")
- 📱 **Mobile-First** - Fully responsive across all devices

---

## 🛠️ Technical Requirements

This project adheres to the following technical constraints as per the course assignment:

### Mandatory Requirements ✅

| Requirement | Implementation |
|------------|----------------|
| **Angular Version** | Angular 21.2.0 |
| **Standalone Components** | All components are standalone (no NgModules) |
| **New Control Flow** | Uses `@if`, `@for`, `@switch` syntax |
| **TypeScript Strict Mode** | Enabled in `tsconfig.json` |
| **No RxJS** | State managed exclusively with Angular Signals |
| **No UI Libraries** | Plain SCSS only (no Bootstrap, Material, etc.) |
| **Signals for State** | `signal()`, `computed()`, `input()`, `output()` |
| **Custom Directive** | `AutofocusDirective` for search bar |
| **Custom Pipe** | `DurationPipe` for film duration formatting |
| **Routing** | Angular Router with slug-based navigation |

### Code Quality
- ✅ TypeScript strict mode enabled
- ✅ Component-based architecture
- ✅ BEM-inspired SCSS methodology
- ✅ Semantic HTML5
- ✅ No ESLint errors or warnings

---

## 📂 Project Structure

The project follows a **feature-based (hybrid) architecture** for better scalability and maintainability:

```
src/app/
├── features/
│   └── films/                          # Films feature module
│       ├── components/                 # Feature-specific components
│       │   ├── film-card/             # Film card component
│       │   └── search-bar/            # Search input component
│       ├── pages/                      # Feature pages (smart components)
│       │   ├── film-list/             # Main catalog page
│       │   ├── film-details/          # Film details page
│       │   └── error-page/            # 404 error page
│       ├── services/                   # Feature services
│       │   └── film.service.ts        # Film data & state management
│       ├── models/                     # TypeScript interfaces
│       │   └── film.model.ts          # Film interface
│       ├── data/                       # Mock data
│       │   └── films.json             # Film collection (12 films)
│       └── film.routes.ts             # Feature routing
│
├── shared/                             # Shared across features
│   ├── ui/                            # Reusable UI components
│   │   ├── header/                    # App header
│   │   ├── footer/                    # App footer
│   │   └── breadcrumbs/               # Navigation breadcrumbs
│   ├── directives/                    # Shared directives
│   │   └── autofocus.directive.ts    # Auto-focus directive
│   └── pipes/                         # Shared pipes
│       └── duration.pipe.ts          # Time formatting pipe
│
├── app.component.ts                    # Root component
├── app.routes.ts                       # Root routing configuration
└── styles.scss                         # Global styles
```

### Architecture Benefits

**Feature-Based Structure:**
- ✅ **Scalability** - Easy to add new features (e.g., `features/user/`, `features/reviews/`)
- ✅ **Maintainability** - Clear separation of concerns
- ✅ **Reusability** - Shared components are truly shared
- ✅ **Team-Friendly** - Different teams can work on different features
- ✅ **Industry Standard** - Production-ready architecture pattern

---

## 🚀 Installation

### Prerequisites

- **Node.js** 20+ (recommended: 24.x)
- **npm** 11+ (comes with Node.js)
- **Angular CLI** 21+ (optional, but recommended)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/solidados/film-collection.git
   cd film-collection
   ```

2. **Install dependencies:**
   ```bash
   npm ci
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open in browser:**
   ```
   http://localhost:4200
   ```

---

## 💻 Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server at `http://localhost:4200` |
| `npm run build` | Production build (output: `dist/`) |
| `npm run build:gh` | Build for GitHub Pages with base href |
| `npm run watch` | Build in watch mode for development |
| `npm test` | Run unit tests via Vitest |

### Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload when source files change.

### Build for Production

```bash
npm run build
```

Build artifacts will be stored in `dist/film-collection/browser/`.

---

## 🌐 Deployment

The application is automatically deployed to **GitHub Pages** via GitHub Actions on every push to the `main` branch.

### Deployment Workflow

The deployment pipeline (`.github/workflows/deploy.yml`) performs:

1. ✅ Checkout repository
2. ✅ Setup Node.js 24
3. ✅ Install dependencies (`npm ci`)
4. ✅ Build with production configuration
5. ✅ Copy `index.html` to `404.html` (for client-side routing)
6. ✅ Deploy to GitHub Pages

### Manual Deployment

To deploy manually:

```bash
npm run build:gh
```

Then push the `dist/` folder to the `gh-pages` branch.

---

## 🏗️ Architecture Decisions

### 1. **Signals Over RxJS**

**Decision:** Use Angular Signals for all state management.

**Rationale:**
- ✅ Simpler mental model for reactivity
- ✅ Better performance (fine-grained reactivity)
- ✅ Reduced bundle size
- ✅ Aligns with modern Angular direction (v16+)

**Implementation:**
```typescript
// Film Service with Signals
private filmsSignal = signal<Film[]>(this.initializeFilms());
favorites = computed(() => this.filmsSignal().filter(f => f.isFavorite));
```

---

### 2. **Slug-Based Routing**

**Decision:** Use human-readable slugs instead of IDs in URLs.

**Before:** `/films/2`  
**After:** `/films/inception`

**Rationale:**
- ✅ SEO-friendly URLs
- ✅ Better user experience (shareable links)
- ✅ Professional appearance

**Implementation:**
```typescript
private generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
```

---

### 3. **Feature-Based Architecture**

**Decision:** Organize code by feature rather than by type.

**Traditional (type-based):**
```
src/app/
├── components/
├── services/
├── models/
└── pipes/
```

**Our Approach (feature-based):**
```
src/app/
├── features/films/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── models/
└── shared/
```

**Rationale:**
- ✅ Easier to locate related code
- ✅ Better for team collaboration
- ✅ Scales well as app grows
- ✅ Industry best practice

---

### 4. **Component Communication Patterns**

**Smart vs. Presentational Components:**

- **Smart Components** (Pages): `film-list`, `film-details`
  - Inject services
  - Manage state
  - Handle routing

- **Presentational Components**: `film-card`, `search-bar`
  - Pure UI components
  - Use `input()` and `output()` signals
  - No service injection

**Example:**
```typescript
// film-card.component.ts (Presentational)
export class FilmCardComponent {
  film = input.required<Film>();      // ✅ Signal input
  filmClick = output<number>();       // ✅ Signal output
  favoriteToggle = output<number>();
}
```

---

### 5. **Responsive Design Strategy**

**Breakpoints:**
- **Desktop:** ≥1024px → 4 columns
- **Tablet:** 768-1023px → 3 columns
- **Small Tablet:** 425-767px → 2 columns
- **Mobile:** <425px → 1 column

**Implementation:**
```scss
.film-list__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
}
```

---

## 🧪 Key Implementation Details

### Signal-Based Search

Real-time search without RxJS observables:

```typescript
searchQuery = signal('');

filteredFilms = computed(() => {
  const query = this.searchQuery().toLowerCase().trim();
  return this.filmService.films()
    .filter(film => film.title.toLowerCase().includes(query));
});

onSearchChange(query: string): void {
  this.searchQuery.set(query);
}
```

### Custom Duration Pipe

Converts minutes to human-readable format:

```typescript
@Pipe({ name: 'duration', standalone: true })
export class DurationPipe implements PipeTransform {
  transform(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    
    if (hours === 0) return `${mins}min`;
    if (mins === 0) return `${hours}h`;
    return `${hours}h ${mins}min`;
  }
}
```

**Usage:** `{{ film.duration | duration }}`  
**Output:** `2h 49min`

### Autofocus Directive

Automatically focuses the search input on page load:

```typescript
@Directive({
  selector: '[appAutofocus]',
  standalone: true
})
export class AutofocusDirective implements OnInit {
  constructor(private el: ElementRef<HTMLInputElement>) {}
  
  ngOnInit(): void {
    setTimeout(() => this.el.nativeElement.focus(), 0);
  }
}
```

### Dynamic Breadcrumbs

Breadcrumbs update based on route and show film title:

```typescript
breadcrumbs = signal<Breadcrumb[]>([]);

private updateBreadcrumbs(): void {
  const url = this.router.url;
  const crumbs: Breadcrumb[] = [
    { label: 'Home', url: '/films', active: url === '/films' }
  ];
  
  const slugMatch = url.match(/\/films\/([^/?]+)/);
  if (slugMatch) {
    const film = this.filmService.getFilmBySlug(slugMatch[1]);
    if (film) {
      crumbs.push({
        label: film.title,
        url: `/films/${slugMatch[1]}`,
        active: true
      });
    }
  }
  
  this.breadcrumbs.set(crumbs);
}
```

---

## ⚙️ Technologies Used

### Core
- **Angular** 21.2.0 - Web framework
- **TypeScript** 5.9.2 - Type-safe JavaScript
- **RxJS** 7.8.0 - Required by Angular (minimal usage)

### Development
- **Angular CLI** 21.2.8 - Project scaffolding and build tools
- **Vitest** 4.0.8 - Unit testing framework
- **Prettier** 3.8.1 - Code formatting
- **JSDOM** 28.0.0 - DOM testing utilities

### Styling
- **SCSS** - CSS preprocessor
- **BEM Methodology** - CSS naming convention

### Deployment
- **GitHub Actions** - CI/CD pipeline
- **GitHub Pages** - Static site hosting

---

## 📸 Screenshots

### Home Page (Film List)
- Responsive grid layout
- Real-time search
- Favorite toggle

### Film Details Page
- Full film information
- Responsive layout
- Back navigation

### 404 Error Page
- Custom error page
- Movie-themed design
- Navigation options

---

## 🔮 Future Enhancements

Potential features for future versions:

- [ ] **Filtering** - Filter by genre, year, rating
- [ ] **Sorting** - Sort by title, year, rating
- [ ] **Pagination** - For larger film collections
- [ ] **Dark Mode** - Theme toggle
- [ ] **Local Storage** - Persist favorites across sessions
- [ ] **Film Comparison** - Compare multiple films
- [ ] **User Reviews** - Add and view film reviews
- [ ] **Advanced Search** - Search by genre, year, actors
- [ ] **API Integration** - Connect to real movie database (TMDB)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Solidados**

- GitHub: [@solidados](https://github.com/solidados)
- Project Link: [https://github.com/solidados/film-collection](https://github.com/solidados/film-collection)
- Live Demo: [https://solidados.github.io/film-collection/films](https://solidados.github.io/film-collection/films)

---

## 📚 Additional Resources

- [Angular Documentation](https://angular.dev/)
- [Angular Signals Guide](https://angular.dev/guide/signals)
- [RS School Angular Course](https://github.com/rolling-scopes-school/tasks/tree/master/angular)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**⭐ If you found this project helpful, please give it a star on GitHub!**
