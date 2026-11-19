// Content for the site. Copy is lorem ipsum until David writes the real words.

export const site = {
  name: 'david jolley',
  tagline: 'founder, oarka',
  url: 'https://davidhjolley.com',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

export const nav = [
  { label: 'work', href: '#work' },
  { label: 'about', href: '#about' },
  { label: 'contact', href: '#contact' },
];

// ---------- hero ----------
// headline: one string per line. Wrap the word you want in green with *asterisks*.
export const hero = {
  eyebrow: '( lorem · ipsum · 2026 )',
  headline: ['lorem ipsum', 'dolor sit *amet*,', 'consectetur.'],
  lede:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.',
  pen: 'lorem ipsum dolor sit amet',
  primary: { label: 'lorem ipsum', href: '#work' },
  secondary: { label: 'dolor', href: '#contact' },
  photoAlt: 'David Jolley',
  photoCaption: '( fig. 1 )',
};

// ---------- section titles ----------
export const sections = {
  work: 'lorem ipsum',
  about: 'lorem ipsum dolor',
  contact: 'lorem ipsum',
};

// ---------- about ----------
export const about = {
  paragraphs: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  ],
  pen: 'lorem ipsum dolor sit',
  photoLabel: 'photo slot\n1 : 1',
  facts: [
    { label: 'now playing', value: 'lorem ipsum', bars: true },
    { label: 'rank', value: 'lorem ipsum' },
    { label: 'based in', value: 'lorem, canada' },
  ],
};

// ---------- contact ----------
export const contact = {
  email: 'lorem@ipsum.com',
};

// ---------- footer ----------
export const footer = {
  note: 'lorem ipsum dolor sit amet',
};

export type Project = {
  slug: string;
  title: string;
  tag: string;
  blurb: string;
  stack: string;
  href?: string;
  pen?: string;
  image?: string; // path under /public, optional until real art exists
  imageLabel: string;
};

export const projects: Project[] = [
  {
    slug: 'stow',
    title: 'Stow by Oarka',
    tag: 'founder · 2025–',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    stack: 'hardware · ble · mobile · web',
    href: 'https://oarka.ca',
    pen: 'lorem ipsum',
    imageLabel: 'product photo',
  },
  {
    slug: 'capy-cove',
    title: 'Capy Cove',
    tag: 'side project · 2026',
    blurb:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    stack: 'three.js · node · websocket',
    href: 'https://capycove.duckdns.org/',
    pen: 'dolor sit',
    imageLabel: 'screenshot',
  },
  {
    slug: 'aihost',
    title: 'AiHost',
    tag: 'placeholder',
    blurb:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    stack: 'javascript · 2026',
    imageLabel: 'no image yet',
  },
];

export const earlierWork = [
  { label: 'weather app', href: 'https://davidhjolley.github.io/Weather-App-Challenge/' },
  { label: 'quiz game', href: 'https://davidhjolley.github.io/JavaScript-Quiz-Game/index.html' },
  { label: 'unity click game', href: 'https://play.unity.com/mg/other/click-game-build-12' },
  { label: 'coaching site', href: 'https://davidhjolley.github.io/Coaching-Website-Commission/' },
];

export const links = [
  { label: 'github', href: 'https://github.com/DavidHJolley' },
  { label: 'oarka', href: 'https://oarka.ca' },
];
