// Content for the site. Edit this file and the whole page updates.

export const site = {
  name: 'david jolley',
  tagline: 'founder, oarka',
  url: 'https://davidhjolley.com',
  description:
    'David Jolley is the founder of Oarka. This is where he keeps the things he builds: Stow, Capy Cove and the projects that came before them.',
};

export const nav = [
  { label: 'work', href: '#work' },
  { label: 'about', href: '#about' },
  { label: 'contact', href: '#contact' },
];

// ---------- hero ----------
// headline: one string per line. Wrap the word you want in green with *asterisks*.
export const hero = {
  eyebrow: '( founder · builder · 2026 )',
  headline: ["hi, i'm david.", 'i build things', 'i wish *existed*.'],
  lede:
    "I've been into computers my whole life. In 2022 I signed up for a front end bootcamp, and somewhere along the way that turned into founding Oarka. I still build things for fun on the side.",
  pen: 'still learning new things',
  primary: { label: 'see the work', href: '#work' },
  secondary: { label: 'say hi', href: '#contact' },
  photoAlt: 'David Jolley',
  photoCaption: '( fig. 1 · me )',
};

// ---------- section titles ----------
export const sections = {
  work: "things i've made",
  about: 'a bit about me',
  contact: 'say hello',
};

// ---------- about ----------
export const about = {
  paragraphs: [
    "I've been interested in computers my entire life. In late 2022 I started a front end bootcamp to see if I could turn that into something real, and the first version of this site was one of the things I built there.",
    "Now I'm building Oarka, where I do the technical side: the code, the models and the product design. We make Stow, a smart sticker for the things you own. You stick one on, and Stow tells you when you need the item, what you need it for, where it is, and if it has been left somewhere for too long.",
    'Away from work there is usually music on, and usually a League of Legends queue about to pop. I play competitively and take it more seriously than I should.',
  ],
  pen: 'gg, see you on the rift',
  photoLabel: 'photo slot\n1 : 1',
  facts: [
    { label: 'now playing', value: 'porter robinson', bars: true },
    { label: 'off hours', value: 'league of legends' },
    { label: 'based in', value: 'canada' },
  ],
};

// ---------- contact ----------
export const contact = {
  email: 'DavidHJolley2000@gmail.com',
};

// ---------- footer ----------
export const footer = {
  note: 'built by david, music on',
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
    tag: 'founder · since 2026',
    blurb:
      'Smart stickers for your things. Stow tells you when you need an item, what you need it for, where it is, and if it has been left somewhere for too long.',
    stack: 'hardware · ble · mobile · web',
    href: 'https://oarka.ca',
    pen: 'my main thing',
    imageLabel: 'product photo',
  },
  {
    slug: 'capy-cove',
    title: 'Capy Cove',
    tag: 'side project · 2026',
    blurb:
      'A multiplayer hangout world in the browser. Five locations, three minigames, hats, and ambient capybara bots so it never feels empty.',
    stack: 'three.js · node · websocket',
    href: 'https://capycove.duckdns.org/',
    pen: 'yes, capybaras',
    imageLabel: 'screenshot',
  },
  {
    slug: 'aihost',
    title: 'AiHost',
    tag: 'in progress · 2026',
    blurb: 'A JavaScript project from this year. A proper write-up is on the way.',
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
