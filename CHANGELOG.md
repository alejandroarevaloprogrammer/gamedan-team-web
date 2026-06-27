# Changelog

## v0.3.0

### Added
- Brand configuration in `src/config/brand.ts`.
- Game model in `src/types/game.ts`.
- Centralized game catalog in `src/data/games.ts`.
- Game query utilities in `src/lib/games.ts`.
- Reworked Hero package: `Hero`, `HeroContent`, `HeroMedia`, `Hero.module.css` and `index.ts`.
- Brand assets structure under `public/brand`.
- Temporary Ona Bar cover under `public/games/ona-bar/cover.jpg`.
- Documentation base under `docs/`.

### Changed
- Hero now presents GameDan Team through the current featured game.
- Layout metadata now uses the brand config.
- Navbar now uses the official brand icon.
- Home page imports the Hero through its component index.

### Removed
- Legacy Hero copy hardcoded in components.
- Legacy gradient-based game card assumptions.
- Dependence on `featuredGame.ts`.
