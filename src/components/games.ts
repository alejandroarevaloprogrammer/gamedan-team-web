import type { Game } from './GameCard';

export const games: Game[] = [
  {
    title: 'Neon Hearts Protocol',
    genre: 'Visual novel · Romance · Sci-fi',
    description: 'Una historia de decisiones, vínculos digitales y secretos ocultos bajo una ciudad color neón.',
    status: 'In development',
    trailerLabel: 'Watch trailer',
    imageGradient: 'linear-gradient(135deg, #FF62BB 0%, #B331F1 48%, #31F1B3 100%)',
  },
  {
    title: 'Moonlight Arcade',
    genre: 'Narrative game · Mystery',
    description: 'Investiga una sala arcade imposible donde cada máquina desbloquea una memoria perdida.',
    status: 'Coming soon',
    trailerLabel: 'Teaser',
    imageGradient: 'linear-gradient(135deg, #FBF5A7 0%, #FF97D0 42%, #3A0D45 100%)',
  },
  {
    title: 'After School Dreamers',
    genre: 'Anime VN · Slice of life',
    description: 'Una novela visual cálida, dramática y luminosa sobre amistades que cambian el futuro.',
    status: 'Prototype',
    trailerLabel: 'First look',
    imageGradient: 'linear-gradient(135deg, #FFB062 0%, #FF62BB 40%, #210A3D 100%)',
  },
];
