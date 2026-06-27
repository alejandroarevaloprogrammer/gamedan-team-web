import type { Game } from './games/GameCard/GameCard';

export const games: Game[] = [
  {
    title: 'Neon Hearts Protocol',
    genre: 'Visual novel · Romance · Sci-fi',
    description:
      'A story about choices, digital bonds and secrets hidden beneath a neon city.',
    status: 'In development',
    trailerLabel: 'Watch trailer',
    imageGradient:
      'linear-gradient(135deg, #FF62BB 0%, #B331F1 48%, #31F1B3 100%)',
  },
  {
    title: 'Moonlight Arcade',
    genre: 'Narrative game · Mystery',
    description:
      'Explore an impossible arcade room where every machine unlocks a lost memory.',
    status: 'Coming soon',
    trailerLabel: 'Teaser',
    imageGradient:
      'linear-gradient(135deg, #FBF5A7 0%, #FF97D0 42%, #3A0D45 100%)',
  },
  {
    title: 'After School Dreamers',
    genre: 'Anime VN · Slice of life',
    description:
      'A warm, dramatic and luminous visual novel about friendships that change the future.',
    status: 'Prototype',
    trailerLabel: 'First look',
    imageGradient:
      'linear-gradient(135deg, #FFB062 0%, #FF62BB 40%, #210A3D 100%)',
  },
];
