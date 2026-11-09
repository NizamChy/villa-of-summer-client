# Villa of Summer

Landing page for a villa rental site. Its UI copy is in Turkish. The page has a search bar with city, date and guest fields, a carousel of villa deals, and an animated globe hero.

## Features

- **City search**: search by city name, with suggestions. It is Turkish-aware, so `izmir` matches `İzmir`. The deals carousel is filtered to the matching cities.
- **Dates**: native check-in and check-out date pickers. Past dates are blocked, check-out must be after check-in, and the number of nights is shown.
- **Guests**: a popover with adult and child counters (at least 1 adult).
- **Deals carousel**: three cards with the active card in the middle. It loops, and you can move it with the arrow buttons or the arrow keys.
- **Menu and category tabs**: the menu links to page sections, and the tabs switch the active category (villas, hotels, map).
- **Animations**: a rotating globe, floating clouds, a typing title, the colour sweep on the search field, and labels that fade in. All of them respect `prefers-reduced-motion`.
- **Responsive**: two columns on desktop, stacked on tablet and mobile.

## Tech stack

- [React 18](https://react.dev/)
- [Vite 8](https://vite.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/) + [daisyUI](https://daisyui.com/)
- [react-icons](https://react-icons.github.io/react-icons/) and [react-type-animation](https://react-type-animation.netlify.app/)
- ESLint + Prettier (with `prettier-plugin-tailwindcss` for class sorting)

## Requirements

- Node.js `^20.19.0` or `>=22.12.0`. Vite 8 needs one of these.

## Getting started

```bash
npm install
npm run dev       # start the dev server at http://localhost:5173
```

## Scripts

| Script                 | What it does                              |
| ---------------------- | ----------------------------------------- |
| `npm run dev`          | Start the Vite dev server with hot reload |
| `npm run build`        | Build the production bundle into `dist/`  |
| `npm run preview`      | Serve the production build locally        |
| `npm run lint`         | Run ESLint (fails on any warning)         |
| `npm run format`       | Format the codebase with Prettier         |
| `npm run format:check` | Check formatting without writing changes  |

## Project structure

```
src/
├── assets/
│   ├── icons/          # Category SVG icons (villa, hotel, map)
│   └── images/         # Optimised WebP images (hero, globe, logo, slides)
├── components/
│   ├── CardSlider.jsx  # Deals carousel
│   ├── CategoryTabs.jsx
│   ├── GuestPicker.jsx # Adult/child counter popover
│   ├── Header.jsx      # Menu dropdown + logo
│   ├── HeroGlobe.jsx   # Animated globe section
│   └── SearchBar.jsx   # City, dates and guests form
├── data/
│   └── slides.js       # Deals shown in the carousel
├── hooks/
│   └── useDismiss.js   # Closes popovers on outside click / Escape
├── pages/
│   └── Home.jsx        # Page layout and search state
├── utils/
│   └── search.js       # City filtering and date helpers
├── App.jsx
├── index.css           # Tailwind layers and the search sweep effect
└── main.jsx
```

Brand colours (`brand` and `page`) and the custom animations are defined in `tailwind.config.js`.

## Content

The deals in `src/data/slides.js` (cities, descriptions, discounts and nightly prices) are placeholder content. Replace them with real listings before going live. To add a deal, put a WebP image in `src/assets/images/slides/` and add an entry to the array.

## Deployment

The site is a static build. `npm run build` writes it to `dist/`, and any static host can serve that folder.

`public/_redirects` makes Netlify send every route to `index.html`, which single-page app routing needs.
